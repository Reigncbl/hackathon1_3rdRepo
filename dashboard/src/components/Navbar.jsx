import React, { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='h-full w-64 text-white'>
      <div className='flex items-center justify-left'>
        <img src="/favicon.ico" alt="logo" className='w-10'/>
        <span className='text-gray-900 font-bold text-2xl pl-4'>Logo</span>
      </div>
      <div className='pb-64'>
        <ul className='flex flex-col gap-4 mt-4'>
          <li className='flex items-center justify-start p-2 gap-2 rounded-r-lg bg-black bg-opacity-10 border-l-8'>
            <span class="fas fa-tachometer-alt sidebar-icon"></span>
            <a href="/" className='sidebar-text'>Dashboard</a>
          </li>
          <li className='sidebar-button'>
            <span class="fas fa-tachometer-alt sidebar-icon"></span>
            <a href="/" className='sidebar-text'>About</a>
          </li>
          <li className='sidebar-button'>
            <span class="fa-solid fa-chart-line sidebar-icon"></span>
            <a href="/" className='sidebar-text'>Analytics</a>
          </li>
          <li className='sidebar-button'>
            <span class="fa-solid fa-clock sidebar-icon"></span>
            <a href="/" className='sidebar-text'>Loans</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className='flex flex-col gap-4 mt-4 pt-4 border-t-2'>
          <li className='sidebar-button'>
            <span class="fa-solid fa-clock sidebar-icon"></span>
            <a href="/" className='sidebar-text'>Settings</a>
          </li>
          <li className='sidebar-button'>
            <span class="fa-solid fa-clock sidebar-icon"></span>
            <a href="/" className='sidebar-text'>Information</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;