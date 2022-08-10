import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getContactMessage } from '../../data';
import { useSendMessageToTg } from '../../hooks/useSendMessageToTg';
import './Form.css'

const Form = () => {
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
    <div className="form">
      <div className="container">
        <div className='asap-conta-1' style={{ width: "max-content", margin: "auto" }}>
          <h2 className="form-name">Eсть какой нибудь вопросы?</h2>
          <form action="" className="form-list" onSubmit={submitMessage}>
            <input
              type="name"
              placeholder={t("home_page_contact_name_input")}
              required
              className="form-input"
              name="name"
              minLength={5}
              maxLength={500}
              title={t("name_input_warning")}
            />
            <input
              type="tel"
              placeholder={t("home_page_contact_number_input")}
              required
              className="form-input"
              name="phone_number"
              pattern="[0-9]{9}"
              title={t("number_input_warning")}
            />
            <button className={`form__login-btn form-btn ${loading ? "disabled" : null}`}>
              <span>{t(loading ? "sending" : "home_page_contact_button_name")}{loading ? "..." : null}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form