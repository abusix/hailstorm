import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.stories.@(ts|tsx)", "../src/**/*.@(mdx|stories.@(md))"],
    staticDirs: ["../assets"],

    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-docs",
        "@storybook/addon-mdx-gfm",
    ],

    framework: {
        name: "@storybook/react-vite",
        options: {
            strictMode: true,
        },
    },

    docs: {},

    core: {
        disableTelemetry: true,
    },

    typescript: {
        reactDocgen: "react-docgen-typescript"
    }
};
export default config;
