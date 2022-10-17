import { Link } from "react-router-dom";
import { Animate } from "react-simple-animate";
import ContactCard from "./main_components/ContactCard";
import "./Main.scss";
import ProfilePic from "../../assets/images/profile-pic.jpg";
import alectoThumb from "../../assets/images/thumbs/alecto_thumb.jfif";
import authmernThumb from "../../assets/images/thumbs/authmern_thumb.jfif";
import calculatorThumb from "../../assets/images/thumbs/calculator_thumb.jfif";
import gasalarmThumb from "../../assets/images/thumbs/gasalarm_thumb.jpg";
import remotejobsThumb from "../../assets/images/thumbs/remotejobs_thumb.jpg";
import todoThumb from "../../assets/images/thumbs/todo_thumb.jfif";
import faqIcon from "../../assets/images/faq.png";

function Main() {
  return (
    <main className="main">
      <section className="profile-contact">
        <img src={ProfilePic} alt="profile img" />
        <div className="tech-stack">
          <h2>TECH STACK</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>
        <ContactCard />
      </section>

      <section className="projects-courses">
        <Animate
          play={true}
          duration={0.7}
          ease={"linear"}
          start={{ position: "relative", left: "-500px" }}
          end={{ position: "relative", left: "0" }}
        >
          <div className="projects">
            <h2>PROJECTS GALLERY</h2>
            <p>
              <a
                href="https://github.com/BogdanCikota"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/BogdanCikota
              </a>
            </p>
            <div className="projects-list">
              <div className="project-card remote-jobs">
                <h3>Remote Jobs</h3>
                <a
                  href="https://bogdancikota.github.io/remote-jobs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={remotejobsThumb} alt="remote jobs" />
                </a>
              </div>
              <div className="project-card gasalarm">
                <h3>Gasalarm Website</h3>
                <a
                  href="http://www.gasalarmbeograd.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gasalarmThumb} alt="Gasalarm Website" />
                </a>
              </div>
              <div className="project-card auth-mern">
                <h3>Authentication Template</h3>
                <a
                  href="https://authmernapp.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={authmernThumb} alt="auth mern" />
                </a>
              </div>
              <div className="project-card todo">
                <h3>Task Management App</h3>
                <a
                  href="https://bogdancikota.github.io/ToDoApp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={todoThumb} alt="todo app" />
                </a>
              </div>
              <div className="project-card calculator">
                <h3>Calculator</h3>
                <a
                  href="https://bogdancikota.github.io/PROJECT-CALCULATOR/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={calculatorThumb} alt="calculator" />
                </a>
              </div>
              <div className="project-card alecto">
                <h3>Design Layout</h3>
                <a
                  href="https://bogdancikota.github.io/alecto-design-layout/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={alectoThumb} alt="Alecto Design Layout" />
                </a>
              </div>
            </div>
          </div>
        </Animate>

        <Animate
          play={true}
          duration={0.7}
          ease={"linear"}
          start={{ position: "relative", left: "-500px" }}
          end={{ position: "relative", left: "0" }}
        >
          <div className="courses">
            <h2>COURSES</h2>
            <div className="course">
              <h3>UDEMY</h3>
              <a href="https://www.udemy.com/">https://www.udemy.com/</a>
              <p>
                - The Complete 2020 Web Development Bootcamp - Web Design for
                Beginners: Real World Coding in HTML &amp; CSS
              </p>
            </div>
            <div className="course">
              <h3>THE ODIN PROJECT</h3>
              <a href="https://www.theodinproject.com/">
                https://www.theodinproject.com/
              </a>

              <p> - Web development 101</p>
              <p> - HTML and CSS</p>
              <p> - JavaScript</p>
            </div>
          </div>
        </Animate>

        <section className="faq-contact">
          <Link
            className="linkToFaq"
            onClick={() => {
              window.scrollTo({ top: 0 });
            }}
            to="/faq"
          >
            <img src={faqIcon} alt="faq" />
            <span>page</span>
          </Link>

          <ContactCard />
        </section>
      </section>
    </main>
  );
}

export default Main;
