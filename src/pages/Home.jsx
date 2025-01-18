import React, { useState, useEffect } from 'react';
import '../App.css';

function Home() {
  const words = ['CODER', 'DESIGNER'];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((Index) => (Index + 1) % words.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className='home  h-[720px] w-full relative'>
      <div className='p-5 w-[50%] absolute top-20 left-20'>
        <h1 className='mt-3 text-5xl font-bold'>HI, I'M UNNATI SURANI!</h1>
        <h1 className='mt-3 text-5xl font-bold'>CREATIVE</h1>
        <h1 className='mt-3 text-[#1DBAB5] text-5xl font-bold'>
          <span className="ah-words-wrapper">
            <b className="is-visible">{words[current]}</b>
          </span>
        </h1>

        <p className='mt-10'>Versatile web developer skilled in HTML, CSS, JavaScript, and React, specializing in creating responsive and user-friendly interfaces. Currently pursuing a BCA, combining technical expertise with strong communication to deliver impactful digital solutions. Passionate about problem-solving and innovation.</p>

        <a href="https://drive.google.com/file/d/1qNQGZ4koFv7X8wR5YrsSQS9zoR5q2yR7/view?usp=drive_link"><button className='bg-[#1DBAB5] w-[180px] h-[50px] mt-8'>Download CV <i class="fa-solid fa-download"></i></button></a>
      </div>
    </div>
  );
}

export default Home;
