export function responseSuccess(response, actionType) {
  return {
    type: actionType,
    response
  }
}

export function responseError(error, actionType){
  return {
    type: actionType,
    error
  }
}

export function request(payload, actionType) {
  return {
    type: actionType,
    payload
  }
}