import Footer from "../../Components/Footer/Footer";
import WhiteNav from "../../Components/WhiteNav/WhiteNav";
import "./ProductAboutPage.css";
import { useEffect, useState } from "react";
import Rating from "material-ui-rating/lib/components/Rating/Rating";
import logo from '../../Assets/Img/logos.png'
import dress from '../../Assets/Img/dresses.png'
import left from '../../Assets/Img/lef.png'
import { Link } from "react-router-dom";
import matras from '../../Assets/Img/matras.png'
import Form from "../../Components/Form/From";



const ProductAboutPage = ({name, description, img1, img2, img3, cost}) => {
  const [value, setValue] = useState(4);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [swippers, setSwippers] = useState([]);



  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://93.189.40.27:2200/products/?format=json`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
 
  return (
    <div className="productaboutpage">
      <WhiteNav />
      <div className="info">
        <div className="container">
          <div className="info-left">
              <div className="info-titles">
                <img src={img1} alt="" className="info-img" />
              </div>
              <div className="info__title">
                  <div className="div">
                    <img src={img2} alt="" className="info-imgs" />
                  </div>
                  <div className="div">
                    <img src={img3} alt="" className="info-imgs" />
                  </div>
              </div>
          </div>
          <div className="info-right">
            <h2 className="info-title">{name}</h2>

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
              <p className="info-price">${cost}</p>
              <button className="info-btn">Заказать</button>
            </div>
            <div className="info-text">
              {description}
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
         <h2 className="info__name">Похожие продукты</h2>

            <div className="info-box">
                {
                data && data.map(e => (
                <Link to="/productaboutpage" className="info-card">
                <div className="category-images">
                    <img src={e.image1} alt="" className="category-img" />
                </div>
                <p className="category-text">{e.name_en}</p>
                <div className="category-titles">
                    <p className="category-numbers">$ {e.cost}<span>/m</span></p>
                    <button className="category-button">Заказать</button>
                </div>
                </Link>
                ))
                }
            </div>
         </div>
      </div>
        <Form />
      <Footer />
    </div>
  );
};

export default ProductAboutPage;
