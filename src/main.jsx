import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ParallaxProvider>
  </React.StrictMode>
)
