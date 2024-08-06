import React from "react"
import "./header.scss"
import logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <nav className="header">
            <div>
                <img src={logo} alt="logo kasa" className="header__img" />
            </div>

            <ul className="navBar">
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "underline" : "")}
                >
                    <li>Accueil </li>
                </NavLink>
                <NavLink
                    to="/aPropos"
                    className={({ isActive }) => (isActive ? "underline" : "")}
                >
                    <li> A propos </li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Header
