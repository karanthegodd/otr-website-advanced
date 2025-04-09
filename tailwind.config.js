/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ot-blue': '#0077CA',
        'ot-blue-light': '#009CDE',
        'ot-gray': '#53565A',
        'ot-gray-light': '#97999B',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'smoke': 'smoke 3s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'smoke': {
          '0%, 100%': {
            'opacity': '0',
            'transform': 'translateY(0)',
          },
          '50%': {
            'opacity': '0.3',
            'transform': 'translateY(-10px)',
          },
        },
      },
    },
  },
  plugins: [],
} 