import React, { useState } from "react" //useState est un Hook de React qui permet de gérer l'état local dans un composant fonctionnel.
import "./logement.scss"
import { useParams } from "react-router-dom" //Hook de React Router qui permet d'extraire les paramètres de l'URL.
import DataLogements from "../../data/logements.json"
import arrowLeft from "../../assets/arrowLeft.png"
import arrowRight from "../../assets/arrowRight.png"

// //------- COMPOSANT LOGEMENT------
// //-------Utilisation de useParams et useState------
// //Affichage les détails d'un logement en fonction de son identifiant (id) extrait de l'URL grâce à useParams de React Router.

function Logement() {
    const { id } = useParams()

    function findLogementId(identifiant) {
        return DataLogements.find((logement) => logement.id === identifiant)
    }
    const logementFound = findLogementId(id)

    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const pictures = logementFound.pictures

    const goToPreviousImage = () => {
        setCurrentImageIndex((index) =>
            index === 0 ? pictures.length - 1 : index - 1,
        )
    }

    const goToNextImage = () => {
        setCurrentImageIndex((index) =>
            index === pictures.length - 1 ? 0 : index + 1,
        )
    }

    return (
        <div className="logement">
            <div className="carousel">
                <img
                    src={pictures[currentImageIndex]}
                    alt={logementFound.title}
                    className="carousel-image"
                />
                <img
                    src={arrowLeft}
                    alt="Previous"
                    className="arrow-left"
                    onClick={goToPreviousImage}
                />
                <img
                    src={arrowRight}
                    alt="Next"
                    className="arrow-right"
                    onClick={goToNextImage}
                />
                <p className="carousel-counter">
                    {currentImageIndex + 1} / {pictures.length}
                </p>
            </div>
            <h2>{logementFound.title}</h2>
            <p>{logementFound.host.name}</p>
            <p>{logementFound.rating}</p>
            <p>{logementFound.tags}</p>
            <div>
                <h3>{logementFound.description}</h3>
                <h3>{logementFound.equipments}</h3>
            </div>
        </div>
    )
}

export default Logement
