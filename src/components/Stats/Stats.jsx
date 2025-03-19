const Stats = () => {
  return (
    <section id="stats" className="py-12 bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Estatísticas
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-4xl font-bold text-purple-400">10+</h3>
            <p className="mt-2 text-gray-300">Projetos Concluídos</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-4xl font-bold text-purple-400">5</h3>
            <p className="mt-2 text-gray-300">Anos de Experiência</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-4xl font-bold text-purple-400">100%</h3>
            <p className="mt-2 text-gray-300">Satisfação do Cliente</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;