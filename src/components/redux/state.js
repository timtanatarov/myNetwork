// import {rerenderEntireTree} from "../../render";
let rerenderEntireTree = () => {
    console.log('State was changed');
};


export const state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi! How are you?', likesCount: 16},
            {id: 2, message: `It's my first post`, likesCount: 25},
            {id: 3, message: 'Help me! Someone!', likesCount: 213},
            {id: 4, message: 'AMOGUS', likesCount: 1339},
        ],
        newPostText: 'ADD NEW POST...',
    },

        dialogsPage: {
            messages: [
                {id: 1, message: 'Document'},
                {id: 2, message: 'How are you, honey'},
                {id: 3, message: 'Fine, and you?'},
                {id: 4, message: `What's new?`},
                {id: 5, message: `Dad's soup xd`},
            ],

            dialogs: [
                {id: 1, name: 'Favorite'},
                {id: 2, name: 'Indira'},
                {id: 3, name: 'Vladislav'},
                {id: 4, name: 'Alexander'},
                {id: 5, name: 'Svatoslav'},
            ],
        },
};

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 777,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);

};

export const updateNewPostNext = (newText) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 777,
    };

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);

};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};