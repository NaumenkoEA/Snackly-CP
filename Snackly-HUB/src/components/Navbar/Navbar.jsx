import React from 'react';
import {Link} from 'react-router-dom';
import n from './Navbar.module.css';

const NavBar = () => {
    return (
        <div className={n.nav}>
            <div>
                <Link to="/" className={n.navItem}>Главная</Link>
                <Link to="/menu" className={n.navItem}>Меню</Link>
                <Link to="/delivery" className={n.navItem}>Доставка</Link>
                <Link to="/news" className={n.navItem}>Новости</Link>
            </div>

            <div className={n.cart}>
                <Link to="/cart"><img className={n.cartImg} src='/cart.png' alt=""/></Link>
            </div>

            <div className={n.phone}>
                <div className={n.phoneHolder}>
                    <div className={n.phoneImg}>
                        <img src='/phone.png' alt=""/>
                    </div>
                    <div className={n.number}><a href="#" className={n.num}>+375(29)-777-00-77</a></div>
                </div>
                <div className={n.phoneText}>
                    Свяжитесь с нами для <br/> бронирования
                </div>
            </div>

            <div className={n.btn}>
                <a className={n.button} href="#">Заказ столика</a>
            </div>

            <div className={n.auth}>
                <div className={n.login}>
                    <Link to="/login" className={n.authBtn}>
                        Войти
                    </Link>
                </div>

                <div className={n.registration}>
                    <Link to="/regis" className={n.authBtn}>
                        Зарегистрироваться
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default NavBar;
