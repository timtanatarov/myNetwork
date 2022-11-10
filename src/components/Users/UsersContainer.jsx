import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../redux/usersReducer";

// в ф-ции mapStateToProps сидят данные state, которые отправляются в презентационную компоненту
const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
};

// в ф-ции mapDispatchToProps сидят коллбэки, которые отправляются в презентационную компоненту
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },

        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);