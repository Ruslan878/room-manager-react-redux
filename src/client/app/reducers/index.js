import { combineReducers } from 'redux'
import user from './user'
//import room from './room'
import { routerReducer } from 'react-router-redux'
import reduxCrud from 'redux-crud'

export const rootReducer = combineReducers({
  user,
  rooms: reduxCrud.Map.reducersFor('rooms'),
  routing: routerReducer,  
})
