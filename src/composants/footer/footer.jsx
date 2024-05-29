import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="logo kasa" className='footer__logo' />
      <p className='allRr'> © 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer