import "./Footer.css"
import FooterLogo from "../../Assets/Img/footer-logo.svg"
import TelegramIcon from "../../Assets/Img/telegram-icon.svg"
import FacebookIcon from "../../Assets/Img/facebook-icon.svg"
import InstagramIcon from "../../Assets/Img/instagram-icon.svg"
import EmailIcon from "../../Assets/Img/footer__email-line.svg"
import Bottom from "./Bottom"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <footer className="footer">
        <div className="footer__hero">
          <div className="footer__hero-top">
            <div className="footer__logo">
              <Link className="footer__logo-link" to="/">
                <img src="/img/logo.png" className="nav-brand" alt="Site-logo" width="80" height="29" />
              </Link>
            </div>
            <div className="hero__parent-link" style={{marginTop: "20px"}}>
              <div className="footer__hero-nav">
                <a className="footer__nav-link" href="#">{t("footer_nav_item_1")}</a>
                <a className="footer__nav-link" href="#">{t("footer_nav_item_2")}</a>
                <a className="footer__nav-link" href="#">{t("footer_nav_item_3")}</a>
              </div>
              <div className="footer__hero-nav">
                <a className="footer__nav-link" href="#">{t("footer_nav_item_4")}</a>
                <a className="footer__nav-link" href="#">{t("footer_nav_item_5")}</a>
                <a className="footer__nav-link" href="#">{t("footer_nav_item_6")}</a>
              </div>
            </div>
            <form className="footer__hero-form" action="#">
              <label className="footer__form-label" htmlFor="inpmail">{t("footer_email_title")}</label>
              <input className="footer__form-input" type="email" id="inpmail" placeholder={t("footer_email_input")}
                required />
              <button className="footer__hero-btn">
                <img src={EmailIcon}
                  alt="line" width="14" height="14" /></button>
            </form>
          </div>
          <div className="footer__hero-bottom">
            <span className="footer__bottom-reserv">{t("footer_copyright")}</span>
            <div className="footer__reserv-communication">
              <a className="footer__communication-link" href="tel:+998997080080">{t("footer_contact_tel_title")}:
                <p className="communication__link-text">+998997080080</p>
              </a>
              <a className="footer__communication-link" href="mail:info@baftex.uz">{t("footer_contact_email_title")}:
                <p className="communication__link-text">info@baftex.uz</p>
              </a>
              <address className="footer__communication-link ">{t("footer_contact_address_title")}:
                <p className="communication__link-text address__text">{t("footer_contact_address")}</p>
              </address>
            </div>
            <div className="footer__social">
              <a className="footer__social-link" href="https://www.facebook.com/imagestex" target="_blank" rel="noreferrer">
                <img src={FacebookIcon} alt="telegram-icon" width="12" height="12" />
              </a>
              <a className="footer__social-link" href="https://www.instagram.com/image.textile" target="_blank" rel="noreferrer">
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