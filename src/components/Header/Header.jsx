import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import tiktok from '../../assets/tik.png'
import instagram from '../../assets/insta.png'
import {Link} from 'react-scroll'

const Header = () => {
    return (
      <div id='hi'>
          <div className='header' id='header'>
              <div className='bg'></div>
              <img className='logo' src={logo} alt="" />
              
              <ul className='header-menu'>
                  <li>
                    Home
                  </li>
                  <li>
                    <Link to="packages" spy={true} smooth={true} offset={0} duration={800}>Packages</Link>
                  </li>
                  <li>
                    <Link to="about" spy={true} smooth={true} offset={0} duration={800}>About</Link>
                  </li>
                  <li>
                    <Link to="contact" spy={true} smooth={true} offset={0} duration={800}>Contact</Link>
                  </li>
              </ul>
          </div>
          <div id='hero' className='hero'>It's all in the details.</div>
          <div className="images">
            <a classname='image' href="https://www.tiktok.com/@.iancross?_t=8W2UE8AYtDS&_r=1" target='blank'>
              <img src={tiktok} alt=""/>
            </a>
            <a classname='image' href="https://instagram.com/_iancross_?igshid=YmMyMTA2M2Y=" target='_blank'>
              <img src={instagram} alt=""/>
            </a>
          </div>

      </div>
    )
  }

export default Header