import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Coctail from './Components/Coctail/Coctail.tsx'
import Counter from './Components/Counter/Counter.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Coctail />
    <Counter />
  </React.StrictMode>,
)
