import './Form.css'

const Form = () => {
  return (
    <div className="form">
      <div className="container">
        <div className='asap-conta-1' style={{width: "max-content", margin: "auto"}}> 
          <h2 className="form-name">Eсть какой нибудь вопросы?</h2>
          <form action="" className="form-list">
            <input type="name" placeholder='Name' required className="form-input" />
            <input type="tell " placeholder='Telefon nomer' required className="form-input" />
            <button className="form-btn">ОТПРАВИТЬ</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form