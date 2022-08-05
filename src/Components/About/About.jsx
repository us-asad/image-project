import "./About.css"
import AboutImg from "../../Assets/Img/234.png"
import AboutBg from "../../Assets/Img/aboutBg1.png"
import nextImg from "../../Assets/Img/next1.png"
import aboutThumb from "../../Assets/Img/1234.png"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"

const About = () => {
  const { t } = useTranslation();

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
          <p className="about-text">{t("home_page_about_text_1")}</p>
          <p className="about-subtext">{t("home_page_about_text_2")}</p>
          <Link to="/about">
            <button className="about-btn">
              <span className="about-span">
                <img src={nextImg} alt="" className="about-icon" />
              </span>
              <span className="about-pod">
                {t("home_page_about_button_name")}
              </span>
            </button>
          </Link>
        </div>
        <div className="about-right">
          <img src={aboutThumb} alt="" className="about-thumb" />
        </div>
      </div>
    </section>
  );
}

export default About;