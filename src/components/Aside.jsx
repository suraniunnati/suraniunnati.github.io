
import { useState } from 'react';
import { Link } from 'react-router-dom'

function Aside({toggleSidebar}) {

    // const [isOpen, setIsOpen] = useState(true);

    // const close = () => {
    //     setIsOpen(false);
    // };

    // if (!isOpen) return null;
    
    return (
       
        <div  className=' h-screen w-[250px] bg-black border-e border-[#17191B] p-1 relative'>
            <i class="fa-solid fa-xmark absolute right-2 top-2 md:hidden" onClick={toggleSidebar}></i>
             
            <div className=' h-[100px] flex justify-center items-center'>
                <img src="https://i.pinimg.com/736x/d6/10/d9/d610d9d365f203d7eda5a1cd752a8682.jpg" alt="" width={"150px"} className='h-[100px]'/>
                </div>
            <div className='p-3'>
                <Link to="/"><div className='mt-4 h-[40px] flex items-center  bg-[#17191B] shadow-sm shadow-[gray] hover:bg-[#1DBAB5]'>
                    <div className='icon h-full w-[40px] flex justify-center items-center me-3'> <i class="fa-solid fa-house"></i></div>
                    Home  </div></Link>
                <Link to="/about"> <div className=' mt-4 h-[40px] flex items-center bg-[#17191B] shadow-sm shadow-[gray] hover:bg-[#1DBAB5]'>
                    <div className='icon h-full w-[40px] flex justify-center items-center me-3'> <i class="fa-solid fa-address-card"></i></div>
                    About</div></Link>
                <Link to="/skill"><div className=' mt-4 h-[40px] flex items-center bg-[#17191B] shadow-sm shadow-[gray] hover:bg-[#1DBAB5]'>
                    <div className='icon h-full w-[40px] flex justify-center items-center me-3'> <i class="fa-solid fa-pen-nib"></i></div>
                    Skill</div></Link>
                <Link to="/education"><div className=' mt-4 h-[40px] flex items-center bg-[#17191B] shadow-sm shadow-[gray] hover:bg-[#1DBAB5]'>
                    <div className='icon h-full w-[40px] flex justify-center items-center me-3'> <i class="fa-solid fa-user-graduate"></i></div>
                    Education</div></Link>
                <Link to="/project"><div className=' mt-4 h-[40px] flex items-center bg-[#17191B] shadow-sm shadow-[gray] hover:bg-[#1DBAB5]'>
                    <div className='icon h-full w-[40px] flex justify-center items-center me-3'> <i class="fa-solid fa-tarp"></i></div>
                    Project</div></Link>
                <Link to="/contact"><div className=' mt-4 h-[40px] flex items-center bg-[#17191B] shadow-sm shadow-[gray] hover:bg-[#1DBAB5]'>
                    <div className='icon h-full w-[40px] flex justify-center items-center me-3'> <i class="fa-solid fa-user"></i></div>
                    Contact</div></Link>


            </div>
        </div>
    )
}

export default Aside