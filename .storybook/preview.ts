import type { Preview } from "@storybook/react";
import "tailwindcss/tailwind.css";
import "../src/index.css";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        layout: "centered", // "centered" | "fullscreen"
        backgrounds: {
            default: "white",
            values: [
                { name: "white", value: "#FFFFFF" },
                { name: "light", value: "#FAFAFC" },
                { name: "dark", value: "#212121" },
            ],
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        options: {
            storySort: {
                order: ["Home", "Icons gallery"],
            },
        },
    },
};

export default preview;
