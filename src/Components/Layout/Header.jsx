import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg fixed-top" style={{ marginBottom: 0 }}>
      <div className="container">
        <Link to="/" className="navbar-brand" href="#home">$h@heer</Link>
        
        {/* Toggler button for mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{gap: "1.9rem"}}>
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Home
                <span className="active-indicator"></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                About
                <span className="active-indicator"></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Services
                <span className="active-indicator"></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Portfolio
                <span className="active-indicator"></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Contact
                <span className="active-indicator"></span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <style>{`
        .nav-link {
          position: relative;
          padding-bottom: 5px;
          transition: all 0.3s ease;
        }
        
        .nav-link:hover {
          color: gold !important;
        }
        
        .nav-link.active {
          color: gold !important;
          font-weight: 500;
        }
        
        .active-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: gold;
          transition: width 0.3s ease;
        }
        
        .nav-link:hover .active-indicator,
        .nav-link.active .active-indicator {
          width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Header;
