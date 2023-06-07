import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

export default class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Html", xp: 1 },
      { id: 1, value: "Css", xp: 1 },
      { id: 1, value: "Javascript", xp: 0.6 },
    ],
    frameworks: [
      { id: 1, value: "Sass", xp: 0.8 },
      { id: 1, value: "React", xp: 0.5 },
      { id: 1, value: "React Native", xp: 0.2 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languageDisplay"
          title="langages"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="Frameworks & Bibliothèques"
        />
      </div>
    );
  }
}
