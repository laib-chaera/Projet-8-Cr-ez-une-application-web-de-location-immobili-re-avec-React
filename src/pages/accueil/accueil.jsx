import React from "react"
import "./accueil.scss"
import Banner from "../../composants/banner/banner.jsx"
import Card from "../../composants/card/card.jsx"
import DataLogements from "../../data/logements.json"
// DataLogements est un tableau d'objets contenant les données des logements importées depuis le fichier logements.json.

//-------COMPOSANT ACCUEIL-------

function Accueil() {
    //c'est un composant parent qui contient les composants enfants Banner et card
    return (
        //  Retourne le JSX (JavaScript XML) qui décrit ce que le composant doit rendre à l'écran lorsqu'il est appelé.
        <div className="accueil">
            <Banner />
            <Card logements={DataLogements} />
        </div> //Card reçoi une PROP nommée logements contenant les données des logements importées depuis le fichier logements.json .
    )
} // Les props (propriétés) sont des paramètres passés aux composants enfants depuis les composants parents. Elles permettent de transmettre des données et de configurer les composants enfants.

export default Accueil

//Description: C'est un composant parent qui contient les composants enfants Banner et Appartement.
//Utilisation des props: Le composant parent crée une prop nommée logements dans le composant enfant Card et lui attribue la valeur de DataLogements (données du fichier json).
