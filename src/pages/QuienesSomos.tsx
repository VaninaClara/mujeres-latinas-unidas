import "./QuienesSomos.css";
import quienesImg from "/assets/quienes-somos.jpg"; // una imagen representativa

const QuienesSomos = () => {
  return (
    <section className="quienes" aria-labelledby="quienes-title">
      <div className="quienes__container">
        <div className="quienes__text">
          <h2 id="quienes-title">Quiénes somos</h2>
          <p>
            Mujeres Latinas Unidas+ es una organización dedicada a fortalecer,
            acompañar y visibilizar el liderazgo de mujeres latinas. Trabajamos
            para impulsar cambios sociales reales a través de la formación,
            el acompañamiento y la creación de redes de apoyo.
          </p>
          <p>
            Creemos en el poder de la unión, la diversidad y la participación
            activa para transformar nuestras comunidades y generar un impacto
            positivo y duradero.
          </p>
        </div>

        <div className="quienes__image">
          <img src={quienesImg} alt="Mujeres Latinas Unidas trabajando juntas" />
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
