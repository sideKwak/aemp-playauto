import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import SignForm from './pages/SignForm'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signForm" element={<SignForm />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)