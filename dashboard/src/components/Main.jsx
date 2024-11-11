import React from 'react';
import Cards from '../Cards/DataCard';

const Main = () => {
  return (
    <div className='flex flex-col gap-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
      <p className='py-2 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta necessitatib</p> 
        <div className='w-2/3 h-fit'>
          <Cards />

          
      </div>
    </div>  
  );
};

export default Main;
