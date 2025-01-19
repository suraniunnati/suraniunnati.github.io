import React from 'react'

function Contact() {
  return (
    <div>
      <form action="" className='w-[50%] m-auto p-5 mt-20'>
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