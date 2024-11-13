import Cards from '../Cards/DataCard';
import React from 'react'
import { cardsDataMedium } from '../Data/Data';
import TableauReport from 'tableau-react';

const Medium = () => {
  return (
    <div className='flex flex-col dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-y-scroll overflow-hidden pr-4'>
      <div className='w-full h-fit pb-4'>
        <div className='w-full h-32'>
        <Cards data={cardsDataMedium} /> 
        </div> 
      </div>
      <div className='flex gap-12'>
        <div className='flex h-96 w-full gap-4'>
          <div className='bg-white drop-shadow-sm rounded-3xl w-full p-4'>
            products all
          </div>
          <div className='bg-white drop-shadow-sm rounded-3xl w-1/2 p-4'>
            <TableauReport
          url={"https://public.tableau.com/views/CreditCard_17314886936660/Sheet1?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"}
          options={{
            hideTabs: false,
            hideToolbar: false,
            height: 350,
            width: 500,
          }}
        />
          </div>
        </div>
      </div>
      <div className='flex h-fit gap-4 my-4'>
        <div className='bg-white drop-shadow-sm rounded-3xl w-1/2 p-4'>
          Loan
        </div>
        <div className='bg-white drop-shadow-sm rounded-3xl w-full h-96 p-4'>
          CSV Table
        </div>
        
      </div>
      
    </div>  
  );
}

export default Medium