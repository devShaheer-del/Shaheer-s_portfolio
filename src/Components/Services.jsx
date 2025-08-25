import React, { useState, useEffect } from 'react'
import frontend from '../assets/icons/ux.png';
import backend from '../assets/icons/backend.png';
import database from '../assets/icons/database-management.png';
import mobile from '../assets/icons/smartphone.png';
import seo from '../assets/icons/seo.png';
import wordpress from '../assets/icons/wordpress.png';

const Services = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  const skills = [
    { name: "HTML", level: "100%" },
    { name: "CSS", level: "70%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "75%" },
    { name: "Node.js", level: "65%" },
    { name: "MongoDB", level: "60%" },
  ];

  return (
    <>
      <div className="container-service">
        <div className='text-content' data-aos="fade-down">
          <h1>Services</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </div>

        <div className="services">
          <div className='service-box' data-aos="zoom-in"><img src={frontend} alt="" /><h5>Front End Development</h5></div>
          <div className='service-box' data-aos="zoom-in"><img src={backend} alt="" /><h5>Back End Development</h5></div>
          <div className='service-box' data-aos="zoom-in"><img src={database} alt="" /><h5>Database Management</h5></div>
          <div className='service-box' data-aos="zoom-in"><img src={mobile} alt="" /><h5>Cross Platform Apps</h5></div>
          <div className='service-box' data-aos="zoom-in"><img src={seo} alt="" /><h5>SEO</h5></div>
          <div className='service-box' data-aos="zoom-in"><img src={wordpress} alt="" /><h5>WordPress Development</h5></div>
        </div>
      </div>

      <div className="skills-container">
        <div className="text-content" data-aos="fade-up">
          <h1>My Skills</h1>
          <p>Here are some of my technical skills...</p>
        </div>

        <div className="skills-box">
          {skills.map((skill, index) => (
            <div className="skill" key={index} data-aos="fade-right">
              <span>{skill.name}</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: animate ? skill.level : "0%" }}
                >
                  {animate ? skill.level : ""}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Services
