import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import "./Partner.css"
import { useEffect, useState } from 'react';
 import Adidas from "../../Assets/Img/adidas.png"

const Partner = () =>{
  

  const [partners, setPartners] = useState([]);

  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
          .then((res) => res.json())
          .then((data) => setPartners(data));
  }, []);

return (
<div className="splides">
  <div className="container">
  <div className="splides-top">
      <h2 className='splides-title'>Нам доверяют</h2>
      </div>
  {partners.length > 0 && (
  
   <Splide  
       className='splide-slide'
        options={ { type : 'loop' , perPage:
        4, autoplay: true, } }>
         
         {partners.map((partner,i) =>(
        <SplideSlide key={i} 
         className='splide-box'>
          <a href="#" className="splide-link">
          <img className='splide-img' src={Adidas}
           alt="Image1" />
         
          </a>
        </SplideSlide>
         ))}
         
      </Splide>
       
  )}
<div className="splides-box">
{partners.length > 0 && (
      <ul className="splides-list">
        {partners.map((partner,i) =>(
        <li className="splides-item" key={i}>
          <a href="#" className="splides-link">
            <img src={Adidas}alt="" 
            className="splides-img" />
          </a>
        </li>
        ))}
         
      </ul>
)}
</div>
  </div>
  
</div>

)
}

export default Partner;