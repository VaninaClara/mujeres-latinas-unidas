import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Nav from './components/Nav';



function App() {
  return (
    <>
      <Nav />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

