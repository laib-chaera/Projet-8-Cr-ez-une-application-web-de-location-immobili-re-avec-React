import React from "react"
import "./notFound.scss"
import { Link } from "react-router-dom"

// ---------------COMPOSANT NOTFOUND-------------------

function NotFound() {
    return (
        <div className="notFound">
            <h1 className="notFound__h1">404</h1>
            <p className="notFound__p">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default NotFound
