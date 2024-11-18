import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Phonecall from '../images/support/phone-call.png';
import Callback from '../images/support/call-back.png';
import Whatsapp from '../images/support/whatsapp.png';
import logo192 from '../images/logo192.png';

const Navlinks = () => {
  return (
    <div className="flex md:flex-row font-sans text-ss flex-col items-center">
      <NavLink to="/" className="text-gray-700 hover:text-gray-900 p-4">
        Home
      </NavLink>
      <NavLink to="/aboutus" className="text-gray-700 hover:text-gray-900 p-4">
        About us
      </NavLink>
      <NavLink to="/Blogs" className="text-gray-700 hover:text-gray-900 p-4">
        Blogs
      </NavLink>
      {/* <NavLink to="/appointmentbooking" className="text-gray-700 hover:text-gray-900 p-4">
        Book Appointment
      </NavLink> */}
      <NavLink to="/contact" className="text-gray-700 hover:text-gray-900 p-4">
        Contact us
      </NavLink>
      <NavLink to="/" className="text-gray-700 hover:text-gray-900 p-4">
        AI Assistance (Comming Soon)
      </NavLink>
      {/* <NavLink to="/services" className="text-gray-700 hover:text-gray-900 p-4">
        Services
      </NavLink> */}
      <NavLink to="http://localhost/vhc-php/whologin.php" className="text-gray-700 hover:text-gray-900 p-4">
        Login
      </NavLink>
      <NavLink to="http://localhost/vhc-php/register.php" className="text-gray-700 hover:text-gray-900 p-4">
        Register
      </NavLink>
      
      
    </div>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    setIsOpen(false); // Close the navbar when the route changes
  }, [location]);

  return (
    <div className='fixed top-0 w-full z-50'>
      <div className='flex justify-around bg-norm text-lg'>
        <p className='flex items-center'><img src={Callback} className='h-4 flex mr-2' alt="" /> Request a callback</p>
        <p className='flex items-center'><img src={Phonecall} className='h-4 flex mr-2' alt="" /> Call</p>
        <p className='flex items-center'><img src={Whatsapp} className='h-4 flex mr-2' alt="" /> Whatsapp</p>
      </div>
      <nav className='flex justify-around items-center bg-norm text-lg px-4 py-2'>
        <img src={logo192} alt="logo" className='h-16 flex relative max-md:right-4' />
        <div className="hidden md:flex">
          <Navlinks />
        </div>
        <div className="md:hidden flex">
          <button onClick={toggleNav}>
            {isOpen ? <X className="h-6 w-6 text-gray-700 ml-40" /> : <Menu className="h-6 w-6 text-gray-700 ml-40" />}
          </button>
        </div>
      </nav>
      {isOpen &&
        <div className='bg-gray-100 p-4 flex flex-wrap basis-full justify-center'>
          <Navlinks />
        </div>
      }
    </div>
  )
}

export default Navbar;
