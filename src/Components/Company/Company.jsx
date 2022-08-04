import "./Company.css";
import img1 from '../../Assets/Img/img1.png'
import img2 from '../../Assets/Img/img2.png'
import img3 from '../../Assets/Img/img3.png'
import img4 from '../../Assets/Img/img4.png'
import { useTranslation } from "react-i18next";

const Company = () => {
  const { t } = useTranslation();

  return (
    <div className="company">
      <div className="container">
        <div className="company-left">
          <h3 className="company-name">{t("about_page_title")}</h3>
          <p className="company-text font-pfb">{t("about_page_text_1")}</p>
          <p className="company-text">{t("about_page_text_2")}</p>
        </div>
        <div className="company-right">
            <div className="company-div">
                <img src={img1} alt="" className="company-img" />
                <img src={img2} alt="" className="company-img" />
            </div>
            <div className="company-div">
                <img src={img3} alt="" className="company-img" />
                <img src={img4} alt="" className="company-img" />
            </div>
        </div>
      </div>
      <div className="company-box"></div>
    </div>
  );
};

export default Company
