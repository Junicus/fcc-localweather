import React from 'react';
import { formatTime } from '../../utilities/formatTime';

import './hourlyweather.css';

export function HourlyWeather(props) {
    const { time, temp, precip } = props;
    return (
        <div className="hourlyweather">
            <div className="hourlyweather-temp">{temp.toFixed()}&deg;</div>
            <div className="hourlyweather-time">{formatTime(time)}</div>
            {
                (precip) ? (<div className="hourlyweather-precip">{(precip.chance * 100).toFixed()}% chance of {precip.type}</div>) : <div></div>
            }
        </div>
    );
}