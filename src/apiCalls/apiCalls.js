import axios from "axios";
import { call } from "redux-saga/effects";
import { loginUrl } from "../backendUrls/backendUrls";

export function requestLogin(payload){
    const {user} = payload
    return axios.request({
        method: 'POST',
        url: loginUrl,
        data: user
    })
}

export function* handleLogin(user) {
    try {
        // TODO: Handle showLoader here
        const response = yield call(requestLogin, user);
        console.log(response);
    } catch (errorResponse) {
        console.log(errorResponse);
    }
}