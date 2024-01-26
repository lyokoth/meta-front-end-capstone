import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingForm.css';

const generateTimeSlots = () => {
  const startTime = 9; // 9:00 AM
  const endTime = 22; // 10:00 PM
  const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  for (let hour = startTime; hour <= endTime; hour++) {
    const formattedTime = `${hour.toString().padStart(2, '0')}:00`;
    timeSlots.push(formattedTime);
  }

  return timeSlots;
};



const BookingForm = ({ submitForm }) => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const [guests, setGuests] = useState('0');
  const [occasion, setOccasion] = useState('birthday');
  const [name, setName] = useState({ firstName: "", lastName: "", email: "" });
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const navigate = useNavigate();


  const ErrorMessages = () => {
    return (
      <p className="error-message" role="alert">
        Please select at least one guest
      </p>
    );
  };
  // Use generateTimeSlots function if availableTimes is not an array
  const timeSlots = Array.isArray(generateTimeSlots)
    ? generateTimeSlots
    : generateTimeSlots();

  const getIsFormValid = () => {

    if (name === "") {
      return false;
    }
    if (date === "") {
      return false;
    }
    if (time === "") {
      return false;
    }
    if (guests === "") {
      return false;
    }
    if (occasion === "") {
      return false;
    }
    
    return name.firstName && name.lastName && name.email && time && date && guests && occasion; 
  }

  
  const handleName = e => {
    if (e.target.name === "firstName") {
      setName({ ...name, firstName: e.target.value });
    } else if (e.target.name === "lastName") {
      setName({ ...name, lastName: e.target.value });
    } else if (e.target.name === "email") {
      setName({ ...name, email: e.target.value });
    }
  };


  const handleOccasion = e => {
    setOccasion(e.target.value);
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    if (getIsFormValid()) {

      const  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(name.email)) {
        alert("Please enter a valid email address.");
        return;
      }

    setWasSubmitted(true);
  }

  const clearForm = () => {
    setTime('');
    setDate('');
    setGuests('0');
    setOccasion('');
    setWasSubmitted(false);
  };

 // if (parseInt(guests, 10) < 1) return;
  
    const formData = {
      time,
      date,
      guests,
      occasion,
    };

    if (formData) {
      submitForm(formData);
      navigate('/confirmed-booking');
      clearForm();
    }
  };

    return (
    <div className="reserve-container">
      <h2 className="title">Reserve your Table</h2>
      <form
        className="row justify-content align-items-center"
        onSubmit={handleSubmit}
        aria-label="booking form"
      >
        <div className="form-counter">
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={name.firstName}
            onChange={handleName}
            aria-label="enter your first name"
            placeholder='John'
            aria-required="true"
          />
        </div>
        <div className="form-counter">
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={name.lastName}
            onChange={handleName}
            aria-label="enter your last name"
            placeholder='Doe'
            aria-required="true"
          />
        </div>
        <div className="form-counter">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={name.email}
            onChange={handleName}
            aria-label="enter your email"
            placeholder='name@example.com'
            aria-required="true"
          />
        </div>
        
        <div className="form-counter">
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              console.log("selected date: ", e.target.value);
              
            }}
          />
        </div>

        <div className="form-counter">
          <label htmlFor="time">Time:</label>
          <select
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            disabled={!date}
            aria-label="select a time"
            aria-required="true"
          >
            {timeSlots.map((available) => (
              <option key={available} value={available}>
                {available}
              </option>
            ))}
          </select>
        </div>

        <div className="form-counter">
          <label htmlFor="guests">Guests:</label>
          <input
            id="guests"
            value={guests}
            onChange={(e) => {setGuests(e.target.value)}}
            type="number" required
            aria-label="select number of guests"
            aria-required="true"
            placeholder='0'
            min="0"
            max={10}
          >
         
           
          </input>
          {wasSubmitted && parseInt(guests, 10) < 1 ? <ErrorMessages /> : null}
        </div>

        <div className="form-counter">
          <label htmlFor="occasion">Occasion:</label>
          <select
            id="occasion"
            value={occasion}
            onChange={handleOccasion}
            aria-label="select an occasion"
            aria-required="true"
          >
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="engagement">Engagement</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="submit-button"
          id="button"
     
          disabled={!getIsFormValid()}
        >
          Confirm Reservation
        </button>
      </form>
    </div>
  );
}
export default BookingForm;


// Path: src/Components/Reservations/BookingForm.css

