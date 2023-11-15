import h from "./Header.module.css"
import Navbar from "./Navbar/Navbar.jsx";
import logo from "../../Images/vite.svg";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={h.header}>
                <NavLink to='/' className={h.logo}>
                    <img src={logo} alt=""/>
                </NavLink>
                <Navbar/>
        </header>

    )
}

export default Header