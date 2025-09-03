import React from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Profiles from './Profiles.jsx'
import Projects from './Projects.jsx'
import Skills from './Skills.jsx'
import Contact from './Contact.jsx'
function App(){
  return (
    <>
    <Navbar/>
    <section id="home"><Home /></section>
    <section id="about"><About /></section>
    <section id="profiles"><Profiles /></section>
    <section id="projects"><Projects /></section>
    <section id="skills"><Skills /></section>
    <section id="contact"><Contact /></section>



    <Routes>
      {/*
      this is not usefull as --> here i want to 
      get the single page loader or scroller 
      using links that functionality is detached 
       made all content of link here only for 
      Home , About , coding profile , Education 
      Skills , Projects , Resume  */}
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Profiles" element={<Profiles />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Skills" element={<Skills/>} />
      <Route path="/Contact" element={<Contact/>} />

    </Routes>
    </>
  )
}

export default App ;

