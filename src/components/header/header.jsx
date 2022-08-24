import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Social from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Huy Tran</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        <Social />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#about" className='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header