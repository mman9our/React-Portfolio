import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaDiscord} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Mohamed Mansour</a>

        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      <div className="footer__socials">
      <a href="https://discord.com/users/mman9our#7148"><FaDiscord /></a>
        <a href="https://github.com/mman9our"><FaFacebookF /></a>
        <a href="https://www.instagram.com/mman9our/"><FiInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mohamed Mansour. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer