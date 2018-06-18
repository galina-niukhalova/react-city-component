import React from 'react';

function Time() {
    const getTime = () => {
        // convert data to 'hh am' or 'hh pm' format
        const time = new Date().toLocaleString('en-US', { hour: 'numeric', hour12: true }).split(' ');
        return {
            hour: time[0], 
            timePeriod: time[1]
        }
    };

    const classNames = {
        time: 'time', 
        hour: 'time__hour',
        period: 'time__period'
    };

    const time = getTime();
    
    return (
        <div className={classNames.time}>
            <span className={classNames.hour}>{time.hour}</span>
            <span className={classNames.period}>{time.timePeriod}</span>
        </div>
    )
}

export default Time;