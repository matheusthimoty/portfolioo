import { motion } from "framer-motion";
import me from "../../assets/me.png";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-16 px-6">
        
        <motion.div
          className="relative w-52 h-52 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-gray-700 shadow-lg shadow-gray-800 group"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src={me} alt="Minha Foto" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </motion.div>

        <motion.div
          className="relative p-10 bg-gray-900 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300 transform hover:scale-[1.03] max-w-3xl shadow-md"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Sobre Mim
          </h2>

          <div className="relative z-10">
            <p className="text-lg text-gray-300 leading-relaxed">
              Olá! Eu sou <span className="text-white font-semibold">Matheus Thimóteo</span>, um desenvolvedor apaixonado por tecnologia e inovação.  
              Atualmente, estou cursando <span className="text-purple-400 font-semibold">Análise e Desenvolvimento de Sistemas</span> no  
              <span className="text-purple-400 font-semibold"> terceiro período</span>, aprofundando meus conhecimentos em desenvolvimento de software.
            </p>

            <div className="mt-6 space-y-4">
              <p className="text-gray-300">
                <span className="text-purple-400 font-semibold">Front-End:</span> Experiência com <span className="text-purple-400 font-semibold">React</span>,  
                <span className="text-purple-400 font-semibold"> JavaScript</span> e <span className="text-purple-400 font-semibold"> CSS</span>.  
                Desenvolvo interfaces modernas e responsivas para proporcionar a melhor experiência ao usuário.
              </p>

              <p className="text-gray-300">
                <span className="text-purple-400 font-semibold">Aprendizado contínuo:</span> Sempre explorando novas tecnologias e práticas para melhorar a qualidade do código.
              </p>

              <p className="text-gray-300">
                <span className="text-purple-400 font-semibold">Resolução de problemas:</span> Gosto de desafios que me permitem aprender e crescer como desenvolvedor.
              </p>

              <p className="text-gray-300">
                <span className="text-purple-400 font-semibold">Interesses:</span> Além da programação, gosto de <span className="text-purple-400 font-semibold">assistir animes</span>  
                e acompanhar novidades tecnológicas.
              </p>
            </div>

            <div className="mt-8">
              <a 
                href="#contato"
                className="inline-block bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300"
              >
                Entre em contato
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
