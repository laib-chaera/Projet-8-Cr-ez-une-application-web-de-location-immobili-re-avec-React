import React, { useState } from "react"
import arrowLeft from "../../assets/arrowLeft.png"
import arrowRight from "../../assets/arrowRight.png"
import "./carousel.scss"

function Carousel({ pictures }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const goToPreviousImage = () => {
        setCurrentImageIndex(
            (
                index, //
            ) => (index === 0 ? pictures.length - 1 : index - 1),
        )
    }

    const goToNextImage = () => {
        setCurrentImageIndex((index) =>
            index === pictures.length - 1 ? 0 : index + 1,
        )
    }

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
// Le composant Carousel affiche une image à la fois et permet de naviguer entre les différentes images.
// Il utilise le Hook useState pour gérer l'index de l'image actuellement affichée.
// Le composant affiche également des flèches de navigation pour passer d'une image à l'autre, ainsi qu'un compteur indiquant le numéro de l'image actuelle.
// Il prend en paramètre la prop pictures, qui est un tableau d'URL d'images à afficher dans le carrousel. la prop pictures est créée dans le composant parent () la page Logement) et passée au composant Carousel.
// Le composant utilise des conditions pour afficher les flèches de navigation et le compteur uniquement s'il y a plus d'une image à afficher.
// useStaet permet de gérer l'état local du composant. Il prend en paramètre la valeur initiale de l'état "0" et renvoie un tableau contenant la valeur actuelle de l'état et une fonction pour la mettre à jour.
//currentImageIndex est l'index de l'image actuellement affichée dans le carrousel. Il est initialisé à 0, ce qui signifie que la première image est affichée par défaut.
//setCurrentImageIndex est une fonction qui permet de mettre à jour l'index de l'image actuellement affichée.
//goToPreviousImage est une fonction qui permet de passer à l'image précédente dans le carrousel. Elle utilise la fonction setCurrentImageIndex pour mettre à jour l'index de l'image actuellement affichée.
//goToNextImage est une fonction qui permet de passer à l'image suivante dans le carrousel. Elle utilise la fonction setCurrentImageIndex pour mettre à jour l'index de l'image actuellement affichée.
