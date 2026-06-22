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
import UseReducer from './components/UseReducer.jsx'
import HookUseRef from './components/HookUseRef.jsx'
import HookUseRefv2 from './components/HookUseRefv2.jsx'
import HookPersonnalise from './components/HookPersonnalise.jsx'
import MemoisationUseCallback from './components/MemoisationUseCallback.jsx'
import Portails from './components/Portails.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Formulaire /> */}
    {/* <FluxData /> */}
    {/* <ProductList /> */}
    <UseReducer />
    {/* <HookUseEffect /> */}
    {/* <HookUseEffectTP /> */}
    {/* <HookUseMemo /> */}
    {/* <HookUseRef /> */}
    {/* <HookUseRefv2 /> */}
    {/* <HookPersonnalise /> */}
    {/* <MemoisationUseCallback /> */}
    {/* <Portails/> */}
  </StrictMode>,
)
