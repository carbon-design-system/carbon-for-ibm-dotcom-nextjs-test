import { CardSectionSimple } from "@carbon/ibmdotcom-react";
import React from "react";

/**
 * Setting the .html extension between local development and static deployment
 *
 * @type {string}
 * @private
 */
const _htmlExtension = process.env.NODE_ENV !== "production" ? "" : ".html";

/**
 * Homepage
 *
 * @returns {*} JSX for Homepage
 */
const Home = () => (
  <CardSectionSimple
    heading="Page Templates"
    theme="white"
    cards={[
      {
        heading: "Example page A",
        copy: " ",
        cta: {
          href: `./example-page-a${_htmlExtension}`,
        },
      },
      {
        heading: "Example page B",
        copy: " ",
        cta: {
          href: `./example-page-b${_htmlExtension}`,
        },
      },
      {
        heading: "Example page c",
        copy: " ",
        cta: {
          href: `./example-page-c${_htmlExtension}`,
        },
      },
      {
        heading: "White theme example page",
        copy: " ",
        cta: {
          href: `./white-theme-example${_htmlExtension}`,
        },
      },
      {
        heading: "Gray 100 theme example page",
        copy: " ",
        cta: {
          href: `./g100-theme-example${_htmlExtension}`,
        },
      },
    ]}
  />
);

export default Home;
