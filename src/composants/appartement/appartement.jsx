import React from "react"
import PropTypes from "prop-types" // récupère les props déjà importés dans accueil.jsx et assigné à la variable logements pour les utiliser dans le composant  Appartement
import "./appartement.scss"
import { Link } from "react-router-dom"

//-------UTILISATION DES PROPS DANS LE COMPOSANT APPARTEMENT------

//-------COMPOSANT APPARTEMENT-------
//Utilisation de la prop logements pour afficher la liste des logements dans le composant Appartement.
//Utilisation de la méthode map pour parcourir la liste des logements et afficher un composant Link pour chaque logement.
//Affichage de l'image de couverture et du titre du logement.
//Lorsque l'utilisateur clique sur un logement, il est redirigé vers la page de détails du logement correspondant.

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
