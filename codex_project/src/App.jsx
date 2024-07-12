import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './Pages/Intro.jsx'
import AboutPage from './Pages/AboutPage.jsx'
import { NavbarSimple } from './Components/NavBar.jsx'
import FaqPage from './Pages/FAQPage.jsx';
import MapPage from './Pages/MapPage.jsx';
import React from 'react'
import 'leaflet/dist/leaflet.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarSimple/>
      <section id = "home">
        <Intro/>
      </section>

      <section id = "about">
        <AboutPage/>
      </section>

      <section  id = "map">
        <MapPage/>
      </section>
      
      <section id = "faq">
        <FaqPage/>
      </section>
    </>
  )
}

export default App
