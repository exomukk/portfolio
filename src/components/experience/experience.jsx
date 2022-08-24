import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">

{/* Starting frontend  */}
        <div className="experience_frontend">
          <h3>Front-end Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4 className='h4'>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>


            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4 className='h4'>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>              
            </article>


            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4 className='h4'>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>    
            </article>


            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4 className='h4'>jQuery</h4>
                <small className='text-light'>Intermediate</small>
              </div>    
            </article>


            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4 className='h4'>UI/UX</h4>
                <small className='text-light'>Beginner</small>
              </div>    
            </article>
          </div>
        </div>
{/* End of frontend codes */}
{/* Start backend */}
        <div className="experience_backend">
          <h3>Back-end Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4 className='h4'>ReactJS</h4>
                <small className='text-light'>Experienced</small>
              </div>    
            </article>


            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4 className='h4'>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>    
            </article>


            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4 className='h4'>Firebase</h4>
                <small className='text-light'>  Intermediate</small>
              </div>    
            </article>


            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4 className='h4'>Netlify</h4>
                <small className='text-light'>Beginner</small>
              </div>    
            </article>
          </div>
        </div>
{/* End backend */}
      </div>
    </section>
  )
}

export default Experience