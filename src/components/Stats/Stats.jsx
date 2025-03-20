import { motion } from "framer-motion";

const Stats = () => {
  return (
    <section id="stats" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Estatísticas
        </h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {/* Estatística 1 */}
          <motion.div
            className="p-8 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-purple-400">10+</h3>
            <p className="mt-2 text-lg text-gray-300">Projetos Concluídos</p>
          </motion.div>

          {/* Estatística 2 */}
          <motion.div
            className="p-8 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-purple-400">5</h3>
            <p className="mt-2 text-lg text-gray-300">Anos de Experiência</p>
          </motion.div>

          {/* Estatística 3 */}
          <motion.div
            className="p-8 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-purple-400">100%</h3>
            <p className="mt-2 text-lg text-gray-300">Satisfação do Cliente</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
