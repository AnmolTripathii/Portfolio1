import React from 'react'
import './Experience.css'
import ExpHead from '../experience/E_Head'
import { PiSealCheckFill } from "react-icons/pi";
function Experience() {
  return (
    <div>
      <section id='experience'>
        <ExpHead />
        <div className="exp__container container">
          <div className="web_d">
            <h3> Web Development</h3>
            <div className="skillset">
              <article className="skill">
                <div className='exp__icon'><PiSealCheckFill /></div>
                
                  <div>
                    <h5>HTML</h5>
                    <small>Experinced</small>
                  </div>
                
              </article>
              <article className="skill">
                <div className='exp__icon'><PiSealCheckFill /></div>
                <div>
                  <h5>CSS</h5>
                  <small>Experinced</small>
                </div>
              </article>
              <article className="skill">
                <div className='exp__icon'><PiSealCheckFill /></div>
                <div>
                  <h5>Javascript</h5>
                  <small>Experinced</small>
                </div>
              </article>
              <article className="skill">
                <div className='exp__icon'><PiSealCheckFill /></div>
                <div>
                  <h5>Bootstrap</h5>
                  <small>Experinced</small>
                </div>
              </article>
              <article className="skill">
                <div className='exp__icon'><PiSealCheckFill /></div>
                <div>
                  <h5>Tailwind</h5>
                  <small>Experinced</small>
                </div>
              </article>
              <article className="skill">
                <div className='exp__icon'><PiSealCheckFill /></div>
                <div>
                  <h5>React</h5>
                  <small>Experinced</small>
                </div>
              </article>
              <article className="skill">
                <div className='exp__icon'><PiSealCheckFill /></div>
                <div>
                  <h5>NodeJS</h5>
                  <small>Experinced</small>
                </div>
              </article>
              <article className="skill">
                <div className='exp__icon'><PiSealCheckFill /></div>
                <div>
                  <h5>ExpressJS</h5>
                  <small>Experinced</small>
                </div>
              </article>
              <article className="skill">
                <div className='exp__icon'><PiSealCheckFill /></div>
                <div>
                  <h5>MongoDB</h5>
                  <small>Experinced</small>
                </div>
              </article>
            </div>
          </div>
          <div className="coding">
            <h3>Programming Language</h3>
            <div className='skillset'>
            
              <article className="skillsets">
              <div className='exp__icon'><PiSealCheckFill /></div>
              <div>
                <h5>C</h5>
                <small>Intermediate</small>
                </div>
              </article>
              <article className="skillsets">
              <div className='exp__icon'><PiSealCheckFill /></div>
              <div>
                <h5>C++</h5>
                <small>Intermediate</small>
                </div>
              </article>
              <article className="skillsets">
              <div className='exp__icon'><PiSealCheckFill /></div>
              <div>
                <h5>DSA</h5>
                <small>Intermediate</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
