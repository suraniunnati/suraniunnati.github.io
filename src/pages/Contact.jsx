import React from 'react'

function Contact() {
  return (
    <div className='contact h-[500px]'>
      <h1 className='wow animate__animated animate__zoomIn text-center text-5xl font-bold pt-10'>CONTACT</h1>
      <form action="" className='wow animate__animated animate__zoomIn md:w-[50%] m-auto p-5 mt-15'>
        <input type="text" placeholder='Your Name' className='w-full h-[40px] mt-3 ps-2 border border-[gray] shadow-sm shadow-[gray] bg-transparent rounded-md'/>
        <input type="text" placeholder='Your Email' className='w-full h-[40px] mt-3 ps-2 border border-[gray] shadow-sm shadow-[gray] bg-transparent rounded-md'/>
        <input type="text" placeholder='Youe Number' className='w-full h-[40px] mt-3 ps-2 border border-[gray] shadow-sm shadow-[gray] bg-transparent rounded-md'/>
        <textarea name="" id="" placeholder='Message' className='w-full h-[100px] mt-3 ps-2 border border-[gray] shadow-sm shadow-[gray] bg-transparent rounded-md'></textarea>
        <input type="submit" className='w-full h-[45px] mt-3 ps-2 bg-[#1DBAB5] rounded-md'/>
      </form>
    </div>
  )
}

export default Contact