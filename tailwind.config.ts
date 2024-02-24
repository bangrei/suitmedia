import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      rotate: {
        "65": "65deg",
        "28": "28deg",
        "25": "25deg",
        "125": "125deg",
      },
      colors: {
        title: "#00171F",
        background: {
          DEFAULT: "#FCEED5",
        },
        primary: {
          DEFAULT: "#003459",
        },
        secondary: {
          DEFAULT: "#F7DBA7",
        },
        badge: {
          DEFAULT: "#FFB775",
        },
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [],
};
export default config
