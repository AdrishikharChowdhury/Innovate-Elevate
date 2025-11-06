import React from 'react'
import background from '../assets/background.jpg'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-cover bg-center bg-no-repeat grow' style={{
      backgroundImage: `url(${background})`
    }}>
      <div className="w-full h-full bg-black/60 backdrop-blur-md flex justify-center items-center flex-col ">
        <div className="w-6/10 h-full flex flex-col justify-center items-center gap-5 p-20 ">
          <h1 className='text-6xl font-extrabold flex flex-col justify-center items-center'><span>Innovate & Elevate</span><span>STCET 2K25</span></h1>
          <p className='text-wrap text-center text-xl'>A Robotics & Model-Making Hackathon</p>
          <p className='text-wrap text-center text-2xl flex justify-center items-center flex-col'><span className='text-sm'>Organised By</span> Ieee Student Branch</p>
          <p className='text-wrap text-center text-2xl flex justify-center items-center flex-col'><span className='text-lg'>In collaboration</span> <span className='text-sm'>with</span>IEEE CIS & IES Student Chapters, IEEE WIE Student Branch AffinIty Group & IIC, StCET, Kolkata & MathWorks</p>
        </div>
      </div>
    </div>
  )
}

export default Hero