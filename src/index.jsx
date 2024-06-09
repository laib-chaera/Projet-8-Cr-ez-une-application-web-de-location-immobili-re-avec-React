import React from "react"
import { createRoot } from "react-dom/client"
import AllRoutes from "./routes/routes"
import "./main.scss"

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AllRoutes />
    </React.StrictMode>,
)
