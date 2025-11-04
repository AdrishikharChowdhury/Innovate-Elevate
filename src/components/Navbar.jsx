import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-black w-full p-5 flex justify-between items-center' >
            <h1>Insert Name Here</h1>
            <ul className='flex justify-center items-center gap-5 px-10'>
                <li>Home</li>
                <li>About</li>
                <li>Problem Statements</li>
                <li>Registration</li>
                <li>Behind The Scenes</li>
            </ul>
        </div>
    )
}

export default Navbar