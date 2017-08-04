import React from 'react';
import { connect } from 'react-redux';
import { getLocation } from '../../actions';

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
            <div className="app-outer">
                <div className="app-inner">
                    <div className="app-weather-today">
                        <div className="app-weather-current">59</div>
                        <div className="app-weather-hourly">57</div>
                        <div className="app-weather-hourly">54</div>
                        <div className="app-weather-hourly">50</div>
                    </div>
                    <DailyForecastContainer />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(AsyncApp);