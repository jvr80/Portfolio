import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project-1.png'
import IMG2 from '../../assets/project-2.png'
import IMG3 from '../../assets/todo-app.png'
import IMG4 from '../../assets/project-4.png'
import IMG5 from '../../assets/project-5.png'
import IMG6 from '../../assets/project-6.png'


const data = [
  {
    id: 1,
    Image: IMG1,
    tittle: 'Stock Market landing Page',
    github: 'https://github.com/jvr80/stock-market.git',
    demo: 'https://stock-market-landingpage.netlify.app/' 
  },
  {
    id: 2,
    Image: IMG2,
    tittle: 'Make QR Code',
    github: 'https://github.com/jvr80/Make-QR_code.git',
    demo: 'https://make-qr-code.netlify.app/' 
  },
  {
    id: 3,
    Image: IMG3,
    tittle: 'Todo App',
    github: 'https://github.com/jvr80/todo-app.git',
    demo: 'https://todo-app-jvr80.vercel.app/' 
  },
  {
    id: 4,
    Image: IMG4,
    tittle: 'Expense-Manager',
    github: 'https://github.com/jvr80/Expense-manager',
    demo: 'https://expense-manager-gamma.vercel.app/' 
  },
  {
    id: 5,
    Image: IMG5,
    tittle: 'Paratha & Food Store',
    github: 'https://github.com/jvr80/Paratha-store',
    demo: 'https://paratha-store-nine.vercel.app/' 
  },
  {
    id: 6,
    Image: IMG6,
    tittle: 'Vedshree',
    github: 'https://github.com',
    demo: 'https://www.vedshree.online/' 
  },
]







const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
     {
      data.map(({id, Image, tittle, github, demo}) =>{
        return (
          <article key={id} className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={Image} alt="{tittle}" />
          </div>
            <h3>{tittle}</h3>
            <div className="portfolio_item-cta">
            <a href={github} className='btn' target="_blank">Github</a>
            <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a> 
            </div>           
        </article>
        )
      })
     }
     
      </div>
    </section>
  )
}

export default portfolio