import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Error from './pages/nopage/Error'
function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/*' element={<Error/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
