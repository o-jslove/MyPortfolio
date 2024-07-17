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
            description="프로젝트 설명 1"
            active={activeProject === "project1"}
          />
          <Project
            id="project2"
            video={projectVideo}
            description="프로젝트 설명 2"
            active={activeProject === "project2"}
          />
          <Project
            id="project3"
            video={projectVideo}
            description="프로젝트 설명 3"
            active={activeProject === "project3"}
          />
          <Project
            id="project4"
            video={projectVideo}
            description="프로젝트 설명 4"
            active={activeProject === "project4"}
          />
        </Section>
        <Section
          id="degrees"
          title="Degrees"
          active={activeSection === "degrees"}
        >
          <div className="degree">
            <h3>소프트웨어공학과 전공, 정보통신공학과 부전공</h3>
            <p>성공회대학교, 2017-2025</p>
          </div>
        </Section>
        <Section
          id="links"
          title="Repositories & Blog"
          active={activeSection === "links"}
        >
          <div className="links">
            <a
              href="https://github.com/o-jslove"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://velog.io/@useridnull"
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
