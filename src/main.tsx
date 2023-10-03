import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Aficiones from "./Aficiones.tsx";
import Conversor from "./Converson.tsx";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Conversor />
  </React.StrictMode>,
)
