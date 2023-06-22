import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeContent">
      <div className="content">
        <h1>Yoann Pitance</h1>
        <h2>Développeur Web</h2>
        <h3>En recherche d'alternance (bac+3):</h3>
        <ul>
          <li>Développeur React Javascipt</li>
          <li>Développeur PHP Symphony</li>
        </ul>
        <div className="pdf">
          <a href="./media/cv_1.pdf" target="_blank" rel="noreferrer">
            Télécharger CV
          </a>
          <span className="introCardBtn">
            <Link to="/intro">Revoir la carte 3D</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
