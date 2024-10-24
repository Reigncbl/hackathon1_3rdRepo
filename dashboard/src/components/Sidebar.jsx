import React, { useState } from 'react';
import { SidebarData } from '../Data/sidebar';
import { SidebarFooter } from '../Data/sidebar-footer';

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className='h-full w-64 text-white'>
      <div className='flex items-center justify-left'>
        <img src="/favicon.ico" alt="logo" className='w-10'/>
        <span className='text-gray-900 font-bold text-2xl pl-4'>Logo</span>
      </div>
      <div className='pb-64'>
        <ul className='flex flex-col gap-4 mt-4'>
          {SidebarData.map((item, index) => (
            <li 
              className={selected === index ? 'sidebar-button active' : 'sidebar-button'}
              key={index}
              onClick={() => setSelected(index)}
            >
              <span className='sidebar-icon'>{item.icon}</span>
              <span className='sidebar-text'>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='border-t-2 border-gray-900'>
        <ul className='flex flex-col gap-4 mt-4'>
          {SidebarFooter.map((item, index) => (
            <li 
              className={selected === index + SidebarData.length ? 'sidebar-button active' : 'sidebar-button'}
              key={index + SidebarData.length} 
              onClick={() => setSelected(index + SidebarData.length)} 
            >
              <span className='sidebar-icon'>{item.icon}</span>
              <span className='sidebar-text'>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
