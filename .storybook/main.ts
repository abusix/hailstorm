import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.stories.@(ts|tsx)", "../src/**/*.stories.@(md|mdx)"],
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
    docs: {
        autodocs: true,
    },
    core: {
        disableTelemetry: true,
    },
};
export default config;
