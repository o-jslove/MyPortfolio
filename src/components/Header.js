import React from "react";
import "./Header.css";
import backgroundVideo from "../assets/videos/background.mp4"; // 배경 비디오 경로

function Header() {
  return (
    <header className="header">
      <video autoPlay loop muted className="header-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="header-overlay"></div>
      <div className="header-content">
        <h1>Min Seok Lee</h1>
        <p>Full Stack Developer</p>
      </div>
    </header>
  );
}

export default Header;
