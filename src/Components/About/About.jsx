import "./About.css"
import AboutImg from "../../Assets/Img/234.png"
import AboutBg from "../../Assets/Img/aboutBg1.png"
import nextImg from "../../Assets/Img/next1.png"
import aboutThumb from "../../Assets/Img/1234.png"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"
import { useEffect, useRef, useState } from "react"
import interact from "interactjs";

const About = () => {
  const { t } = useTranslation();
  const downRef = useRef();
  const aRef = useRef();
  const [downed, setDowned] = useState(false);

  useEffect(() => {
    const btn = interact('#change-btn');

    btn
      .draggable({                        // make the element fire drag events
        origin: 'self',                   // (0, 0) will be the element's top-left
        inertia: true,                    // start inertial movement if thrown
        modifiers: [
          interact.modifiers.restrict({
            restriction: 'self'           // keep the drag coords within the element
          })
        ],
        // Step 3
        listeners: {
          move(event) {                  // call this listener on every dragmove
            const sliderWidth = interact.getElementRect(event.target).width
            const value = event.pageX / sliderWidth

            event.target.style.paddingLeft = (value * 100) + '%'
            event.target.setAttribute('data-value', value.toFixed(2));

            if (parseFloat(downRef.current?.style.paddingLeft) >= parseFloat("73%")) {
              setDowned(prev => {
                if (!prev) {
                  aRef.current.click();
                }

                downRef.current.style.paddingLeft = "0%";
                return true
              })
            } else {
              setTimeout(() => {
                downRef.current.style.paddingLeft = "0%";
                setDowned(false);
              }, 1000);
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
          <Link to="/about" hidden ref={aRef}></Link>
          <div>
            <button className="about-btn">
              <div ref={downRef} id="change-btn">
                <span  className="about-span">
                  <img src={nextImg} alt="" className="about-icon" />
                </span>
              </div>
              <span className="about-pod">
                {t("home_page_about_button_name")}
              </span>
            </button>
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