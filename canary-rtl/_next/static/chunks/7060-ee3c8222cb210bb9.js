(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7060,8386],{8386:function(e,t,r){"use strict";r.r(t),r.d(t,{CustomElement:function(){return o.default},descriptor:function(){return c},propTypes:function(){return f}});var n=r(7147),o=r(6881),a=r(1976),i=r(5697),u=r.n(i),l=r(9033),s=r(8474);l.default.prefix;var d=s.default.stablePrefix,c=Object.assign({},n.descriptor,{altAriaLabel:{},colorScheme:{attribute:"color-scheme"},parentHref:{attribute:"parent-href"},iconInline:{serialize:a._P},slot:{}}),f={altAriaLabel:u().string,colorScheme:u().string,parentHref:u().string,iconInline:u().bool,slot:u().string};let p=(0,a.ZP)("".concat(d,"-card-footer"),c);p.propTypes=f,t.default=p},1955:function(e,t,r){"use strict";var n=r(8386);r(7551);var o=r(1976),a=r(5697),i=r.n(a),u=r(9033),l=r(8474);u.default.prefix;var s=l.default.stablePrefix,d=Object.assign({},n.descriptor,{ctaType:{attribute:"cta-type"},formatVideoCaption:{attribute:!1},formatVideoDuration:{attribute:!1},videoDuration:{serialize:o.Hf,attribute:"video-duration"},mode:{},videoDescription:{attribute:"video-description"}}),c={ctaType:i().string,formatVideoCaption:i().string,formatVideoDuration:i().string,videoDuration:i().number,mode:i().string,videoDescription:i().string};let f=(0,o.ZP)("".concat(s,"-card-cta-footer"),d);f.propTypes=c,t.ZP=f},6881:function(e,t,r){"use strict";var n,o,a,i=r(5318),u=r(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(r(168)),s=i(r(3144)),d=i(r(5671)),c=i(r(7326)),f=i(r(136)),p=i(r(2963)),y=i(r(6424)),v=i(r(3237)),h=i(r(1120)),_=r(6254),m=r(7353),b=i(r(9033)),k=i(r(2658)),g=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==u(e)&&"function"!=typeof e)return{default:e};var r=O(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(r(7231)),C=r(5779),E=i(r(3699));function O(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(O=function(e){return e?r:t})(e)}var P=b.default.prefix,w=k.default.stablePrefix,T=(0,y.default)([(0,m.carbonElement)("".concat(w,"-card-footer"))],function(e,t){var r=function(t){(0,f.default)(a,t);var r,n,o=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}} /**
                                                                                                                                                                                                                                                                                                                                           * @license
                                                                                                                                                                                                                                                                                                                                           *
                                                                                                                                                                                                                                                                                                                                           * Copyright IBM Corp. 2020, 2023
                                                                                                                                                                                                                                                                                                                                           *
                                                                                                                                                                                                                                                                                                                                           * This source code is licensed under the Apache-2.0 license found in the
                                                                                                                                                                                                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                           */ (),function(){var e,t=(0,h.default)(a);if(n){var r=(0,h.default)(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return(0,p.default)(this,e)});function a(){var t;(0,d.default)(this,a);for(var r=arguments.length,n=Array(r),i=0;i<r;i++)n[i]=arguments[i];return t=o.call.apply(o,[this].concat(n)),e((0,c.default)(t)),t}return(0,s.default)(a)}(t);return{F:r,d:[{kind:"field",decorators:[(0,_.query)(".".concat(w,"-ce--card__footer--static"))],key:"_staticNode",value:void 0},{kind:"field",decorators:[(0,_.state)()],key:"_hasCopy",value:function(){return!1}},{kind:"get",key:"_shouldUseParentLink",value:function(){var e=this.href,t=this.parentHref;return Boolean(t)&&(!e||t===e)}},{kind:"method",key:"_handleSlotChange",value:function(e){var t=e.target;if(!t.name){var r=t.assignedNodes().some(function(e){return e.nodeType!==Node.TEXT_NODE||e.textContent.trim()});this._hasCopy=r}}},{kind:"method",key:"_renderContent",value:function(){var e=this._hasCopy;return(0,_.html)(n||(n=(0,l.default)(['\n      <span ?hidden="','" class="','--card__cta__copy">\n        <slot @slotchange="','"></slot>\n      </span>\n    '])),!e,P,this._handleSlotChange)}},{kind:"method",key:"_renderInner",value:function(){return this.iconPlacement===g.ICON_PLACEMENT.LEFT?(0,_.html)(o||(o=(0,l.default)([" ",""," "])),this._renderIcon(),this._renderContent()):(0,_.html)(a||(a=(0,l.default)([" ",""," "])),this._renderContent(),this._renderIcon())}},{kind:"field",decorators:[(0,_.property)({reflect:!1})],key:"altAriaLabel",value:void 0},{kind:"field",decorators:[(0,_.property)({attribute:"color-scheme",reflect:!0})],key:"colorScheme",value:function(){return C.BASIC_COLOR_SCHEME.REGULAR}},{kind:"field",decorators:[(0,_.property)({attribute:"parent-href",reflect:!0})],key:"parentHref",value:void 0},{kind:"field",decorators:[(0,_.property)({type:Boolean})],key:"iconInline",value:function(){return!0}},{kind:"field",decorators:[(0,_.property)({reflect:!0})],key:"slot",value:function(){return"footer"}},{kind:"method",key:"updated",value:function(){(0,v.default)((0,h.default)(r.prototype),"updated",this).call(this),this._hasCopy?null===(n=this.shadowRoot)||void 0===n||null===(o=n.querySelector("a"))||void 0===o||o.removeAttribute("aria-label"):null===(e=this.shadowRoot)||void 0===e||null===(t=e.querySelector("a"))||void 0===t||t.setAttribute("aria-label",this.altAriaLabel?this.altAriaLabel:"");var e,t,n,o,a=this.iconInline,i=this.iconPlacement,u=this._staticNode,l=this._linkNode,s=null!=l?l:u;s.classList.add("".concat(P,"--card__footer")),s.classList.add("".concat(w,"-ce--card__footer")),s.classList.toggle("".concat(P,"--card__footer__icon-left"),i===g.ICON_PLACEMENT.LEFT),a&&i===g.ICON_PLACEMENT.RIGHT&&s.classList.add("".concat(P,"--link-with-icon--inline-icon"))}},{kind:"get",static:!0,key:"stableSelector",value:function(){return"".concat(w,"--card-footer")}},{kind:"field",static:!0,key:"styles",value:function(){return E.default}}]}},g.default);t.default=T},7551:function(e,t,r){"use strict";var n,o=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(168)),i=o(r(3144)),u=o(r(5671)),l=o(r(7326)),s=o(r(136)),d=o(r(2963)),c=o(r(6424)),f=o(r(3237)),p=o(r(1120)),y=r(6254),v=o(r(9033)),h=o(r(8474)),_=r(2398),m=o(r(6881)),b=o(r(1689)),k=o(r(798)),g=r(2092),C=o(r(8767)),E=r(7353),O=v.default.prefix,P=h.default.stablePrefix,w=(0,c.default)([(0,E.carbonElement)("".concat(P,"-card-cta-footer"))],function(e,t){var r=function(t){(0,s.default)(a,t);var r,n,o=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}} /**
                                                                                                                                                                                                                                                                                                                                           * @license
                                                                                                                                                                                                                                                                                                                                           *
                                                                                                                                                                                                                                                                                                                                           * Copyright IBM Corp. 2020, 2023
                                                                                                                                                                                                                                                                                                                                           *
                                                                                                                                                                                                                                                                                                                                           * This source code is licensed under the Apache-2.0 license found in the
                                                                                                                                                                                                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                           */ (),function(){var e,t=(0,p.default)(a);if(n){var r=(0,p.default)(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return(0,d.default)(this,e)});function a(){var t;(0,u.default)(this,a);for(var r=arguments.length,n=Array(r),i=0;i<r;i++)n[i]=arguments[i];return t=o.call.apply(o,[this].concat(n)),e((0,l.default)(t)),t}return(0,i.default)(a)}(t);return{F:r,d:[{kind:"method",key:"_renderContent",value:function(){var e=this.ctaType,t=this._hasCopy;if(e!==g.CTA_TYPE.VIDEO)return(0,f.default)((0,p.default)(r.prototype),"_renderContent",this).call(this);var o=this.videoDuration,i=this.formatVideoCaption,u=this.formatVideoDuration,l=t?void 0:i({duration:u({duration:o?1e3*o:o})});return(0,y.html)(n||(n=(0,a.default)(['\n      <span class="','--card__cta__copy"\n        ><slot @slotchange="','"></slot>',"</span\n      >\n    "])),O,this._handleSlotChange,l)}},{kind:"field",decorators:[(0,y.property)({reflect:!0,attribute:"cta-type"})],key:"ctaType",value:function(){return g.CTA_TYPE.REGULAR}},{kind:"field",decorators:[(0,y.property)({attribute:!1})],key:"formatVideoCaption",value:function(){return _.formatVideoCaption}},{kind:"field",decorators:[(0,y.property)({attribute:!1})],key:"formatVideoDuration",value:function(){return _.formatVideoDuration}},{kind:"field",decorators:[(0,y.property)({type:Number,attribute:"video-duration"})],key:"videoDuration",value:void 0},{kind:"field",decorators:[(0,y.property)({reflect:!0})],key:"mode",value:void 0},{kind:"field",decorators:[(0,y.property)({attribute:"video-description"})],key:"videoDescription",value:void 0},{kind:"method",key:"connectedCallback",value:function(){var e;null!==(e=this.parentElement)&&void 0!==e&&e.matches("".concat(P,"-link-list-item-card-cta"))&&(this.mode="link-list"),(0,f.default)((0,p.default)(r.prototype),"connectedCallback",this).call(this)}},{kind:"get",static:!0,key:"stableSelector",value:function(){return"".concat(P,"--card-cta-footer")}},{kind:"field",static:!0,key:"styles",value:function(){return C.default}}]}},(0,k.default)((0,b.default)(m.default)));t.default=w},638:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=i.default,a=(null==t?void 0:t.suspense)?{}:{loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};if(n(e,Promise)?a.loader=function(){return e}:"function"==typeof e?a.loader=e:"object"==typeof e&&(a=o({},a,e)),(a=o({},a,t)).suspense)throw Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(a.suspense&&(delete a.ssr,delete a.loading),a.loadableGenerated&&delete(a=o({},a,a.loadableGenerated)).loadableGenerated,"boolean"==typeof a.ssr&&!a.suspense){if(!a.ssr)return delete a.ssr,u(r,a);delete a.ssr}return r(a)},t.noSSR=u;var o=r(6495).Z,a=r(2648).Z,i=(a(r(7294)),a(r(4302)));function u(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var n=(0,r(2648).Z)(r(7294)).default.createContext(null);t.LoadableContext=n},4302:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(9658).Z,o=r(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(6495).Z,i=(0,r(2648).Z)(r(7294)),u=r(6319),l=r(1688).useSyncExternalStore,s=[],d=[],c=!1;function f(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(function(e){return r.loading=!1,r.loaded=e,e}).catch(function(e){throw r.loading=!1,r.error=e,e}),r}var p=function(){function e(t,r){n(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"==typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},r.delay)),"number"==typeof r.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},r.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function y(e){return function(e,t){var r=function(){if(!y){var t=new p(e,f);y={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return y.promise()},n=function(){r();var e=i.default.useContext(u.LoadableContext);e&&Array.isArray(f.modules)&&f.modules.forEach(function(t){e(t)})},o=function(e,t){n();var r=l(y.subscribe,y.getCurrentValue,y.getCurrentValue);return i.default.useImperativeHandle(t,function(){return{retry:y.retry}},[]),i.default.useMemo(function(){var t;return r.loading||r.error?i.default.createElement(f.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:y.retry}):r.loaded?i.default.createElement((t=r.loaded)&&t.__esModule?t.default:t,e):null},[e,r])},s=function(e,t){return n(),i.default.createElement(f.lazy,a({},e,{ref:t}))},f=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);f.suspense&&(f.lazy=i.default.lazy(f.loader));var y=null;if(!c){var v=f.webpack?f.webpack():f.modules;v&&d.push(function(e){var t=!0,n=!1,o=void 0;try{for(var a,i=v[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var u=a.value;if(-1!==e.indexOf(u))return r()}}catch(l){n=!0,o=l}finally{try{t||null==i.return||i.return()}finally{if(n)throw o}}})}var h=f.suspense?s:o;return h.preload=function(){return r()},h.displayName="LoadableComponent",i.default.forwardRef(h)}(f,e)}function v(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then(function(){if(e.length)return v(e,t)})}y.preloadAll=function(){return new Promise(function(e,t){v(s).then(e,t)})},y.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(function(t){var r=function(){return c=!0,t()};v(d,e).then(r,r)})},window.__NEXT_PRELOADREADY=y.preloadReady,t.default=y},5152:function(e,t,r){e.exports=r(638)},3250:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var n=r(7294),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=n.useState,i=n.useEffect,u=n.useLayoutEffect,l=n.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!o(e,r)}catch(n){return!0}}function d(e,t){return t()}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?d:function(e,t){var r=t(),n=a({inst:{value:r,getSnapshot:t}}),o=n[0].inst,d=n[1];return u(function(){o.value=r,o.getSnapshot=t,s(o)&&d({inst:o})},[e,r,t]),i(function(){return s(o)&&d({inst:o}),e(function(){s(o)&&d({inst:o})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},1688:function(e,t,r){"use strict";e.exports=r(3250)}}]);