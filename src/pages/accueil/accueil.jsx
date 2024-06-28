// import React from "react"
// import "./accueil.scss"
// import Banner from "../../composants/banner/banner.jsx"
// import Appartement from "../../composants/appartement/appartement.jsx"
// import DataLogements from "../../data/logements.json"

// //-------COMPOSANT ACCUEIL-------

// function Accueil() {
//     //c'est un composant parent qui contient les composants enfants Banner et Appartement
//     return (
//         <div className="accueil">
//             <Banner />
//             <Appartement logements={DataLogements} />
//         </div> //  Dans le composant Accueil (parent), une prop nommée logements (OBJET) est créée
//         //et passée au composant Appartement. Cette prop logements contient
//         //les données des logements qui proviennent de DataLogements (importé).

//         //les props sont des objets qui contiennent des données que l'on peut passer à un composant
//     )
// }

// export default Accueil

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
