/// <reference types="vitest" />

// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "vite";
// eslint-disable-next-line import/no-extraneous-dependencies
import react from "@vitejs/plugin-react";

// eslint-disable-next-line no-restricted-exports
export default defineConfig({
    plugins: [react()],
    test: {
        environment: "jsdom",
        setupFiles: ["./vitest-setup.ts"],
        coverage: {
            reporter: ["text"],
        },
    },
});
