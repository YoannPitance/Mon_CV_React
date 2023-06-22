import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [socialName, setSocialName] = useState("");
  const handleHover = (className) => {
    setSocialName(className);
  };

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
              <i className="fa-solid fa-house"></i>
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
              <i className="fa-solid fa-screwdriver-wrench"></i>
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
              <i className="fa-solid fa-images"></i>
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
              <i className="fa-solid fa-address-card"></i>
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li
            className={socialName === "Linkedin" ? "navActive" : ""}
            onMouseEnter={() => handleHover("Linkedin")}
            onMouseLeave={() => handleHover("")}
          >
            <a
              href="https://www.linkedin.com/in/yoann-pitance-8a974324b"
              className="Linkedin"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin" alt="Linkedin"></i>
            </a>
          </li>
          <li
            className={socialName === "Github" ? "navActive" : ""}
            onMouseEnter={() => handleHover("Github")}
            onMouseLeave={() => handleHover("")}
          >
            <a
              href="https://github.com/YoannPitance"
              className="Github"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-github" alt="github"></i>
            </a>
          </li>
          <li
            className={socialName === "Instagram" ? "navActive" : ""}
            onMouseEnter={() => handleHover("Instagram")}
            onMouseLeave={() => handleHover("")}
          >
            <a
              href="https://www.instagram.com/_pittyart_/"
              className="Instagram"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-instagram" alt="instagram"></i>
            </a>
          </li>
          <li
            className={socialName === "Facebook" ? "navActive" : ""}
            onMouseEnter={() => handleHover("Facebook")}
            onMouseLeave={() => handleHover("")}
          >
            <a
              href="https://www.facebook.com/Pittyart88/"
              className="Facebook"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-square-facebook" alt="facebook"></i>
            </a>
          </li>
        </ul>
        <div className="socialName">{socialName && <p>{socialName}</p>}</div>
        <div className="signature">
          <p>yoannPitance'Dev - 2023 -</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
