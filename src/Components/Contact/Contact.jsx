import "./Contact.css"
import carpet from "../../Assets/Img/carpet.png"
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="qeusion" id="contact">
      <div className="container">
        <div className="qeusion__section">
          <div className="quesion__form" style={{position: "relative", zIndex: 10}}>
            <h1 className="quesion__form-title">{t("home_page_contact_title")}</h1>
            <form className="form__login" action="#">
              <input className="form__login-input" type="text" placeholder={t("home_page_contact_name_input")} required />
              <br />
              <input className="form__login-input" type="text" placeholder={t("home_page_contact_number_input")} required />
              <br />
              <button className="form__login-btn">
                <span>{t("home_page_contact_button_name")}</span>
              </button>
            </form>
          </div>
          <div className="quesion__carpet">
            <img className="carpet__images" src={carpet} style={{opacity: ".7"}} alt="carpet" width="763" height="543" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;