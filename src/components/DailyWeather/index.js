import React from 'react';

import './dailyweather.css';

export function DailyWeather(props) {
    const { styleId, day, icon, temp, summary, precip, wind, lowtemp } = props;
    console.log(props);
    const date = new Date(day);
    const dateOptions = { month: 'long', day: 'numeric' };
    const dayStyle = 'daily-weather daily-weather-' + styleId;
    return (
        <div className={dayStyle}>
            <div className="daily-weather-day">{date.toLocaleDateString(undefined, dateOptions)}</div>
            <div className="daily-weather-icon">{icon}</div>
            <div className="daily-weather-temp">{temp}&deg;</div>
            <div className="daily-weather-sumnmary">{summary}</div>
            <div className="daily-weather-precip">{precip.chance}% chance of {precip.type}</div>
            <div className="daily-weather-wind">{wind.speed} mph {wind.bearing}</div>
            <div className="daily-weather-lowtemp">{lowtemp}&deg; Low</div>
        </div>
    );
}