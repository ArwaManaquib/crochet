/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Ensure all our custom colors are included
    {
      pattern:
        /(bg|text|border|ring)-(warm|sage|sunny|lavender|soft)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern:
        /(from|via|to)-(warm|sage|sunny|lavender|soft)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern:
        /hover:(from|via|to|bg|text|border)-(warm|sage|sunny|lavender|soft)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern:
        /focus:ring-(warm|sage|sunny|lavender|soft)-(50|100|200|300|400|500|600|700|800|900)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fbf8f8",
          100: "#f3e8e8",
          200: "#e8d1d1",
          300: "#d4a8a8",
          400: "#955051",
          500: "#7a4142",
          600: "#5f3233",
          700: "#442324",
          800: "#291415",
          900: "#1b0e0e",
        },
        accent: {
          100: "#ec797b",
          200: "#e85a5c",
          300: "#e43b3d",
          400: "#d32325",
          500: "#b01e20",
        },
        // Warm, cozy colors for crochet happiness
        warm: {
          50: "#fef7ed",
          100: "#fdecd3",
          200: "#fbd5a5",
          300: "#f7b96d",
          400: "#f39332",
          500: "#f0770a",
          600: "#e15d05",
          700: "#bb4508",
          800: "#95370e",
          900: "#792f0f",
        },
        // Soft pastels for calmness
        soft: {
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef",
          600: "#c026d3",
          700: "#a21caf",
          800: "#86198f",
          900: "#701a75",
        },
        // Nature-inspired greens
        sage: {
          50: "#f6f7f6",
          100: "#e3e8e3",
          200: "#c7d2c7",
          300: "#a3b4a3",
          400: "#7d947d",
          500: "#5f7a5f",
          600: "#4a614a",
          700: "#3d4f3d",
          800: "#334133",
          900: "#2d372d",
        },
        // Sunny yellows for happiness
        sunny: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
        },
        // Lavender for tranquility
        lavender: {
          50: "#faf7ff",
          100: "#f3edff",
          200: "#e9ddff",
          300: "#d4c1ff",
          400: "#b794ff",
          500: "#9c69ff",
          600: "#8b42ff",
          700: "#7c2eff",
          800: "#6b21e8",
          900: "#5b1bb8",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "var(--font-noto)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
