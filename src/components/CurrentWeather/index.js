import React from 'react';

import './currentweather.css';

export function CurrentWeather(props) {
    const { temp, city, summary, apparentTemp } = props;
    return (
        <div className="currentweather">
            <div className="currentweather-weather-container">
                <div className="currentweather-temp">{temp.toFixed()}&deg;</div>
                <div className="currentweather-summary-container">
                    <div className="currentweather-summary">{summary}</div>
                    <div className="currentweather-appears">Feels like: {apparentTemp.toFixed()}&deg;</div>
                </div>
            </div>
            <div className="currentweather-city">{city}</div>
        </div>
    );
}