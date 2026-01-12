import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Patient from './Patient'
import Doctor from './Doctor'
import AddDoctor from './AddDoctor'
import Navigation from './Navigation'
import Home from './Home'
import AddPatient from './AddPatient'

function App() {

  return (
    <>
    
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/patient' element={<Patient/>} />
      <Route path='/doctor' element={<Doctor/>} />
      <Route path='/add-doctor' element={<AddDoctor/>} />
      <Route path='/add-patient' element={<AddPatient/>} />
    </Routes>
    
    </BrowserRouter>

    </>
  )
}

export default App
