import React, { useState } from "react" //le Hook useState pour gérer l'état de visibilité de l'élément Collapse
import chevron from "../../assets/chevron.png"
import "./collapse.scss"

function Collapse({ title, content }) {
    const [visible, setVisible] = useState(false) // initialise l'état visible à false de la variable visible entre crochet, ce qui signifie que l'élément est initialement masqué.
    // La fonction setVisible est utilisée pour mettre à jour l'état visible de l'élément Collapse.
    const alternVisibility = () => {
        setVisible(!visible) // "!" Inverser la valeur de l'état local visible. Si visible est true, il devient false et vice versa
    }
    return (
        // La classe "open" est ajoutée à la classe "section-apartment" et à la classe "chevron" si l'état visible est true. Cela permet de modifier le style CSS de ces éléments en fonction de l'état visible.
        <div className="section-apartment">
            <div className="apartment__description">
                <p className="description__title" onClick={alternVisibility}>
                    <span>{title}</span>
                    <img
                        src={chevron}
                        alt="Chevron"
                        className={`chevron ${visible ? "open" : ""}`} // La classe "open" est ajoutée à la classe "chevron" si l'état visible est true. Cela permet de modifier le style CSS du chevron (transform: rotate(180deg)) en fonction de l'état visible.
                    />
                </p>
                <p className={`description__content ${visible ? "open" : ""}`}>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default Collapse

// Le composant Collapse affiche un titre et un contenu qui peuvent être masqués ou affichés en cliquant sur le titre.
// Il utilise useState pour gérer l'état de visibilité de l'élément Collapse.
// L'état visible est initialisé à false, ce qui signifie que l'élément est initialement masqué.
// Lorsque l'utilisateur clique sur le titre, la fonction alternVisibility est appelée pour inverser la valeur de l'état visible.
// La classe "open" est ajoutée aux éléments qui doivent être affichés lorsque l'état visible est true, ce qui permet de modifier leur style CSS en fonction de l'état visible.
// Le composant Collapse est utilisé dans le composant APropos pour recevoir la valeurs des props title et content.
