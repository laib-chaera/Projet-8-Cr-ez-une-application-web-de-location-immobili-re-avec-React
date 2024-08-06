import React, { useEffect } from "react" // Importation de useEffect pour effectuer des effets de bord dans les composants fonctionnels.
import { useParams, useNavigate } from "react-router-dom"
import Carousel from "../../composants/carousel/carousel"
import InfoLogement from "../../composants/infoLogement/infoLogement"
import DataLogements from "../../data/logements.json"
import "./logement.scss"

function Logement() {
    const { id } = useParams() // extraire les paramètres de l'URL d'une ROUTE----- <Route path="/logement/:id" element={<Logement />} />----
    const navigate = useNavigate() // permet de naviguer vers d'autre routes.

    const logementFound = DataLogements.find((logement) => logement.id === id) // trouve l'id correspondant dans le fichier logements.json

    useEffect(() => {
        //useEffect est utilisé pour vérifier l'existence d'un logement et rediriger vers une page 404 si le logement n'est pas trouvé, garantissant ainsi une meilleure gestion des erreurs de navigation.

        if (!logementFound) {
            //Premier argument de useEffecT est une fonction qui sera exécutée à chaque rendu du composant.
            navigate("/404")// navigue entre les routes pour afficher ici la page 404 si le logement n'est pas trouvé.
        }
    }, [logementFound, navigate]) //Deuxième argument de useEffect est un tableau de dépendances qui contrôle quand l'effet est exécuté.
    // L'effet est exécuté chaque fois que logementFound ou navigate change.
    // Cela garantit que la redirection vers la page 404 se produit uniquement lorsque logementFound ou navigate est modifié.
    //POUR MIEUX GERER LES ERREURS DE NAVIGATION

    if (!logementFound) {
        //ne rend rien si le logement n'est pas trouvé
        return null
    }
    return (
        <div className="logement-container">
            <Carousel pictures={logementFound.pictures} />
            <InfoLogement
                title={logementFound.title}
                location={logementFound.location}
                tags={logementFound.tags}
                rating={logementFound.rating}
                host={logementFound.host}
                description={logementFound.description}
                equipments={logementFound.equipments}
            />
        </div>
    )
}
export default Logement
//Le composant Logement  affiche les détails d'un logement en fonction de l'identifiant unique de ce logement.
//Il utilise les hooks useParams et useNavigate de React Router pour extraire les paramètres de l'URL et naviguer vers d'autres routes.
//Il utilise également useEffect pour vérifier si le logement existe et rediriger vers une page 404 si le logement n'est pas trouvé.
//Le composant affiche un carrousel d'images et les informations détaillées du logement (titre, emplacement, tags, évaluation, hôte, description et équipements).
//Il utilise les données du fichier logements.json pour afficher les informations du logement correspondant à l'identifiant unique extrait de l'URL.
// Il utilise useEffect pour gérer les erreurs de navigation et garantir une meilleure expérience utilisateur en cas de logement non trouvé.
//le composant parent crée des props pour les composants enfants Carousel et InfoLogement en passant les données du logement trouvé.
