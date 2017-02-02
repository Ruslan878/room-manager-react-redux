import { CALL_API } from 'redux-api-middleware'

import { LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS, 
         LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL } from '../constants/User'
import { ROUTING } from '../constants/Routing'
import { checkStatus, parseJSON}  from '../middlewares/response-handler'

export function loginSuccess(response) {
  return {
    type: LOGIN_SUCCESS,
    response
  }
}

export function loginError(error){
  return {
    type: LOGIN_FAIL,
    error
  }
}

export function loginRequest(user) {
  return {
    type: LOGIN_REQUEST,
    user
  }
}

export function redirect() {
  return {
        type: ROUTING,
        payload: {
          method: 'replace',
          nextUrl: '/rooms'
        }
  }
}

export function login (user) {

  return dispatch => {

    dispatch(loginRequest(user));

    fetch(
      '/api/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)  
      })
      .then(checkStatus)
      .then(parseJSON)
      .then(function(data) {
        dispatch(loginSuccess(data));
        localStorage.setItem('auth_token', data.auth_token);
        dispatch(redirect());
      })
      .catch(function(error) {
        console.log('request failed', error)
      })
  }
};