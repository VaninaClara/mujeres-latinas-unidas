import { useState } from "react";
import "./Contacto.css";

export default function Contacto() {
  const [ok, setOk] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Acá luego conectamos con un servicio (Formspree, Formspark, EmailJS o backend propio)
    setOk(true);
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section className="contacto" aria-labelledby="contacto-title">
      <div className="contacto__wrap">
        <div className="contacto__info">
          <h2 id="contacto-title">Contacto</h2>
          <p>
            Escribinos para sumar a nuestros programas, colaborar o hacer donaciones.
          </p>

          <ul className="contacto__list">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:hola@mujereslatinas.org">hola@mujereslatinas.org</a>
            </li>
            <li>
              <strong>Instagram:</strong>{" "}
              <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                @mujereslatinasunidas
              </a>
            </li>
            <li>
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noreferrer"
              >
                +54 9 11 0000‑0000
              </a>
            </li>
          </ul>

          {/* Opcional: Mapa embebido (reemplaza la dirección) */}
          {/* <div className="contacto__mapa">
            <iframe
              title="Mapa"
              src="https://www.google.com/maps/embed?pb=..."
              loading="lazy"
            />
          </div> */}
        </div>

        <div className="contacto__form">
          <h3>Escribinos</h3>
          <form onSubmit={onSubmit} noValidate>
            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" name="nombre" type="text" required placeholder="Tu nombre" />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required placeholder="tunombre@mail.com" />

            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows={5} required placeholder="Contanos en qué te podemos ayudar"></textarea>

            <button type="submit" className="btn btn--primary">Enviar</button>

            {ok && (
              <p role="status" className="contacto__ok">
                ¡Gracias! Recibimos tu mensaje y te responderemos a la brevedad.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
