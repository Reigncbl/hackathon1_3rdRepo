import React from 'react'

const Medium = () => {
  return (
    <div className='flex flex-col h-full gap-2'>
      <p className='py-2 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta necessitatib</p>
      <div className='flex gap-2 h-24'>  
        <div className='flex justify-evenly items-center gap-8 w-4/5 bg-slate-300 '>
          <p>ave</p>
          <p>ave</p>
          <p>ave</p>
          <p>ave</p>
          <p>ave</p>
        </div>
        <div className='flex justify-center items-center w-1/5 bg-slate-300'>
          <p>ave</p>
        </div>
      </div>
      <div className='flex h-full gap-2'>
        <div className='flex flex-col w-1/2 gap-2'>
          <div className='h-2/3 flex justify-center items-center bg-slate-300'>
            <p>ave</p>
          </div>
          <div className='h-1/3 flex justify-center items-center bg-slate-300'>
            <p>ave</p>
          </div>
        </div>
        <div className='w-1/2 flex justify-center items-center bg-slate-300'>
          <p>ave</p>
        </div>
      </div>
      
    </div>
  )
}

export default Medium