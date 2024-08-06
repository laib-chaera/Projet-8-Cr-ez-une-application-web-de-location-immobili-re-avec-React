import React from "react"
import PropTypes from "prop-types"
import "./card.scss"
import { NavLink } from "react-router-dom"

function Card({ logements }) {
    return (
        <div className="galerie">
            {logements.map((logement) => (
                <NavLink
                    to={`/logement/${logement.id}`}
                    className="card"
                    key={logement.id}
                >
                    <img
                        src={logement.cover}
                        alt={logement.title}
                        className="card__image"
                    />
                    <h3 className="card__title">{logement.title}</h3>
                </NavLink>
            ))}
        </div>
    )
}

Card.propTypes = { logements: PropTypes.array.isRequired }

export default Card
