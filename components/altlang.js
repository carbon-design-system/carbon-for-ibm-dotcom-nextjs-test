import altlangs from './data/altlang.json';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

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
 * @param {string} host hostname
 * @returns {*} altlang markup
 */
const AltLangs = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if(urlParams.has('lc') && urlParams.has('cc')) {
      lang = `${urlParams.get('lc')}-${urlParams.get('cc')}`;
      document.getElementsByTagName("html")[0].setAttribute("lang", lang);
    }
  }, []);

  return (
    <>
      <link rel="alternate" hrefLang="x-default" href="/" />
      {_renderAltLangs()}
    </>
  );
}

export default AltLangs;
