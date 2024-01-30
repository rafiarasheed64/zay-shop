import React from 'react'
import Home from './Component/Home'
import About from './Component/About'
import Shop from './Component/Shop'
import Contact from './Component/Contact'

import {BrowserRouter, Routes, Route}  from "react-router-dom"




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
