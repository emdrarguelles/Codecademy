import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppFunction from './Container/AppFunction.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppFunction />
  </StrictMode>,
)
