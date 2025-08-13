import React from "react";
import "./Programas.css";
import formacion from "../assets/formacion.jpg";
import acompanamiento from "../assets/acompanamiento.jpg"; // sin ñ
import liderazgo from "../assets/liderazgo.jpg";

const programas = [
  { titulo: "Formación y Capacitación",
    descripcion: "Cursos y talleres para potenciar habilidades y fomentar el liderazgo de mujeres latinas.",
    imagen: formacion
  },
  { titulo: "Apoyo y Acompañamiento",
    descripcion: "Asistencia personalizada para enfrentar desafíos y promover el bienestar integral.",
    imagen: acompanamiento
  },
  { titulo: "Liderazgo Comunitario",
    descripcion: "Proyectos que fortalecen la participación y la voz de mujeres en sus comunidades.",
    imagen: liderazgo
  }
];

const Programas: React.FC = () => (
  <section className="programas-section">
    <h2 className="section-title">Nuestros Programas</h2>
    <div className="programas-grid">
      {programas.map((p, i) => (
        <div className="programa-card" key={i}>
          <img src={p.imagen} alt={p.titulo} className="programa-img" loading="lazy" />
          <h3>{p.titulo}</h3>
          <p>{p.descripcion}</p>
          <button className="programa-btn">Leer más</button>
        </div>
      ))}
    </div>
  </section>
);

export default Programas;

