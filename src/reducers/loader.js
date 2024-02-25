
const initialLoader = {
    isLoading: false
}

export default function loader(state = initialLoader, action) {
    var {type} = action;
    switch(type) {
        case 'SHOW_LOADER':
            return {...state, isLoading: true}
        case 'HIDE_LOADER':
            return {...state, isLoading: false}
        default:
            return {...state}
    }
}