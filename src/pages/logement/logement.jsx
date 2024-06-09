import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import DataLogements from "../../data/logements.json"
import arrowLeft from "../../assets/arrowLeft.png"
import arrowRight from "../../assets/arrowRight.png"
import "./logement.scss"

function Logement() {
    const { id } = useParams()
    const navigate = useNavigate()

    function findLogementId(identifiant) {
        return DataLogements.find((logement) => logement.id === identifiant)
    }

    const logementFound = findLogementId(id)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        if (!logementFound) {
            navigate("/404") // Rediriger vers la page 404 si le logement n'existe pas
        }
    }, [logementFound, navigate])

    // Si logementFound n'existe pas, ne rien afficher pendant que la redirection est en cours
    if (!logementFound) {
        return null
    }

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
                {pictures.length > 1 && (
                    <>
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
                    </>
                )}
            </div>
            <div>
                <div>
                    <h2>{logementFound.title}</h2>
                    <h3>{logementFound.location}</h3>
                </div>
                <p>{logementFound.tags}</p>
                <p>{logementFound.host.name}</p>
                <p>{logementFound.rating}</p>

                <div>
                    <h3>{logementFound.description}</h3>
                    <h3>{logementFound.equipments}</h3>
                </div>
            </div>
        </div>
    )
}

export default Logement
