require("dotenv").config();
const path = require("path");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

const styleLoaders = [
  {
    loader: "postcss-loader",
    options: {
      plugins: () => {
        const autoPrefixer = require("autoprefixer")({
          overrideBrowserslist: ["last 1 version", "ie >= 11"],
        });
        return [autoPrefixer];
      },
    },
  },
  {
    loader: "sass-loader",
    options: {
      includePaths: [path.resolve(__dirname, "node_modules")],
      data: `
      $feature-flags: (
        ui-shell: true,
      );
    `,
      sourceMap: true,
    },
  },
];

module.exports = withSass(
  withCSS({
    assetPrefix: ".",
    env: {
      CORS_PROXY: process.env.CORS_PROXY || "",
      ROOT_PATH: process.env.ROOT_PATH || "/",
      KALTURA_PARTNER_ID: process.env.KALTURA_PARTNER_ID || "1773841",
      KALTURA_UICONF_ID: process.env.KALTURA_UICONF_ID || "27941801",
    },
    sassLoaderOptions: {
      includePaths: [path.resolve(__dirname, "node_modules")],
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.scss$/,
        sideEffects: true,
        use: [...styleLoaders],
      });

      return config;
    },
  })
);
