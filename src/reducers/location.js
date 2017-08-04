import { SET_LOCATION } from '../actions';

const initialState = null;

export function location(state = initialState, action) {
    switch (action.type) {
        case SET_LOCATION:
            return (action.json) ? Object.assign({}, state, action.json) : null;
        default:
            return state;
    }
}