import React from "react"
import "./notFound.scss"
import { NavLink } from "react-router-dom"

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
