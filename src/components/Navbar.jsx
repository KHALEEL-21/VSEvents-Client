import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.scss";
import VSLogoPNG from "../assets/VSLogoPNG.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const gotoHome = () => {
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      {/* Left Logo */}
      <div className="logo" onClick={gotoHome}>
        <img src={VSLogoPNG} alt="Logo" />
        VS Events
      </div>

      {/* Hamburger Button (mobile only) */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Right Menu (Desktop only) */}
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      {/* Fullscreen Overlay Menu (Mobile only) */}
      {menuOpen && (
        <div className="menu-overlay">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
