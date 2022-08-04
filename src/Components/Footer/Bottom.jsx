import "./Footer.css";
import bottomLogo1 from "../../Assets/Img/abba__coding.png"
import bottomLogo2 from "../../Assets/Img/abba__media.png"
import { useTranslation } from "react-i18next";

const Bottom = () => {
  const { t } = useTranslation();

  return (
    <div className="bottom">
      <div className="container">
        <h4 className="bottom-title">{t("footer_bottom_text")}</h4>
        <ul className="bottom-list">
          <li className="bottom-item">
            <p className="bottom-text">{t("footer_bottom_subtext")}</p>
          </li>
          <li className="bottom-item">
            <img src={bottomLogo1} alt="" className="bottom-logo" />
          </li>
          <li className="bottom-item">
            <img src={bottomLogo2} alt="" className="bottom-logo" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Bottom;