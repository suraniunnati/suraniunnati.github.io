
import { useState } from 'react';
import './App.css'
import Aside from './components/Aside'
import Header from './components/Header'

import MainRout from './Router/MainRout'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  console.log(isSidebarOpen)

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <>
      <div className={`fixed top-0 z-10 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
          <Aside toggleSidebar={toggleSidebar}/>
        </div>
   
      <div className='md:ms-[250px]'>
      <Header toggleSidebar={toggleSidebar} />
      <MainRout/>
      </div>
      
      </>
  
    
  )
}

export default App
