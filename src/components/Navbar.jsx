import React from 'react'

const Navbar = () => {
    return (
        <div className="w-full flex justify-center items-center h-30 fixed top-0 left-0 z-10 backdrop-blur-md rounded-b-2xl">
            <div className='bg-black w-98/100 p-5 flex justify-between items-center h-20 rounded-lg gap-20 ml-4 border-2' >
            <h1 className='font-semibold text-3xl'>Innovate & Elevate STCET 2K25</h1>
            <ul className='flex text-lg justify-center items-center gap-10 px-10'>
                <li className='pb-1/2 hover:border-b-2 cursor-pointer transition-all duration-50'>Home</li>
                <li className='pb-1/2 hover:border-b-2 cursor-pointer transition-all duration-50'>About</li>
                <li className='pb-1/2 hover:border-b-2 cursor-pointer transition-all duration-50'>Hosts & Partners</li>
                <li className='pb-1/2 hover:border-b-2 cursor-pointer transition-all duration-50'>Registration</li>
                <li className='pb-1/2 hover:border-b-2 cursor-pointer transition-all duration-50'>Behind The Scenes</li>
            </ul>
        </div>
        </div>
    )
}

export default Navbar