import React from 'react'
import Hero from '../Hero'
import About from './About'

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <Hero />
      <About />
    </div>
  )
}

export default Home