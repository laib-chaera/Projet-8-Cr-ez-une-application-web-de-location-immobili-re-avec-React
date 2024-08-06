import React from "react"
import "./accueil.scss"
import Banner from "../../composants/banner/banner.jsx"
import Card from "../../composants/card/card.jsx"
import DataLogements from "../../data/logements.json"

function Accueil() {
    return (
        <div className="accueil">
            <Banner />
            <Card logements={DataLogements} />
        </div>
    )
}

export default Accueil
