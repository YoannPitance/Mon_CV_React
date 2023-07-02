import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const Languages = () => {
  const [languages, setLanguages] = useState([
    { id: 1, value: "Html", startDate: new Date(2022, 4) },
    { id: 2, value: "Css", startDate: new Date(2022, 4) },
    { id: 3, value: "Javascript", startDate: new Date(2022, 10) },
  ]);
  const [frameworks, setFrameworks] = useState([
    { id: 1, value: "Sass", startDate: new Date(2022, 9) },
    { id: 2, value: "React", startDate: new Date(2023, 0) },
    { id: 3, value: "React Native", startDate: new Date(2023, 2) },
  ]);

  useEffect(() => {
    const currentDate = new Date();

    const updateExperience = (data) =>
      data.map((item) => ({
        ...item,
        xp: calculateExperience(item.startDate, currentDate),
      }));

    const calculateExperience = (startDate, endDate, totalYears) => {
      const totalMonths = Math.round(
        (endDate - startDate) / (1000 * 60 * 60 * 24 * 30.44) // Calcul de la durée en mois
      );
      const percentage = (totalMonths / (totalYears * 12)) * 100; // Conversion en pourcentage
      return percentage;
    };

    setLanguages(updateExperience(languages));
    setFrameworks(updateExperience(frameworks));
  }, [languages, frameworks]);

  return (
    <div className="languagesFrameworks">
      <ProgressBar
        languages={languages.map((language) => ({
          ...language,
          xp: language.xp + " mois",
        }))}
        className="languageDisplay"
        title="Langages"
      />
      <ProgressBar
        languages={frameworks.map((framework) => ({
          ...framework,
          xp: framework.xp + " mois",
        }))}
        className="frameworksDisplay"
        title="Frameworks & Bibliothèques"
      />
    </div>
  );
};

export default Languages;
