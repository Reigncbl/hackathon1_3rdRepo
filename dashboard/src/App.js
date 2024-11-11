import React, { useState } from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Title from './components/Title';
import Small from './components/Small';
import Micro from './components/Micro';
import { SidebarData, SidebarFooter } from './Data/Data';
import Calculator from './components/Calculator';

function App() {
  const [selected, setSelected] = useState(0);
  const [isSidebarActive, setSidebarActive] = useState(true);
  const [isNightMode, setNightMode] = useState(false);

  // Combine SidebarData and SidebarFooter
  const fullSidebarData = [...SidebarData, ...SidebarFooter];

  return (
    <div className={`h-screen ${isNightMode ? 'dark' : ''} flex bg-[#050517]`}>
      <Sidebar 
        selected={selected} 
        setSelected={setSelected} 
        isSidebarActive={isSidebarActive} 
        setSidebarActive={setSidebarActive}
        isNightMode={isNightMode} 
        setNightMode={setNightMode} 
      />
      
      <div className='flex flex-col px-16 py-6 my-4 mr-4 rounded-3xl h-auto w-full overflow-y-scroll bg-white dark:bg-gray-900'>
        <Title 
          isNightMode={isNightMode} 
          setNightMode={setNightMode} 
          title={fullSidebarData[selected]?.title}  // Safely access title
        />
        {selected === 0 && <Main />}
        {selected === 1 && <Micro />}
        {selected === 2 && <Small />}
        {selected === 4 && <Calculator />
        {selected === 5 && <About />}
      </div>
    </div>
  );
}

export default App;
