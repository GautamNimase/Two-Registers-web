/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A192F',
        navyDark: '#0B1120',
        accent: '#64FFDA',
        slate: '#112240',
        textPrimary: '#FFFFFF',
        textSecondary: '#A9B2C3'
      },
      fontFamily: {
        inter: ['Inter', 'Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      maxWidth: {
        container: '1200px'
      },
      boxShadow: {
        glow: '0 0 20px rgba(100, 255, 218, 0.35)'
      }
    }
  },
  plugins: []
}


