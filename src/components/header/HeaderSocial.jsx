import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className="header_social">
        <a href="Facebook" target="_blank"><BsLinkedin /></a>
        <a href="GitHub" target="_blank"><FaGithub /></a>
        <a href="LinkedIn" target="_blank"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocial

