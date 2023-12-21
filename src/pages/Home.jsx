import Header from "../components/Header.jsx";
import Navbar from "../components/Navbar.jsx";

import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.jsx";



const Home = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
            <Footer/>

        </>
    )
}
export default Home;