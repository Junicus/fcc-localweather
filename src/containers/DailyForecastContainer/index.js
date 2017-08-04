import React from 'react';
import { connect } from 'react-redux';
import { DailyWeather } from '../../components/DailyWeather';

import './forecast.css';

class DailyForecastContainer extends React.Component {
    render() {
        let { weather } = this.props;
        weather = [{
            day: 1453363200,
            icon: 'Icon',
            temp: 59,
            summary: 'Showers',
            precip: {
                chance: .6,
                type: 'rain',
            },
            wind: {
                speed: 4.26,
                bearing: 150,
            },
            lowtemp: 48
        }, {
            day: 1453363200,
            icon: 'Icon',
            temp: 20,
            summary: 'Snow',
            precip: {
                chance: .6,
                type: 'snow',
            },
            wind: {
                speed: 4.26,
                bearing: 150,
            },
            lowtemp: 48
        }, {
            day: 1453363200,
            icon: 'Icon',
            temp: 59,
            summary: 'Showers',
            precip: {
                chance: .6,
                type: 'rain',
            },
            wind: {
                speed: 4.26,
                bearing: 150,
            },
            lowtemp: 48
        }, {
            day: 1453363200,
            icon: 'Icon',
            temp: 59,
            summary: 'Showers',
            precip: {
                chance: .6,
                type: 'rain',
            },
            wind: {
                speed: 4.26,
                bearing: 150,
            },
            lowtemp: 48
        }, {
            day: 1453363200,
            icon: 'Icon',
            temp: 60,
            summary: 'Showers',
            precip: {
                chance: .6,
                type: 'rain',
            },
            wind: {
                speed: 4.26,
                bearing: 150,
            },
            lowtemp: 48
        }];


        const forecastData = weather.map((forecast, i) => {
            return (
                <DailyWeather key={i} {...forecast} styleId={i} />
            );
        });

        return (
            (weather) ?
                (<div className="forecast-container">
                    {
                        forecastData
                    }
                </div>) : <div></div>
        );
    }
}

function mapStateToProps(state) {
    return (state.weather.json) ? {
        weather: state.weather.json.daily.map(function (forecast) {
        })
    } : { weather: null };
}

export default connect(mapStateToProps)(DailyForecastContainer);