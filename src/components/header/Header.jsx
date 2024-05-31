import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import TypedText from './TypedText'
function Header() {
  return (
    <header id='header'>
     <div className='container container__header'>
      <h4>Hello I'm</h4>
      <h1>Anmol Tripathi</h1>
      <h3>I'm a <TypedText/></h3>
      <CTA></CTA>
      <HeaderSocials ></HeaderSocials>
      <div className='me'>
        <img src={Me} alt="me" />
      </div>
      {/* <div className="me2"></div>
      <div className='me3'></div> */}
      <div className='scroll'>
      <a href="#contact" className='scroll__down btn2'>Scroll Down </a>
      <span className='Vertical'></span>
      </div>
     </div>
    </header>
  )
}

export default Header
