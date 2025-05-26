import { useState } from 'react'
import './index.css'
import HomePage from './pages/HomePage'
import Booking from './pages/Booking'

import { Route, Routes, BrowserRouter } from 'react-router-dom'


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/booking' element={<Booking />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
