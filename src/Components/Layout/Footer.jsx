import React from "react";

const Footer = () => {
  return (
    <footer className="footer text-white py-4 ">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        {/* Left Side */}
        <div className="mb-3 mb-md-0 text-center text-md-start">
          <h5 className="mb-1"><span style={{ color: "gold" }}>Shaheer</span> Ismail Shah - Full Stack Developer</h5>
          <small className="text-secondary">© 2025 All Rights Reserved</small>
        </div>

        {/* Right Side (Social Media Icons) */}
        <div className="d-flex justify-content-center gap-3">
          <a href="https://www.facebook.com/shaheer.king.7712" target="_blank" className="text-white fs-4" aria-label="Facebook">
            <i className="bi bi-facebook" ></i>
          </a>

          <a href="https://www.instagram.com/devshaheershah/" target="_blank" className="text-white fs-4" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/shaheer-ismail-shah-3bb4b634a/" target="_blank" className="text-white fs-4" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/devShaheer-del" target="_blank" className="text-white fs-4" aria-label="GitHub">
            <i className="bi bi-github"></i>
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
