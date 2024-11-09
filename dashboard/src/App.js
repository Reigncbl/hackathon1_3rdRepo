import React, { useRef } from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

import About from './components/About';
import Calculator from './components/Calculator';


function App() {
  const mainRef = useRef(null);
  const aboutRef = useRef(null);  

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='h-screen bg-gradient-to-r from-[#ce6f6f] to-[#29d38c] p-2 font-poppins'>
      <div className='h-full bg-white bg-opacity-50 shadow-md rounded-3xl flex gap-6 p-6'>
        <Sidebar scrollToSection={scrollToSection} mainRef={mainRef} aboutRef={aboutRef} />
        <div className='flex flex-col gap-6 h-full w-full text-gray-900 rounded-xl overflow-y-scroll'> 
          <div ref={mainRef}>
            <Main />
 
          </div>
          <div ref={aboutRef}>
            <About />
          </div>
          <div>
        <Calculator />
        </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;