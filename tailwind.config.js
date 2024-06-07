/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      "midnight-grey": "#4d6475",
      "midnight-grey-hover": "#645D93",
      "midnight-grey-light": "#595D7B",
      "midnight-grey-focus": "#241E47",
      "pink-light": "#B2A7F4",
      gray: "#888888",
      salmon: "#FFDBCB",
      "midnight-purple": "#423C66",
      "purple-gray": "#474a62",
      stroke: "#e9eef2",
      "mist-gray": "#F4F8FA",
      "ebony-blue": "#1E2A32",
      "grey-hover": "#F3F5FE",
      "grey-focus": "#E8EAF2",
    },
    extend: {
      },
      maxWidth: {
        600: "600px",
      },
      padding: {
        "92px": "92px",
      },
      screens: {
        xs: "600px",
      },
    },
  },
  plugins: [],
};
