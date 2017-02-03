import { push } from 'react-router-redux'

export function goToDetails(roomId) {
  return dispatch => {
     dispatch(push('/details/'+roomId));
  }
}