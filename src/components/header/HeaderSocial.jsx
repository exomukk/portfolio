import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className="header_social">
        <a href="https://www.linkedin.com/in/huy-tran-64a883213/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/huytran-cloud" target="_blank"><FaGithub /></a>
        <a href="https://www.facebook.com/clown.coder" target="_blank"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocial

