import React from "react";
import "./styles.css";

import InfoCard from "./InfoCard";
import experience from "./experience";
import CVComponent from "./CVComponent";
import education from "./education";
import SkillsList from "./SkillsList";

const info = {
  imgSrc: "./FotoPL.png",
  name: "KEITA Abdoulaye",
  profession: "DevOps Engineer",
  address: "Antibes (France)",
  phone: "(+33) 762973555",
  email: "abdoulk12@hotmail.fr",
  about:
    "Experience in project coordination, team and customer management. What I've loved most of every job I've had is established new networks based on trust, because it makes everything thrive. My current focus is to become a Web Developer and an E-Commerce expert."
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
            <h3> Ayurveda</h3>
            <ul>
              <li>
                <i className="fa fa-book" /> Meditation
              </li>
              <li>
                <i className="fa fa-book" /> Yoga
              </li>
            </ul>
            <h3>Sustainability</h3>
            <ul>
              <li>Reducing waste</li>
              <li>Build a sustainable wardrobe</li>
            </ul>
          </section>
        </section>
      </main>
      <footer className="footer">
        <p>Paula Latorre</p>
        <i className="fa fa-facebook-square" />
        <i className="fa fa-instagram" />
        <i className="fa fa-github" />
        <i className="fa fa-linkedin-in" />- Foocoding assigment: Resume
      </footer>
    </div>
  );
}
