import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../assets/logo-mlu.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Mujeres Latinas Unidas+" />
        </Link>
      </div>

      {/* Botón hamburguesa */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Abrir menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Enlaces */}
      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
  <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
  <li><Link to="/quienes-somos" onClick={() => setMenuOpen(false)}>Quiénes Somos</Link></li>
  <li><Link to="/programas" onClick={() => setMenuOpen(false)}>Programas</Link></li>
  <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
  <li><Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
</ul>

    </nav>
  );
};

export default Nav;

