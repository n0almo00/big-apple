import { useState } from 'react'
import './index.css'
import HomePage from './pages/HomePage'
import Booking from './pages/Booking'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Confirmed from './pages/ConfirmedBooking'


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/booking' element={<Booking />}/>
        <Route path='/confirmed' element={<Confirmed />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
