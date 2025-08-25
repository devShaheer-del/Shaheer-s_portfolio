import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await axios.post(`https://portfoliobackend-wheat.vercel.app/api/v1/send`, formData);
      if (res.data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else setStatus("❌ Failed to send message.");
    } catch (error) {
      console.error(error);
      setStatus("❌ Server error. Try again later.");
    }
  };

  return (
    <section className="contact-section py-5" id="contact" style={{ backgroundColor: "#000" }}>
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="fw-bold text-white"><span style={{ color: "gold" }}>Get</span> in Touch</h2>
          <p className="text-light">Have any questions or want to work together? Fill the form below.</p>
        </div>

        <div className="row g-4">
          <div className="col-md-5" data-aos="fade-right">
            <div className="contact-info p-4 shadow rounded bg-dark">
              <h4 className="fw-bold mb-3 text-white">Contact Information</h4>
              <p className="text-light"><i className="bi bi-geo-alt-fill text-gold"></i> Karachi, Pakistan</p>
              <p className="text-light"><i className="bi bi-envelope-fill text-gold"></i> shaheeraptech1@gmail.com</p>
              <p className="text-light"><i className="bi bi-telephone-fill text-gold"></i> +92 310 8530907</p>
              <div className="social-icons mt-3">
                <a href="https://www.facebook.com/shaheer.king.7712" target="_blank" className="me-3 text-gold"><i className="bi bi-facebook fs-4"></i></a>
                <a href="https://www.linkedin.com/in/shaheer-ismail-shah-3bb4b634a/" target="_blank" className="me-3 text-gold"><i className="bi bi-linkedin fs-4"></i></a>
                <a href="https://github.com/devShaheer-del" target="_blank" className="text-gold"><i className="bi bi-github fs-4"></i></a>
              </div>
            </div>
          </div>

          <div className="col-md-7" data-aos="fade-left">
            <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-dark">
              <div className="mb-3">
                <label className="form-label text-white">Your Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label className="form-label text-white">Your Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label className="form-label text-white">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} className="form-control" rows="4" placeholder="Write your message" required></textarea>
              </div>
              <button type="submit" className="btn w-100" style={{ backgroundColor: "gold", color: "black", border: "none", fontWeight: "600" }}>Send Message</button>
              {status && <p className="mt-3 text-center text-white">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
