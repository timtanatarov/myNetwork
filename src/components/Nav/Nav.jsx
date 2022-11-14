import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/profile' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/users' className={navData => navData.isActive ? s.active : s.item}>Users</NavLink>
            </div>
            <div>
                <NavLink to='/dialogItem' className={navData => navData.isActive ? s.active : s.item}>Dialogs</NavLink>
            </div>
            <div>
                <NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div>
                <NavLink to='/settings' className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
            </div>
            <div>
                <NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/friends' className={navData => navData.isActive ? s.active : s.item}>Friends</NavLink>
            </div>
            <div>
                <img className={s.friendsAvatars} src='https://cdn-icons-png.flaticon.com/512/149/149071.png'/>
                <img className={s.friendsAvatars} src='https://cdn-icons-png.flaticon.com/512/149/149071.png'/>
                <img className={s.friendsAvatars} src='https://cdn-icons-png.flaticon.com/512/149/149071.png'/>
            </div>
            <div>
                <a className={s.friendsNames}>Ричард</a>
                <a className={s.friendsNames}>Стьюи</a>
                <a className={s.friendsNames}>Алекс</a>
            </div>
        </nav>
    );
};

export default Navbar;