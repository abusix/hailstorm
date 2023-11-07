  /** @type {import('tailwindcss').Config} */
  import plugin from "tailwindcss/plugin";

  export default {
      content: ["./src/components/**/*.{html,js,ts,tsx}"],
      theme: {
          colors: {
              abusix: {
                  "black-pearl": "#07123A",
                  dusk: "#09174C",
              },
              neutral: {
                  900: "#504E61",
                  800: "#5F5D76",
                  700: "#747191",
                  600: "#8784A7",
                  500: "#9C9BB9",
                  400: "#B0B1C9",
                  300: "#C1C4D6",
                  200: "#DDDFE8",
                  100: "#ECEEF3",
                  50: "#F5F6F8",
                  0: "#ffffff",
              },
              primary: {
                  900: "#213187",
                  800: "#2235AB",
                  700: "#223FD3",
                  600: "#3259E7",
                  500: "#4072F1",
                  400: "#6497F6",
                  300: "#96BBFA",
                  200: "#C1D5FC",
                  100: "#DCE7FD",
                  50: "#EFF4FF",
              },
              success: {
                  900: "#114335",
                  800: "#14513F",
                  700: "#16664E",
                  600: "#1B805F",
                  500: "#2A9F76",
                  400: "#52BD94",
                  300: "#80D5B1",
                  200: "#B3E7CE",
                  100: "#D7F4E4",
                  50: "#EFFAF5",
              },
              danger: {
                  900: "#772525",
                  800: "#8F2525",
                  700: "#AC2929",
                  600: "#D14343",
                  500: "#E15252",
                  400: "#ED7C7C",
                  300: "#F5ACAC",
                  200: "#FACECE",
                  100: "#FCE4E4",
                  50: "#FDF3F3",
              },
              warning: {
                  900: "#7A2C0D",
                  800: "#94350C",
                  700: "#B74606",
                  600: "#DD6702",
                  500: "#F98D07",
                  400: "#FFB020",
                  300: "#FFC74A",
                  200: "#FFDE88",
                  100: "#FFF0C6",
                  50: "#FFF9EB",
              },
              violet: {
                  100: "#ede9fe",
                  800: "#5b21b6",
              },
              teal: {
                  100: "#ccfbf1",
                  800: "#115e59"
              },
              orange: {
                  100: "#ffedd5",
                  800: "#9a3412"
              },
              pink: {
                  300: "#f9a8d4",
                  800: "#9d174d"
              },
              black: "#000000",
              "modal-background": "rgba(67, 90, 111, 0.7)",
              transparent: "transparent",
          },
          extend: {
              fontFamily: {
                  display: ["Fabriga", "serif"],
                  sans: ["Inter", "sans-serif"],
              },
              maxWidth: {
                  285: "71.25rem",
              },
              minWidth: {
                  736: "736px",
              },
              width: {
                  120: "30rem",
              },
          },
          corePlugins: {
              colors: false,
          },
      },
      plugins: [
          require("@headlessui/tailwindcss"),
          require('@tailwindcss/forms'),
          plugin(function ({addBase}) {
              addBase({
                  "[type='search']::-webkit-search-decoration": {display: "none"},
                  "[type='search']::-webkit-search-cancel-button": {display: "none"},
                  "[type='search']::-webkit-search-results-button": {display: "none"},
                  "[type='search']::-webkit-search-results-decoration": {display: "none"},
              })
          }),
      ],
};
