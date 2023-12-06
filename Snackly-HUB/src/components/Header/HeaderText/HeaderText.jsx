import ht from './HeaderText.module.css'
import {NavLink} from "react-router-dom";

const HeaderText = () => {
    return (
        <div className={ht.headerTitle}>
            Добро пожаловать в
            <div className={ht.subTitle}>
                Наш ресторан
            </div>
            <div className={ht.supTitle}>
                ДОМ ЛУЧШЕЙ ЕДЫ
            </div>
            <div>
                <NavLink to={'/menu'} className={ht.btn}>Показать Меню</NavLink>
            </div>
        </div>
    )
}

export default HeaderText