import React from 'react'
import './Nav.css'
export default function Nav() {
  return (
    <div className="nav">
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href='#reserve'>Reservations</a></li>
            <li><a href="#order">Order Online</a></li>
            <li><a href="#login">Login</a></li>
        </ul>
    </div>
  )
}
