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

// Le composant AllRoutes définit les différentes routes de l'application en utilisant le composant Route de React Router.
// Il importe les composants Accueil, APropos, Logement et NotFound pour les associer à des routes spécifiques.
// La route "/" est associée au composant Accueil, la route "/aPropos" est associée au composant APropos,
//la route "/logement/:id" est associée au composant Logement pour afficher les détails d'un logement en fonction de son identifiant unique,
// et la route "*" est associée au composant NotFound pour gérer les pages non trouvées.
