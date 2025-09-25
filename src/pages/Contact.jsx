import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import "./Contact.scss";
import GoogleMap from "../assets/GoogleMap.png"; // your background image

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("This is just a UI demo. Your message would be sent here.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
        />

        <button type="submit">Send Message</button>
      </form>

      <div className="social-section">
        <div className="icons">
          <a
            href="https://www.instagram.com/vs_events_planners/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.instagram.com/vs_events_planners/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://wa.me/7358897133"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
        <p>
          Address: VS EVENT PLANERS, 6, Anna Salai Main Rd, Melvisharam, Tamil
          Nadu 632509
        </p>
      </div>

      {/* Floating small map at bottom-right */}
      <div className="floating-map">
        <a
          href="https://maps.app.goo.gl/F3acRN6HhcVmAjfZ9"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
            height: "100%",
            color: "#000000",
            fontFamily: "'Montserrat', 'Poppins', Arial, sans-serif",
            fontWeight: "800",
            fontSize: "12px",
            textDecoration: "none",
            textShadow: `
              1px 1px 2px rgba(255,255,255,0.7),
              2px 2px 4px rgba(0,0,0,0.8)
            `,
            WebkitTextStroke: "0.5px #000000",
            paddingBottom: "10px",
          }}
        >
          VS Event Planners
        </a>
      </div>
    </div>
  );
};

export default Contact;
