const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hi! How are you?', likesCount: 16},
        {id: 2, message: `It's my first post`, likesCount: 25},
        {id: 3, message: 'Help me! Someone!', likesCount: 213},
        {id: 4, message: 'I am really enjoyed it!', likesCount: 1339},
    ],
    newPostText: 'ADD NEW POST...',
};

export const profileReducer = (state = initialState, action) => {
        switch (action.type) {
            case ADD_POST: {
                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 777,
                };
                return {
                    ...state,
                    posts: [...state.posts, newPost,],
                    newPostText: '',
                };
            }
            case UPDATE_NEW_POST_TEXT: {
                return {
                    ...state,
                    newPostText: action.newText,
                };
            }
            default:
                return state;
        }
    }
;

export const addPostActionCreator = () => ({type: ADD_POST,});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});