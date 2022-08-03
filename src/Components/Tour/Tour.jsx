import "./Tour.css"
import degreeImg1 from "../../Assets/Img/image1.png"
import degreeImg2 from "../../Assets/Img/image2.png"
import degrees from "../../Assets/Img/360-degrees.png"
import tourPic from "../../Assets/Img/qwertt.png"


const Tour = ()=>{
    return(
        <section className="tour">
            <div className="container">
                <div className="tour-left">
                <div className="tour-header">
                        <h2 className="tour-title">
                        Вирту
-альный тур
                        </h2>
                        <h2 className="tour-titles  ">
                        Виртуальный тур
                        </h2>
                        <p className="tour-text">
                        по нашей фабрике
                        </p>
                </div>
                <div className="tour-bottom">
                    <button className="degree-btn">
                        <img src={degreeImg1} alt="" className="degree-img" />
                        <div className="tour-box">
                            <span className="degree-span">
                            <img src={degrees} alt="degrees" className="tour-icon" />
                            </span>
                               <p className="tour-subtext">
                            Посетить шоурум
                            </p>
                        </div>
                    </button>

                    <button className="degree-btn">
                        <img src={degreeImg2} alt="" className="degree-img" />
                        <div className="tour-box">
                            <span className="degree-span">
                            <img src={degrees} alt="degrees" 
                            className="tour-icon" />
                            </span>
                               <p className="tour-subtext">
                            Посетить шоурум
                            </p>
                        </div>
                    </button>
                   
                    </div>

                    </div>
                    <div className="tour-right">
                        <img src={tourPic} alt="" className="tour-pic" />
                    </div>
            </div>
        </section>
    )
}

export default Tour;