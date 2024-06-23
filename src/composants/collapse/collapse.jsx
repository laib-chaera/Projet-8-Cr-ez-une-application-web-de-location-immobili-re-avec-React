import React, { useState } from "react"
import chevron from "../../assets/chevron.png"
import "./collapse.scss"

function Collapse({ title, content }) {
    const [visible, setVisible] = useState(false) // initialise l'état visible à false, ce qui signifie que l'élément est initialement masqué.
    const toggleVisibility = () => {
        setVisible(!visible) // "!" Inverser la valeur de l'état local visible. Si visible est true, il devient false et vice versa
    }

    return (
        // La classe "open" est ajoutée à la classe "section-apartment" et à la classe "chevron" si l'état visible est true. Cela permet de modifier le style CSS de ces éléments en fonction de l'état visible.
        <div className={`section-apartment ${visible ? "open" : ""}`}>
            <div className="apartment__description">
                <p className="description__header" onClick={toggleVisibility}>
                    <span>{title}</span>
                    <img
                        src={chevron}
                        alt="Chevron"
                        className={`chevron ${visible ? "open" : ""}`}
                    />
                </p>
                {visible && (
                    <p
                        className={`description__content ${visible ? "open" : ""}`}
                    >
                        {content}
                    </p>
                )}
            </div>
        </div>
    )
}

export default Collapse
