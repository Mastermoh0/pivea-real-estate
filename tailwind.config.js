/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backdrop: '#f5f0eb',
        dark: '#1a1a1a',
        accent: '#c9a96e',
        muted: '#8a8a8a',
        'border-warm': '#d4c7b5',
      },
      fontFamily: {
        display: ['"Bodoni Moda SC"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      spacing: {
        'section': '8rem',
        'section-lg': '12rem',
      },
      fontSize: {
        'hero': ['clamp(3rem, 10vw, 10rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'heading-xl': ['clamp(2rem, 5vw, 4.5rem)', { lineHeight: '1.1' }],
        'heading-lg': ['clamp(1.5rem, 4vw, 3.5rem)', { lineHeight: '1.15' }],
      },
    },
  },
  plugins: [],
}
