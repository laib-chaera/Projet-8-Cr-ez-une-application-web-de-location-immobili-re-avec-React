import React from 'react'
import './header.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function Header() {
      return (
            <nav className="header">
                  <div className="header__logo">
                        <img src={logo} alt="logo kasa" className="logo-kasa" />
                  </div>

                  <ul className="navBar">
                        <Link to="/">Accueil</Link>
                        <Link to="/aPropos">A propos</Link>
                  </ul>
            </nav>
      )
}

export default Header
