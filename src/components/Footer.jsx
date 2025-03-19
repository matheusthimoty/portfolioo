import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Importe ícones do react-icons

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-lg border-t border-purple-500/20 text-white py-12 mt-16">
      <div className="container mx-auto text-center">
        {/* Texto com Gradiente e Animação */}
        <p className="text-lg bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
          &copy; 2023 Matheusthimoty. Todos os direitos reservados.
        </p>
        <p className="mt-2 text-sm bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
          Desenvolvido com ❤️ por Matheus Thimóteo
        </p>

        {/* Ícones de Redes Sociais com Hover Branco */}
        <ul className="flex justify-center space-x-8 mt-6">
          <li>
            <a
              href="https://www.linkedin.com/in/matheusthimoty/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-white transition duration-300"
              title="LinkedIn"
            >
              <FaLinkedin size={32} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/matheusthimoty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-white transition duration-300"
              title="GitHub"
            >
              <FaGithub size={32} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/matheusthimoty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-white transition duration-300"
              title="Instagram"
            >
              <FaInstagram size={32} />
            </a>
          </li>
        </ul>

        {/* Links de Navegação com Gradiente */}
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="#about"
            className="text-sm bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-purple-400 transition duration-300"
          >
            Sobre
          </a>
          <a
            href="#projects"
            className="text-sm bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-purple-400 transition duration-300"
          >
            Projetos
          </a>
          <a
            href="#contact"
            className="text-sm bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-purple-400 transition duration-300"
          >
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}