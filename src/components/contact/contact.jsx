import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlinePhone} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nc6imbs', 'template_dv1ro3g', form.current, 'nlWBg6eIAx1ayPbJ0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'></MdOutlineEmail>
            <h4>Email</h4>
            <h5>tranhuy.dev88@gmail.com</h5>
            <a href="mailto:tranhuy.dev88@gmail.com">Send a message</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Huy Tran</h5>
            <a href="https://m.me/clown.coder" target="_blank">Send a message</a>
          </article>

          <article className="contact_option">
            <AiOutlinePhone />
            <h4>Mobile Phone</h4>
            <h5>+(84) 971 425 766</h5>
            <a href="tel:+84971425766">Call me</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact