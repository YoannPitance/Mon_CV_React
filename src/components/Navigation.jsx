import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/moi2.jpg" alt="ma tête" width="200px" />
          <h3>Yoann Pitance</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink
              to="/Home"
              className={({ isActive, isPending }) =>
                isPending ? "navdefaut" : isActive ? "navActive" : ""
              }
            >
              <i class="fa-solid fa-house"></i>
              <span>Accueil</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Skills"
              className={({ isActive, isPending }) =>
                isPending ? "navdefaut" : isActive ? "navActive" : ""
              }
            >
              <i class="fa-solid fa-screwdriver-wrench"></i>
              <span>Compétences</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Portfolio"
              className={({ isActive, isPending }) =>
                isPending ? "navdefaut" : isActive ? "navActive" : ""
              }
            >
              <i class="fa-solid fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Contact"
              className={({ isActive, isPending }) =>
                isPending ? "navdefaut" : isActive ? "navActive" : ""
              }
            >
              <i class="fa-solid fa-address-card"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
