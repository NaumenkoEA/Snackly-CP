// Menu.jsx
import React from 'react';
import {  useNavigate } from 'react-router-dom';
import s from './Menu.module.css';

const menuItems = [
    {
        id: 1,
        name: 'Греческий салат',
        description: 'Свежие овощи, сыр фета, маслины, оливковое масло',
        price: 12.99,
    },
    {
        id: 2,
        name: 'Паста карбонара',
        description: 'Спагетти с беконом, яйцом, пармезаном и соусом',
        price: 14.99,
    },
    {
        id: 3,
        name: 'Пицца Маргарита',
        description: 'Томатный соус, моцарелла, базилик',
        price: 16.99,
    },
    // Добавьте другие блюда по аналогии
];

const MenuItem = ({ item }) => (
    <div className={s.menuItem}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p className={s.price}>${item.price.toFixed(2)}</p>
    </div>
);

const Menu = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className={s.menu}>
            <h2>Меню</h2>
            <button onClick={handleGoHome}>На главную</button>
            <div className={s.menuList}>
                {menuItems.map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Menu;
