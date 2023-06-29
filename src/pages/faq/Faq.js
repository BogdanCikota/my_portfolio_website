import { Link } from "react-router-dom";
import Header from "../../layouts/header/Header";
import "./Faq.scss";
import ScrollToTop from "../../components/ScrollToTop";
import { useEffect } from "react";

function Faq() {
  useEffect(() => {
    ScrollToTop();
  }, []);
  return (
    <div className="Faq container">
      <Header />
      <main className="faq-main">
        <div className="faq-main-container">
          <h2 className="faq-heading">FAQ</h2>
          <div>
            <h3>Why Web development?</h3>
            <p>
              Web development captivates me because it allows me to combine my
              technical skills with my passion for creativity. The ability to
              bring ideas to life through visually appealing websites and
              interactive experiences drives my motivation. Furthermore, the
              ever-evolving nature of the field and the opportunity to make a
              tangible impact in the digital world inspire me to continuously
              learn and grow as a web developer.
            </p>
          </div>
          <div>
            <h3>How did you start?</h3>
            <p>
              A few years ago, my curiosity led me to stumble upon a practice
              book filled with HTML and CSS examples. Intrigued by the
              possibilities, I delved into the world of web development,
              exploring tutorials and online resources to learn more. That
              initial encounter ignited my passion for coding and inspired me to
              pursue a career as a web developer.
            </p>
          </div>
          <div>
            <h3>What is your greatest strength?</h3>
            <p>
              One of my greatest strengths is persistence. I have a tenacious
              attitude when it comes to problem-solving and tackling challenges
              in web development. I believe in the importance of perseverance,
              continuously seeking solutions and exploring different approaches
              until I achieve the desired outcome. This determination enables me
              to overcome obstacles and deliver high-quality results.
            </p>
          </div>
          <div>
            <h3>what is the project that you are most proud of?</h3>
            <p>
              One project that I am proud of is the development of a remote job
              board website. I created this platform to provide a centralized
              hub for remote job opportunities across various industries. By
              leveraging my web development skills, I designed an intuitive and
              user-friendly interface, integrated job listing functionality, and
              implemented search filters to enhance the job-seeking experience
              for remote workers.
              <br />
              You can check out the project at:{" "}
              <a
                href="https://bogdancikota.github.io/remote-jobs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://bogdancikota.github.io/
                <wbr />
                remote-jobs/
              </a>
              .
            </p>
          </div>
          <div>
            <h3>did you have any collaboration/ teamwork experiance?</h3>
            <p>
              Yes, I have prior experience working in a collaborative team
              environment. In my previous position, we followed Agile
              methodologies, specifically utilizing scrum events to facilitate
              effective communication and task management. We utilized project
              management software like Hubstaff (similar to Jira) to organize
              and track our tasks, ensuring transparency and efficient teamwork
              throughout the development process.
            </p>
          </div>
          <div>
            <h3>How do you spend your free time?</h3>
            <p>
              In my free time, I immerse myself in articles and YouTube videos
              related to ecology and low-waste tips, as I have a deep interest
              in environmental sustainability. Additionally, I value spending
              quality time in nature, often accompanied by friends and family,
              which provide a healthy balance to my sedentary work as a web
              developer.
            </p>
          </div>
          <div>
            <h3>Tell me an interesting fact about yourself</h3>
            <p>
              Before embarking on my development career, I had the privilege of
              working closely with children and individuals with learning
              disabilities. This experience allowed me to develop strong
              empathy, patience, and the ability to communicate effectively with
              diverse groups of people. It shaped my understanding of the
              importance of inclusivity and accessibility in web development,
              driving my motivation to create user-friendly experiences for all
              individuals.
            </p>
          </div>
        </div>

        <Link className="back-button" to={"/"}>
          Back to the main page
        </Link>
        <div onClick={()=> ScrollToTop()} className="to-top-button"></div>
      </main>
    </div>
  );
}

export default Faq;
