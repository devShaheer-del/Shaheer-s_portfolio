import React, { useEffect } from 'react'
import hero from '../assets/images/hero.png';
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';
import cv from "../assets/cv/ShaheerIsmail.pdf";
const Home = () => {

  useEffect(()=>{

    document.title = "Home | Shaheer Portfolio"

  },[])

  return (
    <div className='hero-container'>

      <div className="hero-content" data-aos="fade-left">
        <h3>Hello!</h3>
        <h1>I'm <span className="highlight">Shaheer</span></h1>
        <h1>Ismail Shah</h1>

        <h4>
          <Typewriter
            options={{
              strings: [
                "Front End Developer",
                "Backend Developer",
                "Android Developer",
                "Laravel Developer",
                "MERN Stack Developer"
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30
            }}
          />
        </h4>

        <div className='hero-buttons'>
          <a href={cv}  download="ShaheerIsmail.pdf"  className='mybtn' >Download CV</a>
          <Link to="/contact" href="#contact" className='mybtn'>Contact Me</Link>
        </div>
      </div>

      <div className="hero-image" data-aos="fade-right">
        <img src={hero} alt="Shaheer Hero" />
      </div>

    </div>
  )
}

export default Home
