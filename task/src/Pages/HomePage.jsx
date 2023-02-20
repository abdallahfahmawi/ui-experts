import { Fragment } from "react"
import Header from "../Common/Header/Header"
import AbstractSection from "./HomePage/Components/AbstractSection/AbstractSiction"
import OurSuccess from "./HomePage/Components/OurSuccess/OurSuccess"
import Portfolio from "./HomePage/Components/Portfolio/Portfolio"
import Services from "./HomePage/Components/ServicesSection/Services"
import Reviews from "./HomePage/Components/Reviews/Reviews"
import CompanySkills from "./HomePage/Components/CompanySkills/CompanySkills"
import WorkFlow from "./HomePage/Components/WorkFlow/WorkFlow"
import OurBlog from "./HomePage/Components/OurBlog/OurBlog"
import Footer from "../Common/Footer/Footer"

const HomePage = () => {
    return (
        <Fragment>
            <Header />
            <AbstractSection/>
            <Services />
            <Portfolio />
            <OurSuccess />
            <Reviews />
            <CompanySkills />
            <WorkFlow />
            <OurBlog />
            <Footer />
        </Fragment>
    )
}

export default HomePage