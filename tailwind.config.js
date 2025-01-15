/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Usa a classe "dark" para alternar temas
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // Ajuste para incluir os arquivos relevantes
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4f46e5', // Azul para light mode
          dark: '#1e293b',  // Azul escuro para dark mode
        },
      },
    },
  },
  plugins: [],
}

