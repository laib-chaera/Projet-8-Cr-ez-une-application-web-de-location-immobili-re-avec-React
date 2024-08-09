// -------Affiche les détails d'un logement-------

import React, { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Carousel from "../../composants/carousel/carousel"
import InfoLogement from "../../composants/infoLogement/infoLogement"
import DataLogements from "../../data/logements.json"
import "./logement.scss"

function Logement() {
    const { id } = useParams()
    const navigate = useNavigate()

    const logementFound = DataLogements.find((logement) => logement.id === id)

    useEffect(() => {
        if (!logementFound) {
            navigate("/404")
        }
    }, [logementFound, navigate])

    if (!logementFound) {
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
