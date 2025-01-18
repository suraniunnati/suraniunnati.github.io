
import './App.css'
import Aside from './components/aside'
import Contact from './pages/Contact'
import Home from './pages/Home'
import MainRout from './Router/MainRout'

function App() {


  return (
    <div className="flex">
      <Aside/>
      <MainRout/>
    </div>
  )
}

export default App
