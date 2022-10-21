import s from './Post.module.css';
import {logDOM} from "@testing-library/react";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBviPz4fClbngQ33Uys4UaVYxIhojRZhbMUR_qAAZe1Q&s'/>
            <div>
                {props.message}
            </div>
            <div>
                {props.likes} likes
            </div>
        </div>
    );
};

export default Post;