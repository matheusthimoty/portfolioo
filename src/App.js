import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./components/About/About"; // Importe a página Sobre
import Skills from "./components/Skills/Skills"; // Importe a página Habilidades
import Projects from "./components/Projects/Projects"; // Importe a página Projetos
import Contact from "./components/Contact/Contact"; // Importe a página Contato

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<LandingPage />} />

        {/* Rotas para as outras páginas */}
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;