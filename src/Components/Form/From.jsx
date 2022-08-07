import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { submitMessage } from '../../data';
import './Form.css'

const Form = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  return (
    <div className="form">
      <div className="container">
        <div className='asap-conta-1' style={{ width: "max-content", margin: "auto" }}>
          <h2 className="form-name">Eсть какой нибудь вопросы?</h2>
          <form action="" className="form-list" onSubmit={async e => submitMessage(e, setLoading)}>
            <input type="name" placeholder={t("home_page_contact_name_input")} required className="form-input" name="name" />
            <input type="tell" placeholder={t("home_page_contact_number_input")} required className="form-input" name="phone_number" />
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