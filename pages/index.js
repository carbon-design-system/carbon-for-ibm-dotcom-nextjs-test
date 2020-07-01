import "../styles/landing.scss";
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
        heading: "Learn",
        copy: " ",
        cta: {
          href: `./learn${_htmlExtension}`,
        },
      },
      {
        heading: "Solutions",
        copy: " ",
        cta: {
          href: `./solutions${_htmlExtension}`,
        },
      },
      {
        heading: "Services",
        copy: " ",
        cta: {
          href: `./services${_htmlExtension}`,
        },
      },
      {
        heading: "More coming soon!",
        copy: " ",
        cta: {
          href: `./learn${_htmlExtension}`,
        },
      },
    ]}
  />
);

export default Home;
