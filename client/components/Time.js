import React from 'react';
import PropTypes from 'prop-types';


function Time() {
    const getTime = () => {
        const time = new Date().toLocaleString('en-US', { hour: 'numeric', hour12: true }).split(' ');
        return {
            hour: time[0], 
            timePeriod: time[1]
        }
    }

    const time = getTime();

    return (
        <div className='time'>
            <span className='time__hour'>{time.hour}</span>
            <span className='time__period'>{time.timePeriod}</span>
        </div>
    )
}

export default Time;