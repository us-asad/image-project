import Footer from "../../Components/Footer/Footer";
import WhiteNav from "../../Components/WhiteNav/WhiteNav";
import "./ProductAboutPage.css";
import { useEffect, useState } from "react";
import Rating from "material-ui-rating/lib/components/Rating/Rating";
import logo from '../../Assets/Img/logos.png'
import { Link, useParams } from "react-router-dom";
import Form from "../../Components/Form/From";
import ModalWithBg from "../../Components/ModalWithBg/ModalWithBg";
import { useTranslation } from "react-i18next";

const ProductAboutPage = () => {
  const [value, setValue] = useState(4);
  const [data, setData] = useState([]);
  const [product, setProduct] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const params = useParams();
  const { t } = useTranslation();

  const toggleModal = state => {
    setOpenModal(state);
    document.body.style.overflow = state ? "hidden" : "auto";
  }

  useEffect(() => {
    fetch(`https://api-baf.abba.uz/products/?format=json`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    fetch(`https://api-baf.abba.uz/products/${params.id}/?format=json`)
      .then((res) => res.json())
      .then((prd) => setProduct(prd));
  }, [params]);

  return (
    <div className="productaboutpage">
      <WhiteNav />
      <div className="info">
        <div className="container">
          <div className="info-left">
            <div className="info-titles">
              <img src={product?.image1} alt="" className="info-img" />
            </div>
            <div className="info__title">
              <div className="div">
                <img src={product?.image2} alt="" className="info-imgs" />
              </div>
              <div className="div">
                <img src={product?.image3} alt="" className="info-imgs" />
              </div>
            </div>
          </div>
          <div className="info-right">
            <h2 className="info-title">{product.name_en}</h2>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <ul className="color-list">
              <li className="color-item">
                <span></span>
              </li>
              <li className="color-item">
                <span></span>
              </li>
              <li className="color-item">
                <span></span>
              </li>
            </ul>
            <div className="info-flex">
              <p className="info-price">${product.cost}</p>
              <button
                className="info-btn"
                onClick={() => toggleModal(true)}
              >{t("product_page_order_button")}</button>
            </div>
            <div className="info-text">
              {product.description_en}
            </div>
            <div className="info-logo">
              <img src={logo} alt="" className="info-pic" />
              <img src={logo} alt="" className="info-pic" />
              <img src={logo} alt="" className="info-pic" />
              <img src={logo} alt="" className="info-pic" />
              <img src={logo} alt="" className="info-pic" />
            </div>
          </div>
        </div>
      </div>
      <div className="primary">
        <div className="container">
          <h2 className="info__name">{t("product_page_related")}</h2>
          <div className="info-box">
            {
              data && data.map((e, i) => (
                <Link key={i} to={`/product/${e.id}`} className="info-card">
                  <div className="category-images">
                    <img src={e.image1} alt="" className="category-img" />
                  </div>
                  <p className="category-text">{e.name_en}</p>
                  <div className="category-titles">
                    <p className="category-numbers">$ {e.cost}<span>/m</span></p>
                    <button className="category-button">{t("product_page_order_button")}</button>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
      <ModalWithBg open={openModal} toggleOpen={toggleModal}>
        <form action="" className="product-form">
          <h3 className="form-name product-form-title">{t("product_page_order_button")}</h3>
          <input type="name" placeholder='Name' required className="form-input" />
          <input type="tell " placeholder='Telefon nomer' required className="form-input" />
          <button className="form-btn">{t("product_page_button_name")}</button>
        </form>
      </ModalWithBg>
      <Form />
      <Footer />
    </div>
  );
};

export default ProductAboutPage;
