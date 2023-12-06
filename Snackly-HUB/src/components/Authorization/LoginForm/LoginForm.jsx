import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from '../style.module.css';

const LoginForm = () => {
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);

    const navigate = useNavigate();

    const handleLoginUsernameChange = (e) => {
        setLoginUsername(e.target.value);
        // Сброс ошибки при вводе
        setLoginError('');
    };

    const handleLoginPasswordChange = (e) => {
        setLoginPassword(e.target.value);
        // Сброс ошибки при вводе
        setLoginError('');
    };

    const handleLogin = () => {
        // Проверка введенного логина и пароля (здесь вы можете добавить логику проверки на сервере)
        if (!loginUsername || !loginPassword) {
            setLoginError('Введите имя пользователя и пароль');
            return;
        }

        // Успешная авторизация
        setLoginSuccess(true);

        // Здесь вы можете добавить логику отправки данных на сервер для авторизации

        // Перенаправление на главную страницу
        navigate('/');
    };

    return (
        <div className={s.container}>
            <h2>Авторизация</h2>
            <form>
                <label htmlFor="login-username">Имя пользователя:</label>
                <input
                    type="text"
                    id="login-username"
                    value={loginUsername}
                    onChange={handleLoginUsernameChange}
                    required
                />

                <label htmlFor="login-password">Пароль:</label>
                <input
                    type="password"
                    id="login-password"
                    value={loginPassword}
                    onChange={handleLoginPasswordChange}
                    required
                />

                {loginError && <p className={s.errorMessage}>{loginError}</p>}

                {loginSuccess && (
                    <p className="success-message">Спасибо за вход на нашем сайте!</p>
                )}

                <button type="button" onClick={handleLogin}>
                    Войти
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
