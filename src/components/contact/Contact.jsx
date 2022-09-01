import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wzjhmaf', 'template_2k94078', form.current, 'bOI34in_vuapnhQ3V')
    e.target.reset()
  };

  return (

    <section id='contact'>
      <h5>Get In Toutch</h5>
      <h2>Contact Me</h2>

       <div className="container Contact__container">
        <div className="contact__options">

          <article className="contact__option">
            < MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mmanour915@gmail.com</h5>
            <a href="mailto:mmanour915@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            < BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+972 595143 902</h5>
            <a href="https://api.whatsapp.com/send?phone=972595143902" target="_blank">Reach me on Whatsapp</a>
          </article>

          <article className="contact__option">
            < RiMessengerLine className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>LUA</h5>
            <a href="https://t.me/telluaa" target="_blank">Join me on Telegram</a>
          </article>

        
        </div>

        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact