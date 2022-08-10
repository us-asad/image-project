import "./Products.css"
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { SplideSlide, Splide, SplideTrack } from "@splidejs/react-splide";
import { BsChevronRight } from "react-icons/bs";

const splide_options = {
  perPage: 4,
  loop: true,
  rewind: true,
  perMove: 1,
  pagination: false,
  breakpoints: {
    1000: {
      perPage: 2
    },
    600: {
      perPage: 1
    }
  },
}

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
              style={{ marginTop: "0", marginBottom: "0px" }}
            >
              {t("home_page_categories_name")}
            </button>
            <button
              className={`products-btn prd-btn-2 ${getPrds ? "uslugi-btn" : "product-btn"}`}
              onClick={() => setGetPrds(0)}
              style={{ marginTop: "0" }}
            >
              {t("home_page_services_name")}
            </button>
          </div>
        </div>
        <div className="products-slider">
          <Splide options={splide_options} hasTrack={false}>
            <div className={`splide__arrows splide__arrows--ltr`}>
              <button
                className="splide__arrow splide__arrow--prev !opacity-100 left-0"
                type="button"
                aria-label="Previous slide"
                aria-controls="splide01-track"
              >
                <BsChevronRight />
              </button>
              <button
                className="splide__arrow splide__arrow--next !opacity-100 right-0"
                type="button"
                aria-label="Next slide"
                aria-controls="splide1-track"
              >
                <BsChevronRight />
              </button>
            </div>
            <SplideTrack>
              {
                [...data, ...data].map((e, i) => (
                  <SplideSlide key={i}>
                    <Link to={`/${getPrds ? "category" : "services"}/${e.id}`} >
                      <div className="splide-header splide-bg-item" style={{background: i % 2 ? "#ffebe2" : "#e2e9e7"}}>
                        <img src={e.image} alt="" className="splide-img" />
                      </div>
                      <h2 className="splide-title">
                        {e[`name_${i18next.language}`]} </h2>
                    </Link>
                  </SplideSlide>
                ))
              }
            </SplideTrack>
          </Splide>
        </div>
      </div>
    </div>
  );
}

export default Products;