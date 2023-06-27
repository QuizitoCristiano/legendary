import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './pages/home'
import { MainLayout } from "./layouts/mylayouts"

function App() {

  return (

    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>

  )
}

export default App
