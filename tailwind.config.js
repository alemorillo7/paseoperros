/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E67E22',
          dark: '#D35400',
          light: '#F39C12',
          pastel: '#FDEBD0',
        },
        secondary: {
          DEFAULT: '#2D5444',
          dark: '#1E3A2F',
          light: '#4A7A66',
          pastel: '#D8E6E0',
        },
        dark: '#0D1412',
        gray: {
          DEFAULT: '#6B7280',
          light: '#E5E7EB',
        },
        'bg-app': '#F4F4F4',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
