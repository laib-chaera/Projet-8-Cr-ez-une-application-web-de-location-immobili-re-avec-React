import React from "react"
import PropTypes from "prop-types" // récupère les props déjà importés dans accueil.jsx et assigné à la variable logements pour les utiliser dans le composant  Appartement
import "./appartement.scss"
import { Link } from "react-router-dom"

function Appartement({ logements }) {
    return (
        <div className="galerie">
            {logements.map((logement) => (
                <Link
                    to={`/logement/${logement.id}`}
                    className="appartement"
                    key={logement.id}
                >
                    <img
                        src={logement.cover}
                        alt={logement.title}
                        className="appartement__image"
                    />
                    <h3 className="appartement__title">{logement.title}</h3>
                </Link>
            ))}
        </div>
    )
}

Appartement.propTypes = {
    //Dans quel composant  on Utilise les propTypes "le composant Appartemen" et quel type de proptypes on utilise "array" et on est sûr que c'est obligatoire "isRequired"
    logements: PropTypes.array.isRequired,
}

export default Appartement

// const Appartement = ({ logements }) => {
//     //récupère les propriétés de logements

//     return logements.map((logement) => (
//         <div className="appartement" key={logement.id}>
//             <img src={logement.cover} alt={logement.title} />
//             <h3>{logement.title}</h3>
//         </div>
//     ))
// }
// Appartement.propTypes = {
//     //Dans quel composant  on Utilise les propTypes "le composant Appartemen" et quel type de proptypes on utilise "array" et on est sûr que c'est obligatoire "isRequired"
//     logements: PropTypes.array.isRequired,
// }
// export default Appartement
