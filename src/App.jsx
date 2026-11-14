import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SobreMi from './pages/SobreMi';
import Proyectos from './pages/Proyectos';
import Habilidades from './pages/Habilidades';
import Contacto from './pages/Contacto';

function App() {
  return (
    <BrowserRouter>
      
      <Navbar /> 
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;