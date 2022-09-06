import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'
const Services = () => {
  return (
    <section id='services'>
      <h4>What I Offer</h4>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Building large scalable React applications.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Building PHP/Laravel backends.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Flexible with PHP Conetent Management Systems.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Creating Blogs, Portfolios and Landing Pages.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Static and Dynamic websites all from scratch.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Maintenaning and Updating existing websites.</p>
            </li>


            <li>
              <BsCheck className='service__list-icon' />
              <p>Serious considering (SEO) and Performance.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Clean codebase with best practices.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Responsive User Interfaces.</p>
            </li>
            
            <li>
              <BsCheck className='service__list-icon' />
              <p>Deplying, Hosting and Domain registration.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Continues Weekly support and updates.</p>
            </li>
          </ul>

        </article>

      

        <article className='service'>
          <div className="service__head">
            <h3>Coaching Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Teaching and mentoring students.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Helping students to build their own projects.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Starting from scratch and building from the ground up.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>lecure on the latest technologies and best practices.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Encouraging students to learn and participating open-source projects.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Guiding students with their career and personal development.</p>
            </li>
          </ul>

        </article>
        
        <article className='service'>
          <div className="service__head">
            <h3>Design Services</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Able to create Web Design.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Able to create Logo Design.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Able to create Wordpress Design.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Comfortable with using Photoshop and Adobe xd.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>Comfortable with Video editing.</p>
            </li>

            <li>
              <BsCheck className='service__list-icon' />
              <p>3D Design using After Effect.</p>
            </li>

          </ul>

        </article>
      </div>
    </section>
  )
}

export default Services