import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Reset from './css/reset.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset />
    <App />
  </React.StrictMode>,
)
