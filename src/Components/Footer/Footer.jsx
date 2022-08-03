import "./Footer.css"
import FooterLogo from "../../Assets/Img/footer-logo.svg"
import TelegramIcon from "../../Assets/Img/telegram-icon.svg"
import FacebookIcon from "../../Assets/Img/facebook-icon.svg"
import InstagramIcon from "../../Assets/Img/instagram-icon.svg"
import EmailIcon from "../../Assets/Img/footer__email-line.svg"
import Bottom from "./Bottom"

const Footer = ()=>{
    return(
        <>
        <footer className="footer">
        <div className="footer__hero">
            <div className="footer__hero-top">
                <div className="footer__logo">
                    <a className="footer__logo-link" href="#">
                        <img src={FooterLogo} alt="Site-logo" width="80" height="29" />
                    </a>
                </div>

                <div className="hero__parent-link">
                    <div className="footer__hero-nav">
                        <a className="footer__nav-link" href="#">Главная</a>
                        <a className="footer__nav-link" href="#">Продукты</a>
                        <a className="footer__nav-link" href="#">О нас</a>
                    </div>
    
                    <div className="footer__hero-nav">
                        <a className="footer__nav-link" href="#">Мы в числах</a>
                        <a className="footer__nav-link" href="#">Наш миссия</a>
                        <a className="footer__nav-link" href="#">Связь</a>
                    </div>
                </div>

                <form className="footer__hero-form" action="#">
                    <label className="footer__form-label" htmlFor="inpmail">Для связяться с нами</label>
                    <input className="footer__form-input" type="email" id="inpmail" placeholder="e-mail" 
                    required />
                    <button className="footer__hero-btn">
                        <img src={EmailIcon}
                     alt="line" width="14" height="14" /></button>
                </form>
            </div>

            <div className="footer__hero-bottom">
                <span className="footer__bottom-reserv">Copyright © 2020. <br /> LogoIpsum. All rights reserved.</span>
                <div className="footer__reserv-communication">
                    
                    <a className="footer__communication-link" href="tel:+99890 131 2000">Тел.:
                         <p className="communication__link-text">+99890 131 2000</p>
                    </a>
                    <a className="footer__communication-link" href="#">Е-mail:
                         <p className="communication__link-text">imagetextile@gmail.com</p>
                    </a>
                    <address className="footer__communication-link ">Адрес:  
                         <p className="communication__link-text address__text">Республика Узбекистан, г.
                          Ташкент,  <br />
                            Проспект Бунёдкор - 29.</p>
                    </address>
                </div>

                <div className="footer__social">
                    <a className="footer__social-link" href="#">
                        <img src={TelegramIcon} alt="telegram-icon" width="12" height="12"/>
                    </a>
                    <a className="footer__social-link" href="#">
                        <img src={FacebookIcon} alt="telegram-icon" width="12" height="12" />
                    </a>
                    <a className="footer__social-link" href="#">
                        <img src={InstagramIcon} alt="telegram-icon" width="12" height="12" />
                    </a>
                </div>
                
            </div>
        </div>
       
    </footer>
    <Bottom />
    </>
    )
}

export default Footer;