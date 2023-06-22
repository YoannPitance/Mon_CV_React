import React from "react";
import { NavLink } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3>Désolé cette page n'existe pas...</h3>
        <NavLink to="/home">
          <i className="fa-solid fa-house"></i>
          <span> Retourner à l'accueil</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Notfound;
