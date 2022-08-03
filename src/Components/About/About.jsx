import "./About.css"
import AboutImg from "../../Assets/Img/234.png"
import AboutBg from "../../Assets/Img/aboutBg1.png"
import nextImg from "../../Assets/Img/next1.png"
import aboutThumb from "../../Assets/Img/1234.png"
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
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
          <h2 className="about-title">
            O наши
            компани   O наш и
            ком па ни
          </h2>
          <p className="about-text">
            World Textile Marketing Agency основан
            в 2019 году молодыми специалистами
            в области маркетинга, текстильной индустрии, веб-программирования, организации мероприятий, дизайна
            одежды и полиграфии.

          </p>
          <p className="about-subtext">
            Наша команда специализируется в продвижении
            предприятий легкой промышленности на зарубежные рынки.</p>
          <Link to="/about">
            <button className="about-btn">
              <span className="about-span">
                <img src={nextImg} alt="" className="about-icon" />
              </span>
              <span className="about-pod">
                Подробнее
              </span>
            </button>
          </Link>
        </div>
        <div className="about-right">
          <img src={aboutThumb} alt=""
            className="about-thumb" />
        </div>
      </div>

    </section>
  )
}

export default About;