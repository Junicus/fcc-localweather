import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer } from '../reducers';
import { createStore, applyMiddleware, compose } from 'redux';

const loggerMiddleware = createLogger();

export const initialState = {
    location: null,
    weather: {
        isFetching: false
    }
};

const enhancers = [];
const middleware = [
    thunkMiddleware,
    loggerMiddleware
];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = (window.devToolsExtension) ? window.devToolsExtension() : f => f;
    enhancers.push(devToolsExtension);
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

function configureStore() {
    return createStore(rootReducer, initialState, composedEnhancers);
}

export default configureStore();