const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: []
    //     {
    //         id: 1,
    //         avatarPhoto:'https://pbs.twimg.com/media/FOXLCuDVQAAaEW4.jpg',
    //         followed: false,
    //         fullName: 'Tim',
    //         status: 'I am really want to find a work',
    //         location: {city: 'Prague', country: 'Czech'}
    //     },
    //     {
    //         id: 2,
    //         avatarPhoto:'https://pbs.twimg.com/media/FOXLCuDVQAAaEW4.jpg',
    //         followed: true,
    //         fullName: 'Vladislav',
    //         status: 'Look, I am found very funny sus-picture',
    //         location: {city: 'Rostov-on-don', country: 'Russia'}
    //     },
    //     {
    //         id: 3,
    //         avatarPhoto:'https://pbs.twimg.com/media/FOXLCuDVQAAaEW4.jpg',
    //         followed: true,
    //         fullName: 'Alexander',
    //         status: 'It is my lollipop, so tasty!',
    //         location: {city: 'Rostov-on-don', country: 'Russia'}
    //     },
    //     {
    //         id: 4,
    //         avatarPhoto:'https://pbs.twimg.com/media/FOXLCuDVQAAaEW4.jpg',
    //         followed: false,
    //         fullName: `Anton`,
    //         status: 'Where is my leg...',
    //         location: {city: 'Paris', country: 'France'}
    //     },
    //     {
    //         id: 5,
    //         avatarPhoto:'https://pbs.twimg.com/media/FOXLCuDVQAAaEW4.jpg',
    //         followed: true,
    //         fullName: `Sergey`,
    //         status: 'I need to go to smoking right now',
    //         location: {city: 'Lamberhurst', country: 'United Kingdom'}
    //     },
    // ],
};

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true,}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false,}
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});