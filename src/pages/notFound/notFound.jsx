import React from "react"
import "./notFound.scss"
import { NavLink } from "react-router-dom"

// ---------------COMPOSANT NOTFOUND-------------------

function NotFound() {
    return (
        <div className="notFound">
            <h1 className="notFound__h1">404</h1>
            <p className="notFound__p">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <NavLink to="/">Retourner sur la page d’accueil</NavLink>
        </div>
    )
}

export default NotFound
// Le composant NotFound  affiche un message d'erreur 404 et un lien pour retourner à la page d'accueil.
// Il importe le composant Link de React Router pour créer un lien vers la page d'accueil.
