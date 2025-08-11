import { Link } from "react-router-dom";
import "./ProgramasPreview.css";

const programas = [
  {
    id: 1,
    titulo: "Formación y Talleres",
    descripcion:
      "Capacitaciones presenciales y online para fortalecer habilidades y liderazgo.",
    icono: "📚",
  },
  {
    id: 2,
    titulo: "Acompañamiento Personal",
    descripcion:
      "Mentorías y orientación personalizada para mujeres en distintas etapas de su vida.",
    icono: "🤝",
  },
  {
    id: 3,
    titulo: "Liderazgo Comunitario",
    descripcion:
      "Iniciativas y redes de apoyo que potencian el cambio social desde lo colectivo.",
    icono: "🌎",
  },
];

const ProgramasPreview = () => {
  return (
    <section className="programas-preview">
      <div className="programas-header">
        <h2>Nuestros Programas</h2>
        <p>
          Conocé las áreas en las que trabajamos para empoderar y acompañar a
          las mujeres latinas.
        </p>
      </div>

      <div className="programas-grid">
        {programas.map((p) => (
          <div key={p.id} className="programa-card">
            <div className="programa-icon">{p.icono}</div>
            <h3>{p.titulo}</h3>
            <p>{p.descripcion}</p>
          </div>
        ))}
      </div>

      <div className="programas-cta">
        <Link to="/programas" className="btn btn--primary">
          Ver todos los programas
        </Link>
      </div>
    </section>
  );
};

export default ProgramasPreview;
