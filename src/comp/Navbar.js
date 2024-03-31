import React from 'react';
import logo192 from '../images/logo192.png';
import {  Link } from "react-router-dom";
import Phonecall from '../images/support/phone-call.png';
import Callback from '../images/support/call-back.png';
import Whatsapp from '../images/support/whatsapp.png';


function Navbar() {

  return (
    <div className='fixed nav-div'>
      <nav className='flex justify-around bg-shiva text-lg'>
        <p className='flex items-center'><img src={Callback} className='h-4 flex mr-2' alt="" /> Request a callback</p>
        <p className='flex items-center'><img src={Phonecall} className='h-4 flex mr-2' alt="" /> Call</p>
        <p className='flex items-center'><img src={Whatsapp} className='h-4 flex mr-2' alt="" /> Whatsapp</p>
      </nav>
      <div className='flex justify-center bg-norm'>
      <img src={logo192} alt="logo" className='h-16 flex relative right-32 max-md:right-4' />
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
  </div>
    </div>
  )
}

export default Navbar;