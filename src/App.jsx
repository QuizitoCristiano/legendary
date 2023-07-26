import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './pages/home'
import { MainLayout } from "./layouts/mylayouts"
import { Login } from './componente/contatos/contacts'
import { ListaPraTop } from './componente/listaParaTop/listToTop'
import { MeteriasparaTop } from './componente/features/oQuelevar'

function App() {

  return (

    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/ListaPraTop' element={<ListaPraTop />} />
          <Route path='/MeteriasparaTop' element={<MeteriasparaTop />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>

  )
}

export default App
