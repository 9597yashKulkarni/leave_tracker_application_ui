import {takeLatest} from 'redux-saga/effects'
import { LOG_IN } from '../actions'
import { handleLogin } from '../apiCalls/apiCalls'

export function* watcherSaga() {
    yield takeLatest(LOG_IN, handleLogin)
}