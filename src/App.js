import React from "react";
import "./styles.css";

import InfoCard from "./InfoCard";
import experience from "./experience";
import CVComponent from "./CVComponent";
import education from "./education";
import SkillsList from "./SkillsList";

const info = {
  imgSrc: "./Photo.jpg",
  name: "KEITA Abdoulaye",
  profession: "DevOps Engineer and technical validator",
  address: "Antibes (France)",
  phone: "(+33) 762973555",
  email: "abdoulk12@hotmail.fr",
  about:
    "I love new chalenges, would like to learn more about DevOps and share my knowledge."
};

export default function App() {
  const experienceComponent = experience.map(item => (
    <CVComponent item={item} />
  ));
  const educationComponent = education.map(item => <CVComponent item={item} />);

  return (
    <div>
      <main>
        <section className="container">
          <section className="info">
            <InfoCard info={info} />
            <h2>
              <i className="fa fa-cogs" /> Skills
            </h2>
            <SkillsList />
          </section>

          <section className="work">
            <h1>
              <i className="fa fa-briefcase fa" /> Work Experience{" "}
            </h1>
            {experienceComponent}
          </section>
          <hr />
          <section className="education">
            <h1>
              {" "}
              <i className="fa fa-university" /> Education{" "}
            </h1>
            {educationComponent}
          </section>

          <section className="other">
            <h1>
              {" "}
              <i className="fa fa-desktop" /> Other Interests{" "}
            </h1>
            <h3> Robotic</h3>
            <ul>
              <li>
                <i className="fa fa-book" /> Create EV3 robot
              </li>
              <li>
                <i className="fa fa-book" /> Artificial inteligence
              </li>
              <li>
                <i className="fa fa-book" /> RaspberryPI for CICD
              </li>
            </ul>
            <h3>Sustainability</h3>
            <ul>
              <li>Reducing waste</li>
            </ul>
            <h3>Loisir</h3>
            <ul>
              <li>Football</li>
              <li>swiming</li>
              <li>ski</li>
              <li>cooking</li>
            </ul>
          </section>
        </section>
      </main>
      <footer className="footer">
        <p>Abdoulaye KEITA</p>
        <i className="fa fa-facebook-square" />
        <i className="fa fa-instagram" />
        <i className="fa fa-github" />
        github
        <i className="fa fa-linkedin-in" /> Curriculum vitæ: Resume
      </footer>
    </div>
  );
}
