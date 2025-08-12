import { useEffect, useState } from "react";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Mostrar botón cuando se baja cierto scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Subir suavemente y a ver si funciona la reconcha
  function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

  return (
    visible && (
      <button
        className="scroll-to-top"
        onClick={scrollToTop}
        aria-label="Subir al inicio"
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
