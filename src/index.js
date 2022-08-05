import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "swiper/css/bundle";
import { BrowserRouter } from 'react-router-dom';
import "./Pages/ProductAboutPage/ProductAboutPage.css";
import "swiper/css/bundle";
import "../src/Pages/ProductAboutPage/styles.css";
import "swiper/css/bundle";
import Loader from './Components/Loader/Loader';
import ScrollToTop from './Components/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={Loader}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Suspense>
);


