import { GET_ERROR, SET_ERROR } from "../actions";

const errorData = {
    message: "",
    pageName: "",
    type: ""
}

export default function errors(state = errorData, action) {
    const {type, errorData} = action;

    switch(type) {
        case SET_ERROR: 
            return {
                ...state, errorData
            }
        case GET_ERROR: 
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}