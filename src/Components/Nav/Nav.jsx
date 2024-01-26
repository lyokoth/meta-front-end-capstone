import React from 'react'
 import { useState } from 'react';
import './Nav.css'
import { images } from '../../constants';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Hamburger from 'hamburger-react';
// implement dark mode instead of hamburger menu or implement both later


const Nav = () => {
 const [toggle, setToggle ] = useState(false);

  

  return (
    <div className="nav">

<div className="nav-logo">
    <img src={images.logo} alt="logo" />
    </div>


        <ul className="nav-links">
            <Link className="link" to={"/"}>Home</Link>
            <Link className="link" smooth to={"/about"}>About</Link>
            <Link className="link" smooth to={"/menu"}>Menu</Link>
            <Link className="link" to={"/reservations"}>Reservations</Link>
            <Link className="link" to={"/order-online"}>Order Online</Link>

            
           
        </ul>

{/* mobile navigation menu  */}

<div className="navbar-menu">
<Hamburger
    onClick={() => { setToggle(true) }}
    className="nav-hamburger"
/>
{
 toggle &&  (
 <div>
    <Hamburger
        onClick={() => {
            setToggle(true)
        }} 
        className="nav-cancel"
    />

    <Link className="link" to={"/"} onClick={() => { setToggle(false)}}>Home</Link>
    <Link className="link" to={'/reservations'} onClick={() => { setToggle(false)}}>Reservations</Link>
    <Link className="link" to={"/OrderOnline"} onClick={() => { setToggle(false)}}>Order Online</Link>
    <HashLink className="link" smooth to="/#menu" onClick={() => { setToggle(false)}}>Menu</HashLink>
    <HashLink className="link" smooth to="/#about" onClick={() => { setToggle(false)}}>About</HashLink>     

 </div>)
}
</div> 
    </div>
  )
} 
export default Nav;