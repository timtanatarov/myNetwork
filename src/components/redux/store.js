// import {profileReducer} from "./profileReducer";
// import {dialogsReducer} from "./dialogsReducer";
// import {sidebarReducer} from "./sidebarReducer";
//
// export let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi! How are you?', likesCount: 16},
//                 {id: 2, message: `It's my first post`, likesCount: 25},
//                 {id: 3, message: 'Help me! Someone!', likesCount: 213},
//                 {id: 4, message: 'I am really enjoyed it!', likesCount: 1339},
//             ],
//             newPostText: 'ADD NEW POST...',
//         },
//
//         dialogsPage: {
//             messages: [
//                 {id: 1, message: 'Document'},
//                 {id: 2, message: 'How are you, honey'},
//                 {id: 3, message: 'Fine, and you?'},
//                 {id: 4, message: `What's new?`},
//                 {id: 5, message: `Dad's soup xd`},
//             ],
//
//             dialogs: [
//                 {id: 1, name: 'Favorite'},
//                 {id: 2, name: 'Indira'},
//                 {id: 3, name: 'Vladislav'},
//                 {id: 4, name: 'Alexander'},
//                 {id: 5, name: 'Svatoslav'},
//             ],
//         },
//         sidebar: { },
//     },
//     _callSubscriber() {
//         console.log('State was changed');
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer; //  наблюдатель/observer // publisher-subscriber // button.addEventListener
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//
//         this._callSubscriber(this._state);
//     },
// };
//
// window.store = store;