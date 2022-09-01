import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG4 from '../../assets/portfolio4.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
       <div className="container portfolio__container">
        <article className='portfolio__items'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Wether Application <span>2020</span></h3>
          <div className="portfolio-item-cta">           
            <a href="https://github.com/mman9our/Weather-App" className='btn' target="_blank">GitHub</a>
           </div>
        </article>

        <article className='portfolio__items'>
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Tennis-Game <span>2021</span></h3>
          <div className="portfolio-item-cta">
            <a href="https://github.com/mman9our/Tennis-Game" className='btn' target="_blank">GitHub</a>
            <a href="https://stupendous-arithmetic-621940.netlify.app/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__items'>
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Crypto Dashboard <span>2022</span></h3>
          <h5><span>ReactJs Custom Design</span></h5>
          <div className="portfolio-item-cta">
          </div>
        </article>

        
        <article className='portfolio__items'>
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Age Calculator App <span>2022</span></h3>
          <div className="portfolio-item-cta">
            <a href="https://github.com/mman9our/TkinterApp" className='btn' target="_blank">GitHub</a>
            
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio