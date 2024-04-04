import React from 'react';

// import logo from "../../Images/logo1.png"
import { useState, useEffect } from "react";


const OffcanvasExample = () => {

  const [theme ,setTheme]= useState("dark-theme");
  const togglethemes = () =>{
    if(theme === "dark-theme"){
      setTheme("light-theme");
    }else{
      setTheme("dark-theme");
    }
  };

  useEffect(()=>{
    document.body.className=theme;
  },[theme]);
  return (
<>
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="https://github.com/pranjalsingh03">
        {/* <img src={logo} alt='logo' className='image-logo-header' /> */}
      </a>
      <div className='dark_mode'>
        <input
          className='dark_mode_input'
          type='checkbox'
          id='darkmode-toggle'
          onClick={() => togglethemes()}
        />
        <label className='dark_mode_label' htmlFor='darkmode-toggle'>
        </label>
      </div>
      <button className="navbar-toggler"
        type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
         <ul className="navbar-nav ms-auto ">
          <li className="nav-item">
            <a className="nav-a" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-a" href="/">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-a" href="/">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-a" href="/">Contact Us</a>
          </li>
        </ul>
        <button className="button contactus-button">
          <a className="nav-a" href="/">Resume</a>
        </button>
      </div>
    </div>
  </nav>
    </>
  );
}

export default OffcanvasExample;



{/* <li className='nav-li'>
      <Link to="/">Home</Link>
    </li>
    <li className='nav-li'>
      <Link to="/Aboutus">Services</Link>
    </li>
    <li className='nav-li'>
      <Link to="/Aboutus">Aboutus</Link>
    </li>
    <li className='nav-li'>
      <Link to="/Aboutus">Contactus</Link>
    </li> */}