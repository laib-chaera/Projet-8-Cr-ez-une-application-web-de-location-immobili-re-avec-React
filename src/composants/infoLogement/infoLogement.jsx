import React from "react"
import "./infoLogement.scss"
import Collapse from "../../composants/collapse/collapse"
import Rating from "../../composants/rating/rating"

function InfoLogement({title,location,tags, rating, host, description,equipments,}) {
    return (
        <div className="info-logement">
            <div className="css">
                <div className="title-tags">
                    <div className="info-logement__titles">
                        <h2>{title}</h2>
                        <h3>{location}</h3>
                    </div>
                    <div className="tags">
                        {tags.map((tag, index) => (
                            <span key={index} className="tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="rating-host">
                    <div className="host">
                        <p className="host__name">{host.name}</p>
                        <img
                            src={host.picture}
                            alt="Host"
                            className="host__picture"
                        />
                    </div>
                    <div>
                        <Rating rating={rating} className="rating" />
                    </div>
                </div>
            </div>
            <div className="collapse">
                <Collapse title="Description" content={description} />
                <Collapse title="Équipements" content={equipments.join(", ")} />
            </div>
        </div>
    )
}
export default InfoLogement

// Le composant InfoLogement affiche les informations détaillées d'un logement, y compris le titre, l'emplacement, les tags, l'évaluation, l'hôte, la description et les équipements.
// Il utilise les composants Collapse et Rating pour afficher la description et les équipements du logement, ainsi que l'évaluation de l'hôte.
//Les composants enfants reçoivent les données du logement via les props title, location, tags, rating, host, description et equipments créées dans le composant parent Logement.
