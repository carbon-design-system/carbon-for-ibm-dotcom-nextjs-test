require("dotenv").config();
const path = require("path");
const withSass = require("@zeit/next-sass");
const rtlcss = require("rtlcss");

const sassLoader = {
  loader: "sass-loader",
  options: {
    sassOptions: {
      includePaths: [path.resolve(__dirname, "node_modules")],
    },
    additionalData: `$feature-flags: ( enable-css-custom-properties: true );`,
  },
};

const fastSassLoader = {
  loader: "fast-sass-loader",
  options: {
    includePaths: [path.resolve(__dirname, "node_modules")],
    data: `$feature-flags: ( enable-css-custom-properties: true );`,
  },
};

module.exports = withSass({
  assetPrefix: ".",
  basePath: process.env.BASE_PATH || "",
  env: {
    ALTLANG_ROOT_PATH: process.env.ALTLANG_ROOT_PATH || "/",
    KALTURA_PARTNER_ID: process.env.KALTURA_PARTNER_ID || "1773841",
    KALTURA_UICONF_ID: process.env.KALTURA_UICONF_ID || "27941801",
    ENABLE_RTL: process.env.ENABLE_RTL || "false",
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      sideEffects: true,
      use: [
        {
          loader: "postcss-loader",
          options: {
            plugins: () => {
              const autoPrefixer = require("autoprefixer")({
                overrideBrowserslist: ["last 1 version", "ie >= 11"],
              });
              return process.env.ENABLE_RTL === "true"
                ? [autoPrefixer, rtlcss]
                : [autoPrefixer];
            },
          },
        },
        process.env.NODE_ENV === "production" ? sassLoader : fastSassLoader,
      ],
    });

    return config;
  },
});
