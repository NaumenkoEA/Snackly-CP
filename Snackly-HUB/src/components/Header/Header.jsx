import h from "./Header.module.css"
import Navbar from "../Navbar/Navbar.jsx";
import HeaderText from "./HeaderText/HeaderText.jsx";

const Header = () => {
    return (
        <div className={h.header}>
            <div className={h.container}>
                <div className={h.headerLine}>
                    <div className={h.headerLogo}>
                        <img src='/LOGO.png' alt=""/>
                    </div>
                    <Navbar/>
                </div>
                <div className={h.headerDown}>
                    <HeaderText/>
                </div>

            </div>
        </div>
    )
}

export default Header