import React from "react";

const ProgressBar = (languages) => {
  const calculateExperience = (startDate) => {
    const currentDate = new Date();
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth() + 1; // +1 car les mois commencent à partir de 0

    const totalMonths =
      (currentDate.getFullYear() - startYear) * 12 +
      (currentDate.getMonth() + 1 - startMonth);

    return totalMonths;
  };

  const calculateDisplayExperience = (experience) => {
    if (experience < 24) {
      return (
        <>
          <span>0</span>
          <span>2 ans</span>
        </>
      );
    } else {
      const startYear = Math.floor((experience - 12) / 12);
      const endYear = Math.floor(experience / 12);

      return (
        <>
          <span>{startYear} ans</span>
          <span>{endYear} ans</span>
        </>
      );
    }
  };

  const calculateProgressBarWidth = (experience) => {
    if (experience < 24) {
      return (experience / 24) * 100;
    } else {
      const monthsAfterTwoYears = experience - 24;
      const remainingMonths = monthsAfterTwoYears % 12;
      const progressBarWidth = (remainingMonths / 12) * 100;

      return progressBarWidth;
    }
  };

  return (
    <div className={languages.className}>
      <h3>{languages.title}</h3>

      <div>
        {languages.languages?.map((item) => {
          const experience = calculateExperience(item.startDate);
          const displayExperience = calculateDisplayExperience(experience);
          const progressBarWidth = calculateProgressBarWidth(experience);

          return (
            <div key={item.id} className="languagesList">
              <h4>{item.value}</h4>
              <div className="progressBar">
                <div
                  className="progressBarFill"
                  style={{
                    width: `${progressBarWidth}%`,
                  }}
                ></div>
                <div className="progressBarEmpty"></div>
                <span>{displayExperience}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
