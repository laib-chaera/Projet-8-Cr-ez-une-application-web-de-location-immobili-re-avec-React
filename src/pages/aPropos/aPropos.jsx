import React from "react"
import "./aPropos.scss"
import logo from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"

function APropos() {
    return (
        <div>
            <div className="aPropos">
                <img
                    src={logo}
                    alt="kalen-emsley-Bkci_8qcdvQ-unsplash"
                    className="aPropos__img"
                />
            </div>
        </div>
    )
}

export default APropos
