import React from 'react';
import { connect } from 'react-redux';
import { getLocation } from '../../actions';

import CurrentWeatherContainer from '../CurrentWeatherContainer';
import HourlyWeatherContainer from '../HourlyWeatherContainer';
import DailyForecastContainer from '../DailyForecastContainer';

import './app.css'

class AsyncApp extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getLocation());
    }

    render() {

        return (
            <div className="app-outer app-background-default">
                <div className="app-inner">
                    <div className="app-weather-today">
                        <CurrentWeatherContainer />
                        <HourlyWeatherContainer />
                    </div>
                    <DailyForecastContainer />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { weather } = state;
    return { weather };
}

export default connect(mapStateToProps)(AsyncApp);