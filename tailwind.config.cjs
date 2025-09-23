/** @type {import('tailwindcss').Config} */

export default {
    corePlugins: {
        colors: false,
    },
    plugins: [
        require("@headlessui/tailwindcss"),
        require("@tailwindcss/forms"),
    ],
};
