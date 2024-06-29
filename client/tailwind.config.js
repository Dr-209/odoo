/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#36BA98', // Background color
        secondary: '#E9C46A', // Secondary color for buttons
        accent: '#F4A261', // Accent color for hover effects
        background: '#36BA98', // Background color (same as primary in this case)
        textPrimary: '#000000', // Text primary color
        textSecondary: '#FFFFFF', // Text secondary color
      },
    },
  },
  plugins: [],
}

