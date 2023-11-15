import n from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import React from "react";
const Navbar =() =>{
    return (
        <section className={n.navbar}>
            <NavLink to='/menu' className={n.navbarItem}>Меню</NavLink>
            <NavLink to='/contact' className={n.navbarItem}>Контакты</NavLink>
            <NavLink to='/about' className={n.navbarItem}>О нас</NavLink>
            <NavLink to='/basket' className={n.navbarItem}>Корзина</NavLink>
        </section>
    )
}

export default Navbar