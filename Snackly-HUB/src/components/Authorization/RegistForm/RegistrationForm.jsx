import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from '../style.module.css';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        // Сброс ошибки при вводе
        setUsernameError('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        // Сброс ошибки при вводе
        setPasswordError('');
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        // Сброс ошибки при вводе
        setPasswordError('');
    };

    const handleRegister = () => {
        // Проверка введенного логина
        if (!username) {
            setUsernameError('Введите имя пользователя');
            return;
        }

        // Проверка совпадения пароля и его подтверждения
        if (password !== confirmPassword) {
            setPasswordError('Пароли не совпадают');
            return;
        }

        // Ваша логика проверки корректного имени (здесь просто для примера)
        if (username.toLowerCase() === 'admin') {
            setUsernameError('Имя пользователя "admin" недоступно');
            return;
        }

        // Успешная регистрация
        setRegistrationSuccess(true);

        // Здесь вы можете добавить логику отправки данных на сервер для регистрации

        // Перенаправление на главную страницу
        navigate('/');
    };

    return (
        <div className={s.container}>
            <h2>Регистрация</h2>
            <form>
                <label htmlFor="username">Имя пользователя:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                />

                {usernameError && <p className={s.errorMessage}>{usernameError}</p>}

                <label htmlFor="password">Пароль:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />

                <label htmlFor="confirm-password">Подтвердите пароль:</label>
                <input
                    type="password"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                />

                {passwordError && <p className={s.errorMessage}>{passwordError}</p>}

                {registrationSuccess && (
                    <p className="success-message">Спасибо за регистрацию на нашем сайте!</p>
                )}

                <button type="button" onClick={handleRegister}>
                    Зарегистрироваться
                </button>
            </form>
        </div>
    );
};

export default RegistrationForm;
