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
              A few years ago, I found a practice book with HTML and CSS
              examples. Curious, I started learning more about web development
              through tutorials and online resources. That first experience
              sparked my love for coding and inspired me to become a web
              developer.
            </p>
          </div>
          <div>
            <h3>What is your greatest strength?</h3>
            <p>
              One of my biggest strengths is persistence. I'm very determined
              when solving problems and facing challenges in web development. I
              believe in sticking with it, always looking for solutions and
              trying different approaches until I get the right result. This
              determination helps me overcome obstacles and deliver great work.
            </p>
          </div>
          <div>
            <h3>what is the project that you are most proud of?</h3>
            <p>
              One project I am proud of is a remote job board website I
              developed. I made this platform to be a central hub for remote job
              opportunities in various industries. Using my web development
              skills, I designed an easy-to-use interface, added job listings,
              and created search filters to improve the job-seeking experience
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
              Yes, I have experience working in a collaborative team
              environment. In my previous job, we used Agile methodologies and
              scrum events to communicate and manage tasks effectively. We used
              project management software like Hubstaff (similar to Jira) to
              organize and track our tasks, ensuring transparency and efficient
              teamwork throughout the development process.
            </p>
          </div>
          <div>
            <h3>How do you spend your free time?</h3>
            <p>
              In my free time, I enjoy reading articles and watching YouTube
              videos about ecology and low-waste tips because I'm very
              interested in environmental sustainability. I also love spending
              quality time in nature with friends and family, which helps
              balance my sedentary work as a web developer.
            </p>
          </div>
          <div>
            <h3>Tell me an interesting fact about yourself</h3>
            <p>
              Before starting my career in development, I had the privilege of
              working closely with children and people with learning
              disabilities. This experience helped me develop empathy, patience,
              and effective communication skills with diverse groups. It also
              made me understand the importance of inclusivity and accessibility
              in web development, motivating me to create user-friendly
              experiences for everyone.
            </p>
          </div>
        </div>

        <Link className="back-button" to={"/"}>
          Back to the main page
        </Link>
        <div onClick={() => ScrollToTop()} className="to-top-button"></div>
      </main>
    </div>
  );
}

export default Faq;
