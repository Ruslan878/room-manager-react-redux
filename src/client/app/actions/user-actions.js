import { LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS, 
         LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL } from '../constants/User'
import { checkStatus, parseJSON}  from '../middlewares/response-handler'
import { push } from 'react-router-redux'
import { request, responseSuccess, responseError } from './server-communication-actions'


export function login (user) {

  return dispatch => {
    dispatch(request(user, LOGIN_REQUEST));

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
        dispatch(responseSuccess(data, LOGIN_SUCCESS));
        localStorage.setItem('auth_token', data.auth_token);
        dispatch(push('/rooms'));
      })
      .catch(function(error) {
        dispatch(responseError(error, LOGIN_FAIL));
      })
  }
};