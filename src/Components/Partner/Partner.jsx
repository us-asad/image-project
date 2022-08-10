import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import "./Partner.css"
import { useEffect, useState } from 'react';
import Adidas from "../../Assets/Img/adidas.png"
import { useTranslation } from 'react-i18next';

const Partner = () => {
  const [partners, setPartners] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetch("https://api-baf.abba.uz/partners/?format=json")
      .then((res) => res.json())
      .then((data) => setPartners(data));
  }, []);

  console.log(partners)

  return (
    <div className="splides partners">
      <div className="container">
        <div className="splides-top">
          <h2 className='splides-title'>{t("home_page_partners_title")}</h2>
        </div>
        {partners.length > 0 && (
          <Splide
            className='splide-slide'
            options={{
              type: 'loop', perPage:
                4, autoplay: true,
            }}>
            {partners.map(partner => (
              <SplideSlide key={partner.id}
                className='splide-box'>
                <span className="splide-link">
                  <img className='splide-img' src={partner.image}
                    alt={`Partner img${partner.id}`} />
                </span>
              </SplideSlide>
            ))}
          </Splide>
        )}
        <div className="splides-box">
          {partners.length > 0 && (
            <ul className="splides-list">
              {partners.map((partner, i) => (
                <li className="splides-item" key={i}>
                  <span className="splides-link">
                    <img src={Adidas} alt=""
                      className="splides-img" />
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Partner;