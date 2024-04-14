export const LOG_IN='LOG_IN';
export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';
export const SET_ERROR = 'SET_ERROR';
export const GET_ERROR = 'GET_ERROR';

export const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER'
export const GET_USER = 'GET_USER'

export const showLoader = () => ({
  type: SHOW_LOADER,
})

export const hideLoader = () => ({
  type: HIDE_LOADER
})

export function logIn(user){
    return {
      type: LOG_IN,
      user
    }
}

export function setLoggedInUser (dataToStore) {
  return {
    type: SET_LOGGED_IN_USER,
    dataToStore
  }
}

export function getUserData () {
  return {
    type: GET_USER
  }
}

export function setError (errorData) {
  return {
    type: SET_ERROR,
    errorData
  }
}

export function getError () {
  return {
    type: GET_ERROR
  }
}