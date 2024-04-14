import axios from "axios";
import { call, put } from "redux-saga/effects";
import { loginUrl } from "../backendUrls/backendUrls";
import { hideLoader, setError, setLoggedInUser, showLoader } from "../actions";

export function requestLogin(payload){
    const {user} = payload
    return axios.request({
        method: 'POST',
        url: loginUrl,
        data: user
    })
}

export function* handleLogin(userToLogIn) {
    try {
        yield put(showLoader())
        const response = yield call(requestLogin, userToLogIn);
        console.log(response);
        const {token, user} = response?.data;
        const dataToStore = {
            token,
            accessLevel: user?.accessLevel,
            email: user?.email,
            firstName: user?.firstName,
            lastName: user?.lastName,
            userId: user?.userId,
            userLoggedIn: true,
            errorMessage: ''
        }
        sessionStorage.setItem('user', dataToStore);
        sessionStorage.setItem('token', token);
        yield put(setLoggedInUser, dataToStore);
    } catch (errorResponse) {
        console.log(errorResponse);
        // TODO: Need to modify BE to send proper error message for variour scenarios
        // as of now hardcoding it
        const errorData = {
            message: 'Wrong username or password',
            type: 'ERROR',
            page: 'LOGIN'
        };
        yield put(setError, errorData);
    } finally {
        yield put(hideLoader())
    }
}