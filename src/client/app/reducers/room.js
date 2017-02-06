import { ROOM_CREATE_REQUEST, ROOM_CREATE_SUCCESS, ROOM_CREATE_FAIL,
         ROOM_UPDATE_REQUEST, ROOM_UPDATE_SUCCESS, ROOM_UPDATE_FAIL,
         ROOM_DELETE_REQUEST, ROOM_DELETE_SUCCESS, ROOM_DELETE_FAIL} from '../constants/room'

const initialState = [];

export default function roomsState(state = initialState, action) {
    switch (action.type) {
        case ROOM_DELETE_REQUEST:
        return { ...state, loading: true };

        case ROOM_DELETE_SUCCESS:
        return {...state, loading: false}

        case ROOM_DELETE_FAIL:
        return {...state, loading: false}
    }
}
