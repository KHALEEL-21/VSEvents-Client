import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import VSLogoPNG from "../assets/VSLogoPNG.png";

const Navbar = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/");
  };
  return (
    <header className="navbar">
      {/* Left Logo */}
      <div className="logo" onClick={gotoHome}>
        <img src={VSLogoPNG} alt="Logo" />
        VS Events
      </div>

      {/* Right Menu */}
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Navbar;
