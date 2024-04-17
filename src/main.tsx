import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './css/index.css'
import Footer from './components/Footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" /> 
    </head>

    <App />
    <Footer></Footer>
  </React.StrictMode>,
)
