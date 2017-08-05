import React from 'react';
import { connect } from 'react-redux';
import { DailyWeather } from '../../components/DailyWeather';

import './forecast.css';

class DailyForecastContainer extends React.Component {
    renderForecast(weather) {
        return weather.map((forecast, i) => {
            return (
                <DailyWeather key={i} {...forecast} styleId={i} />
            );
        });
    }

    render() {
        console.log('render DailyForecastContainer', this.props);
        const { weather } = this.props;

        return (
            (weather) ?
                (<div className="forecast-container">
                    {
                        this.renderForecast(weather)
                    }
                </div>) : <div></div>
        );
    }
}

function mapStateToProps(state) {
    return (state.weather.json) ? {
        weather: state.weather.json.daily.data.filter((e, i) => { return i < 5; }).map(function (forecast) {
            return {
                day: new Date(forecast.time * 1000),
                icon: forecast.icon,
                temp: forecast.temperatureMax,
                summary: forecast.summary,
                precip: {
                    chance: forecast.precipProbability,
                    type: forecast.precipType
                },
                wind: {
                    speed: forecast.windSpeed,
                    bearing: forecast.windBearing
                },
                lowtemp: forecast.temperatureMin
            };
        })
    } : { weather: null };
}

export default connect(mapStateToProps)(DailyForecastContainer);