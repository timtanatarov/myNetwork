import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    let path = "/dialogItem/" + props.id;
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};


export default DialogItem;