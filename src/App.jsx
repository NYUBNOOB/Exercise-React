import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from './templates/pages/home/HomePage'
import NavBar from './components/navbar/NavBar'
function App() {

  return (
    <>
      <NavBar />
      <HomePage />
    </>
    
  )
}

export default App
