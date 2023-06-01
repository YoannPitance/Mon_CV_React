import React from "react";
import Languages from "../components/Skills/Languages";
import Experiences from "../components/Skills/Experiences";
import Hobbies from "../components/Skills/Hobbies";
import Otherskills from "../components/Skills/Otherskills";

const Skills = () => {
  return (
    <div className="skillsContent">
      <Languages />
      <Experiences />
      <Hobbies />
      <Otherskills />
    </div>
  );
};

export default Skills;
