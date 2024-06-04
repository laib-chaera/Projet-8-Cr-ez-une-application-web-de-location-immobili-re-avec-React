import React from "react"
import "./footer.scss"
import logo from "../../assets/logoFooter.png"

function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="logo kasa" className="footer__logo" />
            <p className="footer__p"> © 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
