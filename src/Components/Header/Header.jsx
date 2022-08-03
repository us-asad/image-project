import "./Header.css";
import down from "../../Assets/Img/down.pdf"
import headerImg from "../../Assets/Img/headerImg.png"
import downloadIcon from "../../Assets/Img/Group5.svg"
import ytbIcon from "../../Assets/Img/Shape.svg";
import headerBg from "../../Assets/Img/bg1.png";
import { useTranslation } from 'react-i18next';
import { useState } from "react";

const Header = ({ change1, change2, change3 }) => {
  const [openYtModal, setOpenYtModal] = useState(false);
  const { t } = useTranslation();

  const toggleYtModal = state => {
    setOpenYtModal(state);
    document.body.style.overflow = state ? "hidden" : "auto";
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-left">
          <h1 className="header-title">
            Произ
            -водство
            тканей  </h1>
          <p className="header-text">
            востребованное направление
            бизнеса
          </p>
          <div className="header-btns">
            <div className="download-box">
              <a href={down} download className="download-btn">
                Скачать каталог
              </a>
              <div className="download-blok">
                <img src={downloadIcon} alt="" className="download-icon" />
              </div>
            </div>
            <div className="ytb-box">
              <button
                className="ytb-btn"
                onClick={() => toggleYtModal(!openYtModal)}
              >
                Смотреть ролик
              </button>
              <div className="ytb-blok">
                <img src={ytbIcon} alt="" className="ytb-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="header-right">
          <div className="header-box">
            <img src={headerBg} alt=""
              className="header-bg" />
            <img src={headerImg} alt="" className="header-img" />
          </div>
          <div className="lang-box">
            <ul className="lang-list">
              <li className="lang-item">
                <button onClick={() => change1(true)} className="lang-btn">
                  RU
                </button>
              </li>
              <li className="lang-item">
                <button onClick={() => change3(true)} className="lang-btn">
                  UZ
                </button>
              </li>
              <li className="lang-item">
                <button onClick={() => change2(true)} className="lang-btn">
                  EN
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`header__yt-modal ${!openYtModal && "hide"}`}>
        <div className="iframe-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ng7D1a5cTIk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div
        className={`header__yt-modal-bg ${!openYtModal && "hide"}`}
        onClick={() => toggleYtModal(!openYtModal)}
      ></div>
    </header>
  )
}

export default Header;