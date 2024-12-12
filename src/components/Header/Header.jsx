import './Header.scss';
import {useState} from "react";
import ProfileIcon from "../../assets/icons/Header/ProfileIcon.jsx";
import BurgerMenu from "./components/BurgerMenu.jsx";
import {NavLink} from "react-router-dom";
import {navRoutes} from "../../constants/routes/index.js";
import AuthStore from "../../store/AuthStore.js";
const Header = () => {
    const [active,setActive] = useState(false);

    const toggleMobileMenuShow = () => {
        setActive((prev) => !prev);
        active ? document.body.style.overflow = 'auto' :  document.body.style.overflow = 'hidden';
    }

    return (
        <header  className={"header"}>
            <div className="header__logo" />
            <nav className={`header__nav header-nav ${active ? 'header-nav_active' : ''}`}>
                <BurgerMenu
                    callback={toggleMobileMenuShow}
                    active={active}
                />
                <div className="header-nav__left">
                    {navRoutes.map((item) => {
                        if(item.adminRequired ? AuthStore.isAuth : true) {
                            return (
                                <NavLink
                                    to={item.path}
                                    className={"header-nav__link"}
                                    active={"header-nav__link_active"}
                                    onClick={active ? toggleMobileMenuShow : null }
                                    key={item.path}
                                >
                                    {item.name}
                                </NavLink>
                            )
                        }
                    })}
                </div>
                <div className="header-nav__right">
                    <NavLink
                        to={"/auth/login"}
                        className="header-nav__profile"
                    >
                        <ProfileIcon />
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header;