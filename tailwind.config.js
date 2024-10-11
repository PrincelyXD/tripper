/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "380px",
      sm: "480px",
      md: "804px",
      lg: "1040px",
      xl: "1440px",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      openSans: ["Open Sans", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      ibm: ["IBM Plex Mono", "monospace"]
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "2.353rem",
      "4xl": "2.441rem",
      "5xl": "3.40rem",
      "6xl": "3.82rem",
    },

    extend: {
      colors: {
        "deep-saffron": "#FF8C38",
        "chinese-black": "#161616",
        "body-cream": "#FFF7ED",
        "link-bg-cream": "#FFEAD0",
        "peach-orange": "#FFCC8D",
        "bangladesh-green": "#115E59",
        "terra-cotta": "#E17654",
        "brand-blue": "#3379F9"
        
      },
      backgroundImage: {
        "hero-background": "url('/src/assets/images/hero-img.png')",
        "blue-car": "url('/src/assets/images/vehicle-speed.png')",
        "license-img": "url('/src/assets/images/license-vector.png')",
      },
      backgroundSize: {
        'tiny': '15px',
       
      },

      transitionTimingFunction:{
        'custom-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      boxShadow:{
        'nav-bottom': '0px 0px 20px rgba(0, 0, 0, 0.1)',
        '3d': 'rgba(0, 0, 0, 0.1) 0px 4px 12px, rgba(0, 0, 0, 0.05) 0px 1px 3px',
      }
    },
  },
  plugins: [],
};