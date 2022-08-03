import "./ProductPage.css";

import Footer from "../../Components/Footer/Footer";
import WhiteNav from "../../Components/WhiteNav/WhiteNav";
import Category from "../../Components/Category/Category";

const ProductPage = ({ categoryPage }) => {
  return (
    <div className="product-page">
      <WhiteNav />
      <Category categoryPage={categoryPage} />
      <Footer />
    </div>
  )
}

export default ProductPage;