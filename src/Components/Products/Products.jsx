import "./Products.css"
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Products = () => {
  const [getPrds, setGetPrds] = useState(1)
  const [data, setData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    if (getPrds) {
      fetch(`https://api-baf.abba.uz/categories/?format=json`)
        .then((res) => res.json())
        .then((data) => setData(data));
    } else {
      fetch(`https://api-baf.abba.uz/service_category/?format=json`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [getPrds]);


  return (
    <div className="products" id="products">
      <div className="container">
        <div className="products-top">
          <h2 className="products-title">
            {t("home_page_categories_title")}
          </h2>
          <div className="products-btns">
            <button
              className={`products-btn prd-btn-1 ${getPrds ? "product-btn" : "uslugi-btn"}`}
              onClick={() => setGetPrds(1)}
              style={{marginTop: "0", marginBottom: "0px"}}
            >
              {t("home_page_categories_name")}
            </button>
            <button
              className={`products-btn prd-btn-2 ${getPrds ? "uslugi-btn" : "product-btn"}`}
              onClick={() => setGetPrds(0)}
              style={{marginTop: "0"}}
            >
              {t("home_page_services_name")}
            </button>
          </div>
        </div>
        <div className="products-slider">
          <Swiper slidesPerView={4} loop={true} 
            navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
            {
              data.length ? [...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data].map((e, i) => (
                <SwiperSlide key={i}>
                  <Link to={`/${getPrds ? "category" : "services"}/${e.id}`} >
                    <div className="splide-header">
                      <img src={e.image} alt="" className="splide-img" />
                    </div>
                    <h2 className="splide-title">
                      {e[`name_${i18next.language}`]} </h2>
                  </Link>
                </SwiperSlide>
              )) : null
            }
            {/*
              <SwiperSlide>
                <Link to="/categorypage">
                <div className="splide-header">
                  <img src={splideImg1} alt="" className="splide-img" />
                </div>
                <h2 className="splide-title">
                  Ткани </h2>
                  </Link>
              </SwiperSlide>
            */}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Products;