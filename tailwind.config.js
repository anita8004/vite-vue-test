module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary-color)",
          light: "var(--primary-light-color)",
          dark: "var(--primary-dark-color)"
        },
        secondary: "var(--secondary-color)",
        textfirst: "var(--textfirst-color)",
        hr: "var(--hr-color)",
        bg: "var(--bg-color)",
        red: "var(--red-color)",
        green: "var(--green-color)",
        orange: "var(--orange-color)",
        highlight: "var(--highlight-color)"
      },
      fill: theme => ({
        primary: theme("colors.primary"),
        white: theme("colors.white")
      }),
      stroke: theme => ({
        primary: theme("colors.primary"),
        white: theme("colors.white")
      }),
      opacity: {
        10: "0.1",
        20: "0.2",
        30: "0.3",
        40: "0.4",
        60: "0.6",
        70: "0.7",
        80: "0.8",
        90: "0.9"
      },
      zIndex: {
        75: 75,
        100: 100
      },
      borderRadius: {
        default: "5px"
      },
      width: {
        "1/24": "4.1666666%",
        "2/24": "8.3333333%",
        "3/24": "12.5%",
        "4/24": "16.6666666%",
        "5/24": "20.8333333%",
        "6/24": "25%",
        "7/24": "29.1666666%",
        "8/24": "33.3333333%",
        "9/24": "37.5%",
        "10/24": "41.6666666%",
        "11/24": "45.8333333%",
        "12/24": "50%",
        "13/24": "54.1666666%",
        "14/24": "58.3333333%",
        "15/24": "62.5%",
        "16/24": "66.6666666%",
        "17/24": "70.8333333%",
        "18/24": "75%",
        "19/24": "79.1666666%",
        "20/24": "83.3333333%",
        "21/24": "87.5%",
        "22/24": "91.6666666%",
        "23/24": "95.8333333%"
      },
      fontFamily: {
        SFProDisplay: [
          "SFProDisplay",
          "-apple-system",
          "BlinkMacSystemFont",
          "Arial",
          "sans-serif"
        ]
      },
      boxShadow: theme => ({
        border: `0 0 1px 1px ${theme("colors.hr")}`
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".gradient-primary": {
          backgroundImage: `linear-gradient(to right, ${theme(
            "colors.primary.light"
          )}, ${theme("colors.primary.dark")})`
        }
      });
    }
  ],
}
