import { GET_USER, SET_LOGGED_IN_USER } from "../actions";

const userData = {
    token: '',
    accessLevel: 'NA',
    email: '',
    firstName: '',
    lastName: '',
    userId: '',
    userLoggedIn: false,
    errorMessage: ''
}

export default function userAuth(state=userData, action) {
    const {type, dataToStore} = action;
    switch (type) {
        case GET_USER: 
            return {...state}

        case SET_LOGGED_IN_USER:
            return {
                ...state,
                ...dataToStore
            }

        default:
            return {...state}
    }
}