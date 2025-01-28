import React, { useState } from 'react'
import '../App.css'
import web1 from '../assets/web1.png'
import web2 from '../assets/web2.png'
import web3 from '../assets/web3.png'
import web4 from '../assets/web4.png'
import web5 from '../assets/web5.png'
import tata from '../assets/TATACLIQ.png'
import shop from '../assets/SHOPCLUSE.png'
import nykaa from '../assets/nykaa.png'
import planet from '../assets/planet.png'
import cal from '../assets/cal.png'

function Projectlist() {
    let [state,setState]=useState([
        {title:"AI jumpx webpage",
         img:web1,
         gitlink:`https://github.com/suraniunnati/websites-webpages/tree/main/live_project_1`,
         live:`https://chic-faun-626d72.netlify.app/`,  
         type:"webpage"   
        },
        {title:"Business webpage",
            img:web2,
            gitlink:`https://github.com/suraniunnati/websites-webpages/tree/main/live_project_2`,
            live:`https://stupendous-axolotl-e0689a.netlify.app/` ,
            type:"webpage"  
        },
        {title:"Teapost webpage",
            img:web3,
            gitlink:`https://github.com/suraniunnati/websites-webpages/tree/main/live_project_3`,
            live:`https://6798dc1fb868423aacc68762--helpful-jalebi-347687.netlify.app` ,
            type:"webpage"  
        },
        {title:"Govity webpage",
            img:web4,
            gitlink:`https://github.com/suraniunnati/websites-webpages/tree/main/web11`,
            live:`https://tangerine-biscochitos-1bef0e.netlify.app/` ,
            type:"webpage"  
        },
        {title:"3D prints webpage",
            img:web5,
            gitlink:`https://github.com/suraniunnati/websites-webpages/tree/main/web2`,
            live:`https://preeminent-kleicha-b99c5b.netlify.app/`,
            type:"webpage"  
        },
        {title:"Tatacliq website",
            img:tata,
            gitlink:`https://github.com/suraniunnati/tata_cilq`,
            live:`https://675e768a9935fb268569daf7--tatacilq.netlify.app/`  ,
             type:"website"
        },
        {title:"Shopcluse website",
            img:shop,
            gitlink:`https://github.com/suraniunnati/shopcluse`,
            live:`https://rad-dolphin-e61876.netlify.app/`,
            type:"website"   
        },
        {title:"Nykaa website",
            img:nykaa,
            gitlink:`https://github.com/suraniunnati/javascript/tree/main/website_3`,
            live:"mkclbvm",
            type:"website"   
        },
        {title:"Planets",
            img:planet,
            gitlink:`https://github.com/suraniunnati/websites-webpages/tree/main/planet/planet`,
            live:`https://sparkly-biscuit-07f6b6.netlify.app/`,
            type:"outher"   
        },
        {title:"Calculator",
            img:cal,
            gitlink:`https://github.com/suraniunnati/websites-webpages/tree/main/calculator`,
            live:`https://deluxe-cannoli-baeccd.netlify.app/`,
            type:"outher"   
        }
        
    ])

    const [filteredData, setFilteredData] = useState(state); 

    const filterData = (type) => {
        if (type === "all") {
            setFilteredData(state); 
        } else {
            const filtered = state.filter((item) => item.type === type);
            setFilteredData(filtered);
        }
    };


  return (
    <div>
        <div id="titlemain" className='p-5 shadow-sm shadow-[#1DBAB5] rounded-lg m-5'>
            <h3 className='font-bold text-2xl mb-2'>My Development Journey</h3>
            <li className='text-[#B7B7B7] text-sm'>50+ Web Pages: Designed and developed responsive web pages.</li>
            <li className='text-[#B7B7B7] text-sm'>5+ Websites: Built fully functional, dynamic websites.</li>
           <li className='text-[#B7B7B7] text-sm'>Other Projects: Worked on interactive apps, responsive designs, and API integrations.</li>
        </div>
        <div className='w-[30%] flex justify-around items-center m-auto'>
            <button className='bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] p-2 w-[120px] rounded-md '  onClick={() => filterData("webpage")}>Webpages</button>
            <button className='bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] p-2 w-[120px] rounded-md'  onClick={() => filterData("website")}>Website</button>
            <button className='bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] p-2 w-[120px] rounded-md'  onClick={() => filterData("outher")}>Outher</button>
        </div>
        <div className='grid grid-cols-3 gap-5 w-[85%] m-auto my-10 '>
           { filteredData.map((el)=>{
                return <div id='alldata' className='shadow shadow-[#1DBAB5] rounded-lg p-3'>
                    <img src={el.img} alt="" />
                    <h3 className='mt-2'>{el.title}</h3>
                    <a href={el.gitlink} className='border-b rounded-lg text-sm p-1'><button className='mt-2'><i class="fa-brands fa-sourcetree text-[#109BBB]"></i> Source</button></a>
                    <a href={el.live} className='border-b rounded-lg text-sm p-1 ms-2'><button><i class="fa-solid fa-life-ring text-[#109BBB]"></i> Demo</button></a>
                </div>
           })}
        </div>
    </div>
  )
}

export default Projectlist