import React, { useEffect, useRef } from "react";

export default function Intro() {
  const cardContentRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { x, y, width, height } =
        cardContentRef.current.getBoundingClientRect();

      const midCardWidth = width / 2;
      const midCardHeight = height / 2;

      const angleY = -(clientX - x - midCardWidth) / 8;
      const angleX = (clientY - y - midCardHeight) / 8;

      cardContentRef.current.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
    };

    const handleMouseLeave = () => {
      cardContentRef.current.style.transform = "rotateX(0) rotateY(0) scale(1)";
    };

    const cardContent = cardContentRef.current;
    cardContent.addEventListener("mousemove", handleMouseMove);
    cardContent.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cardContent.removeEventListener("mousemove", handleMouseMove);
      cardContent.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="cardContainer">
      <div className="card">
        <div className="cardContent" ref={cardContentRef}>
          <img src="./media/moi2.jpg" alt="ma tête de bg!" />
          <div className="glare"></div>
        </div>
      </div>
    </div>
  );
}
