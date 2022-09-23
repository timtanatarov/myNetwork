import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.mainProfileImg}>
                <img src="https://superdevresources.com/wp-content/uploads/2016/02/40-backgrounds-material.jpg"
                     alt='#'/>
            </div>
            <div className={s.descritpionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;