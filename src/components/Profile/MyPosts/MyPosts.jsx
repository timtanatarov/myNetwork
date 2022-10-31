import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    const postsElements = props.posts.map(p => <Post message={p.message} likes={p.likesCount}/>);

    let newPostElement = React.createRef();

    const onAddPost = () => {
        props.addPost();
    };

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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
                    <button onClick={onAddPost}>Add post</button>
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