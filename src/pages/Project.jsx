import React from 'react'
import web1 from '../assets/SHOPCLUSE.png'
import web2 from '../assets/TATACLIQ.png'
import web3 from '../assets/nykaa.png'
import { Link } from 'react-router-dom'

function Project() {
  return (
    <div>
      <h1 className='text-5xl font-bold text-center p-5'>MY WORKS</h1>
      <div className='w-[80%] m-auto '>
        <div className='flex h-[300px] '>
          <div className='w-[60%] p-2'><img src={web1} alt="" className='w-full h-full rounded-lg shadow-md shadow-[gray]' /></div>
          <div className='w-[40%]  p-5'>
            <h3 className='font-bold'>SHOPCLUSE CLONE</h3>
            <p className='text-[#B7B7B7] text-sm mt-2'>Created a responsive e-commerce clone with a modern
              UI/UX, featuring product listings, detailed views, and add-
              to-cart functionality. Used JavaScript for dynamic
              interactions and Tailwind CSS for a mobile-friendly,
              consistent design. Focused on optimizing performance for
              smooth navigation and quick load times.</p>

          </div>
        </div>
        <div className='flex h-[300px]   mt-10'>
          <div className='w-[40%]  p-5'>
            <h3 className='font-bold'>TATACLIQ CLONE</h3>
            <p className='text-[#B7B7B7] text-sm mt-2'>Built a responsive e-commerce website clone to simulate
              online shopping, featuring user-friendly navigation,
              product listings with filters, shopping cart functionality,
              payment options, and a mock backend. This project
              enhanced my skills in web development, state
              management, and understanding e-commerce workflows.</p>
          </div>
          <div className='w-[60%] p-2'><img src={web2} alt="" className='w-full h-full rounded-lg shadow-md shadow-[gray]' /></div>
        </div>
        <div className='flex h-[300px]  mt-10'>
          <div className='w-[60%] p-2'><img src={web3} alt="" className='w-full h-full rounded-lg shadow-md shadow-[gray]' /></div>
          <div className='w-[40%] p-5'>
            <h3 className='font-bold'>NYKAA CLONE</h3>
            <p className='text-[#B7B7B7] text-sm mt-2'>
              The Nykaa website, built using HTML, CSS, Tailwind, and JavaScript, provides a modern and responsive e-commerce platform for beauty and wellness products. HTML structures the content, Tailwind CSS ensures efficient styling and a mobile-first design, while JavaScript adds interactivity for dynamic product displays and user-friendly navigation. This stack creates a seamless and visually appealing user experience.
            </p>
          </div>
        </div>
      </div>

    <div className='flex justify-center p-3'>
      <Link><button className='p-2 bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] w-[180px] h-[50px]font-bold rounded'>MORE <i class="fa-solid fa-right-long"></i></button></Link></div>
    </div>
  )
}

export default Project