import React from "react";

const Contact = () => {
  const handleContactClick = () => {
    const email = "pittyo88@gmail.com"; // Remplace avec ton adresse e-mail
    const message = "Votre message :";

    const body = `Nom et prénom: \nEntreprise: \nMotif: \n\n${message}`;
    const mailtoLink = `mailto:${email}?body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contactContent">
      <h1>Vous souhaitez me contacter?</h1>
      <h2>Cliquez sur le bouton ci dessous:</h2>
      <button className="contact-button" onClick={handleContactClick}>
        Envoyer un mail
      </button>
      <h3>
        <i className="fa-solid fa-circle-arrow-left"></i>Pour me contacter via
        mes réseaux cest par ici
      </h3>
    </div>
  );
};
export default Contact;
