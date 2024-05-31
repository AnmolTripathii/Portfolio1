import React from 'react'
import './Portfolio.css'
import Photo from '../../assets/P1.png'
import Photo1 from '../../assets/P2.png'
import Photo2 from '../../assets/P3.png'
import PortHead from './PortHead'
import { motion } from "framer-motion";

const Data =[
  {
    id:'1',
    image: Photo,
    title:'E-commerce',
    demo:'https://f-ecommerce-nu.vercel.app/'

  },
  {
    id:'2',
    image: Photo1,
    title:'UI of What is Chat GPT-3',
    demo:'https://chatgpt3-neon.vercel.app/'

  },
  {
    id:'3',
    image: Photo2,
    title:'MMMUT resource',
    demo:'https://www.mmmut.xyz/'

  }
]
function Portfolio() {
  return (
      <section id='portfolio'>
        <PortHead/>
        <div className="container portfolio_container">
          {
            Data.map(({id,image,title,github,demo})=>{
              return(
                <motion.article key={id} className='Portfolio_item' whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }} >
            <div className='Portfolio_item_img'><img src={image} alt="image" /></div>
            <h3 className='title'>{title}</h3>
            <div className="cta1">
            {/* <a href={github} className='btn_port' target='_blank'>Github</a> */}
            <a href={demo} className='btn_port btn_primaryport'target='_blank'>Live Link</a>
            </div>
          </motion.article>  
              )
            })
          }
        </div>
      </section>
  )
}

export default Portfolio
