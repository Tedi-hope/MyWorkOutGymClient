import { useState } from 'react'
import './input.css'
//import Nav from './components/Nav'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import DeleteGymInfo from './pages/DeleteGymInfo'

function App() {
  
  return (
    <>
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Login />} />
       <Route path='/home' element={<Home />} />
       <Route path='/signup' element={<SignUp />} />
       <Route path='/gym/delete/:id' element={<DeleteGymInfo />} />
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
