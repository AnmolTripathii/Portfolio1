import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import './HeaderSocials.css'
function HeaderSocials() {
  return (
    <div className='Header__Social'>
      <a href="https://www.linkedin.com/in/anmol-tripathi-628821294/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className='btn1'>
        <FaLinkedin />
      </a>
      <a href="https://github.com/AnmolTripathii" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className='btn1'>
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/anmoltripathi65/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className='btn1'>
        <FaInstagram />
      </a>
      <span className='Vertical'></span>
    </div>
  )
}

export default HeaderSocials
