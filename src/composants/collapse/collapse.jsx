import React, { useState } from "react" //le Hook useState pour gérer l'état de visibilité de l'élément Collapse
import chevron from "../../assets/chevron.png"
import "./collapse.scss"

function Collapse({ title, content }) {
    const [visible, setVisible] = useState(false) // initialise l'état visible à false, ce qui signifie que l'élément est initialement masqué.
    const toggleVisibility = () => {
        setVisible(!visible) // "!" Inverser la valeur de l'état local visible. Si visible est true, il devient false et vice versa
    }
    return (
        // La classe "open" est ajoutée à la classe "section-apartment" et à la classe "chevron" si l'état visible est true. Cela permet de modifier le style CSS de ces éléments en fonction de l'état visible.
        <div className="section-apartment">
            <div className="apartment__description">
                <p className="description__title" onClick={toggleVisibility}>
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
