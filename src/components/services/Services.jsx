import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

    <div className="container services_container">
      <article className="service">
        <div className="service_head">
          <h3>UI/UX Desing</h3>
        </div>

        <ul className='service_list'>
          <li>
          <BiCheck className='service_list-icon'/>
          <p>User research: UI/UX designers conduct user research to understand the needs and behaviors of the target audience.

</p>
          </li>
          <li>
          <BiCheck className='service_list-icon'/>
          <p>Custom website design: A web designer can create a unique website tailored to your brand and business.</p>
          </li>
          <li>
          <BiCheck className='service_list-icon'/>
          <p>Responsive web design: A responsive website design ensures that your site looks great on all devices, including desktops, tablets, and smartphones.</p>
          </li>
         
        </ul>
      </article>
      {/* END OF UI/UX */}
      <article className="service">
        <div className="service_head">
          <h3>Web development</h3>
        </div>

        <ul className='service_list'>
          <li>
          <BiCheck className='service_list-icon'/>
          <p>Front-end web development: Front-end developers work on the client-side of a website, using HTML, CSS, and JavaScript to create the visual elements and user interface.</p>
          </li>
          <li>
          <BiCheck className='service_list-icon'/>
          <p>Full-stack web development: Full-stack developers have expertise in both front-end and back-end development, allowing them to create complete web applications from start to finish.</p>
          </li>
          <li>
          <BiCheck className='service_list-icon'/>
          <p>E-commerce development: E-commerce developers specialize in creating online stores and shopping cart systems that allow businesses to sell products online.</p>
          </li>
         
        </ul>
      </article>
      {/* WEB DEVELOPMENT */}
      <article className="service">
        <div className="service_head">
          <h3>Content Creation</h3>
        </div>

        <ul className='service_list'>
          <li>
          <BiCheck className='service_list-icon'/>
          <p>Graphic design: This involves creating visual content for a website, such as images, infographics, or icons.</p>
          </li>
          
          <li>
          <BiCheck className='service_list-icon'/>
          <p>Content strategy: This involves planning and organizing the content for a website, including the type of content that will be created, how it will be presented, and how it will be promoted.</p>
          </li>
          <li>
          <BiCheck className='service_list-icon'/>
          <p>Content management: This involves managing and updating the content on a website, including adding new pages, editing existing content, and optimizing content for search engines.</p>
          </li>
          
        </ul>
      </article>
      {/* END OF CONTENT CREATION */}
    </div>
    </section>
  )
}

export default Services





