(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8840],{50008:function(e){function t(o){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(o)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},32658:function(e,t,o){"use strict";o.r(t),t.default={version:"Carbon for IBM.com v1.46.0",stablePrefix:"dds"}},41523:function(e,t,o){"use strict";o.r(t);var i=o(30577);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ t.default=e=>(0,i.ifDefined)(null!=e?e:void 0)},92266:function(e,t,o){"use strict";var i=o(36069);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let n=new WeakMap,r=(0,i.directive)(e=>t=>{if(!(t instanceof i.PropertyPart)||".."!==t.committer.name||t.committer.parts.length>1)throw Error("The `spread` directive must be used in with `...` name and must be the only part in the attribute.");let{committer:o}=t,{element:r}=o,a=n.get(t);a&&Object.keys(a).forEach(t=>{t in e||r.removeAttribute(t)}),Object.keys(e).forEach(t=>{let o=e[t];a&&Object.is(o,a[t])||void 0===o||r.setAttribute(t,o)}),n.set(t,e)});t.Z=r},80747:function(e,t,o){"use strict";o.r(t),o.d(t,{selectorTabbable:function(){return r}});var i=o(69033);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let{prefix:n}=i.default,r=`
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true],
  ${n}-accordion-item,
  ${n}-btn,
  ${n}-breadcrumb-link,
  ${n}-checkbox,
  ${n}-code-snippet,
  ${n}-combo-box,
  ${n}-content-switcher-item,
  ${n}-copy-button,
  ${n}-table-header-row,
  ${n}-table-row,
  ${n}-table-toolbar-search,
  ${n}-date-picker-input,
  ${n}-dropdown,
  ${n}-input,
  ${n}-link,
  ${n}-number-input,
  ${n}-modal,
  ${n}-modal-close-button,
  ${n}-multi-select,
  ${n}-inline-notification,
  ${n}-toast-notification,
  ${n}-overflow-menu,
  ${n}-overflow-menu-item,
  ${n}-page-sizes-select,
  ${n}-pages-select,
  ${n}-progress-step,
  ${n}-radio-button,
  ${n}-search,
  ${n}-slider,
  ${n}-slider-input,
  ${n}-structured-list,
  ${n}-tab,
  ${n}-filter-tag,
  ${n}-textarea,
  ${n}-clickable-tile,
  ${n}-expandable-tile,
  ${n}-radio-tile,
  ${n}-selectable-tile,
  ${n}-toggle,
  ${n}-tooltip,
  ${n}-tooltip-definition,
  ${n}-tooltip-icon,
  ${n}-header-menu,
  ${n}-header-menu-button,
  ${n}-header-menu-item,
  ${n}-header-name,
  ${n}-header-nav-item,
  ${n}-side-nav-link,
  ${n}-side-nav-menu,
  ${n}-side-nav-menu-item
`},30577:function(e,t,o){"use strict";o.r(t),o.d(t,{ifDefined:function(){return r}});var i=o(36069);/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ let n=new WeakMap,r=(0,i.directive)(e=>t=>{let o=n.get(t);if(void 0===e&&t instanceof i.AttributePart){if(void 0!==o||!n.has(t)){let r=t.committer.name;t.committer.element.removeAttribute(r)}}else e!==o&&t.setValue(e);n.set(t,e)})}}]);