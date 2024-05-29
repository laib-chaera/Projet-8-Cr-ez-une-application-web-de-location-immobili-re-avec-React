import React from "react"
import "./accueil.css"
import Banner from "../../composants/banner/banner.jsx"
import Appartement from "../../composants/appartement/appartement.jsx"

function Accueil() {
    return (
        <div className="accueil">
            <Banner />
            <Appartement />
        </div>
    )
}

export default Accueil
