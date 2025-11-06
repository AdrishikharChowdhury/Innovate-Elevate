import React from 'react'
import background from '../assets/background.jpg'

const Hero = () => {
  return (
    <div className='w-full h-full bg-cover bg-center bg-no-repeat flex justify-center items-center flex-col' style={{
      backgroundImage: `url(${background})`
    }}>
      <h1 className='text-6xl font-extrabold text-black'>Hero</h1>
    </div>
  )
}

export default Hero