/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{html,js,ts,hbs,gjs,gts}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        primaryDark: 'var(--primary-dark)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        background: 'var(--background)',
        text: 'var(--text)',
      },
    },
  },
  plugins: [],
};
