import React, { useState, useEffect } from 'react';
import '../App.css';
import Contact from './Contact';
import Skill from './Skill';
import About from './About';
import Education from './Education';
import Project from './Project';
import Header from '../components/Header';

function Home({ toggleSidebar }) {


  const words = ['CODER', 'DESIGNER'];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((Index) => (Index + 1) % words.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <>
     <Header toggleSidebar={toggleSidebar} />
    <div className='home  h-[720px] w-full relative'>
      <div className='p-5 xl:w-[50%] absolute top-20 xl:left-20'>
        <h1 className='wow animate__animated animate__backInLeft mt-3 text-2xl xl:text-5xl font-bold'>HI, I'M UNNATI SURANI!</h1>
        <h1 className='wow animate__animated animate__backInRight mt-3 text-2xl xl:text-5xl font-bold'>CREATIVE</h1>
        <h1 className='wow animate__animated animate__backInRight mt-3 text-[#1DBAB5] text-2xl xl:text-5xl font-bold'>
          <span className="ah-words-wrapper">
            <b className="is-visible">{words[current]}</b>
          </span>
        </h1>

        <p className='wow animate__animated animate__lightSpeedInRight mt-10 text-[10px] xl:text-[15px]'>Versatile web developer skilled in HTML, CSS, JavaScript, and React, specializing in creating responsive and user-friendly interfaces. Currently pursuing a BCA, combining technical expertise with strong communication to deliver impactful digital solutions. Passionate about problem-solving and innovation.</p>

        <a href="https://drive.google.com/file/d/1qNQGZ4koFv7X8wR5YrsSQS9zoR5q2yR7/view?usp=drive_link"><button className='wow animate__animated animate__rotateIn bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] w-[180px] h-[50px] mt-8'>Download CV <i class="fa-solid fa-download"></i></button></a>
      </div>
    </div>
    <About/>
    <Skill/>
    <Education/>
    <Project/>
    <Contact/>
    </>
  );
}

export default Home;
