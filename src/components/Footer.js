import React, { useEffect, useRef } from "react";
import "./Footer.css";

function Footer() {
  const techStackRef = useRef(null);

  useEffect(() => {
    const techStack = techStackRef.current;
    const techStackContent = techStack.querySelector(".tech-stack-content");
    const techStackClone = techStackContent.cloneNode(true);
    techStack.appendChild(techStackClone);

    let scrollAmount = 1;
    let pause = false;

    const scroll = () => {
      if (!pause) {
        techStack.scrollLeft += scrollAmount;
        if (techStack.scrollLeft >= techStackContent.scrollWidth) {
          techStack.scrollLeft = 9;
        }
      }
      requestAnimationFrame(scroll);
    };

    techStack.addEventListener("mouseenter", () => (pause = true));
    techStack.addEventListener("mouseleave", () => (pause = false));

    scroll();

    return () => {
      techStack.removeEventListener("mouseenter", () => (pause = true));
      techStack.removeEventListener("mouseleave", () => (pause = false));
    };
  }, []);

  return (
    <footer>
      <hr />
      <p>&copy; 2024 Min Seok</p>
      <div className="tech-stack-wrapper" ref={techStackRef}>
        <div className="tech-stack-content">
          <div className="tech-stack-item">JavaScript</div>
          <div className="tech-stack-item">Java</div>
          <div className="tech-stack-item">React</div>
          <div className="tech-stack-item">Spring Boot</div>
          <div className="tech-stack-item">MySQL</div>
          <div className="tech-stack-item">JavaScript</div>
          <div className="tech-stack-item">Java</div>
          <div className="tech-stack-item">React</div>
          <div className="tech-stack-item">Spring Boot</div>
          <div className="tech-stack-item">MySQL</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
