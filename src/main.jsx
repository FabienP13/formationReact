import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.jsx'
import Formulaire from './components/Formulaire.jsx'
import FluxData from './components/FluxData.jsx'
import ProductList from './components/ProductList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Formulaire /> */}
    {/* <FluxData /> */}
    <ProductList />
  </StrictMode>,
)
