import { REQUEST_WEATHER, SET_WEATHER } from '../actions';

const initialState = {
    isFetching: false,
    json: null
};

export function weather(state = initialState, action) {
    switch (action.type) {
        case REQUEST_WEATHER:
            return Object.assign({}, state, { isFetching: true, json: null });
        case SET_WEATHER:
            return (action.json) ? Object.assign({}, state, { isFetching: false, json: action.json })
                : { isFetching: false, json: null };
        default:
            return state;
    }
}