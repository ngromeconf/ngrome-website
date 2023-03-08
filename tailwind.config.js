const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        patternTop: "url('../images/patternTop.svg')",
      }),
      boxShadow: {
        DEFAULT: "rgba(103, 151, 255, 0.11) 0px 8px 60px 0px,  rgba(103, 151, 255, 0.11) 0px 12px 90px 0px;",
        monotone: "0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)"
      },

      colors: {
        black: "#16171b"
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: [
          "Roboto",
          '"Inter"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"'
        ],
        roboto: ['Roboto', 'sans-serif'],
         // Ensure fonts with spaces have " " surrounding it.
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()"
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`;
        });
      });
    })
  ]
};
