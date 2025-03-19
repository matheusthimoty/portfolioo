import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-header-footer text-white p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white hover:text-gray-300 transition duration-300">
          Meu Portfólio
        </Link>
        <ul className="flex space-x-6">
          <li><Link to="/" className="text-white hover:text-gray-300 transition duration-300">Home</Link></li>
          <li><Link to="/about" className="text-white hover:text-gray-300 transition duration-300">Sobre</Link></li>
          <li><Link to="/projects" className="text-white hover:text-gray-300 transition duration-300">Projetos</Link></li>
          <li><Link to="/contact" className="text-white hover:text-gray-300 transition duration-300">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}