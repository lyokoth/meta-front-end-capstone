import React from "react";
import './ReservationHeader.css';
import BlockRevealAnimation from 'react-block-reveal-animation';
import { images, reservationData } from '../../constants';


const ReservationHeader = () => {
    return (
        <header className="reservation-header">
        <div className="reservation-header__data">
            <BlockRevealAnimation color="#F4CE14">
            <h1>
                {reservationData.title}
            </h1>
            </BlockRevealAnimation>
            <BlockRevealAnimation color='#EDEFEE'>
            <h3>
                {reservationData.location}
            </h3>
            <p>
                {reservationData.description}
            </p>
            </BlockRevealAnimation>
            <button>
             
            {reservationData.btnname}
         
            </button>
        </div>
        <BlockRevealAnimation color='#333333'>
            <div
            className="reservation-header__image"
            style={{ backgroundImage: `url(${images.restaurantFood})` }}
            />
        </BlockRevealAnimation>
        </header>
    );
    };
export default ReservationHeader;