import React from 'react'
import photo from '../assets/photo.jpg'

function About() {
  return (
    <div className='h-[700px] xl:flex items-center justify-around relative'>
      <img src="https://static.vecteezy.com/system/resources/previews/034/327/000/non_2x/bright-blue-cyan-abstract-glossy-stripes-on-black-background-vector.jpg" alt="" className='absolute bottom-0 h-[300px] w-full opacity-5'/>
      <div className='xl:w-[40%] p-4'>
        <h1 className='wow animate__animated animate__bounceInDown font-bold text-4xl mb-5'>ABOUT ME</h1>
        <h1 className='text-[#1DBAB5]'>______________</h1>
        <p className='wow animate__animated animate__bounceInLeft about  mt-3'>Hi, I'm Unnati Surani, a passionate front-end developer currently pursuing my BCA (Semester 3) at Red and White Institute. With a strong foundation in programming and a love for clean, functional design, I specialize in creating engaging and user-friendly web experiences.</p>
        <p className='wow animate__animated animate__bounceInLeft about mt-3'>I’m from Motbi, currently residing in Rajkot, and continuously improving my skills in modern technologies like JavaScript, React, and more. Alongside academics, I actively contribute to open-source projects on GitHub.</p>
       <p className='wow animate__animated animate__bounceInLeft about mt-3'>Feel free to explore my work, and let's collaborate to bring your ideas to life!</p>

      </div>
      <div className='wow animate__animated animate__bounceInRight photo h-[40%] xl:h-[80%] w-[50%] xl:w-[35%] relative rounded-lg overflow-hidden' >
        {/* <img src={photo} alt="" className='h-full w-full'/> */}
        <div className='ab1 h-full w-full absolute top-0'></div>
        <div className='ab2 h-full w-full absolute bottom-0 right-0'></div>
      </div>
    </div>
  )
}

export default About