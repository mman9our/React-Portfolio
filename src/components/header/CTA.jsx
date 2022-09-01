import React from 'react'
import CV from '../../assets/MohamedCV.pdf'
const CTA = () => {
  return (
    <div className="cta">
          <a href= {CV} download className='btn'>Download CV</a>
          <a href="https://www.facebook.com/moh.manoure" className='btn btn-primary' target="_blank">Let's talk</a>
    </div>
  )
}

export default CTA