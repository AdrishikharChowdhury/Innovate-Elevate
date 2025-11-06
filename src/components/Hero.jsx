import React from 'react'
import background from '../assets/background.jpg'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-cover bg-center bg-no-repeat grow' style={{
      backgroundImage: `url(${background})`
    }}>
      <div className="w-full h-full bg-black/60 backdrop-blur-md flex justify-center items-center flex-col ">
        <div className="w-90/100 flex flex-col justify-center items-center gap-5 p-20 ">
          <h1 className='text-6xl font-extrabold'>Innovate & Elevate 2K25</h1>
          <p className='text-wrap text-center text-xl'>A Robotics & Model-Making Hackathon</p>
          <p className='text-wrap text-center text-2xl flex justify-center items-center flex-col'><span>In collaboration</span> <span className='text-sm'>with</span> IEEE Student Branch (all chapters ) & IIC, STCET & Mathworks</p>
          <div className=""></div>
        </div>
      </div>
    </div>
  )
}

export default Hero