import React from 'react'
import './Nav.css'
import { images } from '../../constants';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


const Navbar = () => {
   

  return (
    <div className="nav">

<div className="nav-logo">
    <img src={images.logo} alt="logo" />
    </div>


        <ul className="nav-links">
            <li><HashLink className="link" to="/">Home</HashLink></li>
            <li><HashLink className="link" smooth to="/#about" >About</HashLink></li>
            <li><HashLink className="link" smooth to="/#menu" >Menu</HashLink></li>
            <li><Link className="link" to="/reservations">Reservations</Link></li>
            <li><Link className="link" to="/order-online">Order Online</Link></li>

            
           
        </ul>

</div> 

  )
} 
export default Navbar;