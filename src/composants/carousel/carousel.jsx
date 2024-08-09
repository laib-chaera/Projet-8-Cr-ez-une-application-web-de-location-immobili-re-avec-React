// -----Afficher un carousel d'images.-------

import React, { useState } from "react"
import arrowLeft from "../../assets/arrowLeft.png"
import arrowRight from "../../assets/arrowRight.png"
import "./carousel.scss"

// -----State: Utilise useState pour gérer l'index de l'image courante
function Carousel({ pictures }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

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
    // ------Gestion des événements: Utilise onClick sur les flèche pour naviguer entre les images
    return (
        <div className="carousel">
            <img
                src={pictures[currentImageIndex]}
                alt={`Slide ${currentImageIndex}`}
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
    )
}

export default Carousel
