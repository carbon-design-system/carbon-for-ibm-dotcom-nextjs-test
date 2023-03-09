require("dotenv").config();
const path = require("path");
const sass = require("sass");

module.exports = {
  swcMinify: true,
  assetPrefix: ".",
  basePath: process.env.BASE_PATH || "",
  sassOptions: {
    implementation: sass,
    includePaths: [
      path.resolve(__dirname, "node_modules"),
      path.resolve(__dirname, "styles"),
    ],
  },
  env: {
    ALTLANG_ROOT_PATH: process.env.ALTLANG_ROOT_PATH || "/",
    KALTURA_PARTNER_ID: process.env.KALTURA_PARTNER_ID || "1773841",
    KALTURA_UICONF_ID: process.env.KALTURA_UICONF_ID || "27941801",
    ENABLE_RTL: process.env.ENABLE_RTL || "false",
  },
};
