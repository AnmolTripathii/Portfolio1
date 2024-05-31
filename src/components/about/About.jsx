import React from 'react'
import './About.css'
import Head from './Head'
import Me2 from '../../assets/me2.png'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
function About() {
  return (
    
      <section id='about'>
        <Head/>
        <div className='context container'>
          <div className="mini">
          <div className='mini_me'>
            <img src={Me2} alt="me" />
          </div>
          </div>
           <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>I'm experienced</small>
              </article>
              <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Working on it</small>
              </article>
              <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3 to 5 Projects</small>
              </article>
            </div>
            <p> Hi! I'm Anmol Tripathi, a budding web developer passionate about crafting user-friendly websites. Proficient in HTML, CSS, and JavaScript, I aim to delve deeper into backend development with a focus on frameworks like React. Beyond coding, I enjoy exploring new trails and diving into captivating narratives through books. Eager to contribute my evolving skills and creativity to impactful projects, I'm excited to innovate and grow in the ever-evolving realm of web development.</p>
            <div className="about__talk">
            <a href="#contact" className='about_btn btn btn_primary'>Let's Talk</a>
            </div>
           </div>
          
        </div>
      </section>
    
  )
}

export default About
