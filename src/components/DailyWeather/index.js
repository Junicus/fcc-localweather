import React from 'react';
import { calculateCardinalDirection } from '../../utilities/cardinaldirection';
import { getWeatherIcon } from '../../utilities/getweathericon';

import './dailyweather.css';
import './css/weather-icons.css';

export function DailyWeather(props) {
    const { styleId, day, icon, temp, summary, precip, wind, lowtemp } = props;
    var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    console.log('DailyWeather: ', props);
    const dayStyle = 'daily-weather daily-weather-' + styleId;
    const iconStyle = 'wi ' + getWeatherIcon(icon) + ' icon';
    return (
        <div className={dayStyle}>
            <div className="daily-weather-day">{weekday[day.getDay()] + ', ' + day.getDate()}</div>
            <div className="daily-weather-icon"><i className="wi wi-day-sunny icon"></i></div>
            <div className="daily-weather-temp">{temp.toFixed()}&deg;</div>
            <div className="daily-weather-summary">{summary}</div>
            <div className="daily-weather-precip">{(precip.chance * 100).toFixed()}% chance of {precip.type}</div>
            <div className="daily-weather-wind">{wind.speed.toFixed()} mph {calculateCardinalDirection(wind.bearing)}</div>
            <div className="daily-weather-lowtemp">{lowtemp.toFixed()}&deg; Low</div>
        </div>
    );
}