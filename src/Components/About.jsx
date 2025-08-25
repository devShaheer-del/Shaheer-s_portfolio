import React from 'react';
import aboutImage from '../assets/images/about2.png';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-1">
        <img src={aboutImage} alt="About Me" />
      </div>

      <div className="about-2">
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequatur est eius accusantium cumque eligendi repellat nisi?
          Provident nulla cupiditate nisi sed iure ut aliquid.
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
        <button className="mybtn" id="about-btn">Download CV</button>
      </div>



      <div className='about-container-resume'>
        <h1>Resume</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit earum voluptates quae sint iure odio. Earum beatae commodi, magnam cumque velit dolorem tempora accusamus!</p>
        <div className='exprience'>
          <div className='box'>
            <h2>2021-2022</h2>
            <h3>Assistent payroll Incharge</h3>
            <h4>Eastern Garments PVT LTD</h4>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam delectus rerum ab architecto rem praesentium assumenda, eius ipsa quas veniam amet sit eligendi vero, libero odit aliquid voluptatibus, cupiditate iure aspernatur tenetur dignissimos nostrum.</h5>
          </div>
          <div className='box'>
            <h2>2022-2023</h2>
            <h3>Full Stack Developer</h3>
            <h4>Mark Coders</h4>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam delectus rerum ab architecto rem praesentium assumenda, eius ipsa quas veniam amet sit eligendi vero, libero odit aliquid voluptatibus, cupiditate iure aspernatur tenetur dignissimos nostrum.</h5>
          </div><div className='box'>
            <h2>2023-2025</h2>
            <h3>Full Stack Developer</h3>
            <h4>Astral Developoers</h4>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam delectus rerum ab architecto rem praesentium assumenda, eius ipsa quas veniam amet sit eligendi vero, libero odit aliquid voluptatibus, cupiditate iure aspernatur tenetur dignissimos nostrum.</h5>
          </div><div className='box'>
            <h2>2025-Current</h2>
            <h3>Senior Faculty of Web Developer</h3>
            <h4>Makhani Institute of Technology</h4>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam delectus rerum ab architecto rem praesentium assumenda, eius ipsa quas veniam amet sit eligendi vero, libero odit aliquid voluptatibus, cupiditate iure aspernatur tenetur dignissimos nostrum.</h5>
          </div>


        </div>
      </div>


    </div>
  );
};

export default About;
