import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h4>What Skills I Have</h4>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>            
              <h4>HTML</h4>
                <small className='text-light'>Advanced</small>
                </div>
            </article>
              
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>CSS/SASS</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>JavaScript</h4>
            <small className='text-light'>Advanced</small>
            </div>
            </article>
            
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>ReactJs</h4>
          <small className='text-light'>Advanced</small>
          </div>
            </article>
           
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>TypeScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>Tailwind/Bootstrap</h4>
                  <small className='text-light'>Advanced</small>
                  </div>
            </article>
            </div>
          </div>

        <div className="experience__backend">
           <h3>Backend Development</h3>
             <div className="experience__content">

            <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>PHP</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>Database</h4>
            <small className='text-light'>Advanced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>Laravel</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>REST APIs</h4>
            <small className='text-light'>Advanced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>Security/Auth</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>Frameworks</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>
      </div>
      </div>
      
    </section>
  )
}

export default Experience