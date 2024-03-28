import React from 'react';
import logo192 from '../images/logo192.png';
import {  Link } from "react-router-dom";


function Navbar() {

  return (
    <div>
      <nav className='flex justify-around bg-sky-100 text-lg'>
        <p>Request a callback</p>
        <p>Call</p>
        <p>Whatsapp</p>
      </nav>
      <div className='flex justify-center bg-slate-200'>
      <img src={logo192} alt="logo" className='h-16 flex relative right-32 max-md:right-9' />
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/Aboutus">Services</Link>
    </li>
    <li>
      <Link to="/Aboutus">Aboutus</Link>
    </li>
    <li>
      <Link to="/Aboutus">Contactus</Link>
    </li>
    <li>
      <button className='translate'>Translate</button>
    </li>
  </div>
    </div>
  )
}

export default Navbar;