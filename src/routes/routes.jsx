import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" // Bibliothèque pour déclarerdes des routes dans l'appli et gérer leur logique.  Une route est simplement une URL associée à un composant spécifique.
import Accueil from "../../src/pages/accueil/accueil.jsx"
import APropos from "../../src/pages/aPropos/aPropos.jsx"
import Logement from "../../src/pages/logement/logement.jsx"
import NotFound from "../../src/pages/notFound/notFound.jsx"
import Header from "../../src/composants/header/header.jsx"
import Footer from "../../src/composants/footer/footer.jsx"
import "./routes.scss"

function AllRoutes() {
    return (
        // Configuration des routes de l'application : Chaque URL doit être associée à un composant. Dans la route logement, l'identifiant de l'article est passé en tant que paramètre dans l'URL. React Router vous permet de récupérer ces paramètres et de les utiliser pour afficher les bonnes données.
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
