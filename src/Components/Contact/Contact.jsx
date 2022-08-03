import "./Contact.css"
import carpet from "../../Assets/Img/carpet.png"

const Contact=()=>{
    return(
        <section className="qeusion">

        <div className="qeusion__section">

            <div className="quesion__form">
                <h1 className="quesion__form-title">Eсть какой нибудь  вопросы?</h1>
                <form className="form__login" action="#">
                    <input className="form__login-input" type="text" placeholder="Имя" required />
                    <br />
                    <input className="form__login-input" type="text" placeholder="ТЕЛЕФОН НОМЕР" required />
                    <br />
                  
                    <button className="form__login-btn">
                        <span>ОТПРАВИТЬ</span>

                        </button>

                </form> 

            </div>

            <div className="quesion__carpet">
                <img className="carpet__images" 
                src={carpet} alt="carpet" width="763" height="543" />
            </div>

        </div>


    </section>
    )
}

export default Contact;