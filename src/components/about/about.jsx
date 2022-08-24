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
              <small>2+ Years Self-study</small>
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
            Highly organized and detail-oriented honors graduate from Le Quy Don Highschool seeking an entry-level position as an developer. 
            Served as a peer tutor for courses such as front-end developer or cyber engineering.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About