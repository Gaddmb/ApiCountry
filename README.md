# React World - Country & Blog App

Ce projet est une application React permettant de découvrir des pays via l’API [restcountries.com](https://restcountries.com/) et de publier des articles sur un blog local.

## Fonctionnalités

- **Recherche de pays** : Filtre par continent, recherche par nom, affichage de la population, capitale et drapeau.
- **Blog** : Ajout, édition et suppression d’articles (stockés localement via JSON Server).
- **Navigation** : Routing entre Accueil, À propos et Blog.

## Installation

1. **Cloner le projet**  
   `git clone <url-du-repo>`

2. **Installer les dépendances**  
   `npm install`

3. **Lancer le serveur JSON (pour le blog)**  
   `npm run server`  
   (ou)  
   `json-server --watch src/assets/db.json --port 3004`

4. **Démarrer l’application**  
   `npm run dev`

## Scripts utiles

- `npm run dev` : Démarre le serveur de développement Vite.
- `npm run build` : Build le projet pour la production.
- `npm run server` : Lance JSON Server pour le blog (port 3004).

## Stack technique

- React 19
- React Router DOM
- Axios
- Vite
- JSON Server (pour le blog)
- Sass pour le style

## Auteur

Projet réalisé par Mbengi Gaddiel.

---
