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
          DEFAULT: '#D37644',
          dark: '#B85C2B',
          light: '#E49A73',
          pastel: '#F5D6C5',
        },
        secondary: {
          DEFAULT: '#2F4F47',
          dark: '#1E3831',
          light: '#52766D',
          pastel: '#C8D7D3',
        },
        dark: '#202D29',
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
