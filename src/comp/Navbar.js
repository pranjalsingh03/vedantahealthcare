import React, { useState } from 'react';
import logo192 from '../images/logo192.png';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <nav className='flex justify-around bg-sky-100 text-xl'>
        <p>Request a callback</p>
        <p>Call</p>
        <p>Whatsapp</p>
      </nav>
      <div className="flex items-center justify-between px-4 md:px-0">
        <img src={logo192} alt="logo" className='h-14 flex' />
        <button
          className="block md:hidden text-xl"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? 'Close' : 'Menu'}
        </button>
        <div className="md:hidden absolute top-0 right-0 h-full bg-white z-10 transition-all duration-300 overflow-hidden"
          style={{ transform: showMenu ? 'translateX(0)' : 'translateX(100%)' }}>
          <ul className='flex flex-col list-none pl-2'>
            <li className='p-4 text-xl'>Home</li>
            <li className='p-4 text-xl'>About Us</li>
            <li className='p-4 text-xl'>FAQ</li>
            <li className='p-4 text-xl'>Our Offerings</li>
            <li className='p-4 text-xl'>Contact Us</li>
          </ul>
        </div>
      </div>
      <hr className="my-6" />
    </div>
  )
}

export default Navbar;
