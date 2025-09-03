import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (

    <div className="flex justify-end gap-8 p-4 ">
      {/* <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Profiles">Profiles</Link>
      <Link to="/Projects">Projects</Link>
      <Link to="/Skills">Skills</Link>
      <Link to="/Contact">Contact</Link> 
      
       it is not that usefull as one scroll on single won;t work then that is why is need section tag in App.jsx and here just have to a = # */ 
      }
      <a href="#home" className=" hover:text-xl transition-all duration-200">Home</a>
      <a href="#about" className=" hover:text-xl transition-all duration-200">About</a>
      <a href="#profiles" className=" hover:text-xl transition-all duration-200">Profiles</a>
      <a href="#projects" className=" hover:text-xl transition-all duration-200">Projects</a>
      <a href="#skills" className=" hover:text-xl transition-all duration-200">Skills</a>
      <a href="#contact" className=" hover:text-xl transition-all duration-200">Contact</a>
    </div>
  )
}

export default Navbar;
