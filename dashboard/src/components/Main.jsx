import React, { useState } from 'react';
import Micro from './Micro'; // Import the Micro component

const Main = () => {
  const [selected, setSelected] = useState(''); // State to manage selected component

  return (
    <div className='flex flex-col dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-y-scroll pr-4'>
      <div className='w-full h-fit pb-2'>
        <div className='flex gap-3'>
          <button className='bg-red-400 px-3 rounded-full text-white' onClick={() => setSelected('Micro')}>
            Micro
          </button>  
          <button className='bg-blue-400 px-3 rounded-full text-white' onClick={() => setSelected('Small')}>
            Small
          </button>
          <button className='bg-yellow-400 px-3 rounded-full text-white' onClick={() => setSelected('Medium')}>
            Medium
          </button>
        </div>
      </div>
      {selected === 'Micro' && <Micro />} {/* Conditionally render Micro component */}
      {selected === 'Small' && (
        <div className='flex gap-4'>
          <div className='w-3/5 h-80 rounded-3xl shadow-sm bg-[#F5F5EA] p-4'>
            Product All
          </div>
          <div className='flex flex-col gap-2 w-2/5'>
            <div className='rounded-3xl shadow-sm bg-white h-full p-4'>
              CSV Table
            </div>
          </div>
        </div>
      )}
      {selected === 'Medium' && (
        <div className='flex h-fit gap-4 my-4'>
          <div className='w-1/3 h-64 shadow-sm bg-white rounded-3xl p-4'>
            cc radial
          </div> 
          <div className='w-1/3 h-full p-4 shadow-sm bg-white rounded-3xl'>
            cc radial
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;