import React from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

import About from './components/About';


function App() {
  return (
    <div className='h-screen bg-gradient-to-r from-[#ce6f6f] to-[#29d38c] p-2 font-poppins'>
      <div className='h-full bg-white bg-opacity-50 shadow-md rounded-3xl flex gap-6 p-6'>
        <Sidebar />
        <div className='flex flex-col gap-6 h-full w-full text-gray-900 rounded-xl overflow-y-scroll'> 
          <Main />
          <About />
        </div>
      </div>
    </div>
    
  );
}

export default App;