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
import { BsTelephone } from "react-icons/bs";
import MobileNav from "../MobileNav/MobileNav";

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
  let audio = useRef();
  const [content, setContent] = useState(false);
  const [changeimg, setchangeimg] = useState("/img/nav/volumeUp.svg");
  const [showNav, setShowNav] = useState(false);

  const toggleNav = state => {
    setShowNav(state);
    document.body.style.overflowY = state ? "hidden" : "auto";
  }
  
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
          <Link to="/" className="nav-logo">
            <img src={Logo} alt="Logo" className="nav-brand" />
          </Link>
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
        <div className="nav-right" onClick={toggleClass} style={{ display: "flex", justifyContent: "space-between", gap: "60px" }}>
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
          <button onClick={() => toggleNav(true)} className="nav-button">
            <img src={toggle} alt="" className="whitenav-toggle" />
          </button>
          <div style={{ display: "flex", gap: "10px", color: "white", alignItems: "center" }} className="hidden-after-1000">
            <span style={{ padding: "4.5px 5.5px", border: "1px solid #fff", borderRadius: "50%", display: "grid", placeContent: "center" }}>
              <BsTelephone style={{ fontSize: "14px", color: "white" }} />
            </span>
            <div style={{display: "flex", gap: "3px", flexDirection: "column"}}>
              <a href="tel:+998997080080" style={{width: "max-content", cursor: "pointer"}}>+998 99 708-00-80</a>
            </div>
          </div>
        </div>
      </div>
      <MobileNav showNav={showNav} toggleNav={toggleNav} />
    </nav>
  );
}

export default Nav;