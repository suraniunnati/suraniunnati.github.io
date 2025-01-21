import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Skill from '../pages/Skill'
import Education from '../pages/Education'
import Contact from '../pages/Contact'
import Project from '../pages/Project'
import Projectlist from '../pages/Projectlist'

function MainRout() {
  return (
    <div className='w-full'>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/skill' element={<Skill/>}></Route>
             <Route path='/education' element={<Education/>}></Route>
            <Route path='/project' element={<Project/>}></Route>
             <Route path='/contact' element={<Contact/>}></Route>
             <Route path='/projectlist' element={<Projectlist/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRout