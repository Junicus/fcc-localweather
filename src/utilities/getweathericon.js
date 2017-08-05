export function getWeatherIcon(icon) {
    console.log(icon);
    switch (icon) {
        case 'rain':
            return 'wi-rain';
        case 'partly-cloudy-day':
            return 'wi-day-cloudy';
        case 'clear-day':
            return 'wi-day-sunny';
        case 'clear-night':
            return 'wi-night-clear';
        case 'snow':
            return 'wi-snow';
        case 'sleet':
            return 'wi-sleet';
        case 'wind':
            return 'wi-windy';
        case 'fog':
            return 'wi-fog';
        case 'cloudy':
            return 'wi-cloudy';
        case 'partly-cloudy-night':
            return 'wi-night-cloudy';
        case 'hail':
            return 'wi-hail';
        case 'tornado':
            return 'wi-tornado';
        case 'thunderstorm':
            return 'wi-storm-showers'
        default:
            return 'wi-na';
    }
}