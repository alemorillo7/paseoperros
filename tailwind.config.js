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
          dark: '#C96A0E',
          light: '#F5A55A',
          pastel: '#FDE8CC',
        },
        secondary: {
          DEFAULT: '#2ECC71',
          dark: '#1FA355',
          light: '#7DE4A8',
          pastel: '#D5F5E3',
        },
        dark: '#1C1C1E',
        gray: {
          DEFAULT: '#6B7280',
          light: '#E5E7EB',
        },
        'bg-app': '#F9FAFB',
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
