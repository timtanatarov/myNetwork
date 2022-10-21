import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
<<<<<<< HEAD
    const postsElements = props.posts.map(p => <Post message={p.messages} likes={p.likesCount}/>);

    let addPost = () => { alert('Hey, bruh, nice ass!')};

=======
    const postsElements = props.posts.map(p => <Post message={p.message} likes={p.likesCount}/>);

     let newPostElement = React.createRef();

    const addPosts = () => {
        props.addPost();
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        // alert('АТАТА РУКИ ОТ КОМПА');
    }
    // console.log(props);
>>>>>>> 1492c311557a0765380a7d0d556ec94a8f9ca557
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
<<<<<<< HEAD
                    <button onClick={ addPost }>Add post</button>
=======
                    <button onClick={ addPosts }>Add post</button>
>>>>>>> 1492c311557a0765380a7d0d556ec94a8f9ca557
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