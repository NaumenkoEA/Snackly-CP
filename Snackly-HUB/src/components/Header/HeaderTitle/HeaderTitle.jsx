import ht from './HeaderTitle.module.css'
import {NavLink} from "react-router-dom";

const HeaderTitle = () => {
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

export default HeaderTitle