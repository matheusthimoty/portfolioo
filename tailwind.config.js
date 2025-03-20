module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Caminho para os arquivos do seu projeto
  ],
  theme: {
    extend: {
      fontFamily: { // Corrigido: estava "ontFamily"
        poppins: ['Poppins', 'sans-serif'], // Adiciona Poppins como uma nova família de fontes
      },
      colors: {
        'midnight-purple': '#000000', // Midnight Purple (preto)
        'deep-pink': '#9B59B6', // Rosa Profundo
        'text-gray': '#E5E7EB', // Branco acinzentado para textos
        'background-dark': '#000000', // Preto puro para o fundo
        'header-footer': '#1A1A1A', // Cinza escuro para header e footer
        'card-background': '#2D2D2D', // Cinza mais claro para os cards
      },
      backgroundImage: {
        'stars': "url('/stars.png')", // Caminho da imagem de estrelas
      },
    },
  },
  plugins: [], // Adicione plugins do Tailwind aqui, se necessário
};