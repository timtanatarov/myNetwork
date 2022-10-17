import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBviPz4fClbngQ33Uys4UaVYxIhojRZhbMUR_qAAZe1Q&s'/>
            <div>
                {props.messages}
            </div>
            <div>
                {props.likes} likes
            </div>
        </div>
    );
};

export default Post;