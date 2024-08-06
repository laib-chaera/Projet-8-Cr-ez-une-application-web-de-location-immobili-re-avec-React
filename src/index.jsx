import React from "react" // Importation de la bibliothèque React pour créer des composants React.
import { createRoot } from "react-dom/client" // Importation de la fonction createRoot de ReactDOM pour rendre les composants React dans l'élément HTML racine de l'application.
import AllRoutes from "./routes/routes" // Composant principal de l'application qui définit les différentes routes et leur logique.
import "./main.scss"

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AllRoutes />
    </React.StrictMode>,
)

//fonctionnement:
// Le fichier index.jsx est le point d'entrée de l'application React. Il importe les dépendances nécessaires, y compris React, ReactDOM et le composant AllRoutes.
// Il utilise la fonction createRoot de ReactDOM pour rendre les composants de l'application dans l'élément HTML avec l'ID "root" qui se trouve dans le dossier public.
// Le composant AllRoutes est enveloppé dans un composant React.StrictMode pour activer le mode strict de React et détecter les problèmes potentiels dans l'application.
// L'application est rendue dans l'élément HTML avec l'ID "root" en utilisant la méthode render de ReactDOM. Cela démarre l'application React et affiche les différentes routes définies dans le composant AllRoutes.
