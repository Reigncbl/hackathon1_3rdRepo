import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='h-screen bg-gradient-to-r from-[#ce6f6f] to-[#29d38c] p-2 font-poppins'>
      <div className='h-full bg-white bg-opacity-50 shadow-md rounded-3xl flex gap-6 p-6'>
        <Sidebar />
        <Main />
      </div>
    </div>
    
  );
}

export default App;