export default {
  presets: [
    ['@babel/preset-env', { targets: { esmodules: true } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  plugins: [['babel-plugin-react-compiler', { target: '19' }]],
}
