import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import jquary from '../assets/jquary.png'
import bootstrap from '../assets/bootstrap.png'
import github from '../assets/github.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import sass from '../assets/sass.png'
import c from '../assets/c.png'
import photoshop from '../assets/photoshop.png'

function Skill() {
  return (
    <div className='mainskill pb-20'>
      <div className='wow animate__animated animate__flipInX text-center font-bold text-5xl p-10'>MY SKILLS</div>
      <div className=' w-[60%] grid grid-clos-2 md:grid-cols-3 xl:grid-cols-6 gap-10 m-auto mt-10'>
        <div className='wow animate__animated animate__lightSpeedInLeft skill shadow-md shadow-white h-[110px] rounded-lg font-bold flex flex-col items-center justify-between p-1'><img src={html} alt="" width={"70px"}/>Html</div>
        <div className='wow animate__animated animate__lightSpeedInLeft skill shadow-md shadow-white h-[110px] rounded-lg font-bold flex flex-col items-center justify-between p-1'><img src={css} alt="" width={"70px"}/> Css</div>
        <div className='wow animate__animated animate__lightSpeedInLeft skill shadow-md shadow-white h-[110px] rounded-lg font-bold flex flex-col items-center justify-between p-1'><img src={javascript} alt="" width={"60px"} className='mt-2'/> Javascript</div>
        <div className='wow animate__animated animate__lightSpeedInRight skill shadow-md shadow-white h-[110px] rounded-lg font-bold flex flex-col items-center justify-between p-1'><img src={sass} alt="" width={"90px"} className='mt-3'/> Sass</div>
        <div className='wow animate__animated animate__lightSpeedInRight skill shadow-md shadow-white h-[110px] rounded-lg font-bold flex flex-col items-center justify-between p-1'><img src={jquary} alt="" width={"50px"} className='mt-2'/> JQuary</div>
        <div className='wow animate__animated animate__lightSpeedInRight skill shadow-md shadow-white h-[110px] rounded-lg font-bold flex flex-col items-center justify-between p-1'><img src={bootstrap} alt="" width={"70px"}/> Bootstrap</div>
        <div className='wow animate__animated animate__lightSpeedInLeft skill shadow-md shadow-white h-[110px] rounded-lg font-bold flex flex-col items-center justify-between p-1'><img src={tailwind} alt="" width={"70px"} className='mt-3'/> tailwind Css</div>
        <div className='wow animate__animated animate__lightSpeedInLeft skill shadow-md shadow-white h-[110px] rounded-lg font-bold flex flex-col items-center justify-between p-1'><img src={c} alt="" width={"70px"} className='mt-1'/> C Language</div>
        <div className='wow animate__animated animate__lightSpeedInLeft skill shadow-md shadow-white h-[110px] rounded-lg font-bold flex flex-col items-center justify-between p-1'><img src={react} alt="" width={"70px"}/> React</div>
        <a href="https://github.com/suraniunnati/"><div className='wow animate__animated animate__lightSpeedInRight skill shadow-md shadow-white h-[110px] rounded-lg font-bold flex flex-col items-center justify-between p-1'><img src={github} alt="" width={"70px"}/> Github</div></a>
        <div className='wow animate__animated animate__lightSpeedInRight skill shadow-md shadow-white h-[110px] rounded-lg font-bold flex flex-col items-center justify-between p-1'><img src={photoshop} alt="" width={"80px"} className='mt-3'/> PhotoShop</div>
      </div>
    </div>
  )
}

export default Skill