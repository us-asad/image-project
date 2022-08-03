import "./Company.css";
import img1 from '../../Assets/Img/img1.png'
import img2 from '../../Assets/Img/img2.png'
import img3 from '../../Assets/Img/img3.png'
import img4 from '../../Assets/Img/img4.png'

const Company = () => {


  return (
    <div className="company">
      <div className="container">
        <div className="company-left">
          <h3 className="company-name">O наши компани</h3>
          <p className="company-text">
            World Textile Marketing Agency основан в 2019 году молодыми
            специалистами в области маркетинга, текстильной индустрии,
            веб-программирования, организации мероприятий, дизайна одежды и
            полиграфии.
          </p>
          <p className="company-text">
            Наша команда специализируется в продвижении предприятий легкой
            промышленности на зарубежные рынки. Наша команда специализируется в
            продвижении предприятий легкой промышленности на зарубежные
            рынки.Наша команда специализируется в продвижении предприятий легкой
            промышленности на зарубежные рынки.
          </p>
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
