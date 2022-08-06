import React, { useEffect, useState } from "react";
import "./Category.css";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { FaChevronDown } from "react-icons/fa";

const Category = ({ categoryPage }) => {
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const params = useParams();
  const { t } = useTranslation();
  const [openDetails, setOpenDetails] = useState(0);

  useEffect(() => {
    fetch(`https://api-baf.abba.uz/${categoryPage ? "categories" : "service_category"}/?format=json`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch(`https://api-baf.abba.uz/products/?format=json`)
      .then(res => res.json())
      .then(data => {
        setData(data.filter(prd => prd.category == params.id));
      });
  }, [params]);

  return (
    <div className="category">
      <div className="container">
        <div className="category-blok">
          <div className="category-left">
            <div className="details">
              {categories.length > 0 && (
                <ul className="faq_list">
                  {categories.map(category => (
                    <Link key={category.id} to={`/${categoryPage ? "category" : "services"}/${category.id}`}>
                      <li className={`faq_list__item ${category.id == params.id ? "active" : null}`}>
                        <div className="text_wrap faq_list__item__question_wrapper">
                          <h4 className="faq_header">{category[`name_${i18next.language}`]}</h4>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <details className="details-category" onToggle={(e) => setOpenDetails(e.target.open)} open={openDetails}>
            <summary style={{marginBottom: openDetails ? "30px" : "30px", display: "block"}}>
              <span>Show Categories</span>
              <FaChevronDown style={{transform: `rotate(${openDetails ? "-180" : "0"}deg)`}} />
            </summary>
            <div className="details">
              {categories.length > 0 && (
                <ul className="faq_list">
                  {categories.map(category => (
                    <Link key={category.id} to={`/${categoryPage ? "category" : "services"}/${category.id}`}>
                      <li className={`faq_list__item ${category.id == params.id ? "active" : null}`}>
                        <div className="text_wrap faq_list__item__question_wrapper">
                          <h4 className="faq_header">{category[`name_${i18next.language}`]}</h4>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          </details>
          <div className="category-right">
            <h3 className="category-names">{categories.find(({ id }) => id == params.id) && categories.find(({ id }) => id == params.id)[`name_${i18next.language}`]}</h3>
            <div className="category-box">
              {data.length ?
                data.map((e, i) => (
                  <Link
                    key={i}
                    to={`/${categoryPage ? "product" : "service"}/${e.id}`}
                    className="category-card"
                  >
                    <div className="category-images">
                      <img src={e.image1} alt="" className="category-img" />
                    </div>
                    <p className="category-text">{e[`name_${i18next.language}`]}</p>
                    <div className="category-titles">
                      <p className="category-numbers">
                        $ {e.cost}
                        <span>/m</span>
                      </p>
                      <button className="category-button">{t("product_page_order_button")}</button>
                    </div>
                  </Link>
                )) : <h2>{t("product_page_no_products")}</h2>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category;
