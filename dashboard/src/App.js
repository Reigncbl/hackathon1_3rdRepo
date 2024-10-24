import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
    <div className='h-screen bg-gradient-to-r from-[#ce6f6f] to-[#29d38c] p-2 font-poppins'>
      <div className='h-full bg-white bg-opacity-50 shadow-md rounded-3xl flex gap-6 p-6'>
        <Navbar />
        <Main />
      </div>
    </div>
    
  );
}

export default App;