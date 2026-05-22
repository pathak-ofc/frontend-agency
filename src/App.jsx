import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import { useTheme } from './components/lib/utils.js'

const App = () => {


  const {theme } = useTheme();
  return (
    <div className='relative'>
      <Navbar/>
    </div>
  )
}

export default App