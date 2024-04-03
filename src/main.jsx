import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Menu from './components/Menu.jsx'
import Body from './components/Body.jsx'
import Header from './App.jsx'
import './index.css'
import Carousel from './components/Carousel.jsx'
import Top from './components/Top.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Top />
    <Header />
    <Menu />
    <Carousel/>
    <Body />
  </React.StrictMode>,
)
