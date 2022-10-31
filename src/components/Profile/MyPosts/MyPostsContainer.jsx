import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
    // const state = props.store.getState();
    //
    // const addPost = () => {
    //     props.store.dispatch(addPostActionCreator());
    // };
    //
    // const onPostChange = (text) => {
    //     let action = updateNewPostTextActionCreator(text);
    //     props.store.dispatch(action);
    // };

    return (<StoreContext.Consumer>
        {(store) => {
        const state = store.getState();

        const addPost = () => {
            store.dispatch(addPostActionCreator());
        };

        const onPostChange = (text) => {
            let action = updateNewPostTextActionCreator(text);
            store.dispatch(action);
        };
        return <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    }}
    </StoreContext.Consumer>);
};

export default MyPostsContainer;