import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import "./Partner.css"
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const splide_options = {
  type: 'loop',
  perPage: 4,
  autoplay: true,
  pagination: false
}

const Partner = () => {
  const [partners, setPartners] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetch("https://api-baf.abba.uz/partners/?format=json")
      .then((res) => res.json())
      .then((data) => setPartners(data));
  }, []);

  return (
    <div className="splides partners">
      <div className="container">
        <div className="splides-top">
          <h2 className='splides-title'>{t("home_page_partners_title")}</h2>
        </div>
        <div className='splides-container'>
          {partners.length > 0 && (
            <Splide
              className='splide-slide'
              options={splide_options}>
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
        </div>
        <div className="splides-box">
          {partners.length > 0 && (
            <ul className="splides-list">
              {partners.map(partner => (
                <li className="splides-item" key={partner.id}>
                  <span className="splides-link">
                    <img src={partner.image} alt=""
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