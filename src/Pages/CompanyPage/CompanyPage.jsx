import Company from "../../Components/Company/Company"
import Footer from "../../Components/Footer/Footer"
import WhiteNav from "../../Components/WhiteNav/WhiteNav"

const CompanyPage = () => {
    return(
        <div className="companypage">
            <WhiteNav />
            <Company />
            <Footer />
        </div>
    )
}
export default CompanyPage