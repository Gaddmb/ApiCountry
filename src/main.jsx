import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.scss";

// npm install react-router-dom pour la gestion des routes

// il me fait un rendu de l'application dans le DOM en utilisant la méthode createRoot() de React DOM.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
