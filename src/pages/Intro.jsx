import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Intro() {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      const angleY = -(x - width / 2) / 8;
      const angleX = (y - height / 2) / 8;
      const glareX = (x / width) * 100;
      const glareY = (y / height) * 100;

      card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
      card.querySelector(
        ".glare"
      ).style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgb(184, 196, 211), transparent)`;
    };

    const handleMouseLeave = () => {
      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="bodyIntro">
      <div className="congrats">
        <h1>FÉLICITATIONS!</h1>
        <h2>vous venez de découvrir une carte "Rare"</h2>
        <h3>Cliquez sur la carte pour en savoir plus!</h3>
      </div>
      <Link to="/home">
        <div className="cardContainer">
          <div className="card" ref={cardRef}>
            <div className="cardContent">
              <img src="./media/moi1.jpg" alt="ma tête de bg!" />
            </div>
            <div className="glare"></div>
          </div>
        </div>
      </Link>
    </div>
  );
}
