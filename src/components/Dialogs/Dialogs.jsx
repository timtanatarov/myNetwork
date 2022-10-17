import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    console.log(props)
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.messageItems}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
};

export default Dialogs;