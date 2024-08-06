import starActiv from "../../assets/star-active.png"
import starInactive from "../../assets/star-inactive.png"
import "./rating.scss"

function Rating({ rating }) {
    //Création d'un systeme de notation de 5 étoiles qui prend en paramètre la note du logement.

    const totalStar = 5 //Définition du nombre total d'étoiles.
    const fullStarNumber = parseInt(rating) //Conversion de la note du logement en entier.
    const emptyStarNumber = totalStar - fullStarNumber //Calcul du nombre d'étoiles vides.

    return (
        <div className="container-stars">
            {/* Créer un tableau qui rend les étoiles remplies. */}
            {[...Array(fullStarNumber)].map((e, i) => (
                <img
                    className="star"
                    key={"full-star-" + i}
                    src={starActiv}
                    alt="Full Star Rating"
                />
            ))}
            {/*Créer un tableau qui rend les étoiles vides. */}
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
