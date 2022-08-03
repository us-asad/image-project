import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import ProductPage from './Pages/ProductPage/ProductPage';
import { Routes, Route } from 'react-router-dom';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import ProductAboutPage from './Pages/ProductAboutPage/ProductAboutPage';
import { useEffect, useState } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import CompanyPage from './Pages/CompanyPage/CompanyPage';



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
  })

  //Categoriya

  const [category, setCategory] = useState([])

  useEffect(() => {

    fetch(`http://93.189.40.27:2200/categories/?format=json`)
      .then((res) => res.json())
      .then((data) => setCategory(data))
  }, [])


  const [data, setData] = useState([])

  useEffect(() => {

    fetch(`http://93.189.40.27:2200/products/?format=json`)
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage change1={change1} change2={change2} change3={change3} />} />
        {
          category.map((e, i) => (
            <Route key={i} path={`/productpage/${e.id}`} element={<ProductPage name={e.name_en} img={e.image} />} />
          ))
        }
        <Route path='/about' element={<CompanyPage />} />
        {/* <Route path="/categorypage" element={<CategoryPage />} /> */}

        {
          data.map((item, i) => (
            <Route key={i} path={`/productaboutpage/${item.id}`} element={<ProductAboutPage name={item.name_en} img1={item.image1} cost={item.cost} img2={item.image2} img3={item.image3} description={item.description_en} />} />
          ))
        }
      </Routes>
    </div>
  );
}

export default App;
