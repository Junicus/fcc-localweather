import { combineReducers } from 'redux';
import { location } from './location';
import { weather } from './weather';

export const rootReducer = combineReducers({
    location,
    weather
});