import { Link } from "react-router-dom";
import "./Hero.css";
import heroImg from "../assets/mujeres-ejemplo.jpg"; // poné aquí tu imagen (temporal)

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(
          rgba(32, 64, 128, 0.65),
          rgba(32, 64, 128, 0.65)
        ), url(${heroImg})`,
      }}
      aria-label="Presentación Mujeres Latinas Unidas+"
    >
      <div className="hero__content">
        <h1>Unidas para transformar realidades</h1>
        <p>
          Acompañamos, formamos y potenciamos el liderazgo de mujeres latinas
          para impulsar cambios reales en sus comunidades.
        </p>

        <div className="hero__actions">
          <Link to="/programas" className="btn btn--primary" aria-label="Ver programas">
            Sumate
          </Link>
          <Link to="/contacto" className="btn btn--secondary" aria-label="Ir a contacto para donar">
            Doná
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
