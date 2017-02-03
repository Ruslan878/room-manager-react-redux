import { redirect } from './routing-actions'

export function goToDetails(roomId) {
  return dispatch => {
     dispatch(redirect('/details/'+roomId));
  }
}