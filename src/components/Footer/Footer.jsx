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
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-purple-400 hover:text-white transition-all duration-300"
    title={title}
    aria-label={title}
  >
    <Icon size={32} />
  </a>
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
    <footer className="bg-black/70 backdrop-blur-lg border-t border-purple-500/20 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        {/* Seção de Texto */}
        <div className="text-center mb-8">
          <p className="text-lg bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            &copy; 2025 Matheusthimoty. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-sm bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Desenvolvido por Matheus Thimóteo
          </p>
        </div>

        {/* Seção de Links de Redes Sociais e Navegação */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {/* Ícones de Redes Sociais */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Redes Sociais</h3>
            <div className="flex justify-center space-x-6">
              {SOCIAL_LINKS.map((link, index) => (
                <SocialIcon key={index} href={link.href} icon={link.icon} title={link.title} />
              ))}
            </div>
          </div>

          {/* Links de Navegação */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Navegação</h3>
            <div className="space-y-4">
              {NAV_LINKS.map((link, index) => (
                <div key={index}>
                  <NavLink href={link.href} text={link.text} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
