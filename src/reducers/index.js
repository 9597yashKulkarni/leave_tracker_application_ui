import {combineReducers} from 'redux'
import loader from './loader';
import userAuth from './userAuthReducer';
import errors from './errorsReducer';

export default combineReducers({
    loader,
    userAuth,
    errors
})