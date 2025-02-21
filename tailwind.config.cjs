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
                "900+20": "#1A276C",
                "900+10": "#1E2C7A",
                "900+8": "#1E2D7C",
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
                800: "#115e59",
            },
            orange: {
                100: "#ffedd5",
                800: "#9a3412",
            },
            pink: {
                300: "#f9a8d4",
                800: "#9d174d",
            },
            purple: {
                100: "#D8D4FF",
                800: "#8966FF",
            },
            black: "#000000",
            "modal-background": "rgba(67, 90, 111, 0.7)",
            transparent: "transparent",

            // New colors / Design tokens implementation
            background: {
                page: "var(--bg-page)",
                primary: {
                    DEFAULT: "var(--bg-primary-default)",
                    hover: "var(--bg-primary-hover)",
                    pressed: "var(--bg-primary-pressed)",
                    selected: "var(--bg-primary-selected)",
                },
                secondary: {
                    DEFAULT: "var(--bg-secondary-default)",
                    hover: "var(--bg-secondary-hover)",
                    pressed: "var(--bg-secondary-pressed)",
                    selected: "var(--bg-secondary-selected)",
                },
                tertiary: {
                    DEFAULT: "var(--bg-tertiary-default)",
                },
                brand: {
                    DEFAULT: "var(--bg-brand-default)",
                    subtle: "var(--bg-brand-subtle)",
                    hover: "var(--bg-brand-hover)",
                    pressed: "var(--bg-brand-pressed)",
                    disabled: "var(--bg-brand-disabled)",
                },
                danger: {
                    DEFAULT: "var(--bg-danger-default)",
                    pressed: "var(--bg-danger-pressed)",
                    hover: "var(--bg-danger-hover)",
                    disabled: "var(--bg-danger-disabled)",
                },
                success: {
                    subtle: "var(--bg-success-subtle)",
                },
            },
            text: {
                primary: {
                    DEFAULT: "var(--text-primary)",
                },
                secondary: {
                    DEFAULT: "var(--text-secondary-default)",
                    hover: "var(--text-secondary-hover)",
                    pressed: "var(--text-secondary-pressed)",
                },
                disabled: "var(--text-disabled)",
                inverse: "var(--text-inverse)",
                success: "var(--text-success)",
            },
            border: {
                primary: {
                    DEFAULT: "var(--border-primary)",
                },
                secondary: {
                    DEFAULT: "var(--border-secondary-default)",
                    hover: "var(--border-secondary-hover)",
                    pressed: "var(--border-secondary-pressed)",
                },
                brand: "var(--border-brand-default)",
                disabled: "var(--border-disabled)",
            },
            icon: {
                primary: "var(--icon-primary-default)",
                success: "var(--icon-success)",
            },

            // component tokens
            sidebar: {
                background: {
                    primary: {
                        DEFAULT: "var(--components-sidebar-primary-default)",
                        hover: "var(--components-sidebar-primary-hover)",
                        pressed: "var(--components-sidebar-primary-pressed)",
                        selected: "var(--components-sidebar-primary-selected)",
                    },
                },
            },
        },
        extend: {
            fontFamily: {
                display: ["Fabriga", "serif"],
                sans: ["Inter", "sans-serif"],
                mono: [
                    "ui-monospace",
                    "SFMono-Regular",
                    "Menlo",
                    "Monaco",
                    "Consolas",
                    "Liberation Mono",
                    "Courier New",
                    "monospace",
                ],
            },
            maxWidth: {
                285: "71.25rem",
            },
            minWidth: {
                736: "736px",
            },
            width: {
                120: "30rem",
                184: "46rem",
            },
        },
        corePlugins: {
            colors: false,
        },
    },
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
