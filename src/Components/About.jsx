import React, { useEffect } from 'react';
import aboutImage from '../assets/images/about2.png';
import cv from '../assets/cv/ShaheerIsmail.pdf';
const About = () => {


  const handledownload = () => {
    const link = document.createElement("a");
    link.href = cv;               // imported pdf ka path
    link.download = "ShaheerIsmail.pdf";  // file ka naam
    link.click();
  };

  useEffect(() => {

    document.title = "About Us | Shaheer Portfolio"

  }, [])

  return (

    <div className="about-container">
      <div className="about-1" data-aos="fade-down">
        <img src={aboutImage} alt="About Me" />
      </div>

      <div className="about-2" data-aos="fade-down">
        <h1>About Me</h1>
        <p>
          Hello! I’m Shaheer, a passionate Full Stack Developer who loves turning ideas into reality through clean, efficient, and creative code. From crafting sleek and responsive front-end designs to building powerful back-end systems, I enjoy working on every layer of web development. My focus is always on creating user-friendly, scalable, and performance-driven applications that make an impact. With expertise in MERN Stack and Laravel, I combine modern technologies with problem-solving skills to deliver complete solutions. Beyond coding, I believe in continuous learning, innovation, and pushing boundaries to stay ahead in the digital world.
        </p>

        <div className="info">
          <ul>
            <li><strong>Name :</strong> Shaheer Ismail Shah</li>
            <li><strong>Date of Birth :</strong> October 10, 2023</li>
            <li><strong>Address :</strong> House 7A Karachi, Pakistan</li>
            <li><strong>Zip Code :</strong> 75800</li>
            <li><strong>Email :</strong> shaheeraptech1@gmail.com</li>
            <li><strong>Phone :</strong> +92 3108530907</li>
          </ul>
        </div>

        <h4><span style={{ color: "gold" }}>10</span> Projects Complete</h4>
        <button onClick={handledownload} className="mybtn" id="about-btn">Download CV</button>
      </div>



      <div className='about-container-resume' data-aos="zoom-in">
        <h1>Resume</h1>
        <p>My resume reflects my journey as a Full Stack Developer, showcasing expertise in MERN Stack and Laravel, with a strong focus on building scalable, user-friendly, and efficient web applications.</p>
        <div className='exprience'>
          <div className='box'>
            <h2>2021-2022</h2>
            <h3>Assistent payroll Incharge</h3>
            <h4>Eastern Garments PVT LTD</h4>
            <h5>Before stepping into the tech field, I worked as an Assistant Payroll Incharge, where I gained valuable experience in data management, accuracy, and handling responsibilities with precision. This role strengthened my organizational skills and attention to detail, which I now apply effectively in my development career.</h5>
          </div>
          <div className='box'>
            <h2>2022-2023</h2>
            <h3>Full Stack Developer</h3>
            <h4>Mark Coders</h4>
            <h5>From 2022 to 2023, I worked as a Full Stack Developer at Mark Coders, where I contributed to designing and developing dynamic web applications. My role involved working on both front-end and back-end, ensuring responsive designs, optimized performance, and scalable solutions tailored to client needs.</h5>
          </div><div className='box'>
            <h2>2023-2025</h2>
            <h3>Full Stack Developer</h3>
            <h4>Astral Developoers</h4>
            <h5>From 2023 to 2025, I worked as a Full Stack Developer at Astral Developers, where I was actively involved in building modern web applications with scalable architectures. My responsibilities included developing responsive front-end interfaces, managing robust back-end systems, and collaborating with teams to deliver high-quality digital solutions.</h5>
          </div><div className='box'>
            <h2>2025-Current</h2>
            <h3>Senior Faculty of Web Developer</h3>
            <h4>Makhani Institute of Technology</h4>
            <h5>Currently, I am working at Makhani Institute of Technology as a Senior Web Developer & Faculty Trainer, where I provide professional training sessions, mentor students, and share industry-level expertise in Full Stack Development. This role allows me to blend my technical skills with teaching, helping aspiring developers build strong foundations for their careers.</h5>
          </div>


        </div>
      </div>


    </div>
  );
};

export default About;
