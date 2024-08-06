import React, { useState } from "react"
import chevron from "../../assets/chevron.png"
import "./collapse.scss"

function Collapse({ title, content }) {
    const [visible, setVisible] = useState(false)
    const alternVisibility = () => {
        setVisible(!visible)
    }
    return (
        <div className="section-apartment">
            <div className="apartment__description">
                <p className="description__title" onClick={alternVisibility}>
                    <span>{title}</span>
                    <img
                        src={chevron}
                        alt="Chevron"
                        className={`chevron ${visible ? "open" : ""}`}
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
