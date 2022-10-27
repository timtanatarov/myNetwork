import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profileReducer";

const MyPosts = (props) => {
    const postsElements =
        props.posts.map(p => <Post message={p.message} likes={p.likesCount}/>);

    let newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch( action);
    }
    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;