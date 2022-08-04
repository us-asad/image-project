import React, { useEffect, useState } from "react";
import "./Category.css";

import line from "../../Assets/Img/line.png";
import plus from "../../Assets/Img/plus.png";
import matras from "../../Assets/Img/matras.png";
import { Link, useParams } from "react-router-dom";

const Category = ({ categoryPage, className }) => {
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`https://api-baf.abba.uz/${categoryPage ? "categories" : "service_category"}/?format=json`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch(`https://api-baf.abba.uz/products/?format=json`)
      .then(res => res.json())
      .then(data => {
        console.log(data, params)
        setData(data.filter(prd => prd.category == params.id));
      });
  }, [params]);

  console.log(categories.find(({ id }) => id == params.id)?.name_en)

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
                          <h4 className="faq_header">{category.name_en}</h4>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="category-right">
            <h3 className="category-names">{categories.find(({ id }) => id == params.id)?.name_en}</h3>
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
                    <p className="category-text">{e.name_en}</p>
                    <div className="category-titles">
                      <p className="category-numbers">
                        $ {e.cost}
                        <span>/m</span>
                      </p>
                      <button className="category-button">Заказать</button>
                    </div>
                  </Link>
                )) : <h2>Mahsulotlar mavjud emas</h2>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category;

const faqArray = [
  {
    category: "Tkani",
    question: " I register?",
    answer: "Do you  ",
  },
  {
    question: "prices?",
    answer: "Lorem et ",
  },
  {
    question: " I canc ?",
    answer: "Lorem ip i!",
  },
  {
    question: "   stions?",
    answer: " lit. Vo gendi!",
  },
  {
    question: "Hcy orders?",
    answer: "Lorem ipd!",
  },
  {
    question: "Hods?",
    answer: "Lorem ipsd!",
  },
  {
    question: "How c orders?",
    answer: " eligendi!",
  },
];
