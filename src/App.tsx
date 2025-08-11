import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import Programas from "./pages/Programas";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <>
      <Nav />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/programas" element={<Programas />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;


