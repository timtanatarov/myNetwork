import s from './Header.module.css';
import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
            <header className={s.header}>
                <img src="https://img.icons8.com/emoji/344/eggplant-emoji.png"/>

                <div className={s.loginBlock}>
                    <NavLink to='/login'>Login</NavLink>
                </div>
            </header>
    );
};

export default Header;