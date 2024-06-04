import React from "react"
import "./accueil.scss"
import Banner from "../../composants/banner/banner.jsx"
import Appartement from "../../composants/appartement/appartement.jsx"
import DataLogements from "../../data/logements.json"

function Accueil() {
    return (
        <div className="accueil">
            <Banner />
            <Appartement logements={DataLogements} />
        </div>
    )
}

export default Accueil
