
import { useState } from 'react';
import './App.css'
import Aside from './components/Aside'
import Header from './components/Header'

import MainRout from './Router/MainRout'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    
    <div className="flex">
      <div>
        <Aside isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div>
      <Header toggleSidebar={toggleSidebar} />
      <MainRout/>
      </div>
      
     
    </div>
  )
}

export default App
