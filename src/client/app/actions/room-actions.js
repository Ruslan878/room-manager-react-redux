import { checkStatus, parseJSON}  from '../middlewares/response-handler'
import reduxCrud from 'redux-crud';
import _         from 'lodash';

const baseActionCreators = reduxCrud.actionCreatorsFor('rooms');
const roomUrl = '/api/rooms';

let actionCreators = {

  fetchOne(id) {
    return function(dispatch) {
      const action = baseActionCreators.fetchStart();
      dispatch(action);

      // send the request
      const url = `${roomUrl}/${id}`;
      fetch(url, {
            method: 'GET'
      })
      .then(checkStatus)
      .then(parseJSON)
      .then(function(room) {
        const action = baseActionCreators.fetchSuccess(room);
        dispatch(action);
       })
       .catch(function(error) {
          const action = baseActionCreators.fetchError(error);
          dispatch(action);
       });
    }
  },

  fetch(page, limit) {
    return function(dispatch) {
      const action = baseActionCreators.fetchStart();
      dispatch(action);

      fetch(roomUrl, {
            method: 'GET'
      })
      .then(checkStatus)
      .then(parseJSON)
      .then(function(rooms) {
          const action = baseActionCreators.fetchSuccess(rooms);
          dispatch(action);
        })
        .catch(function(error) {
          const action = baseActionCreators.fetchError(error);
          dispatch(action);
        });
    }
  },

  create(room) {
    return function(dispatch) {
      const action = baseActionCreators.createStart(room);
      dispatch(action);

      fetch(roomUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(room)  
      })
      .then(checkStatus)
      .then(parseJSON)
      .then(function(createdRoom) {
          debugger
            const action = baseActionCreators.createSuccess(createdRoom);
            dispatch(action);
        })
        .catch(function(error) {
            debugger
            const action = baseActionCreators.createError(error);
            dispatch(action);
        });
    }
  },

  update(room) {
    return function(dispatch) {
      const action = baseActionCreators.updateStart(room);
      dispatch(action);
      const url = `${roomUrl}/${room.Id}`;
      fetch(url, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(room)  
      })
      .then(checkStatus)
      .then(parseJSON)
      .then(function(updatedRoom) {
          const action = baseActionCreators.updateSuccess(updatedRoom);
          dispatch(action);
       })
       .catch(function(error) {
          const action = baseActionCreators.updateError(error);
          dispatch(action);
       });
    }
  },

  delete(room) {
    return function(dispatch) {
      const action = baseActionCreators.deleteStart(room);
      dispatch(action);

      // send the request
      const url = `/rooms/${room.Id}`;
      fetch(url, {
            method: 'DELETE'
      })
      .then(checkStatus)
      .then(parseJSON)
      .then(function(deletedRoom) {
          const action = baseActionCreators.updateSuccess(deletedRoom);
          dispatch(action);
       })
       .catch(function(error) {
          const action = baseActionCreators.updateError(error);
          dispatch(action);
       });
    }
  }
}

actionCreators = _.extend(baseActionCreators, actionCreators);

export default actionCreators;