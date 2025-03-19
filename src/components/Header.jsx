import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Importe ícones do react-icons

export default function Header() {
  return (
    <header className="bg-transparent/10 backdrop-blur-sm text-white p-4 fixed w-full top-0 z-50 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo e Nome */}
        <Link
          to="/"
          className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
        >
          Matheusthimoty
        </Link>

        {/* Ícones de Redes Sociais */}
        <ul className="flex space-x-6 items-center">
          <li>
            <a
              href="https://www.linkedin.com/in/matheusthimoty/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-500 transition duration-300 hover:scale-110 transform"
              title="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/matheusthimoty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-500 transition duration-300 hover:scale-110 transform"
              title="GitHub"
            >
              <FaGithub size={28} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/matheusthimoty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-500 transition duration-300 hover:scale-110 transform"
              title="Instagram"
            >
              <FaInstagram size={28} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}