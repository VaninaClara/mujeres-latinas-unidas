import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <h2>Suscribite a nuestras novedades</h2>
      <p>Recibí noticias, eventos y recursos directamente en tu correo.</p>
      <form
        className="newsletter__form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("¡Gracias por suscribirte!");
        }}
      >
        <input
          type="email"
          placeholder="Tu correo electrónico"
          required
        />
        <button type="submit" className="btn btn--primary">
          Suscribirme
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
