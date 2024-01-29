import React  from 'react';


import Reservations from '../Components/Reservations/Reservations';
import OrderOnline from '../Components/OrderOnline/OrderOnline';

import ConfirmedBooking from '../Components/Reservations/ConfirmedBooking/ConfirmedBooking';

import { Routes, Route} from 'react-router-dom';

function AppRoutes() {

    return (

        <Routes>
            <Route path="/reservations" element={<Reservations />} />
      
            <Route path="/order-online" element={<OrderOnline />} />
            <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
        </Routes>


    );
}
export default AppRoutes;