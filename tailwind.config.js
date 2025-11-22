/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'supernova': {
          '50': '#fefde8',
          '100': '#fffec2',
          '200': '#fff987',
          '300': '#ffee43',
          '400': '#ffde10',
          '500': '#f4c803',
          '600': '#ce9900',
          '700': '#a46d04',
          '800': '#88550b',
          '900': '#734510',
          '950': '#432405',
        },
        'neon-yellow': '#f4c803', // Mapped to supernova-500 for backward compatibility
        'dark-bg': '#000000',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
