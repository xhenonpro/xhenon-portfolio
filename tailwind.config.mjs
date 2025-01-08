/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary-purple': '#3d0066',
        'dark-purple': '#510087',
        'vibrant-purple': '#5c0099',
        'golden-yellow': '#fdc500',
        'bright-yellow': '#ffd500',
      },
    },
  },
  plugins: [],
};
