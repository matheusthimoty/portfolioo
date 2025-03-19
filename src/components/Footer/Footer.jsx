import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

// Constantes para URLs e textos
const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/matheusthimoty/',
    icon: FaLinkedin,
    title: 'LinkedIn',
  },
  {
    href: 'https://github.com/matheusthimoty',
    icon: FaGithub,
    title: 'GitHub',
  },
  {
    href: 'https://www.instagram.com/matheusthimoty',
    icon: FaInstagram,
    title: 'Instagram',
  },
];

const NAV_LINKS = [
  { href: '#about', text: 'Sobre' },
  { href: '#projects', text: 'Projetos' },
  { href: '#contact', text: 'Contato' },
];

// Componente para ícones de redes sociais
const SocialIcon = ({ href, icon: Icon, title }) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-400 hover:text-white transition duration-300"
      title={title}
      aria-label={title}
    >
      <Icon size={32} />
    </a>
  </li>
);

// Componente para links de navegação
const NavLink = ({ href, text }) => (
  <a
    href={href}
    className="text-sm bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-purple-400 transition duration-300"
  >
    {text}
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-lg border-t border-purple-500/20 text-white py-12 mt-16">
      <div className="container mx-auto text-center">
        {/* Texto com Gradiente e Animação */}
        <p className="text-lg bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
          &copy; 2023 Matheusthimoty. Todos os direitos reservados.
        </p>
        <p className="mt-2 text-sm bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
          Desenvolvido por Matheus Thimóteo
        </p>

        {/* Ícones de Redes Sociais */}
        <ul className="flex justify-center space-x-8 mt-6" role="list">
          {SOCIAL_LINKS.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} title={link.title} />
          ))}
        </ul>

        {/* Links de Navegação */}
        <div className="mt-4 flex justify-center space-x-6" role="navigation">
          {NAV_LINKS.map((link, index) => (
            <NavLink key={index} href={link.href} text={link.text} />
          ))}
        </div>
      </div>
    </footer>
  );
}