import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import babelPlugin from '@rollup/plugin-babel'
import { readFileSync } from 'node:fs'
import postcss from 'rollup-plugin-postcss'
import terser from '@rollup/plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import dts from 'rollup-plugin-dts'
import tailwindcss from '@tailwindcss/postcss'

const packageJson = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url), 'utf-8'),
)

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: [
          './src/**/*.stories.mdx',
          './src/**/*.stories.@(js|jsx|ts|tsx)',
        ],
      }),
      babelPlugin({
        babelHelpers: 'bundled',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        exclude: /node_modules/,
        plugins: [['babel-plugin-react-compiler', { target: '19' }]],
        babelrc: false,
        configFile: false,
      }),
      postcss({
        plugins: [tailwindcss()],
        extract: true,
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      }),
      terser(),
    ],
    external: (id) => {
      if (
        id === 'react' ||
        id === 'react-dom' ||
        id === 'react/compiler-runtime'
      ) {
        return true
      }

      return id.startsWith('@headlessui/react')
    },
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
]
