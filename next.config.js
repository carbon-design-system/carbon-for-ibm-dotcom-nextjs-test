require("dotenv").config();
const path = require("path");
const withSass = require("@zeit/next-sass");
const WebpackBar = require("webpackbar");

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
];

const sassLoader = {
  loader: "sass-loader",
  options: {
    includePaths: [path.resolve(__dirname, "node_modules")],
    sourceMap: process.env.NODE_ENV !== "production",
    data: `
      $feature-flags: (
        enable-css-custom-properties: true
      );
    `,
  },
};

const fastSassLoader = {
  loader: "fast-sass-loader",
  options: {
    includePaths: [path.resolve(__dirname, "node_modules")],
    data: `
      $feature-flags: (
        enable-css-custom-properties: true
      );
    `,
  },
};

module.exports = withSass({
  assetPrefix: ".",
  env: {
    CORS_PROXY: process.env.CORS_PROXY || "",
    ROOT_PATH: process.env.ROOT_PATH || "/",
    KALTURA_PARTNER_ID: process.env.KALTURA_PARTNER_ID || "1773841",
    KALTURA_UICONF_ID: process.env.KALTURA_UICONF_ID || "27941801",
    DDS_CALLOUT_DATA: process.env.DDS_CALLOUT_DATA || "false",
  },
  sassLoaderOptions: {
    includePaths: [path.resolve(__dirname, "node_modules")],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      sideEffects: true,
      use: [
        ...styleLoaders,
        process.env.NODE_ENV === "production" ? sassLoader : fastSassLoader,
      ],
    });

    config.plugins.push(
      new WebpackBar({
        fancy: true,
        profile: true,
        basic: false,
      })
    );

    return config;
  },
});
