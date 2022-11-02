import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// в ф-ции mapStateToProps сидят данные state, которые отправляются в презентационную компоненту
const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

// в ф-ции mapDispatchToProps сидят коллбэки, которые отправляются в презентационную компоненту
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },

        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;