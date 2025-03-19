import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

// Constantes para URLs das redes sociais
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

// Componente para ícones de redes sociais
const SocialIcon = ({ href, icon: Icon, title }) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-purple-500 transition duration-300 hover:scale-110 transform"
      title={title}
      aria-label={title}
    >
      <Icon size={28} />
    </a>
  </li>
);

// Componente para o link do cabeçalho
const HeaderLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
  >
    {children}
  </Link>
);

export default function Header() {
  return (
    <header className="bg-transparent/10 backdrop-blur-sm text-white p-4 fixed w-full top-0 z-50 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center" role="navigation">
        {/* Logo e Nome */}
        <HeaderLink to="/">Matheusthimoty</HeaderLink>

        {/* Ícones de Redes Sociais */}
        <ul className="flex space-x-6 items-center" role="list">
          {SOCIAL_LINKS.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} title={link.title} />
          ))}
        </ul>
      </nav>
    </header>
  );
}