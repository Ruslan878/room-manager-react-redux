import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from '../constants/User'

const initialState = { isAuthenticated: !!localStorage.getItem('auth_token')} || {}

export default function userstate(state = initialState, action) {

  switch (action.type) {

    case LOGIN_REQUEST:
      return { ...state, email: action.user.Email, loading: true };

    case LOGIN_SUCCESS:
      return {...state, authToken: action.response.auth_token, name:action.response.userName, isAuthenticated: true, loading: false}

    case LOGIN_FAIL:
      return {...state, isAuthenticated: false, loading: false}

    case LOGOUT_SUCCESS:
      // TODO
      return state

    default:
      return state
    }
}
