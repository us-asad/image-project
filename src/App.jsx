import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import ProductPage from './Pages/ProductPage/ProductPage';
import { Routes, Route } from 'react-router-dom';
import ProductAboutPage from './Pages/ProductAboutPage/ProductAboutPage';
import { useState } from 'react';
import React from 'react';
import CompanyPage from './Pages/CompanyPage/CompanyPage';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'uz', 'ru'],
    fallbackLng: "en",
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: {useSuspense: false}
  });

function App() {
  const { t, i18n } = useTranslation()

  const [english, setEnglish] = useState(true);
  const [russian, setRussian] = useState(false);
  const [uzbek, setUzbek] = useState(false)
  const [langTitle, setLangTitle] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng').toUpperCase() : "")

  function change1(item) {
    i18n.changeLanguage("ru")
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
    setRussian(item)
    setEnglish(!item)
    setUzbek(!item)
  }
  function change2(item) {
    i18n.changeLanguage("en")
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
    setEnglish(item)
    setRussian(!item)
    setUzbek(!item)
  }
  function change3(item) {
    i18n.changeLanguage("uz")
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
    setUzbek(item)
    setEnglish(!item)
    setRussian(!item)

  }


  window.addEventListener("load", () => {
    setRussian(true)
    setEnglish(false)
    localStorage.setItem("i18nextLng", "en")
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage change1={change1} change2={change2} change3={change3} />} />
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
