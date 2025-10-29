import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {FirstApp } from './components/FirstApp.jsx'
import { Register } from './components/Register.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <FirstApp></FirstApp>
 <Register></Register>
  </StrictMode>,
)
