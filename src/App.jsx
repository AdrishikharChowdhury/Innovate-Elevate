import React from 'react'
import Home from './components/pages/Home'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className="w-full flex-col flex min-h-screen text-white bg-purple-950">
      <Navbar />
      <Home />      
    </div>
  )
}

export default App