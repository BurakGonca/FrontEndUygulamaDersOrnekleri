import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/style/index.css'
import { DataProvider } from './context/DataContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>
    <App />
  </DataProvider>
)
