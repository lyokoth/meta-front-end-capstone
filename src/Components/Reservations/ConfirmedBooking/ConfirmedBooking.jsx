import React from 'react';
import './ConfirmedBooking.css';


const ConfirmedBooking = (props) => { 
    return (
        <div className="app__confirmed-booking">
            <h1 className="app__confirmed-booking-title">Confirmed Booking</h1>
            <div className="app__confirmed-booking-info">
                <p className="app__confirmed-booking-info-text">Your booking has been confirmed for {props.date} at {props.time} for {props.guests} people.</p>
                <p className="app__confirmed-booking-info-text">We look forward to seeing you!</p>
            </div>
        </div>
    );
}
export default ConfirmedBooking;