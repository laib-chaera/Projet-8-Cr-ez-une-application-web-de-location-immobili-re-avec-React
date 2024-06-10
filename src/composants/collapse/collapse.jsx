import React, { useState } from "react"
import chevron from "../../assets/chevron.png"
import "./collapse.scss"

function Collapse({ title, content }) {
    const [visible, setVisible] = useState(false)

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    return (
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
