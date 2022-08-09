import Footer from "../../Components/Footer/Footer";
import WhiteNav from "../../Components/WhiteNav/WhiteNav";
import "./ProductAboutPage.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Form from "../../Components/Form/From";
import ModalWithBg from "../../Components/ModalWithBg/ModalWithBg";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { AiFillStar } from "react-icons/ai";
import { sendMessage } from "../../data";
import Swal from "sweetalert2";

const ProductAboutPage = () => {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const { t } = useTranslation();

  const toggleModal = state => {
    setOpenModal(state);
    document.body.style.overflow = state ? "hidden" : "auto";
  }

  const submitOrder = async e => {
    e.preventDefault();
    setLoading(true);

    console.log(selectedColor, "that is selected color")

    const message = `Yangi Buyurtma!😊%0A👤Ismi: ${e.target.children.name.value}%0A☎Raqam: ${e.target.children.phone_number.value}%0A🏔Rangi: ${selectedColor.slice(1)}%0A`;
    console.log(selectedColor, "tasg")
    const ok = await sendMessage(message);

    if (ok) {
      e.target.children.name.value = ""
      e.target.children.phone_number.value = ""

      Swal.fire(
        "Ajoyib!",
        "Buyurmangiz muvafaqiyatli qabul qilindi",
        "success"
      );
    } else {
      Swal.fire(
        "Kechirasiz!",
        "Xatolik yuz berdi, Iltimos keyinroq qaytadan urinib ko'ring.",
        "error"
      );
    }
  }

  useEffect(() => {
    fetch(`https://api-baf.abba.uz/recomendation/?format=json`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    fetch(`https://api-baf.abba.uz/products/${params.id}/?format=json`)
      .then((res) => res.json())
      .then((prd) => {
        setProduct(prd);
        const colors = Object
          .entries(prd)
          .filter(item => item[0].includes("color"))
          .map(item => item[1])
          console.log(colors)
        setColors(colors.filter(cl => cl));
        console.log(prd)
        setSelectedColor(colors[0]);
      });
  }, [params]);

  console.log(selectedColor)

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
            <h2 className="info-title">{product[`name_${i18next.language}`]}</h2>
            <div style={{ display: "flex", marginTop: "10px", marginBottom: "30px" }}>
              {[...new Array(5)].map((_, i) => (
                <AiFillStar key={i} style={{ color: "#E9A426", fontSize: "18px" }} />
              ))}
            </div>
            {colors.length ? (
              <>
                <p className="font-mulish" style={{ color: "#5B8A8D" }}>{t("product_page_color")}</p>
                <ul className="color-list">
                  {colors.map(color => (
                    <li
                      key={color}
                      className="color-item"
                      style={{ transform: `scale(${color !== selectedColor ? ".9" : "1.1"})`, borderColor: color !== selectedColor ? "#fff" : "#5a969c" }}
                      onClick={() => setSelectedColor(color)}
                    >
                      <span style={{ background: color }}></span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
            <div className="info-flex">
              <button
                className="info-btn"
                onClick={() => toggleModal(true)}
                style={{ margin: "0", borderRadius: "15px" }}
              >{t("product_page_order_button")}</button>
            </div>
            <div className="info-text">
              {product[`description_${i18next.language}`]}
            </div>
            <div className="info-logo">
              <img src="/img/product-icons/1.png" alt="" className="info-pic" />
              <img src="/img/product-icons/2.png" alt="" className="info-pic" />
              <img src="/img/product-icons/3.png" alt="" className="info-pic" />
              <img src="/img/product-icons/4.png" alt="" className="info-pic" />
              <img src="/img/product-icons/5.png" alt="" className="info-pic" />
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
                  <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                    <div className="category-images">
                      <img src={e.image1} alt="" className="category-img" />
                    </div>
                    <p className="category-text">{e[`name_${i18next.language}`]}</p>
                    <div className="category-titles" style={{ width: "100%" }}>
                      <button style={{ width: "100%", margin: "0", borderRadius: "15px" }} className="category-button">
                        {t(loading ? "sending" : "home_page_contact_button_name")}{loading ? "..." : null}
                      </button>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
      <ModalWithBg open={openModal} toggleOpen={toggleModal}>
        <form className="product-form" onSubmit={submitOrder}>
          <h3 className="form-name product-form-title">{t("product_page_order_button")}</h3>
          <input type="name" placeholder={t("product_page_name_input")} required className="form-input" name="name" />
          <input type="tell " placeholder={t("product_page_tel_input")} required className="form-input" name="phone_number" />
          <button className={`form-btn ${loading ? "disabled" : null}`}>{t("product_page_button_name")}</button>
        </form>
      </ModalWithBg>
      <Form />
      <Footer />
    </div>
  );
};

export default ProductAboutPage;
