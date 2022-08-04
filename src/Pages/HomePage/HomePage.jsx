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

const HomePage = () => {
  return (
    <div className="home-page">
      <Nav />
      <Header />
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