import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/moi2.jpg" alt="ma tête" width="160px" />
          <h3>Yoann Pitance</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <Link
              to="/Home"
              className={({ isActive, isPending }) =>
                isPending ? "navdefaut" : isActive ? "navActive" : ""
              }
            >
              <i class="fa-solid fa-house"></i>
              <span>Accueil</span>
            </Link>
          </li>

          <li>
            <Link
              to="/Skills"
              className={({ isActive, isPending }) =>
                isPending ? "navdefaut" : isActive ? "navActive" : ""
              }
            >
              <i class="fa-solid fa-screwdriver-wrench"></i>
              <span>Compétences</span>
            </Link>
          </li>

          <li>
            <Link
              to="/Portfolio"
              className={({ isActive, isPending }) =>
                isPending ? "navdefaut" : isActive ? "navActive" : ""
              }
            >
              <i class="fa-solid fa-images"></i>
              <span>Portfolio</span>
            </Link>
          </li>

          <li>
            <Link
              to="/Contact"
              className={({ isActive, isPending }) =>
                isPending ? "navdefaut" : isActive ? "navActive" : ""
              }
            >
              <i class="fa-solid fa-address-card"></i>
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/yoann-pitance-8a974324b"
              rel="noreferrer"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/YoannPitance"
              rel="noreferrer"
              target="_blank"
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/_pittyart_/"
              rel="noreferrer"
              target="_blank"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/Pittyart88/"
              rel="noreferrer"
              target="_blank"
            >
              <i class="fa-brands fa-square-facebook"></i>
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>yoannPitance - 2023 -</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
