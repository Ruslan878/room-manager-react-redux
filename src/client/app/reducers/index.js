import { combineReducers } from 'redux'
import user from './user'
import { routerReducer } from 'react-router-redux'

export const rootReducer = combineReducers({
  user,
  routing: routerReducer
})
