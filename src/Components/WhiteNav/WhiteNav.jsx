import { Link } from "react-router-dom";
import "./WhiteNav.css"
import greenLogo from "../../Assets/Img/greenLogo.png"
import menuBtn from "../../Assets/Img/menu.png"
import ReactAudioPlayer from "react-audio-player";
import music from "../../Assets/Img/music.mp3"
import { useRef, useState } from "react";
import BurgerIcon from "../Nav/BurgerIcon";
import Popup from "reactjs-popup";
// import Menu1 from "../Menu/Menu1";
import toggle from '../../Assets/Img/toggle.png'
import React from 'react';
import Modal from 'react-modal';


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

// Modal.setAppElement('#yourAppElement');

const WhiteNav = () =>{

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

    
return(
<nav className="whiteNav">
    <div className="container">
        <div className="whiteNav-left">
             <a href="/" className="whiteNav-logo">
                <img src={greenLogo} alt="" className="whiteNav-brand" />
            </a>
            <ul className="whiteNav-list">
                <li className="whiteNav-item">
                    <a href="#" className="whiteNav-link">
                        Продукты
                    </a>
                </li>
                <li className="whiteNav-item">
                    <a href="#" className="whiteNav-link">
                        О нас
                    </a>
                </li>
                <li className="whiteNav-item">
                    <a href="#" className="whiteNav-link">
                        Наши фабрики
                    </a>
                </li>
                <li className="whiteNav-item">
                    <a href="#" className="whiteNav-link">
                        Связь
                    </a>
                </li>
            </ul>
        </div>
        <div className="whiteNav-right" onClick={toggleClass} >
        <div className="volume">
              <div className="upper" onClick={play}>
                <img src={changeimg} alt="" />
                {/* <ReactAudioPlayer
                  src={music}
                  ref={audio}
                  autoPlay
                  controls
                  volume={volMusic}
                  id={"ms"}
                  style={{ display: "none" }}
                /> */}
              </div>
              <input type="range"
               className="whiteNav-range" 
               onChange={change} name="" id="" />
            </div>
        
       
      <button onClick={openModal} className="whitenav-button">
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
        <button  onClick={closeModal} className="close-menu">
        &times;
        </button>
                <li className="navbar-item">
                    <a href="#products" className="navbar-link">
                    Продукты
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#about" 
                    className="navbar-link">
                         О нас
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#blogs" className="navbar-link">
                    Наши фабрики
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#contact" className="navbar-link">
                    Связь
                    </a>
                </li>
                
                <li className="navbar-item">
                
                <ol className="lang-list1">
                    <li className="lang-item1">
                        <button className="lang-btn1">
                                RU
                        </button>
                    </li>
                    <li className="lang-item1">
                        <button className="lang-btn1">
                                UZ
                        </button>
                    </li>
                    <li className="lang-item1">
                        <button className="lang-btn1">
                                EN
                        </button>
                    </li>
                </ol>
                </li>
               
            </ul>
        </Modal>
      </div>
     </div>
</nav>
)
}

export default WhiteNav;