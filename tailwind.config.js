/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Marca AMATL
        verde: {
          DEFAULT: '#1e4d3a', // verde principal (logo, texto, botones)
          oscuro: '#12332a',
          claro: '#2f6b52',
        },
        fondo: '#f6f1e7', // beige de fondo
        dorado: {
          DEFAULT: '#b79a5b',
          claro: '#d4bd8c',
        },
        tierra: '#8B6B4A',
        marfil: '#FAF8F2',
      },
      fontFamily: {
        // cargadas vía next/font en app/layout.js como variables CSS
        display: ['var(--font-display)', 'Georgia', 'serif'], // nombre del proyecto / títulos
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'], // lema / cuerpo de texto
      },
    },
  },
  plugins: [],
}
