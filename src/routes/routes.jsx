import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" // Bibliothèque  React Router pour configurer la navigation entre les différentes pages de l'application et gérer leur logique.  Une route est simplement une URL associée à un composant spécifique.
import Accueil from "../../src/pages/accueil/accueil.jsx"
import APropos from "../../src/pages/aPropos/aPropos.jsx"
import Logement from "../../src/pages/logement/logement.jsx"
import NotFound from "../../src/pages/notFound/notFound.jsx"
import Header from "../../src/composants/header/header.jsx"
import Footer from "../../src/composants/footer/footer.jsx"
import "./routes.scss"

function AllRoutes() {
    return (
        <div className="router-container">
            <React.StrictMode>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Accueil />} />
                        <Route path="/aPropos" element={<APropos />} />
                        <Route path="/logement/:id" element={<Logement />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </Router>
            </React.StrictMode>
        </div>
    )
}

export default AllRoutes
