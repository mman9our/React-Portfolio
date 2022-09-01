import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'
const HeaderSocials = () => {
  return (
      <div className="Header__Socials">
          <a href="https://www.linkedin.com/in/mman9our/" target="_blank">< BsLinkedin /></a>
          <a href="https://github.com/mman9our" target="_blank">< FaGithub /></a>
          <a href="https://www.facebook.com/moh.manoure" target="_blank"><ImFacebook /></a>
    </div>
  )
}

export default HeaderSocials