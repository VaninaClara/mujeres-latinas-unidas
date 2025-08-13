import { Link } from "react-router-dom";
import "./ProgramasPreview.css";
import formacion from "../assets/formacion.jpg";
import acompanamiento from "../assets/acompanamiento.jpg";
import liderazgo from "../assets/liderazgo.jpg";

const programas = [
  { id: 1, titulo: "Formación y Talleres", descripcion:
      "Capacitaciones presenciales y online para fortalecer habilidades y liderazgo.",
    imagen: formacion },
  { id: 2, titulo: "Acompañamiento Personal", descripcion:
      "Mentorías y orientación personalizada para mujeres en distintas etapas de su vida.",
    imagen: acompanamiento },
  { id: 3, titulo: "Liderazgo Comunitario", descripcion:
      "Iniciativas y redes de apoyo que potencian el cambio social desde lo colectivo.",
    imagen: liderazgo },
];

const ProgramasPreview = () => {
  return (
    <section className="programas-preview">
      <div className="programas-header">
        <h2>Nuestros Programas</h2>
        <p>
          Conocé las áreas en las que trabajamos para empoderar y acompañar a mujeres latinas.
        </p>
      </div>

      <div className="programas-grid">
        {programas.map((p) => (
          <article className="programa-card" key={p.id}>
            <img
              src={p.imagen}
              alt={p.titulo}
              className="programa-img"
              loading="lazy"
            />
            <h3>{p.titulo}</h3>
            <p>{p.descripcion}</p>
          </article>
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
