import "./Header.css";
import down from "../../Assets/Img/down.pdf"
import headerImg from "../../Assets/Img/headerImg.png"
import downloadIcon from "../../Assets/Img/Group5.svg"
import ytbIcon from "../../Assets/Img/Shape.svg";
import headerBg from "../../Assets/Img/bg1.png";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import ModalWithBg from "../ModalWithBg/ModalWithBg";
import i18next from "i18next";
import { languages } from "../../data";
import interact from "interactjs";

const Header = () => {
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
          <h1 className="header-title">{t("home_page_title")}</h1>
          <p className="header-text">{t("home_page_subtitle")}</p>
          <div className="header-btns">
            <a href={down} download className="download-box">
              {/* href={down} download  */}
              <div className="download-btn">
                {t("home_page_download")}
              </div>
              <div id="down-btn">
                <div className="download-blok">
                  <img src={downloadIcon} alt="" className="download-icon" />
                </div>
              </div>
            </a>
            <div className="ytb-box">
              <button
                className="ytb-btn"
                onClick={() => toggleYtModal(!openYtModal)}
              >
                {t("home_page_play_video")}
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
              {languages.map(lang => (
                <li key={lang} className={`lang-item ${i18next.language === lang ? "active" : null}`}>
                  <button onClick={() => i18next.changeLanguage(lang)} className="lang-btn">
                    {lang}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ModalWithBg open={openYtModal} toggleOpen={toggleYtModal}>
        <div className="iframe-container">
          {openYtModal && (
            <iframe
              src="https://www.youtube.com/embed/ng7D1a5cTIk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </ModalWithBg>
    </header>
  )
}


export default Header;