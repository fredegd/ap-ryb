/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
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
        'light-bg': '#ffffff',
        'primary': {
          light: '#f4c803', // neon-yellow for light theme
          dark: '#f4c803',  // same neon-yellow for dark theme
        },
        'text': {
          primary: {
            light: '#1f2937', // gray-800 for light theme
            dark: '#f9fafb',  // gray-50 for dark theme
          },
          secondary: {
            light: '#6b7280', // gray-500 for light theme
            dark: '#d1d5db',  // gray-300 for dark theme
          }
        },
        'background': {
          primary: {
            light: '#ffffff',
            dark: '#000000',
          },
          secondary: {
            light: '#f9fafb', // gray-50
            dark: '#111827', // gray-900
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        passion: ['"Passion One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
