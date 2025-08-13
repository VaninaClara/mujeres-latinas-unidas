import "./BrandHighlight.css";
import logo from "../assets/logo-mlu.png";

const BrandHighlight = () => {
  return (
    <section className="brand-highlight">
      <img src={logo} alt="Mujeres Latinas Unidas+" className="brand-highlight__logo" />
      <div className="brand-highlight__text">
        <h2>“Juntas, nuestra voz transforma realidades”</h2>
        <p>Una comunidad de mujeres que se apoyan, se forman y lideran cambios positivos.</p>
      </div>
    </section>
  );
};

export default BrandHighlight;
