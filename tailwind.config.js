module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend:{
    colors:{
      accent: '#4B419F',
      accentPlus30: '#5c4288',
      antiAcent: '#FFBE59',
      bgSoft: '#F9F9FE',
      bgHard: '#F4F2FF',
    },
    backgroundImage: {
      'polka-dots-pattern': "url('/svg/polka-dots.svg')",
      'puppy': "url('/images/puppy-header.png')",
      'p1': "url('/svg/topography.svg')",
      'blob': "url('/svg/blob.svg')",
    }
  },
  },

  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}