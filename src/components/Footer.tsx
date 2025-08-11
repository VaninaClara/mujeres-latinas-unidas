import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "/assets/logo-mlu.png"; // Logo en carpeta public/assets

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* Logo y frase */}
        <div className="footer__brand">
          <img src={logo} alt="Mujeres Latinas Unidas+" className="footer__logo" />
          <p className="footer__tagline">
            Unidas para transformar realidades.
          </p>
        </div>

        {/* Navegación rápida */}
        <nav className="footer__nav">
          <h4>Navegación</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/programas">Programas</Link></li>
            <li><Link to="/quienes-somos">Quiénes somos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>

        {/* Información de contacto */}
        <div className="footer__contact">
          <h4>Contacto</h4>
          <p>Email: info@mujereslatinas.org</p>
          <p>Tel: +34 600 000 000</p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Mujeres Latinas Unidas+. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

