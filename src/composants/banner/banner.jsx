import React from "react"
import image from "../../assets/eric-muhr-P_XxsdVgtpQ-unsplash.png"
import "./banner.scss"

function Banner() {
    return (
        <div className="banner">
            <img src={image} alt="Montagne et mer" className="banner__img" />
            <div className="banner__overlay"></div>
            <h2 className="banner__h2">Chez vous, partout et ailleurs</h2>
        </div>
    )
}

export default Banner
