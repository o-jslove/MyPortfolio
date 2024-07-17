import React from "react";
import "./Project.css";

function Project({
  id,
  video,
  duration,
  teamSize,
  technologies,
  active,
  link,
}) {
  return (
    <div id={id} className={`project ${active ? "active" : ""}`}>
      <div className="project-video">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <video autoPlay loop muted className="project-video-background">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="project-overlay"></div>
        </a>
      </div>
      <div className="project-description">
        <p>제작 기간: {duration}</p>
        <p>참여 인원: {teamSize}</p>
        <p>사용한 기술: {technologies.join(", ")}</p>
      </div>
    </div>
  );
}

export default Project;
