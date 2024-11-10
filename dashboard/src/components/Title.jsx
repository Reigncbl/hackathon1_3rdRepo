import React from 'react';
import { UilSun, UilMoon } from '@iconscout/react-unicons';

const Title = ({ isNightMode, setNightMode, title }) => {
  return (
    <div className='flex justify-between items-center'>
      <h1 className='text-3xl font-semibold pb-4 dark:text-white'>{title}</h1>
      <div>
        <button onClick={() => setNightMode(!isNightMode)} className='py-1 px-2 rounded-full w-20 h-min flex justify-start bg-[#F5F5EA] shadow-md transition dark:justify-end'>
          <input type="checkbox" name="light-switch" className="light-switch sr-only" />
          <label className="relative cursor-pointer" htmlFor="light-switch">
            {isNightMode ? (
                <UilMoon className="text-slate-300 dark:text-slate-600" />
            ) : (
                <UilSun className="text-yellow-400 dark:text-yellow-200" />
            )}
          </label>
        </button>
      </div>
    </div>
  );
};

export default Title;