import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.jsx'
import Formulaire from './Component/Formulaire.jsx'
import FluxData from './Component/FluxData.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Formulaire /> */}
    <FluxData />
  </StrictMode>,
)
