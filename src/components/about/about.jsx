import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {TbAward} from 'react-icons/tb'
import {FiUsers} from 'react-icons/fi'
import {BsFolder} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={ME} alt="my picture" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <TbAward className="about_icon"></TbAward>
              <h5>Experience</h5>
              <small>3+ Years Self-study</small>
            </article>
            
            <article className='about_card'>
              <FiUsers className="about_icon"></FiUsers>
              <h5>Clients</h5>
              <small>Not yet</small>
            </article>
            
            <article className='about_card'>
              <BsFolder className="about_icon"></BsFolder>
              <h5>Projects</h5>
              <small>30+ completed</small>
            </article>
          </div>
          
          <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci delectus reprehenderit atque nulla reiciendis minus, 
              debitis soluta? Impedit cumque exercitationem dolorem, corporis ad corrupti inventore, vel itaque delectus, accusamus pariatur?
            </p>

            <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About