import React from 'react'
import './Footer.css'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer_container'>
      <div className="f_head"><h1>ANMOL</h1></div>
      <div className='tokens'>
        <a href="#header">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
      </div>
      <div className='icon_tokens'>
      <a href="https://www.linkedin.com/in/anmol-tripathi-628821294/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" >
        <FaLinkedin />
      </a>
      <a href="https://github.com/AnmolTripathii" target="_blank" rel="noopener noreferrer" aria-label="GitHub" >
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/anmoltripathi65/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" >
        <FaInstagram />
      </a>
      </div>
    </div>
  )
}

export default Footer
