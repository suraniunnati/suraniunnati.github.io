import React from 'react'
import { Link } from 'react-router-dom'

function Aside() {
    return (
        <div className='border border-[#3D3D3D] h-[725px] w-[200px] bg-black'>
            <div className=' h-[100px] flex justify-center items-center'>
                <img src="https://t4.ftcdn.net/jpg/04/83/17/69/360_F_483176993_LqgkuE0uw4S5IgaOm41L9FCFIJi8rKlj.jpg" alt="" width={"70px"} />
                <h3>Unnati</h3></div>
            <div className='p-3'>
                <Link to="/"><div className='border mt-4 h-[40px] flex items-center'>
                    <div className='border h-full w-[40px] flex justify-center items-center me-3'> <i class="fa-solid fa-house"></i></div>
                    Home  </div></Link>
                <Link to="/about"> <div className='border mt-4 h-[40px] flex items-center'>
                    <div className='border h-full w-[40px] flex justify-center items-center me-3'> <i class="fa-solid fa-address-card"></i></div>
                    About</div></Link>
                <Link to="/skill"><div className='border mt-4 h-[40px] flex items-center'>
                    <div className='border h-full w-[40px] flex justify-center items-center me-3'> <i class="fa-solid fa-pen-nib"></i></div>
                    Skill</div></Link>
                <Link to="/education"><div className='border mt-4 h-[40px] flex items-center'>
                    <div className='border h-full w-[40px] flex justify-center items-center me-3'> <i class="fa-solid fa-user-graduate"></i></div>
                    Education</div></Link>
                <Link to="/project"><div className='border mt-4 h-[40px] flex items-center'>
                    <div className='border h-full w-[40px] flex justify-center items-center me-3'> <i class="fa-solid fa-tarp"></i></div>
                    Project</div></Link>
                <Link to="/contact"><div className='border mt-4 h-[40px] flex items-center'>
                    <div className='border h-full w-[40px] flex justify-center items-center me-3'> <i class="fa-solid fa-user"></i></div>
                    Contact</div></Link>


            </div>
        </div>
    )
}

export default Aside