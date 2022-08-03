import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css"


const Menu1= ({close}) => {
       
        return(
  
  <div className="menu1">

   
            
        <ul className="navbars-list">
        <button className="close-menu" onClick={close}>
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
  </div>)}
;
export default Menu1;