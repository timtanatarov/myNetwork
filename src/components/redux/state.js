export let store = {
    _state: {
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
                {id: 4, message: `What's new?`}, {id: 5, message: `Dad's soup xd`},
            ],

            dialogs: [
                {id: 1, name: 'Favorite'},
                {id: 2, name: 'Indira'},
                {id: 3, name: 'Vladislav'},
                {id: 4, name: 'Alexander'},
                {id: 5, name: 'Svatoslav'},
            ],
        },
    },

    _callSubscriber() {
        console.log('State was changed');
    },

    getState() {
        return this._state;
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 777,
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);

    },

    updateNewPostNext(newText) {
        let newPost = {
            id: 5, message: postMessage, likesCount: 777,
        };

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);

    },

    subscribe(observer) {
        this._callSubscriber = observer; //  наблюдатель/observer // publisher-subscriber // button.addEventListener
    },
};

window.store = store;