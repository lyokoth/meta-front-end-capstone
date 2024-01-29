import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Navbar from './Components/Nav/Navbar';
import Footer from './Components/Footer/Footer';
import Specials from './Components/Main/Specials/Specials';
import Testimonials from './Components/Main/Testimonials/Testimonials';
import About from './Components/Main/About/About';
import Reservations from './Components/Reservations/Reservations';
import OrderOnline from './Components/OrderOnline/OrderOnline';

function App() {
  return (
    <Router>
      <Navbar />
    
      
      <Routes>
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/" element={<>
        <Header />
          <Specials />
          <Testimonials />
          <About />
        </>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
