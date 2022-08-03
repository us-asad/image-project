import "./Numbers.css"
import leftImg from "../../Assets/Img/number1.png"
import { useState } from "react"
import { useEffect } from "react";

const Numbers = () => {
  const [data, setData] = useState([]);
  const [activeNumIdx, setActiveNumIdx] = useState(1);

  useEffect(() => {
    fetch("http://93.189.40.27:2200/infographics/?format=json")
      .then(res => res.json())
      .then(newData => setData(newData))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNumIdx(prev => {
        console.log(prev, data.length)
        return prev + 2 > data.length ? 0 : prev + 1
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    }
  }, [data]);

  return (
    <section className="numbers">
      <div className="container">
        <div className="numbers-header">
          <h2 className="numbers-title">
            Мы в числа
          </h2>
        </div>
        <div className="numbers-medium">
          <ul className="numbers-list">
            {data.map((item, i) => (
              <li
                key={item.number}
                className={`numbers-item ${i === activeNumIdx ? "" : i-1 === activeNumIdx || i+1 === activeNumIdx ? "numbers-closer" : "numbers-disactive"}`}
                onClick={() => setActiveNumIdx(i)}
              >
                <p className="numbers-num">
                  {item.number}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="numbers-bottom">
          <div className="numbers-left">
            <img src={leftImg} alt="" className="numbers-img" />
          </div>
          <div className="numbers-right">
            <p className="numbers-text">
              {data.length ? data[activeNumIdx]?.description_en : null}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Numbers;