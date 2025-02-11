import React from 'react'
import web1 from '../assets/SHOPCLUSE.png'
import web2 from '../assets/TATACLIQ.png'
import web3 from '../assets/nykaa.png'
import { Link } from 'react-router-dom'

function Project() {
  return (
    <div>
      <h1 className='wow animate__animated animate__zoomIn text-5xl font-bold text-center p-5'>MY WORKS</h1>
      <div className='xl:w-[80%] m-auto '>
        <div className='md:flex xl:h-[300px] '>
          <div className='wow animate__animated animate__slideInLeft md:w-[60%] p-5 border-e-2 border-[#1DBAB5]'><img src={web1} alt="" className='w-full h-full rounded-lg shadow-md shadow-[gray]' /></div>
          <div className='md:w-[40%] p-5 relative'>
          <div className='pr2 h-full w-full absolute top-0 left-0 opacity-10'></div>
            <h3 className='font-bold'>SHOPCLUSE CLONE</h3>
            <p className='text-[#B7B7B7] text-sm mt-2'>Created a responsive e-commerce clone with a modern
              UI/UX, featuring product listings, detailed views, and add-
              to-cart functionality. Used JavaScript for dynamic
              interactions and Tailwind CSS for a mobile-friendly,
              consistent design. Focused on optimizing performance for
              smooth navigation and quick load times.</p>
              <a href="https://rad-dolphin-e61876.netlify.app/"><button className='p-2 bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] w-[50px] ms-2 mt-3 rounded-md'><i class="fa-solid fa-globe"></i></button></a>
              <a href="https://github.com/suraniunnati/shopcluse"><button className='p-2 bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] w-[50px] ms-2 mt-3 rounded-md'><i class="fa-brands fa-github"></i></button></a>
          </div>
        </div>
        <div className='flex-row-reverse md:flex xl:h-[300px]   mt-10'>
          <div className='md:w-[40%] p-5 relative '>
            <div className='pr1 h-full w-full absolute top-0 left-0 opacity-10'></div>
            <h3 className='font-bold'>TATACLIQ CLONE</h3>
            <p className='text-[#B7B7B7] text-sm mt-2'>Built a responsive e-commerce website clone to simulate
              online shopping, featuring user-friendly navigation,
              product listings with filters, shopping cart functionality,
              payment options, and a mock backend. This project
              enhanced my skills in web development, state
              management, and understanding e-commerce workflows.</p>
              <a href="https://675e768a9935fb268569daf7--tatacilq.netlify.app/"><button className='p-2 bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] w-[50px] ms-2 mt-3 rounded-md'><i class="fa-solid fa-globe"></i></button></a>
              <a href="https://github.com/suraniunnati/tata_cilq"><button className='p-2 bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] w-[50px] ms-2 mt-3 rounded-md'><i class="fa-brands fa-github"></i></button></a>
          </div>
          <div className='wow animate__animated animate__slideInRight md:w-[60%] p-5 border-s-2 border-[#1DBAB5]'><img src={web2} alt="" className='w-full h-full rounded-lg shadow-md shadow-[gray]' /></div>
        </div>
      </div>

    <div className='flex justify-center p-3 mt-5'>
      <Link to="/projectlist"><button className='wow animate__animated animate__rotateIn p-2 bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] w-[180px] h-[50px]font-bold rounded'>MORE <i class="fa-solid fa-right-long"></i></button></Link></div>
    </div>
  )
}

export default Project