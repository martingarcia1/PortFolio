import { useState } from 'react'
import Proyects from './components/proyects'
import Presentation from './components/presentation'
import Footer from './components/footer'
import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <banner></banner>
      <BrowserRouter>
        <div className='app'>
          <Navbar />
          <Routes>
            <Proyects></Proyects>
            <Presentation></Presentation>
            <Footer></Footer>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
