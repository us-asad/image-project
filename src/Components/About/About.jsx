import "./About.css"
import AboutImg from "../../Assets/Img/234.png"
import AboutBg from "../../Assets/Img/aboutBg1.png"
import nextImg from "../../Assets/Img/next1.png"
import aboutThumb from "../../Assets/Img/1234.png"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"
import { useEffect, useRef, useState } from "react"
import interact from "interactjs";

let timeout = null;

const About = () => {
  const { t } = useTranslation();
  const downRef = useRef();
  const aRef = useRef();
  const [, setDowned] = useState(false);

  useEffect(() => {
    const btn = interact('.main-btn');

    btn
      .draggable({                        // make the element fire drag events
        origin: 'self',                   // (0, 0) will be the element's top-left
        inertia: true,                    // start inertial movement if thrown
        modifiers: [
          interact.modifiers.restrict({
            restriction: 'self'           // keep the drag coords within the element
          })
        ],
        listeners: {
          move(event) {                  // call this listener on every dragmove
            const sliderWidth = interact.getElementRect(event.target).width
            const value = event.pageX / sliderWidth

            event.target.style.paddingLeft = (value * 100) + '%'
            event.target.setAttribute('data-value', value.toFixed(2));
            clearTimeout(timeout)

            if (parseFloat(downRef.current?.style.paddingLeft) >= parseFloat("65%")) {
              setDowned(prev => {
                if (!prev) {
                  aRef.current.click();
                }

                downRef.current.style.paddingLeft = "0%";
                return true;
              })
            } else {
              setDowned(false);
              timeout = setTimeout(() => {
                downRef.current.style.paddingLeft = "0%";
              }, 500);
            }
          }
        }
      })
  }, []);

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-left">
          <div className="about-img-box">
            <img src={AboutImg} alt="" className="about-img" />
          </div>
          <div className="about-bg-box">
            <img src={AboutBg} alt="" className="about-bg" />
          </div>
        </div>
        <div className="about-medium">
          <h2 className="about-title">{t("home_page_about_title")}</h2>
          <p className="about-text font-pfb">{t("home_page_about_text_1")}</p>
          <p className="about-subtext">{t("home_page_about_text_2")}</p>
          <div className="download-box">
            <div className="download-btn">
              {t("home_page_about_button_name")}
            </div>
            <div ref={downRef} className="main-btn" data-btn="about">
              <div className="download-blok">
                <img src={nextImg} alt="" className="download-icon" />
              </div>
            </div>
            <Link to="/about" hidden ref={aRef}></Link>
          </div>
        </div>
        <div className="about-right">
          <img src={aboutThumb} alt="" className="about-thumb" />
        </div>
      </div>
    </section>
  );
}

export default About;