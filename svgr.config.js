module.exports = {
  svgoConfig: {
    multipass: true,
    plugins: [
      "preset-default",
      "removeDimensions",
      {
        name: "removeAttrs",
        params: { attrs: "(stroke|fill|style|width|height)" },
      },
      {
        name: "addAttributesToSVGElement",
        params: {
          attributes: [
            {
              fill: "currentColor",
            },
          ],
        },
      },
    ],
  },
  typescript: true,
  filenameCase: "kebab",
  outDir: "./src/icons",
  expandProps: "end",
};
