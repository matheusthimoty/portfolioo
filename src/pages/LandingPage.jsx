import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TestimonialCard from "../components/TestimonialCard";
import BenefitCard from "../components/BenefitCard";

// Importe a imagem das estrelas
import starsBackground from "../assets/stars.png";

// Componente Typewriter
const Typewriter = () => {
  const texts = ["Web Developer", "Web Designer", "UX/UI Designer"];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentText = texts[loopNum % texts.length];

    const handleType = () => {
      setText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentText.slice(0, prev.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, texts]);

  return (
    <h1 className="text-5xl font-bold mb-4">
      I'm Matheus <span>{text}</span>
      <span className="ml-2">|</span> {/* Cursor piscando */}
    </h1>
  );
};

export default function LandingPage() {
  // Dados dos depoimentos
  const testimonials = [
    {
      name: "João Silva",
      role: "CEO da Empresa X",
      comment: "Incrível! O serviço superou todas as minhas expectativas.",
      imageUrl: "https://via.placeholder.com/100",
    },
    {
      name: "Maria Souza",
      role: "Designer Freelancer",
      comment: "Recomendo a todos que buscam qualidade e profissionalismo.",
      imageUrl: "https://via.placeholder.com/100",
    },
  ];

  // Dados dos benefícios
  const benefits = [
    {
      icon: "🚀",
      title: "Rápido e Eficiente",
      description: "Entregamos resultados em tempo recorde.",
    },
    {
      icon: "🎨",
      title: "Design Moderno",
      description: "Soluções visualmente impressionantes.",
    },
    {
      icon: "🔧",
      title: "Suporte 24/7",
      description: "Estamos sempre disponíveis para ajudar.",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main>
        {/* Seção Hero */}
        <section className="text-white py-60 relative overflow-hidden">
          {/* Background de estrelas */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-70"
            style={{
              backgroundImage: `url(${starsBackground})`,
              backgroundSize: "cover", // Garante que a imagem cubra toda a seção
              backgroundPosition: "center", // Centraliza a imagem
              width: "100%", // Largura total
              height: "100%", // Altura total
            }}
          ></div>
          <div className="container mx-auto text-center relative z-10">
            {/* Componente Typewriter */}
            <Typewriter />
            <p className="text-xl mb-8">Soluções digitais sob medida para o seu negócio.</p>
            <a
              href="#cta"
              className="bg-gradient-to-r from-purple-700 to-pink-500 text-white px-6 py-3 rounded-lg hover:opacity-80 transition duration-300"
            >
              Comece Agora
            </a>
          </div>
        </section>

        {/* Seção Sobre */}
        <section className="container mx-auto py-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Sobre Nós</h2>
          <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto">
            Somos uma equipe de especialistas em desenvolvimento web e design, prontos para ajudar você a alcançar seus objetivos.
          </p>
        </section>

        {/* Seção Benefícios */}
        <section className="container mx-auto py-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Por que escolher nós?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </section>

        {/* Seção Depoimentos */}
        <section className="container mx-auto py-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">O que nossos clientes dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </section>

       {/* Seção Call to Action */}
<section id="cta" className="bg-black text-white py-32">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">Pronto para começar?</h2>
    <p className="text-xl mb-8">Entre em contato conosco e leve seu negócio para o próximo nível.</p>
    <a
      href="#contact"
      className="bg-gradient-to-r from-purple-700 to-pink-500 text-white px-6 py-3 rounded-lg hover:opacity-80 transition duration-300"
    >
      Fale Conosco
    </a>
  </div>
</section>
      </main>
      <Footer className="text-white" />
    </div>
  );
}