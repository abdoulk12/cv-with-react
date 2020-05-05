import React, { useState } from "react";
import Skill from "./Skill";

const SkillsList = () => {
  const [skills] = useState([
    { name: "Platform DevOps/ Administration system & reseaux", level: 4 },
    { name: "Application DevOps / CICD", level: 4 },
    {
      name: "DevSecOps (network, certificates, encryption, proxy, OWASP)",
      level: 3
    },
    { name: "DataOps/ Data preparation", level: 3 },
    { name: "FinOps", level: 4 },
    { name: "Support", level: 4 },
    { name: "Gestion de projet", level: 3 }
  ]);
  return (
    <div>
      {skills.map(skill => (
        <Skill name={skill.name} level={skill.level} key={skill.index} />
      ))}
    </div>
  );
};
export default SkillsList;
