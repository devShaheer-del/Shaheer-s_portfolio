import React, { useEffect } from 'react'
import hero from '../assets/images/hero.png';
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';

const Home = () => {

  useEffect(()=>{

    document.title = "Home | Shaheer Portfolio"

  },[])

  return (
    <div className='hero-container'>

      <div className="hero-content">
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
          <a href='../assets/cv/ShaheerIsmail.pdf' download className='mybtn' >Download CV</a>
          <Link to="/contact" href="#contact" className='mybtn'>Contact Me</Link>
        </div>
      </div>

      <div className="hero-image">
        <img src={hero} alt="Shaheer Hero" />
      </div>

    </div>
  )
}

export default Home
