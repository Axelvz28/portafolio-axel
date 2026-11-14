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
      {/* El Navbar se queda fijo arriba en todas las páginas */}
      <Navbar /> 
      
      {/* Aquí se inyectan las páginas según la URL */}
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