import "./ProductPage.css";
 
import Footer from "../../Components/Footer/Footer";
import WhiteNav from "../../Components/WhiteNav/WhiteNav";
import Category from "../../Components/Category/Category";

const ProductPage = ({name, img})=>{
     return(
        <div className="product-page">
     
            <WhiteNav />
            <Category name={name} img={img} />
            
            <Footer />
        </div>
     )
}

export default ProductPage;