import altlangs from './data/altlang.json';
import React from 'react';

/**
 * Renders the list of altlang items
 *
 * @returns {Array} altlang elements
 * @private
 */
const _renderAltLangs = () => {
  let langs = [];
  altlangs.forEach(alt => {
    langs.push(
      <link
        rel="alternate"
        hrefLang={`${alt.lc}-${alt.cc}`}
        href={`/?cc=${alt.cc}&lc=${alt.lc}`}
      />
    );
  });
  return langs;
};

/**
 * Altlang elements to include into the head tag
 *
 * @returns {*} altlang markup
 */
const AltLangs = () => {
  return (
    <>
      <link rel="alternate" hrefLang="x-default" href="/" />
      {_renderAltLangs()}
    </>
  );
};

export default AltLangs;
