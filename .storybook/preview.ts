import type { Preview } from "@storybook/react";
import React from "react";
import "../src/styles/index.css";

const preview: Preview = {
    globalTypes: {
        theme: {
            description: "Global theme for components",
            toolbar: {
                title: "Theme",
                icon: "circlehollow",
                items: [
                    { value: "light", icon: "sun", title: "Light" },
                    { value: "dark", icon: "moon", title: "Dark" },
                ],
                dynamicTitle: true,
            },
        },
    },
    initialGlobals: {
        theme: "light",
    },
    decorators: [
        (Story, context) => {
            const theme = context.globals.theme || "light";
            // Support both class-based and data-attribute-based theming
            document.documentElement.classList.remove("light", "dark");
            document.documentElement.classList.add(theme);
            document.documentElement.setAttribute("data-theme", theme);
            return React.createElement(Story);
        },
    ],
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        layout: "centered",
        backgrounds: {
            default: "themed",
            values: [
                { name: "themed", value: "var(--color-bg-primary)" },
                { name: "page", value: "var(--color-bg-page)" },
                { name: "secondary", value: "var(--color-bg-secondary)" },
                { name: "white", value: "#FFFFFF" },
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
                method: "alphabetical",
                order: [
                    "Foundations",
                    ["Introduction", "Colors", "Typography", "Theming"],
                    "*",
                ],
            },
            showPanel: true,
        },
    },
    tags: ["autodocs"],
};

export default preview;
