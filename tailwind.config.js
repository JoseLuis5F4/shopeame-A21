/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    ".pages/**/*.{html,ts}",
    ".components/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de colores
        lightBrown: "#f8f4e1", // Light Cream - Para fondos
        brown: "#af8f6f", // Warm Beige - Para botones principales
        richBrown: "#74512d", // Rich Brown
        darkBrown: "#543310", // Dark Chocolate

        // Colores para Botones Genéricos
        primary: "#4682B4",
        secondary: "#FFA500",
        accent: "CB5930",
        danger: "#FF6347",

        // Colores footers
        blackFooter: "#333333",
      },
    },
  },
  plugins: [],
};
