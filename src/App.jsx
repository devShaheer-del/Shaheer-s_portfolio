import React,{useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {


  useEffect(() => {
    AOS.init({
      duration: 1000,  // animation speed (ms)
      easing: "ease-in-out",
      once: false,     // animation bar bar trigger ho
      mirror: true,    // scroll up par bhi trigger ho
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />   {/* 👈 corrected */}
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />

        {/* 404 Page */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Route>
    </Routes>
  );
};

export default App;
