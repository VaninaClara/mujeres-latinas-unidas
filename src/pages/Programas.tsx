import React from "react";
import "./Programas.css";


const programas = [
  {
    titulo: "Formación y Capacitación",
    descripcion: "Cursos y talleres para potenciar habilidades y fomentar el liderazgo de mujeres latinas.",
    imagen: "/assets/programa1.jpg"
  },
  {
    titulo: "Apoyo y Acompañamiento",
    descripcion: "Asistencia personalizada para enfrentar desafíos y promover el bienestar integral.",
    imagen: "/assets/programa2.jpg"
  },
  {
    titulo: "Liderazgo Comunitario",
    descripcion: "Proyectos que fortalecen la participación y la voz de mujeres en sus comunidades.",
    imagen: "/assets/programa3.jpg"
  }
];

const Programas: React.FC = () => {
  return (
    <section className="programas-section">
      <h2 className="section-title">Nuestros Programas</h2>
      <div className="programas-grid">
        {programas.map((prog, index) => (
          <div className="programa-card" key={index}>
            <img src={prog.imagen} alt={prog.titulo} className="programa-img" />
            <h3>{prog.titulo}</h3>
            <p>{prog.descripcion}</p>
            <button className="programa-btn">Leer más</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programas;
