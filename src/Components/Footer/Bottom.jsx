import "./Footer.css";
import bottomLogo1 from "../../Assets/Img/abba__coding.png"
import bottomLogo2 from "../../Assets/Img/abba__media.png"

const Bottom = ()=>{
    return(
        <div className="bottom">
            <div className="container">
                <h4 className="bottom-title">
                IMAGE TEX 2018. Все права защищены.
                </h4>
                <ul className="bottom-list">
                    <li className="bottom-item">
                        <p className="bottom-text">
                        Разработано в</p>                        
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