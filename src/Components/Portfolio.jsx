import React,{useEffect} from "react";
// import "./Portfolio.css";
import project1 from "../assets/images/project1.png"; // apni image import karo
import project2 from "../assets/images/project2.png"; // apni image import karo
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
const Portfolio = () => {
  useEffect(()=>{
  
      document.title = "Portfolio | Shaheer Portfolio"
  
    },[])
  return (
    <div className="portfolio-container">
      <div className="portfolio-item">
        {/* Left Side - Image */}
        <div className="portfolio-image">
          <img src={project1} alt="Project 1" />
        </div>

        {/* Right Side - Details */}
        <div className="portfolio-details">
          <h2>Makhani Institute of Technology</h2>
          <p>
            This is Complete Web Application with Admin dashboard of Private Intitute and
            the name of MIT In this application Super admin Admin and more authorized person manege
            the content and controller all personal and sensitive data of students and all Sataf.
          </p>
          <h4>Technologies Used:</h4>
          <ul>
            <li>Laravel 12</li>
            <li>MySQL</li>
            <li>Tailwind Css</li>
            <li>Bootstrap</li>
          </ul>
          <div className="portfolio-links">
            <a href="https://mit.makhaniwelfare.com/" target="_blank" rel="noreferrer">
              Live Demo
            </a>
            <a href="https://github.com/devShaheer-del/Makhani_Institute_of_Technology" target="_blank" rel="noreferrer">
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
      <div className="portfolio-item">
        {/* Left Side - Image */}
        <div className="portfolio-image">
          <img src={project2} alt="Project 1" />
        </div>

        {/* Right Side - Details */}
        <div className="portfolio-details">
          <h2>Fitness Tracker</h2>
          <p>
            This is Complete Web Application with User dashboard of fitness Tracker this application
            fully track your fitness here you can track your body count body measurment your workouts
            like strenght and cardio as well here you can check global fitness records when you can use and
            track your fitness then you can check your fitness record and reports that will be genrated by my
            Application.
          </p>
          <h4>Technologies Used:</h4>
          <ul>
            <li>React</li>
            <li>Node Js</li>
            <li>Express Js</li>
            <li>MongoDB</li>
            <li>Tailwind Css</li>

          </ul>
          <div className="portfolio-links">
            <a href="https://fitness-tracker-ashen-pi.vercel.app/" target="_blank" rel="noreferrer">
              Live Demo
            </a>
            <a href="https://github.com/devShaheer-del/Fitness-Tracker" target="_blank" rel="noreferrer">
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
       <div className="portfolio-item">
        {/* Left Side - Image */}
        <div className="portfolio-image">
          <img src={project3} alt="Project 1" />
        </div>

        {/* Right Side - Details */}
        <div className="portfolio-details">
          <h2>Fitness Tracker</h2>
          <p>
            This is Complete Web Application with User and Admin  dashboard this is Online build your dream pc
            like Gaming beast you have to access select a seprate seprate part of intier pc and build it 
            and in this web have a pre build pc already here you can see more option to buy and build your
            dream pc as well.
          </p>
          <h4>Technologies Used:</h4>
          <ul>
            <li>PHP</li>
            <li>MySQL</li>
            <li>Tailwind Css</li>
            <li>Google fonts</li>
        

          </ul>
          <div className="portfolio-links">
      
            <a href="https://github.com/DANGEOUR/Build-Your-Dream" target="_blank" rel="noreferrer">
              GitHub Repo
            </a>
          </div>
        </div>
      </div>

      <div className="portfolio-item">
        {/* Left Side - Image */}
        <div className="portfolio-image">
          <img src={project4} alt="Project 1" />
        </div>

        {/* Right Side - Details */}
        <div className="portfolio-details">
          <h2>Vaccination Management System</h2>
          <p>
            This is Complete Web Application with User and Admin  dashboard here you can be apply for vaccination admin and super 
            admin can manage and add user data and many more thing this is fully functionall web.
          </p>
          <h4>Technologies Used:</h4>
          <ul>
            <li>PHP</li>
            <li>MySQL</li>
            <li>Tailwind Css</li>
            <li>Google fonts</li>
        

          </ul>
          <div className="portfolio-links">
      
            <a href="https://github.com/DANGEOUR/vaccination" target="_blank" rel="noreferrer">
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;


