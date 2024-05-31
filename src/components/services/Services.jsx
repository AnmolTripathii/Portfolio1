import React from 'react'
import './Services.css'
import ServHead from './S_Head'
import { VscSymbolEvent } from "react-icons/vsc";
import { LuFileCode2 } from "react-icons/lu";
import { MdDesignServices } from "react-icons/md";
import { motion } from "framer-motion";
function Services() {
  return (
    <div>
      <section id='services'>
        <ServHead />
        <div  className="service__container container" >
          <motion.div className="card" whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <div className="serv__main">
              <h3 className="card-title">Web Development</h3>
              <div className="corner"><div className="go-arrow"><LuFileCode2 /></div></div>
            </div>
            <div className="serv_content">
              <p className="small-desc">
              I specialize in crafting visually captivating and functional user interfaces. I'm dedicated to achieving the optimal balance between form and function in every development endeavor.
              </p>
            </div>


          </motion.div>
          <motion.div className="card" whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <div className="serv__main">
              <h3 className="card-title">UI Designing</h3>
              <div className="corner"><div className="go-arrow"><MdDesignServices /></div></div>
            </div>
            <div className="serv_content">
              <p className="small-desc">
              My design philosophy revolves around keeping things user-friendly and visually appealing. I'm on a mission to create interfaces that not only look good but also work seamlessly for everyone.
              </p>
            </div>


          </motion.div>
          <motion.div className="card" whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <div className="serv__main">
              <h3 className="card-title">SEO</h3>
              <div className="corner"><div className="go-arrow"><VscSymbolEvent /></div></div>
            </div>
            <div className="serv_content">
              <p className="small-desc">
                I provide tailored web development solutions using HTML, CSS, JavaScript, React, Node.js, and Express. From responsive designs to robust backend development, I bring your vision to life. Explore my portfolio to see examples of my work. Let's collaborate and make your ideas a digital reality!
              </p>
            </div>


          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
