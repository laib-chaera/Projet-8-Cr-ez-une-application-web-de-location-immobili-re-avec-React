import React from "react"
import PropTypes from "prop-types" // récupère les props déjà importés dans accueil.jsx et assigné à la variable logements pour les utiliser dans le composant  Appartement
import "./appartement.scss"
import { Link } from "react-router-dom"

//-------UTILISATION DES PROPS DANS LE COMPOSANT APPARTEMENT------
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
