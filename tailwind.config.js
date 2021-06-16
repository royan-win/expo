module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'back_img': "url('https://ymvirtual.s3.amazonaws.com/media/dashboard/background-01.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
