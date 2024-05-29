import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Accueil from "../../src/pages/accueil/accueil.jsx"
import APropos from "../../src/pages/aPropos/aPropos.jsx"
import Logement from "../../src/pages/logement/logement.jsx"
import NotFound from "../../src/pages/notFound/notFound.jsx"
import Header from "../../src/composants/header/header.jsx"
import Footer from "../../src/composants/footer/footer.jsx"

function AllRoutes() {
    return (
        <div>
            <React.StrictMode>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Accueil />} />
                        <Route path="/aPropos" element={<APropos />} />
                        <Route path="/logement" element={<Logement />} />
                        <Route path="/notfound" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </Router>
            </React.StrictMode>
        </div>
    )
}

export default AllRoutes
