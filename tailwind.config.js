/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#0A0B1E',
        secondary: '#7C3AED',
        accent: '#3B82F6',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'spin-reverse': 'spin-reverse 8s linear infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg) scale(1.25)' },
          '100%': { transform: 'rotate(0deg) scale(1.25)' },
        },
        'twinkle': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(0.8)' },
        },
      },
    },
  },
  plugins: [],
}
