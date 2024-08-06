import React from "react"
import PropTypes from "prop-types" // Importation de la bibliothèque PropTypes pour valider les types des props passés au composant logements.
import "./card.scss"
import { NavLink } from "react-router-dom" //importer le composant Link depuis React Router pour créer des liens de navigation vers la page de détails du logement

//-------UTILISATION DES PROPS DANS LE COMPOSANT card------

function Card({ logements }) {
    return (
        //logements contient les données du fichier logements.json importé dans le composant parent Accueil
        //Le composant card reçoit (en paramètre) les données de la prop logements déclarée dans le composant parent Accueil
        <div className="galerie">
            {logements.map(
                //La méthode map() itère sur chaque élément du tableau logements et crée un lien vers la page de détails du logement pour chaque logement.
                (
                    logement, //map Itère sur la liste des logements et créer un lien vers la page de détails du logement pour chaque logement.
                ) => (
                    <NavLink //Création d'un lien dynamique vers une URL qui correspond à la route définie. Elle prend en paramètre l'identifiant unique du logement.
                        to={`/logement/${logement.id}`}
                        className="card"
                        key={logement.id} //Attribut key requis par React pour identifier de manière unique chaque élément de la liste. Cela permet à React d'optimiser le rendu en mettant à jour uniquement les éléments modifiés.
                    >
                        <img
                            src={logement.cover}
                            alt={logement.title}
                            className="card__image"
                        />
                        <h3 className="card__title">{logement.title}</h3>
                    </NavLink>
                ),
            )}
        </div>
    )
}
// Validation des props avec PropTypes
Card.propTypes = { logements: PropTypes.array.isRequired } //Définit les types de props attendus par le composant Card.
//Dans ce cas, le composant card attend une prop logements de type tableau (array) qui est obligatoire.
export default Card
//Description: C'est un composant qui affiche une galerie de logements sous forme de cartes.
//Utilisation des props: Le composant reçoit une prop logements contenant les données des logements à afficher. cette prop est créee dans le composant parent Accueil et passée au composant Card.
//Validation des props: Le composant utilise PropTypes pour valider le type de la prop logements. Il s'attend à recevoir un tableau (array) de logements et déclare que cette prop est obligatoire.
//Affichage des logements: Le composant mappe sur la liste des logements et crée une carte pour chaque logement. Chaque carte contient une image, un titre et un lien vers la page de détails du logement.
