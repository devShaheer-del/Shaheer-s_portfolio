import React from "react";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-item" data-aos="fade-up">
        <div className="portfolio-image"><img src={project1} alt="Project 1" /></div>
        <div className="portfolio-details">
          <h2>Makhani Institute of Technology</h2>
          <p>...</p>
          <h4>Technologies Used:</h4>
          <ul><li>Laravel 12</li><li>MySQL</li><li>Tailwind Css</li><li>Bootstrap</li></ul>
          <div className="portfolio-links">
            <a href="https://mit.makhaniwelfare.com/" target="_blank" rel="noreferrer">Live Demo</a>
            <a href="https://github.com/devShaheer-del/Makhani_Institute_of_Technology" target="_blank" rel="noreferrer">GitHub Repo</a>
          </div>
        </div>
      </div>

      <div className="portfolio-item" data-aos="fade-up">
        <div className="portfolio-image"><img src={project2} alt="Project 2" /></div>
        <div className="portfolio-details">
          <h2>Fitness Tracker</h2>
          <p>...</p>
          <h4>Technologies Used:</h4>
          <ul><li>React</li><li>Node Js</li><li>Express Js</li><li>MongoDB</li><li>Tailwind Css</li></ul>
          <div className="portfolio-links">
            <a href="https://fitness-tracker-ashen-pi.vercel.app/" target="_blank" rel="noreferrer">Live Demo</a>
            <a href="https://github.com/devShaheer-del/Fitness-Tracker" target="_blank" rel="noreferrer">GitHub Repo</a>
          </div>
        </div>
      </div>

      <div className="portfolio-item" data-aos="fade-up">
        <div className="portfolio-image"><img src={project3} alt="Project 3" /></div>
        <div className="portfolio-details">
          <h2>Build Your Dream PC</h2>
          <p>...</p>
          <h4>Technologies Used:</h4>
          <ul><li>PHP</li><li>MySQL</li><li>Tailwind Css</li><li>Google Fonts</li></ul>
          <div className="portfolio-links">
            <a href="https://github.com/DANGEOUR/Build-Your-Dream" target="_blank" rel="noreferrer">GitHub Repo</a>
          </div>
        </div>
      </div>

      <div className="portfolio-item" data-aos="fade-up">
        <div className="portfolio-image"><img src={project4} alt="Project 4" /></div>
        <div className="portfolio-details">
          <h2>Vaccination Management System</h2>
          <p>...</p>
          <h4>Technologies Used:</h4>
          <ul><li>PHP</li><li>MySQL</li><li>Tailwind Css</li><li>Google Fonts</li></ul>
          <div className="portfolio-links">
            <a href="https://github.com/DANGEOUR/vaccination" target="_blank" rel="noreferrer">GitHub Repo</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
