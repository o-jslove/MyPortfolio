import React from "react";
import "./Section.css";

function Section({ id, title, children, active, description }) {
  return (
    <section
      id={id}
      className={`section ${active ? "active" : ""} ${
        id === "projects" ? "no-scale" : ""
      }`}
    >
      <div className="section-content">
        {title && <h2 className="section-title">{title}</h2>}
        {description && <p className="section-description">{description}</p>}
        {children}
      </div>
    </section>
  );
}

export default Section;
