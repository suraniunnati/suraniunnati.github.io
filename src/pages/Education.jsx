import React from 'react'

function Education() {
  return (
    <div className='edu xl:h-[720px] flex justify-around'>
      <div className='w-[40%] mt-20'>
        <h1 className='wow animate__animated animate__flipInX font-bold text-3xl'>Education</h1>
        <div className='wow animate__animated animate__slideInLeft border-b border-[gray] p-3 mt-5'>
          <h4 className='border border-[#109BBB]  w-[120px] text-center font-medium text-[#1DBAB5]'>2023-NOW</h4>
          <h5 className='font-medium mt-2'>BCA</h5>
          <p className='text-[#B7B7B7] '>savras university</p>
          <p className='text-[#B7B7B7]'>Currently pursuing BCA(Bachelor of Computer Applications), focusing on front-end development, programming languages, and web technologies.</p>
        </div>
        <div className='wow animate__animated animate__slideInLeft border-b border-[gray] p-3 mt-5'>
        <h4 className='border border-[#109BBB]  w-[120px] text-center font-medium text-[#1DBAB5]'>2021-2023</h4>
        <h5 className='font-medium mt-2'>HSC</h5>
        <p className='text-[#B7B7B7] '>D.J.P Kanya Vidyalay</p>
        <p className='text-[#B7B7B7]'>Completed with a strong focus on key academic subjects, laying the foundation for higher education in technology.</p>
        </div>
        <div className='wow animate__animated animate__slideInLeft border-b border-[gray] p-3 mt-5'>
        <h4 className='border border-[#109BBB] w-[120px] text-center font-medium text-[#1DBAB5]'>2019-2021</h4>
        <h5 className='font-medium mt-2'> SSC</h5>
        <p className='text-[#B7B7B7] '>M.M.Gandhi Vidyalay</p>
        <p className='text-[#B7B7B7]'>Achieved excellent grades and actively participated in academic and co-curricular activities.</p>
        </div>
      </div>

      <div className='w-[40%] mt-20'>
      <h1 className='wow animate__animated animate__flipInX font-bold text-3xl'>Certificates</h1>
      <div className='wow animate__animated animate__slideInRight border-b border-[gray] p-3 mt-5'>
        <h4 className='border border-[#109BBB] w-[120px] text-center font-medium text-[#1DBAB5]'>2024</h4>
        <h5 className='font-medium mt-2'>TechWer 2024</h5>
        <p className='text-[#B7B7B7] '>Red and White institute</p>
        <p className='text-[#B7B7B7] '>Empowering IT learners with the latest in technology and innovation, fostering creativity, collaboration, and practical expertise to build a brighter digital future.</p>
      </div>
      <div className='wow animate__animated animate__slideInRight border-b border-[gray] p-3 mt-5'>
        <h4 className='border border-[#109BBB] w-[120px] text-center font-medium text-[#1DBAB5]'>2024</h4>
        <h5 className='font-medium mt-2'>Voice Marathon Challenge</h5>
        <p className='text-[#B7B7B7] '>Red and White institute</p>
        <p className='text-[#B7B7B7] '>Unleash your stage presence and sharpen your communication skills, building confidence, charisma, and the art of captivating any audience with your unique voice.</p>
      </div>
      
      </div>
    </div>
  )
}

export default Education