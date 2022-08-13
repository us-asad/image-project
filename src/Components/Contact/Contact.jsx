import "./Contact.css"
import carpet from "../../Assets/Img/carpet.png"
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { getContactMessage } from "../../data";
import { useSendMessageToTg } from "../../hooks/useSendMessageToTg";

const Contact = () => {
  const { t } = useTranslation();
  const sendMessage = useSendMessageToTg();
  const [loading, setLoading] = useState(false);

  const submitMessage = async e => {
    e.preventDefault();
    setLoading(true)
    const ok = await sendMessage(getContactMessage(e.target.name.value, e.target.phone_number.value));

    if (ok) {
      e.target.children.name.value = "";
      e.target.children.phone_number.value = "";
    }
    setLoading(false)
  }

  return (
    <section className="qeusion" id="contact">
      <div className="container">
        <div className="qeusion__section">
          <div className="quesion__form" style={{ position: "relative", zIndex: 10 }}>
            <h1 className="quesion__form-title">{t("home_page_contact_title")}</h1>
            <form className="form__login" onSubmit={submitMessage}>
              <input
                className="form__login-input"
                type="text"
                placeholder={t("home_page_contact_name_input")}
                required
                name="name"
                minLength={5}
                maxLength={500}
                title={t("name_input_warning")}
              />
              <br />
              <input
                className="form__login-input"
                type="tel"
                placeholder={t("home_page_contact_number_input")}
                required
                name="phone_number"
                maxLength={12}
                onChange={e => {
                  if (isNaN(+e.target.value)) {
                    e.target.value = e.target.value.slice(-2, 0)
                  }
                }}
                title={t("number_input_warning")}
              />
              <br />
              <button className={`form__login-btn ${loading ? "disabled" : null}`}>
                <span>{t(loading ? "sending" : "home_page_contact_button_name")}{loading ? "..." : null}</span>
              </button>
            </form>
          </div>
          <div className="quesion__carpet">
            <img className="carpet__images" src={carpet} alt="carpet" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;