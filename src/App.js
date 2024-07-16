import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Project from "./components/Project";
import Footer from "./components/Footer";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import projectVideo from "./assets/videos/project1.mp4"; // 프로젝트 비디오 경로

function App() {
  const [activeSection, setActiveSection] = useState("");
  const [activeProject, setActiveProject] = useState("");

  useIntersectionObserver(setActiveSection, "section");
  useIntersectionObserver(setActiveProject, ".project");

  return (
    <div className="App">
      <Navbar />
      <Header />
      <main className="container">
        <Section
          id="about"
          title="About Me"
          description="Hello! I am a passionate developer with experience in various projects. I love coding and continuously learning new technologies."
          active={activeSection === "about"}
        />
        <Section
          id="projects"
          title="Projects"
          active={activeSection === "projects"}
        >
          <Project
            id="project1"
            video={projectVideo}
            description="Description of project 1."
            active={activeProject === "project1"}
          />
          <Project
            id="project2"
            video={projectVideo}
            description="Description of project 2."
            active={activeProject === "project2"}
          />
          <Project
            id="project3"
            video={projectVideo}
            description="Description of project 3."
            active={activeProject === "project3"}
          />
          <Project
            id="project4"
            video={projectVideo}
            description="Description of project 4."
            active={activeProject === "project4"}
          />
        </Section>
        <Section
          id="degrees"
          title="Degrees"
          active={activeSection === "degrees"}
        >
          <div className="degree">
            <h3>Bachelor's Degree in Computer Science</h3>
            <p>University Name, Year</p>
          </div>
          <div className="degree">
            <h3>Master's Degree in Software Engineering</h3>
            <p>University Name, Year</p>
          </div>
        </Section>
        <Section
          id="links"
          title="Repositories & Blog"
          active={activeSection === "links"}
        >
          <div className="links">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://velog.io/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FontAwesomeIcon icon={faBlog} size="2x" />
            </a>
            <a
              href="mailto:gksflakdns12@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
