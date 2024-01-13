/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(244, 238, 225)',
        primary: '#ff0000',
        secondary: '',
        primaryText: '#0000ff',
      },
    },
  },
  plugins: [daisyui],
}

