import React from 'react';
import { connect } from 'react-redux';
import { HourlyWeather } from '../../components/HourlyWeather';

import './hourly.css';

class HourlyWeatherContainer extends React.Component {
    renderHourly(hourlyWeather) {
        return hourlyWeather.map((hourly, i) => {
            return (
                <HourlyWeather key={i} {...hourly} />
            );
        });
    };

    render() {
        console.log('render HourlyWeatherContainer: ', this.props);
        const { hourlyWeather } = this.props;
        return (
            (hourlyWeather) ?
                (<div className="hourly-container">
                    {
                        this.renderHourly(hourlyWeather)
                    }
                </div>) : <div></div>
        )
    }
}

function mapStateToProps(state) {
    return (state.weather.json) ? {
        hourlyWeather: state.weather.json.hourly.data.filter((e, i) => { return i < 3; }).map(function (hourly) {
            return {
                time: new Date(hourly.time * 1000),
                temp: hourly.temperature,
                precip: (hourly.precipProbability) ? { chance: hourly.precipProbability, type: hourly.precipType } : null
            };
        })
    } : { hourlyWeather: null };
}

export default connect(mapStateToProps)(HourlyWeatherContainer);