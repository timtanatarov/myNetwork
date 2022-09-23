import s from '../Dialogs.module.css';


const Message = (props) => {
    return (
        <div className={s.messageItems}>{props.message}</div>
    )
};

export default Message;