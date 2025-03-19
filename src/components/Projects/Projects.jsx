import React, { useState } from "react";
import "./Projects.css"; // Importe o CSS

const projects = {
  tab1: [
    {
      image: "", // Imagem em branco
    },
    {
      image: "", // Imagem em branco
    },
    {
      image: "", // Imagem em branco
    },
    {
      image: "", // Imagem em branco
    },
    {
      image: "", // Imagem em branco
    },
    {
      image: "", // Imagem em branco
    },
  ],
  tab2: [
    {
      image: "", // Imagem em branco
    },
    {
      image: "", // Imagem em branco
    },
  ],
  tab3: [
    {
      image: "", // Imagem em branco
    },
    {
      image: "", // Imagem em branco
    },
  ],
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <section id="projects" className="py-12 bg-gray-900">
      <div className="container mx-auto text-center">
        {/* Título "Projects" */}
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Projects
        </h2>

        {/* Parágrafo sobre projetos */}
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Aqui você encontra alguns dos meus projetos mais recentes. Cada um deles representa um desafio único e uma oportunidade de aprendizado. Explore e veja como transformei ideias em realidade!
        </p>

        {/* Abas */}
        <div className="tabs-container">
          <button
            onClick={() => setActiveTab("tab1")}
            className={`tab-button ${activeTab === "tab1" ? "active" : ""}`}
          >
            Tab 1
          </button>
          <button
            onClick={() => setActiveTab("tab2")}
            className={`tab-button ${activeTab === "tab2" ? "active" : ""}`}
          >
            Tab 2
          </button>
          <button
            onClick={() => setActiveTab("tab3")}
            className={`tab-button ${activeTab === "tab3" ? "active" : ""}`}
          >
            Tab 3
          </button>
        </div>

        {/* Projetos */}
        <div className="projects-grid">
          {projects[activeTab].map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={`Projeto ${index + 1}`} />

              {/* Overlay com animação de cima para baixo */}
              <div className="project-overlay">
                <h3 className="text-2xl font-bold">Business Startup</h3>
                <p className="text-lg">Design & Development</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;