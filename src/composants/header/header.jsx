import React from "react" // import de la bibliothèque React pour créer des composants React et gérer leur logique. Nous utilisons également la fonction useState pour gérer l'état local du composant. N
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
                <NavLink // NavLink est un composant de React Router qui permet de créer des liens de navigation dans une application React.
                    to="/"
                    className={({ isActive }) => (isActive ? "underline" : "")} // isActive vérifie si le chemin spécifié dans l'attribut to de NavLink correspond à l'URL actuelle de la page. Si c'est le cas, il ajoute la classe "underline" pour souligner le lien actif.
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
