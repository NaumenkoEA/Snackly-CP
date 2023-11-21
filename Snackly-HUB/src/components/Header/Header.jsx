import h from "./Header.module.css"
import Navbar from "../Navbar/Navbar.jsx";
import logo from "../Images/LOGO.png";


const Header = () => {
    return (
        <div className={h.header}>
            <div className={h.container}>
                <div className={h.headerLine}>
                    <div className={h.headerLogo}>
                        <img src={logo} alt=""/>
                    </div>
                    <Navbar/>
                </div>
            </div>
        </div>
    )
}

export default Header