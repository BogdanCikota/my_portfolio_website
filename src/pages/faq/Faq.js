import Header from "../../layouts/header/Header";
import "./Faq.scss";

function Faq() {
  return (
    <div className="Faq container">
      <Header />
      <main className="faq-main">
        <div className="faq-main-container">
          <div className="my-story">
            <h3>HERE'S MY STORY:</h3>
            <p>
              I'm an enthusiastic developer with great interest and a desire to
              work and improve. People see me as a systematic, detailed,
              proactive, communicative person. I can see myself working in an
              Agile environment.{" "}
            </p>
          </div>
          <h2 className="faq-heading">FAQ</h2>
          <div>
            <h3>Why Web development?</h3>
            <p>
              Today, everything is on the internet. Web developers are making
              applications that solve complex business problems. Many of those
              apps are connected to some external device, so we now have IoT,
              which is very exciting. The future is on the web, indeed.
            </p>
          </div>
          <div>
            <h3>How did you start?</h3>
            <p>
              A few years ago, I saw a practice book with HTML and CSS examples.
              The code was looking like Chinese to me. It was a difficult but
              challenging experience.
            </p>
          </div>
          <div>
            <h3>What is your greatest strength?</h3>
            <p>
              Persistence. When people quit, I keep going until the problem is
              solved.
            </p>
          </div>
          <div>
            <h3>what is the project that you are most proud of?</h3>
            <p>
              Remote jobs app
              <br />
              You can check it{" "}
              <a
                href="https://bogdancikota.github.io/remote-jobs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
          </div>
          <div>
            <h3>did you have any collaboration/ teamwork experiance?</h3>
            <p>
              Yes. In a previous position, I worked in an Agile environment. We
              had scrum events, and tasks were organized in Hubstaff (a software
              like Jira)
            </p>
          </div>
          <div>
            <h3>How do you spend your free time?</h3>
            <p>
              I like to read articles and watch YouTube videos about ecology and
              low-waste tips. I also love to spend some quality time in nature
              with my friends and family.
            </p>
          </div>
          <div>
            <h3>Tell me Fun fact about you?</h3>
            <p>
              Before my development career, I worked with children and people
              with learning disabilities.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Faq;
