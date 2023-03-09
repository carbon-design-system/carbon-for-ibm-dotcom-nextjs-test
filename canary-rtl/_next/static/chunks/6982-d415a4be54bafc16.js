"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6982],{1689:function(t,e,a){var i,l,r,n=a(5318);Object.defineProperty(e,"__esModule",{value:!0}),e.types=e.icons=e.default=e.ariaLabels=void 0;var o=n(a(168)),u=n(a(5671)),d=n(a(3144)),s=n(a(3237)),f=n(a(136)),c=n(a(2963)),h=n(a(1120)),v=n(a(4942)),p=a(6254),A=n(a(9033)),T=n(a(3651)),w=n(a(4250)),g=n(a(461)),E=n(a(2141)),C=n(a(6224)),M=n(a(929)),m=n(a(3620)),_=n(a(6189)),V=n(a(8123)),b=n(a(8282)),P=n(a(8459)),Y=n(a(3163)),H=n(a(2658)),L=a(2092),y=A.default.prefix,x=H.default.stablePrefix,D=(i={},(0,v.default)(i,L.CTA_TYPE.LOCAL,w.default),(0,v.default)(i,L.CTA_TYPE.DOWNLOAD,g.default),(0,v.default)(i,L.CTA_TYPE.EXTERNAL,E.default),(0,v.default)(i,L.CTA_TYPE.NEW_TAB,_.default),(0,v.default)(i,L.CTA_TYPE.JUMP,T.default),(0,v.default)(i,L.CTA_TYPE.VIDEO,C.default),(0,v.default)(i,L.CTA_TYPE.PDF,m.default),(0,v.default)(i,L.CTA_TYPE.BLOG,M.default),(0,v.default)(i,L.CTA_TYPE.EMAIL,P.default),(0,v.default)(i,L.CTA_TYPE.SCHEDULE,b.default),(0,v.default)(i,L.CTA_TYPE.CHAT,Y.default),(0,v.default)(i,L.CTA_TYPE.CALL,V.default),i);e.icons=D;var R=(l={},(0,v.default)(l,L.CTA_TYPE.LOCAL,""),(0,v.default)(l,L.CTA_TYPE.DOWNLOAD," - This link downloads a file"),(0,v.default)(l,L.CTA_TYPE.EXTERNAL," - This link opens in a new tab"),(0,v.default)(l,L.CTA_TYPE.NEW_TAB," - This link opens in a new tab"),(0,v.default)(l,L.CTA_TYPE.JUMP,""),(0,v.default)(l,L.CTA_TYPE.VIDEO," - This link plays a video"),(0,v.default)(l,L.CTA_TYPE.PDF," - This link downloads a pdf"),(0,v.default)(l,L.CTA_TYPE.BLOG,""),l);e.ariaLabels=R;var O=L.CTA_TYPE;e.types=O;var k=function(t){return function(t){(0,f.default)(l,t);var e,a,i=(a=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t,e=(0,h.default)(l);if(a){var i=(0,h.default)(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return(0,c.default)(this,t)});function l(){return(0,u.default)(this,l),i.apply(this,arguments)}return(0,d.default)(l,[{key:"_handleClick",value:function(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}},{key:"_renderIcon",value:function(){var t,e=this.ctaType;return(0,p.html)(r||(r=(0,o.default)(['\n        <slot name="icon">\n          <span class="bx--visually-hidden">',"</span>\n          ","\n        </slot>\n      "])),R[e],null===(t=D[e])||void 0===t?void 0:t.call(D,{class:"".concat(y,"--card__cta ").concat(x,"-ce--cta__icon")}))}},{key:"updated",value:function(t){(0,s.default)((0,h.default)(l.prototype),"updated",this).call(this,t);var e=this.ctaType,a=this._linkNode;if(t.has("ctaType")||t.has("download")){var i,r=this.download;![L.CTA_TYPE.DOWNLOAD,L.CTA_TYPE.PDF].includes(e)&&r&&console.warn("`download` property used with a CTA data item besides `type: download|pdf` (`type: ".concat(e,"`)."));var n=(i={},(0,v.default)(i,L.CTA_TYPE.EMAIL,"email-link"),(0,v.default)(i,L.CTA_TYPE.SCHEDULE,"scheduler-link"),(0,v.default)(i,L.CTA_TYPE.CHAT,"chat-link"),(0,v.default)(i,L.CTA_TYPE.CALL,"phone-link"),i);Object.keys(n).includes(e)&&(a.dataset.ibmContact=n[e])}if(a&&"A"===a.nodeName){if(t.has("ctaType")||t.has("href")){var o=this.href,u=e!==L.CTA_TYPE.VIDEO?o:"#";null==u?a.removeAttribute("href"):a.setAttribute("href",u)}if(t.has("ctaType")||t.has("target")){var d=this.target,f=[L.CTA_TYPE.EXTERNAL,L.CTA_TYPE.NEW_TAB].includes(e)&&!d?"_blank":d;f?a.setAttribute("target",f):a.removeAttribute("target")}a.hasAttribute("aria-label")&&a.setAttribute("aria-label",a.getAttribute("aria-label")+(e?R[e]:""))}}}]),l}(t)};e.default=k},798:function(t,e,a){var i,l=a(5318);Object.defineProperty(e,"__esModule",{value:!0}),e.icons=e.default=void 0;var r=l(a(5671)),n=l(a(3144)),o=l(a(3237)),u=l(a(136)),d=l(a(2963)),s=l(a(1120)),f=l(a(4942)),c=l(a(3651)),h=l(a(4250)),v=l(a(461)),p=l(a(2141)),A=l(a(6224)),T=l(a(2658)),w=a(2092),g=T.default.stablePrefix,E=(i={},(0,f.default)(i,w.CTA_TYPE.LOCAL,h.default),(0,f.default)(i,w.CTA_TYPE.DOWNLOAD,v.default),(0,f.default)(i,w.CTA_TYPE.EXTERNAL,p.default),(0,f.default)(i,w.CTA_TYPE.JUMP,c.default),(0,f.default)(i,w.CTA_TYPE.VIDEO,A.default),i);e.icons=E;var C=function(t){return function(t){(0,u.default)(l,t);var e,a,i=(a=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t,e=(0,s.default)(l);if(a){var i=(0,s.default)(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return(0,d.default)(this,t)});function l(){return(0,r.default)(this,l),i.apply(this,arguments)}return(0,n.default)(l,[{key:"_handleClick",value:function(t){this.focus();var e=this.ctaType,a=this.disabled,i=this.href,l=this.videoName,r=this.videoDescription;if(e===w.CTA_TYPE.VIDEO&&t.preventDefault(),!a){var n=this.constructor.eventRunAction;this.dispatchEvent(new CustomEvent(n,{bubbles:!0,cancelable:!0,composed:!0,detail:{href:i,ctaType:e,videoName:l,videoDescription:r}}))}}},{key:"updated",value:function(t){(0,o.default)((0,s.default)(l.prototype),"updated",this).call(this,t);var e=this.ctaType,a=this.videoName,i=this.videoDescription,r=this.href,n=this.videoDuration,u=this.constructor.eventRequestVideoData;t.has("ctaType")&&e===w.CTA_TYPE.VIDEO&&void 0===n&&this.dispatchEvent(new CustomEvent(u,{bubbles:!0,cancelable:!0,composed:!0,detail:{href:r,videoName:a,videoDescription:i}})),(t.has("videoName")&&(null===a||"null"===a)||t.has("videoDescription"))&&this.dispatchEvent(new CustomEvent(u,{bubbles:!0,cancelable:!0,composed:!0,detail:{videoName:a,videoDescription:i,href:r}}))}}],[{key:"eventRequestVideoData",get:function(){return"".concat(g,"-cta-request-video-data")}},{key:"eventRunAction",get:function(){return"".concat(g,"-cta-run-action")}}]),l}(t)};e.default=C},2092:function(t,e){var a,i,l,r;Object.defineProperty(e,"__esModule",{value:!0}),e.CTA_TYPE=e.CTA_STYLE=void 0,e.CTA_STYLE=a,(l=a||(e.CTA_STYLE=a={})).TEXT="text",l.BUTTON="button",l.CARD="card",l.CARDLINK="card-link",l.FEATURE="feature",e.CTA_TYPE=i,(r=i||(e.CTA_TYPE=i={})).REGULAR="",r.LOCAL="local",r.JUMP="jump",r.EXTERNAL="external",r.NEW_TAB="new tab",r.DOWNLOAD="download",r.VIDEO="video",r.PDF="pdf",r.BLOG="blog",r.EMAIL="email",r.SCHEDULE="schedule",r.CHAT="chat",r.CALL="call"},2398:function(t,e,a){function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.duration,a=t.name;return a&&(0===e||e)?"".concat(a," (").concat(e,")"):a||e||""}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.duration,a=Math.floor((null!=e?e:0)/1e3%60),i=Array.from({length:2-String(a).length+1}).join("0");return null==e?e:"".concat(Math.floor((null!=e?e:0)/6e4),":").concat(i).concat(a)}a.r(e),a.d(e,{formatVideoCaption:function(){return i},formatVideoDuration:function(){return l}})},2266:function(t,e,a){var i=a(6069);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let l=new WeakMap,r=(0,i.directive)(t=>e=>{if(!(e instanceof i.PropertyPart)||".."!==e.committer.name||e.committer.parts.length>1)throw Error("The `spread` directive must be used in with `...` name and must be the only part in the attribute.");let{committer:a}=e,{element:r}=a,n=l.get(e);n&&Object.keys(n).forEach(e=>{e in t||r.removeAttribute(e)}),Object.keys(t).forEach(e=>{let a=t[e];n&&Object.is(a,n[e])||void 0===a||r.setAttribute(e,a)}),l.set(e,t)});e.Z=r},3651:function(t,e,a){a.r(e);var i=a(6069),l=a(2266);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let r=({children:t,...e}={})=>i.svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${(0,l.Z)(e)}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${t}<path d="M24.59 16.59L17 24.17 17 4 15 4 15 24.17 7.41 16.59 6 18 16 28 26 18 24.59 16.59z"></path></svg>`;e.default=r},4250:function(t,e,a){a.r(e);var i=a(6069),l=a(2266);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let r=({children:t,...e}={})=>i.svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${(0,l.Z)(e)}" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">${t}<path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path></svg>`;e.default=r},929:function(t,e,a){a.r(e);var i=a(6069),l=a(2266);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let r=({children:t,...e}={})=>i.svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${(0,l.Z)(e)}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${t}<path d="M4 24H14V26H4zM4 18H14V20H4zM26 14H6a2 2 0 01-2-2V6A2 2 0 016 4H26a2 2 0 012 2v6A2 2 0 0126 14zM6 6v6H26V6zM26 28H20a2 2 0 01-2-2V20a2 2 0 012-2h6a2 2 0 012 2v6A2 2 0 0126 28zm-6-8v6h6V20z"></path></svg>`;e.default=r},8282:function(t,e,a){a.r(e);var i=a(6069),l=a(2266);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let r=({children:t,...e}={})=>i.svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${(0,l.Z)(e)}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${t}<path d="M26,4h-4V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V6C28,4.9,27.1,4,26,4z M26,26H6V12h20	V26z M26,10H6V6h4v2h2V6h8v2h2V6h4V10z"></path></svg>`;e.default=r},3163:function(t,e,a){a.r(e);var i=a(6069),l=a(2266);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let r=({children:t,...e}={})=>i.svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${(0,l.Z)(e)}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${t}<path d="M17.74,30,16,29l4-7h6a2,2,0,0,0,2-2V8a2,2,0,0,0-2-2H6A2,2,0,0,0,4,8V20a2,2,0,0,0,2,2h9v2H6a4,4,0,0,1-4-4V8A4,4,0,0,1,6,4H26a4,4,0,0,1,4,4V20a4,4,0,0,1-4,4H21.16Z"></path><path d="M8 10H24V12H8zM8 16H18V18H8z"></path></svg>`;e.default=r},3620:function(t,e,a){a.r(e);var i=a(6069),l=a(2266);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let r=({children:t,...e}={})=>i.svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${(0,l.Z)(e)}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${t}<path d="M30 18L30 16 24 16 24 26 26 26 26 22 29 22 29 20 26 20 26 18 30 18zM19 26H15V16h4a3.0033 3.0033 0 013 3v4A3.0033 3.0033 0 0119 26zm-2-2h2a1.0011 1.0011 0 001-1V19a1.0011 1.0011 0 00-1-1H17zM11 16H6V26H8V23h3a2.0027 2.0027 0 002-2V18A2.0023 2.0023 0 0011 16zM8 21V18h3l.001 3z"></path><path d="M22,14V10a.9092.9092,0,0,0-.3-.7l-7-7A.9087.9087,0,0,0,14,2H4A2.0059,2.0059,0,0,0,2,4V28a2,2,0,0,0,2,2H20V28H4V4h8v6a2.0059,2.0059,0,0,0,2,2h6v2Zm-8-4V4.4L19.6,10Z"></path></svg>`;e.default=r},461:function(t,e,a){a.r(e);var i=a(6069),l=a(2266);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let r=({children:t,...e}={})=>i.svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${(0,l.Z)(e)}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${t}<path d="M26 24v4H6V24H4v4H4a2 2 0 002 2H26a2 2 0 002-2h0V24zM26 14L24.59 12.59 17 20.17 17 2 15 2 15 20.17 7.41 12.59 6 14 16 24 26 14z"></path></svg>`;e.default=r},8459:function(t,e,a){a.r(e);var i=a(6069),l=a(2266);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let r=({children:t,...e}={})=>i.svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${(0,l.Z)(e)}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${t}<path d="M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM25.8,8,16,14.78,6.2,8ZM4,24V8.91l11.43,7.91a1,1,0,0,0,1.14,0L28,8.91V24Z"></path></svg>`;e.default=r},2141:function(t,e,a){a.r(e);var i=a(6069),l=a(2266);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let r=({children:t,...e}={})=>i.svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${(0,l.Z)(e)}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${t}<path d="M26,28H6a2.0027,2.0027,0,0,1-2-2V6A2.0027,2.0027,0,0,1,6,4H16V6H6V26H26V16h2V26A2.0027,2.0027,0,0,1,26,28Z"></path><path d="M20 2L20 4 26.586 4 18 12.586 19.414 14 28 5.414 28 12 30 12 30 2 20 2z"></path></svg>`;e.default=r},6189:function(t,e,a){a.r(e);var i=a(6069),l=a(2266);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let r=({children:t,...e}={})=>i.svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${(0,l.Z)(e)}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${t}<path d="M26,26H6V6H16V4H6A2.002,2.002,0,0,0,4,6V26a2.002,2.002,0,0,0,2,2H26a2.002,2.002,0,0,0,2-2V16H26Z"></path><path d="M26,26H6V6H16V4H6A2.002,2.002,0,0,0,4,6V26a2.002,2.002,0,0,0,2,2H26a2.002,2.002,0,0,0,2-2V16H26Z"></path><path d="M26 6L26 2 24 2 24 6 20 6 20 8 24 8 24 12 26 12 26 8 30 8 30 6 26 6z"></path></svg>`;e.default=r},8123:function(t,e,a){a.r(e);var i=a(6069),l=a(2266);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let r=({children:t,...e}={})=>i.svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${(0,l.Z)(e)}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${t}<path d="M26,29h-.17C6.18,27.87,3.39,11.29,3,6.23A3,3,0,0,1,5.76,3h5.51a2,2,0,0,1,1.86,1.26L14.65,8a2,2,0,0,1-.44,2.16l-2.13,2.15a9.37,9.37,0,0,0,7.58,7.6l2.17-2.15A2,2,0,0,1,24,17.35l3.77,1.51A2,2,0,0,1,29,20.72V26A3,3,0,0,1,26,29ZM6,5A1,1,0,0,0,5,6v.08C5.46,12,8.41,26,25.94,27A1,1,0,0,0,27,26.06V20.72l-3.77-1.51-2.87,2.85L19.88,22C11.18,20.91,10,12.21,10,12.12l-.06-.48,2.84-2.87L11.28,5Z"></path></svg>`;e.default=r},6224:function(t,e,a){a.r(e);var i=a(6069),l=a(2266);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let r=({children:t,...e}={})=>i.svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${(0,l.Z)(e)}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${t}<path d="M11,23a1,1,0,0,1-1-1V10a1,1,0,0,1,1.4473-.8945l12,6a1,1,0,0,1,0,1.789l-12,6A1.001,1.001,0,0,1,11,23Zm1-11.3821v8.7642L20.7642,16Z"></path><path d="M16,4A12,12,0,1,1,4,16,12,12,0,0,1,16,4m0-2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Z"></path></svg>`;e.default=r}}]);