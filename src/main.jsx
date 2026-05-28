import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.jsx'
import Formulaire from './components/Formulaire.jsx'
import FluxData from './components/FluxData.jsx'
import ProductList from './components/ProductList.jsx'
import HookUseEffect from './components/HookUseEffect.jsx'
import HookUseEffectTP from './components/HookUseEffectTP.jsx'
import HookUseMemo from './components/HookUseMemo.jsx'
import HookUseRef from './components/HookUseRef.jsx'
import HookUseRefv2 from './components/HookUseRefv2.jsx'
import HookPersonnalise from './components/HookPersonnalise.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Formulaire /> */}
    {/* <FluxData /> */}
    {/* <ProductList /> */}
    {/* <HookUseEffect /> */}
    {/* <HookUseEffectTP /> */}
    {/* <HookUseMemo /> */}
    {/* <HookUseRef /> */}
    {/* <HookUseRefv2 /> */}
    <HookPersonnalise />
  </StrictMode>,
)
