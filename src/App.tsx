import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Programas from "./pages/Programas";
import Contacto from "./pages/Contacto";
import Nav from './components/Nav';



function App() {
  return (
    <>
      <Nav />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
  <Route path="/programas" element={<Programas />} />
  <Route path="/contacto" element={<Contacto />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

