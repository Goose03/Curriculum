/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'zeus': {
          '50': '#f6f5f3',
          '100': '#e9e5e2',
          '200': '#d4cfc6',
          '300': '#b5aea0',
          '400': '#928975',
          '500': '#736c56',
          '600': '#5a5441',
          '700': '#484334',
          '800': '#3a372b',
          '900': '#26241c',
          '950': '#1b1a13',
        },      
      }   
    },
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}
