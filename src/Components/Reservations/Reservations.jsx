import React, { useReducer} from 'react';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI  } from '../../utils/API'

import {useNavigate } from 'react-router-dom';
import ReservationHeader from '../Header/ReservationHeader';


const updateTimeSlots = (availableTimeSlots, date) => {
    const response = fetchAPI(new Date(date));

    return (
        response.morning.length !== 0 && response.afternoon.length !== 0 && response.evening.length !== 0
    ) ? response : availableTimeSlots;
}

const initTimeSlots  = (initAvailableTimeSlots) => {

    return {
        morning: [...initAvailableTimeSlots.morning, ...fetchAPI(new Date()).morning],
        afternoon: [...initAvailableTimeSlots.afternoon, ...fetchAPI(new Date()).afternoon],
        evening: [...initAvailableTimeSlots.evening, ...fetchAPI(new Date()).evening]
    };
}
const Reservations = () => {

    const [
        availableTimeSlots, 
        dispatchTimeslotsOnDateChange
    ] = useReducer(updateTimeSlots, fetchAPI(new Date()), initTimeSlots);
    
    const navigate = useNavigate();

    const submitForm = (reservation) => {
        console.log(reservation, 'reservation');
        const response = submitAPI(reservation);

        const confirmPageMap = new Map(); 
        confirmPageMap.set("ConfirmedBooking", {name: 
            "ConfirmedBooking", 
            path: "/confirmed-booking",
            anchorable: true
        });

        if (response) {
            navigate(confirmPageMap.get("ConfirmedBooking").path);
        } else {
            console.log('Error in submitting reservation');
        }
    }

  return (
    <>
    <ReservationHeader />
        <BookingForm 
            submitForm={submitForm}
            availableTimeSlots={availableTimeSlots} 
             
            
            dispatchTimeslotsOnDateChange={dispatchTimeslotsOnDateChange}
        />

    </>
  )
}
export default Reservations;