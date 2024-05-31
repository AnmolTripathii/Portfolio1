import React from 'react'
import './Contact.css'
import CHead from './C_Head'
import { GrMailOption } from "react-icons/gr";
// import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { useRef } from 'react';
import emailjs from 'emailjs-com'
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_88ms739', 'template_4o0jtio', form.current, '_Zp6Ch291ev-wiUOw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <div>
      <section id='contact'>
        <CHead/>
        <div className='contact_container container'>
          <div className="contact_option">
          <article className="c_option">
          <small className='icon'><GrMailOption/></small>
               <h5>Email</h5>
               <small>anmoltripathi610@gmail.com</small>
               <small className='live'><a href="mailto:anmoltripathi610@gmail.com">Send a message</a></small>
              </article>
              {/* <article className="c_option">
               <small className='icon'><FaInstagram/></small>
               <h5>Instagram</h5>
               <small>anmoltripathi65</small>
               <small className='live'><a href="#">Send a message</a></small>
              </article> */}
              <article className="c_option">
              <small className='icon'><FaWhatsapp/></small>
               <h5>WhatsApp</h5>
               <small>930-5009-047</small>
               <small className='live'><a href="https://api.whatsapp.com/send?phone=+9305009047" target='_blank'>Send a message</a></small>
              </article>
          </div>
          
            <form ref={form} onSubmit={sendEmail}>
              <input type='text' name='name' placeholder='Your Full Name' required/>
              <input type='email' name='email' placeholder='Your Email' required/>
              <textarea name="message" rows="9" placeholder='Your Messsage' required></textarea>      
              <button type='submit' className='contact_btn'>Send Message</button>
            </form>
          </div>
        
      </section>
    </div>
  )
}

export default Contact
