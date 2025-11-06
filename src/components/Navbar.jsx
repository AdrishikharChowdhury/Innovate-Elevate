import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-black w-full p-5 flex justify-between items-center h-20' >
            <h1 className='font-semibold text-2xl'>Insert Name Here</h1>
            <ul className='flex justify-center items-center gap-10 px-10'>
                <li className='pb-1/2 hover:border-b-2 cursor-pointer transition-all duration-50'>Home</li>
                <li className='pb-1/2 hover:border-b-2 cursor-pointer transition-all duration-50'>About</li>
                <li className='pb-1/2 hover:border-b-2 cursor-pointer transition-all duration-50'>Problem Statements</li>
                <li className='pb-1/2 hover:border-b-2 cursor-pointer transition-all duration-50'>Registration</li>
                <li className='pb-1/2 hover:border-b-2 cursor-pointer transition-all duration-50'>Behind The Scenes</li>
            </ul>
        </div>
    )
}

export default Navbar