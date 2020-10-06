require("dotenv").config();
const path = require("path");
const withSass = require("@zeit/next-sass");
const rtlcss = require("rtlcss");

module.exports = withSass({
  assetPrefix: ".",
  basePath: process.env.BASE_PATH || "",
  env: {
    CORS_PROXY: process.env.CORS_PROXY || "",
    ALTLANG_ROOT_PATH: process.env.ALTLANG_ROOT_PATH || "/",
    KALTURA_PARTNER_ID: process.env.KALTURA_PARTNER_ID || "1773841",
    KALTURA_UICONF_ID: process.env.KALTURA_UICONF_ID || "27941801",
    DDS_CALLOUT_DATA: process.env.DDS_CALLOUT_DATA || "false",
    ENABLE_RTL: process.env.ENABLE_RTL || "false",
  },
  webpack: (config) => {
    config.devtool =
      process.env.NODE_ENV !== "production"
        ? "eval-cheap-module-source-map"
        : "";

    config.module.rules.push({
      test: /\.scss$/,
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
        {
          loader:
            process.env.NODE_ENV === "production"
              ? "sass-loader"
              : "fast-sass-loader",
          options: {
            includePaths: [path.resolve(__dirname, "node_modules")],
            data: `
              $feature-flags: (
                enable-css-custom-properties: true
              );
            `,
            sourceMap: process.env.NODE_ENV !== "production",
          },
        },
      ],
    });

    return config;
  },
});
