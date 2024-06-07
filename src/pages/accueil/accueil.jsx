import React from "react"
import "./accueil.scss"
import Banner from "../../composants/banner/banner.jsx"
import Appartement from "../../composants/appartement/appartement.jsx"
import DataLogements from "../../data/logements.json"

//-------COMPOSANT ACCUEIL-------

function Accueil() {
    //c'est un composant parent qui contient les composants enfants Banner et Appartement
    return (
        <div className="accueil">
            <Banner />
            <Appartement logements={DataLogements} />
        </div> //créer une PROP nommée logements dans le composant Appartement et lui attribuez la valeur de DataLogements
    )
}

export default Accueil
