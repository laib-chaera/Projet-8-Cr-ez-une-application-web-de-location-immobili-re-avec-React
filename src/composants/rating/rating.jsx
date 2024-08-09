//------Affiche un systeme de notation sous forme d'étoiles----

import starActiv from "../../assets/star-active.png"
import starInactive from "../../assets/star-inactive.png"
import "./rating.scss"

function Rating({ rating }) {
    const totalStar = 5
    const fullStarNumber = parseInt(rating)
    const emptyStarNumber = totalStar - fullStarNumber

    return (
        <div className="container-stars">
            {[...Array(fullStarNumber)].map((e, i) => (
                <img
                    className="star"
                    key={"full-star-" + i}
                    src={starActiv}
                    alt="Full Star Rating"
                />
            ))}
            {[...Array(emptyStarNumber)].map((e, i) => (
                <img
                    className="star-empty"
                    key={"empty-star-" + i}
                    src={starInactive}
                    alt="Empty Star Rating"
                />
            ))}
        </div>
    )
}

export default Rating
