import { React, useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
//import Footer from './Components/Footer/Footer';
import { headerData, reservationData, orderOnline } from './constants';
 import DataContext from './DataContext/DataContext';
import  Reservations  from './Components/Reservations/Reservations';
import  OrderOnline   from './Components/OrderOnline/OrderOnline';
import { Routes, Route, useLocation } from 'react-router-dom';
import ComfirmedBooking from './Components/Reservations/ConfirmedBooking/ConfirmedBooking';
import Login from './Components/Login/Login';
// import {themeProvider, createTheme} from 'chakra-ui/react';


function App() {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);


  let data = {};
  if (path === "/") {
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
    <Routes>
  <Route path='/' element={
    <>
      <Header />
      <Main />
    </>
  } />
  <Route path="/reservations" element={<Reservations />} />
  <Route path='/order-online' element={
    <>
      <Header />
      <OrderOnline />
    </>
  } />
  <Route path='/confirmed-booking' element={<ComfirmedBooking />} />
  <Route path='/login' element={<Login />} />
</Routes>
</DataContext.Provider>
    {/* <Footer /> */}

    </>
 
  );
}

export default App;
