const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
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
    newMessageBody: '',
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE,});
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
});