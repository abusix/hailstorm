/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
    content: ["./src/components/**/*.{html,js,ts,tsx}"],
    presets: [require("./preset-hailstorm.cjs")],
    plugins: [
        require("@headlessui/tailwindcss"),
        require("@tailwindcss/forms"),
        plugin(function ({ addBase }) {
            addBase({
                "[type='search']::-webkit-search-decoration": { display: "none" },
                "[type='search']::-webkit-search-cancel-button": { display: "none" },
                "[type='search']::-webkit-search-results-button": { display: "none" },
                "[type='search']::-webkit-search-results-decoration": { display: "none" },
            });
        }),
    ],
};
