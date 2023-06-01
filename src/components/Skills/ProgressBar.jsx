import React from "react";

const ProgressBar = (languages, frameworks) => {
  return (
    <div className={languages.className}>
      <h3>{languages.title}</h3>
      <div className="years">
        <span>Années d'expérience</span>
        <span>1 an</span>
        <span>2 ans</span>
      </div>

      <div>
        {languages.languages.map((item) => {
          let xpYears = 2;
          let progressBar = (item.xp / xpYears) * 100 + "%";

          return (
            <div key={item.id} className="languagesList">
              <li>{item.value}</li>
              <div className="progressBar" style={{ width: progressBar }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
