import React, { useState } from 'react';
import './TimeSelector.css';

const TimeCapsule = (props) => {

    const handleRadioChange = (e) => {
        props.chooseTime(e.target.value);
    }

    return (
        <div>
            <h1>{props.morning}</h1>
            <div className="time-capsule">
                {
                    props.slot && props.slots.map((item) => {
                        return (
                            <span className="radio-label">
                                <input type="radio" className="radio-input" name="time" value={item} onChange={handleRadioChange} />
                                <label>{item}</label>
                            </span>)
                    })
                }
                </div>
        </div>
    );
  }

  const TimeSelector = (props) => {
    const hour = new Date().toTimeString().split(' ')[0];
  
    let isMorning = false;
    let isAfternoon = false;
    let isEvening = false;
  
    if (parseInt(hour) >= 8 && parseInt(hour) < 12) {
      isMorning = true;
    } else if (parseInt(hour) >= 12 && parseInt(hour) < 17) {
      isAfternoon = true;
    } else if (parseInt(hour) >= 17 && parseInt(hour) < 22) {
      isEvening = true;
    }
  
    return (
      <div className="time-selector">
        <h1 className="title">Time</h1>
        {isMorning && <TimeCapsule morning="Morning" slots={props.morningSlots} chooseTime={props.chooseTime} />}
        {isAfternoon && <TimeCapsule morning="Afternoon" slots={props.afternoonSlots} chooseTime={props.chooseTime} />}
        {isEvening && <TimeCapsule morning="Evening" slots={props.eveningSlots} chooseTime={props.chooseTime} />}
      </div>
    );
  };

  export default TimeSelector;