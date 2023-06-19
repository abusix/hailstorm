import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import packageJson from "./package.json" assert {type: "json"};
import tailwind from 'rollup-plugin-tailwindcss';
import postcss from "rollup-plugin-postcss";
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from "rollup-plugin-dts";

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({
                tsconfig: "./tsconfig.json", exclude: [
                    "./src/**/*.stories.mdx",
                    "./src/**/*.stories.@(js|jsx|ts|tsx)"
                ]
            }),
            postcss({
                config: {
                    path: "./postcss.config.js",
                },
                extract: true,
                extensions: [".css"],
                minimize: true,
                inject: {
                    insertAt: "top",
                },
            }),
            terser(),
        ],
        external: ["react", "react-dom"],
    },
    {
        input: "src/index.ts",
        output: [{file: "dist/index.d.ts", format: "esm"}],
        plugins: [dts()],
        external: [/\.css$/]
    },
];
