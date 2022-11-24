import s from './ProfileInfo.module.css';
import React from "react";
import {Preloader} from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader />
    }

    return (
        <div>
            <div className={s.mainProfileImg}>
                <img src="https://superdevresources.com/wp-content/uploads/2016/02/40-backgrounds-material.jpg"
                     alt='#'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;