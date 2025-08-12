import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../assets/logo-mlu.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(v => !v);
  const closeMenu = () => setMenuOpen(false);

  // 🔒 Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) document.body.classList.add("menu-open");
    else document.body.classList.remove("menu-open");
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  // ⎋ Cerrar con tecla ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeMenu();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Mujeres Latinas Unidas+" />
        </Link>
      </div>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
        aria-controls="nav-panel"
        role="button"
      >
        <span></span><span></span><span></span>
      </div>

      {/* Overlay solo cuando está abierto (toca afuera y cierra) */}
      {menuOpen && (
        <button className="nav-overlay" onClick={closeMenu} aria-label="Cerrar menú"></button>
      )}

      <ul id="nav-panel" className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
        <li><Link to="/quienes-somos" onClick={closeMenu}>Quiénes Somos</Link></li>
        <li><Link to="/programas" onClick={closeMenu}>Programas</Link></li>
        <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
        <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;


 