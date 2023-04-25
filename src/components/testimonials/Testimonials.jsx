import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data = [
  {
      avatar: AVTR1,
      name: 'Tina Snow',
      review: 'Modi alias animi dolorem aliquam ea eum beatae mariores, consectetur prasentium quibusdam, commodi velit porro blanditils consequatur qui molestiae, Dolorem, perspiciatils aspernatur labore distinctio ratine delctus voluplatem dolorem deserunt explicabo nostrum ducimus quasi?'
  },
  {
      avatar: AVTR2,
      name: 'Shatta Snow',
      review: 'Modi alias animi dolorem aliquam ea eum beatae mariores, consectetur prasentium quibusdam, commodi velit porro blanditils consequatur qui molestiae, Dolorem, perspiciatils aspernatur labore distinctio ratine delctus voluplatem dolorem deserunt explicabo nostrum ducimus quasi?'
  },
  {
      avatar: AVTR3,
      name: 'Kwame despite',
      review: 'Modi alias animi dolorem aliquam ea eum beatae mariores, consectetur prasentium quibusdam, commodi velit porro blanditils consequatur qui molestiae, Dolorem, perspiciatils aspernatur labore distinctio ratine delctus voluplatem dolorem deserunt explicabo nostrum ducimus quasi?'
  },
  {
      avatar: AVTR4,
      name: 'Nana Ama McBrown',
      review: 'Modi alias animi dolorem aliquam ea eum beatae mariores, consectetur prasentium quibusdam, commodi velit porro blanditils consequatur qui molestiae, Dolorem, perspiciatils aspernatur labore distinctio ratine delctus voluplatem dolorem deserunt explicabo nostrum ducimus quasi?'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container" 

       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}   
       pagination={{ clickable: true }}>
    {
      data.map(({avatar, name, review},index) =>{
        return(
        <SwiperSlide key={index} className="testimonial">
        <div className="client_avatar">
          <img src={avatar} alt="Avatar one" />
        </div>
        <h5 className='client_name'>{name}</h5>
          <small className='client_review'>{review}</small>
      </SwiperSlide>
        )
      })
    }
    
       
      </Swiper>
    </section>
  )
}

export default Testimonials