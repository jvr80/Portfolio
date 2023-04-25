import React from 'react'
import './about.css'
import ME from '../../assets/IMG_20.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className='about_me'>
        <div className="about_me-image">
          <img src={ME} alt=" About Image" />
        </div>
        </div>

        <div className='about_content'>
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
            <h5>08</h5>
            <small>Month Working Experience</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
            <h5>01</h5>
            <small>Best Work awards</small>

            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
            <h5>30</h5>
            <small>Projects Completes</small>
            </article>
          </div>

          <p>Hello, I am frontend developer, I am passionate about creating and developing web interfaces. With 8 Month of experience in web desing and development.
            </p>
         
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About