/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        comfortaa: ["var(--font-comfortaa)", "sans-serif"],
      },
      colors: {
        accent: `#DDBEA9`,
        "accent-dark": `#CB997E`,
        "accent-light": "#FFE8D6",
        secondary: "#A5A58D",
        "secondary-dark": "#6B705C",
        "secondary-light": "#B7B7A4",
      },
    },
  },
  plugins: [],
};
