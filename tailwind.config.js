/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "soft-cyan": "hsl(174, 77%, 80%)",
          "strong-cyan": "hsl(174, 86%, 45%)",
          "light-grayish-red": "hsl(14, 92%, 95%)",
          "light-red": "hsl(15, 100%, 70%)",
          "pale-blue": "hsl(226, 100%, 87%)",
        },
        neutral: {
          "white": "hsl(0, 0%, 100%)",
          "very-pale-blue": "hsl(230, 100%, 99%)",
          "light-grayish-blue-empty": "hsl(224, 65%, 95%)",
          "light-grayish-blue-toggle": "hsl(223, 50%, 87%)",
          "grayish-blue": "hsl(225, 20%, 60%)",
          "dark-desaturated-blue": "hsl(227, 35%, 25%)",
        },
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        intro: "15px",
      },
      fontWeight: {
        "manrope-600": 600,
        "manrope-800": 800,
      },
      backgroundImage: {
        "custom-bg": "url('./src/assets/images/bg-pattern.svg')",
        "circles-bg": "url('./src/assets/images/pattern-circles.svg')",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '16': '4rem',
      }
    },
  },
  plugins: [],
};
