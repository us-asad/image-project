import CategoryList from "../../Components/CategoryList/CategoryList";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Nav/Nav";
import WhiteNav from "../../Components/WhiteNav/WhiteNav";
import "./CategoryPage.css"

const CategoryPage = ()=>{
     return(
<div className="category-page">
    <WhiteNav />
    <CategoryList />
    <Footer />
</div>
     )
}

export default CategoryPage;