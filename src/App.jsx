import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import ProductPage from './Pages/ProductPage/ProductPage';
import { Routes, Route } from 'react-router-dom';
import ProductAboutPage from './Pages/ProductAboutPage/ProductAboutPage';
import { useEffect, useState } from 'react';
import React from 'react';
import CompanyPage from './Pages/CompanyPage/CompanyPage';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import i18next from 'i18next';
import Loader from "./Components/Loader/Loader";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['ru', 'uz', 'en'],
    fallbackLng: "ru",
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  });

function App() {
  const { t, i18n } = useTranslation();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    i18next.changeLanguage("ru");
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      setLoaded(true);
      document.body.style.overflow = "auto";
    }, 1000);
  }, []);

  return (
    <div className="App">
      <Loader loaded={loaded} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:id" element={<ProductPage categoryPage />} />
        <Route path="/services/:id" element={<ProductPage />} />
        <Route path='/about' element={<CompanyPage />} />
        {/* <Route path="/categorypage" element={<CategoryPage />} /> */}
        <Route path="/product/:id" element={<ProductAboutPage productPage />} />
        <Route path="/service/:id" element={<ProductAboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
