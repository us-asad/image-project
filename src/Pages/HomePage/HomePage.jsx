import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";
import Numbers from "../../Components/Numbers/Numbers";
import Partner from "../../Components/Partner/Partner";
import Products from "../../Components/Products/Products";
import Tour from "../../Components/Tour/Tour";
import "./HomePage.css"

const HomePage = ({change1, change2, change3}) =>{
    return (
<div className="home-page">
    <Nav />
    <Header change1={change1} change2={change2} change3={change3} />
    <Products />
    <About />
    <Numbers />
    <Tour />
    <Partner />
    <Contact />
    <Footer />
</div>
    )
}

export default HomePage;