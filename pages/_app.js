import '../styles/global.scss';

import Altlang from '../components/altlang';
import App from 'next/app';
import {DotcomShell} from '@carbon/ibmdotcom-react';
import Head from 'next/head';
import React from 'react';

/**
 * Language codes for the DotcomShell for server side render
 * @type {{cc: string, lc: string}}
 * @private
 */
const _defaultLang = {
  cc: 'us',
  lc: 'en',
};

/**
 * Sets the lang attribute for static deployments
 * @param {object} lang Lang object with cc and lc
 * @private
 */
function _setStaticLang(lang) {
  if(typeof document !== 'undefined') {
    const useLang = `${lang.lc}-${lang.cc}`;
    document.getElementsByTagName("html")[0].setAttribute("lang", useLang);
  }
}

/**
 * Class IbmdotcomLibrary
 */
export default class IbmdotcomLibrary extends App {
  /**
   * Loads in the initial query string parameters
   *
   * @param {object} props page props
   * @param {object} props.ctx app context
   * @returns {Promise<{pageProps}>} Returns the pageProps
   */
  static async getInitialProps({ctx}) {
    const useLang =
      ctx.query && ctx.query.lc
        ? {
          lc: ctx.query.lc,
          cc: ctx.query.cc,
        }
        : _defaultLang;

    _setStaticLang(useLang);

    return {useLang, query: ctx.query};
  }

  /**
   * Renders the DotcomShell
   *
   * @returns {*} Page wrapper JSX
   */
  render() {
    const {Component, useLang, pageProps} = this.props;
    return (
      <>
        <Head>
          <Altlang/>
          <link rel="icon" href="//www.ibm.com/favicon.ico"/>

          <meta name="dcterms.date" content="2015-10-01"/>
          <meta name="dcterms.rights" content="© Copyright IBM Corp. 2020"/>
          <meta name="geo.country" content="US"/>
          <meta name="robots" content="index,follow" />
        </Head>
        <DotcomShell navigation="default" langCode={useLang}>
          <Component {...pageProps} />
        </DotcomShell>
        <script src="//1.www.s81c.com/common/stats/ibm-common.js"></script>
      </>
    );
  }
}
