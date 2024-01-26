import { React, useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import ReservationHeader from './Components/Header/ReservationHeader';
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import Specials from './Components/Main/Specials/Specials';
import About from './Components/Main/About/About';
import Footer from './Components/Footer/Footer';
import { headerData, reservationData, orderOnline } from './constants';
 import DataContext from './DataContext/DataContext';
import  Reservations  from './Components/Reservations/Reservations';
import  OrderOnline   from './Components/OrderOnline/OrderOnline';
import { Routes, Route, useLocation } from 'react-router-dom';
import ComfirmedBooking from './Components/Reservations/ConfirmedBooking/ConfirmedBooking';
import Testimonials from './Components/Main/Testimonials/Testimonials';
// import Login from './Components/Login/Login';
// import {themeProvider, createTheme} from 'chakra-ui/react';


function App() {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);


  let data = {};
  if (path === "/meta-front-end-capstone") {
    data =  headerData;
  } else if (path === "/reservations") {
    data = reservationData;
  } else if (path === "/order-online") {
    data = orderOnline;
  }

  return (
    <>
    
    <Nav />
    <DataContext.Provider value={data}>
      {path === "/meta-front-end-capstone" && <Header />}
      {path === "/meta-front-end-capstone/reservations" && <ReservationHeader />}
      <Routes>
        <Route path="/meta-front-end-capstone" element={<Main />} />
        <Route path="/meta-front-end-capstone/reservations" element={<Reservations />} />
        <Route path="/meta-front-end-capstone/order-online" element={<OrderOnline />} />
        <Route path="/meta-front-end-capstone/confirmed-booking" element={<ComfirmedBooking />} />
      </Routes> 
    </DataContext.Provider>

    <Specials />
    <Testimonials />
    <About />

<Footer />
    </>
 
  );
};

export default App;
