import React from "react";
import "./Project.css";

function Project({ id, video, description, active }) {
  return (
    <div id={id} className={`project ${active ? "active" : ""}`}>
      <div className="project-video">
        <video autoPlay loop muted className="project-video-background">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="project-overlay"></div>
      </div>
      <div className="project-description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
