import React from "react"
import PropTypes from "prop-types" // récupère les props déjà importés dans accueil.jsx et assigné à la variable logements pour les utiliser dans le composant  Appartement
import "./appartement.scss"
import { Link } from "react-router-dom" //importer le composant Link pour créer un lien vers la page de détails du logement

//-------UTILISATION DES PROPS DANS LE COMPOSANT APPARTEMENT------

//-------COMPOSANT APPARTEMENT-------
//Utilisation de la prop logements pour afficher la liste des logements dans le composant Appartement.
//Utilisation de la méthode map pour parcourir la liste des logements et afficher un composant Link pour chaque logement.
//Affichage de l'image de couverture et du titre du logement.
//Lorsque l'utilisateur clique sur un logement, il est redirigé vers la page de détails du logement correspondant.

function Appartement({ logements }) {
    return (
        //logements contient les données du fichier logements.json importé dans le composant parent Accueil
        //Le composant Appartement reçoit (en paramètre) les données de la prop logements déclarée dans le composant parent Accueil
        <div className="galerie">
            {logements.map(
                (
                    logement, //map() est une méthode qui  parcour un tableau et exécute une fonction pour chaque élément du tableau
                ) => (
                    <Link //Le composant Link est utilisé pour créer un lien vers la page de détails du logement
                        to={`/logement/${logement.id}`} //Lorsque l'utilisateur clique sur un logement, il est redirigé vers la page de détails du logement correspondant.
                        className="appartement"
                        key={logement.id} //La clé key est utilisée pour identifier de manière unique chaque élément de la liste. Cela permet à React de mettre à jour uniquement les éléments modifiés, au lieu de recharger tous les éléments à chaque modification.
                    >
                        <img
                            src={logement.cover}
                            alt={logement.title}
                            className="appartement__image"
                        />
                        <h3 className="appartement__title">{logement.title}</h3>
                    </Link>
                ),
            )}
        </div>
    )
}

Appartement.propTypes = { logements: PropTypes.array.isRequired } //Les PropTypes sont utilisés pour spécifier le type des props attendues par le composant.
//Dans ce cas, le composant Appartement attend une prop logements de type tableau (array) qui est obligatoire.
export default Appartement
