import React, { useState } from 'react'

function Projectlist() {
    let [state,setState]=useState([
        {title:"bcvbmk",
         img:"kcvbm",
         gitlink:"mkvc",
         live:"mkclbvm"   
        },
        {title:"bcvbmk",
            img:"kcvbm",
            gitlink:"mkvc",
            live:"mkclbvm"   
           }
        
    ])
  return (
    <div>
        <h1>Projectlist</h1>
        <div className='w-[30%] flex justify-around items-center m-auto'>
            <button className='bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] p-2 w-[120px] rounded-md'>Webpages</button>
            <button className='bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] p-2 w-[120px] rounded-md'>Website</button>
            <button className='bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] p-2 w-[120px] rounded-md'>Outher</button>
        </div>
        <div className='grid grid-cols-4 gap-20 w-[80%] m-auto mt-10'>
           { state.map((el)=>{
                return <div>
                    <img src={el.img} alt="" />
                    <h3>{el.title}</h3>
                    <a href={el.gitlink}>github</a>
                    <a href={el.live}>live</a>
                </div>
           })}
        </div>
    </div>
  )
}

export default Projectlist