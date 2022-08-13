import "./Numbers.css"
import leftImg from "../../Assets/Img/number1.png"
import mainBg from "../../Assets/Img/aboutBg1.png";
import { useRef, useState } from "react"
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BsChevronRight } from "react-icons/bs";
import i18next from "i18next";

const Numbers = () => {
  const [data, setData] = useState([]);
  const [activeNumIdx, setActiveNumIdx] = useState(1);
  const [start, setStart] = useState(0);
  const sectionRef = useRef(null);
  const { t } = useTranslation();
  const imgRef = useRef();

  useEffect(() => {
    fetch("https://api-baf.abba.uz/infographics/?format=json")
      .then(res => res.json())
      .then(newData => setData(newData))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNumIdx(prev => prev + 2 > data.length ? 0 : prev + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    }
  }, [data]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > sectionRef.current?.offsetHeight + 1200) {
        setStart(1);
        setTimeout(() => {
          imgRef.current.style.display = "none";
        }, 3000);
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="numbers" id="numbers">
      <div className="container">
        <div className="numbers-header">
          <h2 className="numbers-title">{t("home_page_numbers_title")}</h2>
        </div>
        <div className="numbers-medium">
          <ul className="numbers-list">
            {data.map((item, i) => (
              <li
                key={item.number}
                className={`numbers-item ${i === activeNumIdx ? "" : i - 1 === activeNumIdx || i + 1 === activeNumIdx ? "numbers-closer" : "numbers-disactive"}`}
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
            <img ref={imgRef} src={leftImg} alt="" className="numbers-img" style={start ? { transform: "translateY(200%)" } : {}} />
          </div>
          <div className="numbers-right">
            <p className="numbers-text" style={{fontSize: "14px"}}>
              {data.length ? data[activeNumIdx][`description_${i18next.language}`] : null}
            </p>
            <div>
              <button onClick={() => setActiveNumIdx(prev => prev + 2 > data.length ? 0 : prev + 1)}>
                <BsChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <img src={mainBg} alt="Main bg" className="numbers-bg" />
    </section>
  )
}

export default Numbers;