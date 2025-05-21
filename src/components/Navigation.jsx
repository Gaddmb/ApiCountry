import React from "react";
// me permet de creer des liens dans l'application pour naviguer d'une page à une autre
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Acceuil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>à propos</li>
        </NavLink>
        <NavLink
          to="/blog"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Blog</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
