module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-purple': 'black', // Midnight Purple
        'deep-pink': '#9B59B6', // Rosa Profundo
        'text-gray': '#E5E7EB', // Branco acinzentado para textos
        'background-dark': '#000000', // Preto puro para o fundo
        'header-footer': '#1A1A1A', // Cinza escuro para header e footer
        'card-background': '#2D2D2D', // Cinza mais claro para os cards
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'stars': "url('/stars.png')", // Caminho da imagem de estrelas
      },
    },
  },
  plugins: [],
};