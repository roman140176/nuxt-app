module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors:{
        "link-color":'#198be8'        
      },
      fontFamily:{
        body:['Montserrat']
      },
      fontSize:{
        spec: ['0.875rem', { lineHeight: '1rem' }]
      },
      screens:{
        xxl:'1680px'
      }
    },
  },
  variants: {},
  plugins: [],
}