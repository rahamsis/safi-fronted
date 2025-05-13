import { Config } from 'tailwindcss'

const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor:{
        'qgray-border': 'rgb(239 239 239/1)',
        'search-btn': 'rgb(255 187 56/1)',
        'qyellow': 'rgb(255 187 56/1)',
        'banner': 'rgba(0, 0, 0, 0.4)',
        'greenBanner': '#0077B6',
        products: "#dce5e4",
        popularProducts: '#dce5e4',
        prevNext: 'rgba(59, 93, 80, 0.1)',
        testimonials: '#d6d6d6',
        nosotros: 'rgba(59, 93, 80, 0.2)',
        whatsapp: '#0df053',
        chat: '#FAFAFA'
      },
      backgroundImage: {
        'bannerRight': "url('/assets/dots-light.svg')",
        'banner2': "url('/assets/PORTADA3.jpeg')",
        'banner3': "url('/assets/PORTADA1.jpg')",
        'postBrandLeft': "url('/assets/campaign-cover-countdown.jpg')",
        'whychoose': "url('/assets/dots-yellow.svg')",
        'weHelp': "url('/assets/dots-green.svg')"
      },
      colors: {        
        primary: "#0077B6", //Azul frío
        secondary: "#6C757D", //Gris metálico
        resaltado: "#F77F00", //Naranja técnico
        fondo_claro: "#E0F7FA", //Azul hielo
        gray_dark:"#2C2C2C", //Gris oscuro
        gray_light: "#F9BF29", //amarillo
        acento: "#FFC300", //amarillo tecnico
        btn: "rgba(255, 255, 255, 0.3)",    
        paragraph: "rgba(255, 255, 255, 0.5)",
        wychoose: "#6a6a6a",
        footer: '#3b5d50',
        imputFootr: '#212529',
        borderInputFooter: '#ced4da',
        iconsFoot: '#dce5e4',
        borderFooter: '#dee2e6',
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        guindaLigth: '#FD9398',
        guindaClaro: "#BF1B23",
        guindaOscuro: "#9b0d13",
        grisClaro: "#636363",
        qblack: "rgb(34 34 34/1)",
        qgray: "rgb(121 121 121/1)",
        qblacktext: "rgb(29 29 29/1)",
        qyellow: "rgb(255 187 56/1)",
        qred: "rgb(239 38 44/1)",
        primarygray: "rgb(248 248 248/1)",
        whatsapp: '#0df053'
      },
      fontFamily: {
        poppins: ["Roboto", "sans-serif"],
        primaSans: ["sans-serif"],
      },
      borderColor:{
        'weHelp': "#3b5d50",        
      },
      fontWeight: {
        boldCustomer: '400',
      },
      padding: {
        a: "19.2px 34.4px 40px 34px",
      },
      boxShadow: {
        // x y opacidad tamaño de profundidad color, borde-> x y opacidad tamaño color
        shadowPilares: "-5px 20px 25px 10px rgb(223 36 36 / 0.1), 0 4px 6px -4px rgb(223 36 36 / 0.1)",
      },
      animation: {
        'animate-spin': 'spin 4s linear infinite',
        'animate-spin-reverse': 'spin-reverse 6s linear infinite',
      },
      keyframes: {
        "spin-reverse": {
          'to': { transform: 'rotate(-1turn)' },
        }
      },
      transitionProperty: {
        'products': '.3s all ease'
      },
      gridTemplateColumns: {
        "weHelp": "repeat(27, 1fr)"
      }
    }, 
    screens: {
      "xxs": "280px",
      "xs": "320px",
      "ss": "480px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "x": "1216px",
      "xl": "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
}
export default config
