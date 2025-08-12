import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import Programas from "./pages/Programas";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import ScrollToTopButton from "./components/ScrollToTopButton";

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
        </Routes>
      </main>

      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;


