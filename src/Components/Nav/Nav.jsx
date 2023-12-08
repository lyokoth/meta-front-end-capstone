import React, { useState } from 'react'
import './Nav.css'
import { images } from '../../constants';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Hamburger from 'hamburger-react';


const Nav = () => {
  const [toggle, setToggle ] = useState(false);

  <div className="nav-logo">
    <img src={images.logo} alt="logo" />
    </div>


  return (
    <div className="nav">
        <ul className="nav-links">
            <Link className="link" to={"/"}>Home</Link>
            <Link className="link" to={"/about"}>About</Link>
            <Link className="link" to={"/menu"}>Menu</Link>
            <Link className="link" to={"/reservations"}>Reservations</Link>
         
            <Link className="link" to={"/order"}>Order Online</Link>
            <Link className="link" to={"/login"}>Login</Link>
            
            <li><a href="#login">Login</a></li>
        </ul>

<div className="app__navbar-menu">
<Hamburger
    onClick={() => { setToggle(true) }}
    className="app__navbar-hamburger"
/>
{
 toggle &&  (
 <div>
    <Hamburger
        onClick={() => {
            setToggle(false)
        }} 
        className="app__navbar-cancel"
    />

    <Link className="link" to={"/"} onClick={() => { setToggle(false)}}>Home</Link>
    <Link className="link" to={'/Reservations'} onClick={() => { setToggle(false)}}>Reservation</Link>
    <Link className="link" to={"/OrderOnline"} onClick={() => { setToggle(false)}}>OrderOnline</Link>
    <HashLink className="link" smooth to="/#Menu" onClick={() => { setToggle(false)}}>Menu</HashLink>
    <HashLink className="link" smooth to="/#About" onClick={() => { setToggle(false)}}>About</HashLink>     

 </div>)
}
</div>
    </div>
  )
} 
export default Nav;