export const REQUEST_LOCATION = 'REQUEST_LOCATION';
export const SET_LOCATION = 'SET_LOCATION';
export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const SET_WEATHER = 'SET_WEATHER';

function requestLocation() {
    return {
        type: REQUEST_LOCATION,
    }
}

export function getLocation() {
    return (dispatch) => {
        dispatch(requestLocation());
        //TODO: try using the geoLocation api first
        return fetch(`http://ip-api.com/json`)
            .then(response => response.json())
            .then(json => {
                dispatch(setLocation(json));
                dispatch(getWeather(json.lat, json.lon));
            }).catch(error => dispatch(setLocation(null)));
    };
}

export function setLocation(json) {
    return {
        type: SET_LOCATION,
        json
    };
}

function requestWeather(lat, lon) {
    return {
        type: REQUEST_WEATHER,
        lat,
        lon
    };
}

export function getWeather(lat, lon) {
    return (dispatch) => {
        dispatch(requestWeather(lat, lon));
        return fetch(`https://shielded-depths-35887.herokuapp.com/proxy/weather?lat=${lat}&lon=${lon}`)
            .then(response => response.json())
            .then(json => {
                dispatch(setWeather(json));
            }).catch(error => dispatch(setWeather(null)));
    }
}

export function setWeather(json) {
    return {
        type: SET_WEATHER,
        json
    };
}