import React from 'react';
import s from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    avatarPhoto: 'https://pbs.twimg.com/media/FOXLCuDVQAAaEW4.jpg',
                    followed: false,
                    fullName: 'Tim',
                    status: 'I am really want to find a work',
                    location: {city: 'Prague', country: 'Czech'}
                },
                {
                    id: 2,
                    avatarPhoto: 'https://pbs.twimg.com/media/FOXLCuDVQAAaEW4.jpg',
                    followed: true,
                    fullName: 'Vladislav',
                    status: 'Look, I am found very funny sus-picture',
                    location: {city: 'Rostov-on-don', country: 'Russia'}
                },
                {
                    id: 3,
                    avatarPhoto: 'https://pbs.twimg.com/media/FOXLCuDVQAAaEW4.jpg',
                    followed: true,
                    fullName: 'Alexander',
                    status: 'It is my lollipop, so tasty!',
                    location: {city: 'Rostov-on-don', country: 'Russia'}
                },
                {
                    id: 4,
                    avatarPhoto: 'https://pbs.twimg.com/media/FOXLCuDVQAAaEW4.jpg',
                    followed: false,
                    fullName: `Anton`,
                    status: 'Where is my leg...',
                    location: {city: 'Paris', country: 'France'}
                },
                {
                    id: 5,
                    avatarPhoto: 'https://pbs.twimg.com/media/FOXLCuDVQAAaEW4.jpg',
                    followed: true,
                    fullName: `Sergey`,
                    status: 'I need to go to smoking right now',
                    location: {city: 'Lamberhurst', country: 'United Kingdom'}
                },
            ],
        );
    }
    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div className={s.avatarPhoto}>
                    <img src={u.avatarPhoto} alt='#'/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}

                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)}
    </div>
}

export default Users;