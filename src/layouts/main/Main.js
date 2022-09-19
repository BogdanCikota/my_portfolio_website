import { Link } from "react-router-dom";
import ContactCard from "./main_components/ContactCard";
import ProjectCard from "./main_components/ProjectCard";
import "./Main.scss";

function Main() {
  return (
    <main className="main">
      <section className="profile-contact">
        <img src="" alt="profile img" />
        <ContactCard />
      </section>
      <section className="projects-courses">
        <div className="projects">
          <h2>PROJECTS</h2>
          <a href="https://github.com/BogdanCikota">
            https://github.com/BogdanCikota
          </a>
          <div className="projects-list">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>

        <div className="courses">
          <h2>COURSES</h2>
        </div>

        <section className="faq-contact">
          <div className="linkToFaq">
            &rarr; <Link to="/faq">FAQ</Link>
          </div>

          <ContactCard />
        </section>
      </section>
    </main>
  );
}

export default Main;
