export default {
  svgoConfig: {
    multipass: true,
    plugins: [
      'preset-default',
      'removeDimensions',
      {
        name: 'removeAttrs',
        params: { attrs: '(stroke|fill|style|width|height)' },
      },
      {
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [
            {
              fill: 'currentColor',
            },
          ],
        },
      },
    ],
  },
  typescript: true,
  filenameCase: 'kebab',
  outDir: './src/icons',
  svgProps: {
    className: 'h-4 w-4',
  },
  expandProps: 'end',
}
