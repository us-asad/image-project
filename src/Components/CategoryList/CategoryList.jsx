import React, { useEffect, useState } from "react";
import './CategoryList.css'

import line from '../../Assets/Img/line.png'
import plus from '../../Assets/Img/plus.png'
import Dress from '../../Assets/Img/dress.png'
import { Link } from "react-router-dom";


const CategoryList = (props) =>{
const [selected, setSelected] = useState(null);

function toggler(i){
if(selected === i){
return setSelected(null)
}
setSelected(i)
}
const [questions, setQuestions] = useState([]);

useEffect(() =>{
fetch("https://api.alibaraka.com/api/questions/")
.then((res) => res.json()).then((data) =>
setQuestions(data))
},[])
return(
<div className="categoryList">
  <div className="container">
    <div className="categoryList-blok">
      <div className="categoryList-left">
        <div className="details">
          {faqArray.length > 0 && (
          <ul className={`faq_list ${props.className ? props.className : "" }`}>
            {faqArray.map((question, i) =>(

            <li key={i} className="faq_list__item" onClick={()=> toggler(i)}>
              <div className="text_wrap faq_list__item__question_wrapper">

                <h4 className="faq_header">
                  {question.question}
                </h4>

                <span className={`icon ${selected===i ? 'closer' : 'opener' }`}>
                  +
                </span>
              </div>
              <div className={`text_wrap ${selected===i ? 'faq_list__item__answer_wrapper show'
                : 'faq_list__item__answer_wrapper' }`}>

                <p className="faq_text">
                  {question.answer}
                </p>
                <p className="faq_text">
                  {question.answer}
                </p> <p className="faq_text">
                  {question.answer}
                </p> <p className="faq_text">
                  {question.answer}
                </p> <p className="faq_text">
                  {question.answer}
                </p> <p className="faq_text">
                  {question.answer}
                </p>

              </div>
            </li>



            ))}
          </ul>)}
        </div>
      </div>

      <div className="categoryList-right">
   

        <div className="categoryList-box">
          {
          Array.from(new Array(7)).map(e => (
          <Link to="/productpage" className="categoryList-card">
            <div className="categoryList-images">
              <img src={Dress} alt="" className="categoryList-img" />
            </div>
            <p className="categoryList-text">Хлопковая
фланель</p>
            
          </Link>
          ))
          }
        </div>
      </div>
    </div>
  </div>
</div>
)
}
export default CategoryList;


const faqArray = [
{
category:"Tkani",
question: " I register?",
answer: "Do you  "
},
{
question:  "prices?",
answer: "Lorem et "
},
{
question: " I canc ?",
answer: "Lorem ip i!"
},
{
question: "   stions?",
answer: " lit. Vo gendi!"
},
{
question: "Hcy orders?",
answer: "Lorem ipd!"
},
{
question: "Hods?",
answer: "Lorem ipsd!"
},
{
question: "How c orders?",
answer: " eligendi!"
}
]