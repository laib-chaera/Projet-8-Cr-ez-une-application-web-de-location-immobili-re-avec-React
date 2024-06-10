import React from "react"
import Collapse from "../../composants/collapse/collapse"
import "./infoLogement.scss"

function InfoLogement({
    title,
    location,
    tags,
    rating,
    host,
    description,
    equipments,
}) {
    return (
        <div className="info-logement">
            <div className="titles">
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
            <div className="rating">{rating}</div>
            <div className="host">
                <p className="host-name">{host.name}</p>
                <img src={host.picture} alt="Host" className="host-picture" />
            </div>
            <div className="description-equipments">
                <Collapse title="Description" content={description} />
                <Collapse title="Équipements" content={equipments.join(", ")} />
            </div>
        </div>
    )
}

export default InfoLogement
