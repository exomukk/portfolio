import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Huy Tran</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_social">
        <a href="https://www.facebook.com/clown.coder" target="_blank"><FaFacebook /></a>
        <a href="https://www.instagram.com/htran4132/" target="_blank"><FiInstagram /></a>
        <a href="https://www.linkedin.com/in/huy-tran-64a883213/" target="_blank"><BsLinkedin /></a>
      </div>

      <div className="footer_copyright">
        <small>
          &copy; Huy Tran. All rights reserved 2022.
        </small>
      </div>
    </footer>
  )
}

export default Footer