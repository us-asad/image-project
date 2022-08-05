import { Link } from "react-router-dom";
import "./Nav.css"
import Logo from "../../Assets/Img/Logo.png"
import ReactAudioPlayer from "react-audio-player";
import music from "../../Assets/Img/music.mp3"
import { useEffect, useRef, useState } from "react";
import toggle from '../../Assets/Img/toggles.png'
import React from 'react';
import Modal from 'react-modal';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { languages } from "../../data";

const customStyles = {
  content: {
    top: '50%',
    left: '86%',
    right: 'auto',
    bottom: 'auto',
    height: '100vh',
    marginRight: '-100%',
    transform: 'translate(-50%, -50%)',
  },
};


const Nav = () => {
  const { t } = useTranslation();
  //Modal

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  let audio = useRef();
  const [content, setContent] = useState(false);
  const [changeimg, setchangeimg] = useState("/img/nav/volumeUp.svg");
  const play = () => {
    if (changeimg === "/img/nav/volumeMute.svg") {
      setchangeimg("/img/nav/volumeUp.svg");
      audio.current.audioEl.current.pause();
    } else {
      audio.current.audioEl.current.play();
      setContent(true);
      setchangeimg("/img/nav/volumeMute.svg");
    }
  };


  const mute = () => {
    setchangeimg("/img/nav/volumeMute.svg") &&
      console.log(audio.current.audioEl.current);
  };

  window.onscroll = function () {
    if (content === true) {
      return "";
    } else {
      audio?.current?.audioEl?.current?.play();
    }
  };

  function start() {
    audio?.current?.audioEl?.current?.play();
  }

  const [volMusic, setvolMusic] = useState();
  const change = (e) => {
    setvolMusic(e.target.value / 100);
    if (e.target.value >= 1) {
      audio.current.audioEl.current.play();
    } else {
      audio.current.audioEl.current.pause();
    }
    e.target.value >= 50
      ? setchangeimg("/img/nav/volumeUp.svg")
      : e.target.value <= 1
        ? mute()
        : setchangeimg("/img/nav/volumeLow.svg");
  };
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    setTimeout(() => {
      start()
    }, 10000);
  }, []);


  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-left">
          <a href="/" className="nav-logo">
            <img src="/img/logo.png" alt="" className="nav-brand" />
          </a>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/#products" className="nav-link">
                {t("nav_item_1")}
              </a>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                {t("nav_item_2")}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/#about" className="nav-link">
                {t("nav_item_3")}
              </a>
            </li>
            <li className="nav-item">
              <a href="/#contact" className="nav-link">
                {t("nav_item_4")}
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-right" onClick={toggleClass} >
          <div className="volume">
            <div className="upper" onClick={play}>
              <img src={changeimg} alt="" />
              <ReactAudioPlayer
                src="/music.mp3"
                ref={audio}
                // autoPlay
                controls
                volume={volMusic}
                id={"ms"}
                style={{ display: "none" }}
              />
            </div>
            <input type="range"
              className="nav-range"
              onChange={change} name="" id="" />
          </div>
          <button onClick={openModal} className="nav-button">
            <img src={toggle} alt="" className="whitenav-toggle" />
          </button>
        </div>
        <div className="whitenav-modal">
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <ul className="navbars-list">
              <button onClick={closeModal} className="close-menu">
                &times;
              </button>
              <li className="navbar-item">
                <a 
                  href="/#products" 
                  className="navbar-link"
                  onClick={closeModal}
                >
                  {t("nav_item_1")}
                </a>
              </li>
              <li className="navbar-item">
                <a onClick={closeModal} href="/about"
                  className="navbar-link">
                  {t("nav_item_2")}
                </a>
              </li>
              <li className="navbar-item">
                <a onClick={closeModal} href="/#about" className="navbar-link">
                  {t("nav_item_3")}
                </a>
              </li>
              <li className="navbar-item">
                <a onClick={closeModal} href="/#contact" className="navbar-link">
                  {t("nav_item_4")}
                </a>
              </li>
              <li className="navbar-item">
                <ol className="lang-list1">
                  {languages.map(lang => (
                    <li key={lang} className={`lang-item1 ${i18next.language === lang ? "active" : null}`}>
                      <button
                        className="lang-btn1"
                        onClick={() => i18next.changeLanguage(lang)}
                      >
                        {lang}
                      </button>
                    </li>
                  ))}
                </ol>
              </li>
            </ul>
          </Modal>
        </div>
      </div>
    </nav>
  );
}

export default Nav;