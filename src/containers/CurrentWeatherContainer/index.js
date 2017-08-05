import React from 'react';
import { connect } from 'react-redux';
import { CurrentWeather } from '../../components/CurrentWeather';

class CurrentWeatherContainer extends React.Component {
    render() {
        const { currentWeather } = this.props;

        return (
            (currentWeather) ?
                (<CurrentWeather {...currentWeather} />) : <div></div>
        );
    }
}

function mapStateToProps(state) {
    const { location, weather } = state;
    if (weather.json) {
        const { currently } = weather.json;
        const { city, countryCode } = location;
        return {
            currentWeather: {
                temp: currently.temperature,
                city: city + ', ' + countryCode,
                summary: currently.summary,
                apparentTemp: currently.apparentTemperature
            }
        }
    } else {
        return { currentWeather: null };
    }
}

export default connect(mapStateToProps)(CurrentWeatherContainer);