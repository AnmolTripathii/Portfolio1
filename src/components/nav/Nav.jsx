import React, { useState } from 'react'
import './Nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
function Nav() {
  const [activeNav, setActiveNav] = useState('#');

  const handleSetActiveNav = (item) => {
    setActiveNav(item);
  };

  return (
    <div>
      <nav>
        <a href="#header" rel="noopener noreferrer" className={activeNav === '#' ? 'active' : ''} onClick={() => handleSetActiveNav('#')}><AiOutlineHome/></a>
        <a href="#about" rel="noopener noreferrer" className={activeNav === '#about' ? 'active' : ''} onClick={() => handleSetActiveNav('#about')}><AiOutlineUser /></a>
        <a href="#experience" rel="noopener noreferrer" className={activeNav === '#experience' ? 'active' : ''} onClick={() => handleSetActiveNav('#experience')}>< BiBook /></a>
        <a href="#services" rel="noopener noreferrer" className={activeNav === '#services' ? 'active' : ''} onClick={() => handleSetActiveNav('#services')}><RiServiceLine /></a>
        <a href="#contact" rel="noopener noreferrer" className={activeNav === '#contact' ? 'active' : ''} onClick={() => handleSetActiveNav('#contact')}><BiMessageSquareDetail /></a>
      </nav>
    </div>
  )
}

export default Nav
