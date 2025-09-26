/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      html: {
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        overflowX: 'hidden',
      },
      variants: {
        extend: {
          scale: ['group-hover'],
        },
      },
      body: {
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        overflowX: 'hidden',
      },
    },
  },
  plugins: [],
}

