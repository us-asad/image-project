import './Form.css'

const Form = () => {
    return(
        <div className="form">
            <div className="container">
                <h2 className="form-name">Eсть какой нибудь вопросы?</h2>
                <form action="" className="form-list">
                    <input type="name" placeholder='Name' required className="form-input" />
                    <input type="tell " placeholder='Telefon nomer' required className="form-input" />
                    <button className="form-btn">ОТПРАВИТЬ</button>
                </form>
            </div>
        </div>
    )
}

export default Form