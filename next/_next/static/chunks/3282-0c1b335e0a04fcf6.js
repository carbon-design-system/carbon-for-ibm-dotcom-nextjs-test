(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3282],{893:function(e,t,n){"use strict";var r=n(4942),a=n(5987),o=n(3813),c=n.n(o),i=n(7251),u=n(5393),s=n(9550),l=n(5697),d=n.n(l),f=n(7294),p=n(9033),m=["heading","copy","theme","children","cta","customClassName","childrenCustomClassName"],y=u.Z.stablePrefix,h=p.Z.prefix,v=function(e){var t=e.heading,n=e.copy,o=e.theme,u=e.children,l=e.cta,d=e.customClassName,p=e.childrenCustomClassName,v=(0,a.Z)(e,m);return f.createElement("section",{className:c()("".concat(h,"--content-section"),d,(0,r.Z)({},"".concat(h,"--content-section--").concat(o),o)),"data-autoid":v.autoid?v.autoid:"".concat(y,"--content-section")},f.createElement("div",{className:"".concat(h,"--content-section__grid")},f.createElement("div",{className:"".concat(h,"--content-section__row")},f.createElement("div",{className:"".concat(h,"--content-section__left")},t&&f.createElement("h2",{className:"".concat(h,"--content-section__heading")},t),n&&f.createElement("div",{"data-autoid":"".concat(y,"--content-section__copy"),className:"".concat(h,"--content-section__copy"),dangerouslySetInnerHTML:{__html:(0,s.Z)(n,{bold:!1})}}),l&&f.createElement(i.Z,{style:"text",type:l.type,copy:l.copy,href:l.href,customClassName:"".concat(h,"--content-section__cta")})),f.createElement("div",{className:c()("".concat(h,"--content-section__children"),p)},u))))};v.propTypes={heading:d().string.isRequired,copy:d().string,theme:d().oneOf(["white","g10","g90","g100"]),children:d().oneOfType([d().arrayOf(d().node),d().node]),cta:d().shape({type:d().oneOfType([d().oneOf(["local","external","download","video"]),d().arrayOf(d().oneOf(["local","external","download","video"]))]),copy:d().string,href:d().string,customClassName:d().string}),customClassName:d().string,childrenCustomClassName:d().string},t.Z=v},5549:function(e,t,n){"use strict";var r=n(7294),a=n(3514),o=n(5697),c=n.n(o),i=n(9033).Z.prefix,u=function(e){var t=e.animation,n=e.children,o=e.selectorTargets,c=e.keepAnimations,u=(0,r.useRef)(null),s=(0,r.useRef)(null),l=(0,r.useRef)(null),d=(0,r.useRef)(null),f=(0,r.useRef)(null),p=(0,r.useRef)(null);(0,r.useEffect)(function(){if(v(),s.current=new IntersectionObserver(h),d.current=new ResizeObserver(m),o){var e;null===(e=u.current)||void 0===e||e.querySelectorAll(o).forEach(function(e){null==s||s.current.observe(e)})}return d.current.observe(document.documentElement),function(){s.current.disconnect(),l.current.disconnect(),d.current.disconnect(),s.current=null,l.current=null,d.current=null}},[u,o,v,y,m]);var m=(0,r.useCallback)(function(){if(l.current&&(l.current.disconnect(),l.current=null),l.current=new IntersectionObserver(y,{rootMargin:"-".concat((3*document.documentElement.clientHeight/a.AV.max.columns).toString(),"px 0px")}),o){var e;null===(e=u.current)||void 0===e||e.querySelectorAll(o).forEach(function(e){null==l||l.current.observe(e)})}},[u,l,o,y]),y=(0,r.useCallback)(function(e){e.forEach(function(e){var t=e.intersectionRatio,n=e.target;t>0&&(n.classList.remove(p.current),n.classList.add(f.current),c||(s.current.unobserve(n),l.current.unobserve(n)))})},[c,s,l]);function h(e){e.forEach(function(e){var t=e.intersectionRatio,n=e.target;0==t&&(n.classList.remove(f.current),n.classList.add(p.current))})}var v=(0,r.useCallback)(function(){switch(t){case"slide-up":f.current="".concat(i,"--slide-in"),p.current="".concat(i,"--slide-up");break;case"slide-up-right":f.current="".concat(i,"--slide-in"),p.current="".concat(i,"--slide-up-right");break;case"slide-right":f.current="".concat(i,"--slide-in"),p.current="".concat(i,"--slide-right");break;case"slide-down-right":f.current="".concat(i,"--slide-in"),p.current="".concat(i,"--slide-down-right");break;case"slide-down":f.current="".concat(i,"--slide-in"),p.current="".concat(i,"--slide-down");break;case"slide-down-left":f.current="".concat(i,"--slide-in"),p.current="".concat(i,"--slide-down-left");break;case"slide-left":f.current="".concat(i,"--slide-in"),p.current="".concat(i,"--slide-left");break;case"slide-up-left":f.current="".concat(i,"--slide-in"),p.current="".concat(i,"--slide-up-left");break;default:f.current="".concat(i,"--fade-in"),p.current="".concat(i,"--fade-out")}},[t,f,p]);return r.createElement("div",{ref:u},n)};u.propTypes={animation:c().string,children:c().oneOfType([c().arrayOf(c().node),c().node]).isRequired,selectorTargets:c().string,keepAnimations:c().bool},t.Z=u},6635:function(e,t,n){"use strict";n.d(t,{I:function(){return m},_:function(){return d},a:function(){return l}});var r=n(1281),a=n(5697),o=n.n(a),c=n(7294);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=["className","children","tabIndex"],p=["tabindex"],m=c.forwardRef(function(e,t){var n=e.className,a=e.children,o=e.tabIndex,i=d(e,f),s=(0,r.u9)(u(u({},i),{},{tabindex:o})),l=s.tabindex,m=d(s,p);return n&&(m.className=n),null!=l&&(m.tabIndex=l),t&&(m.ref=t),c.createElement("svg",m,a)});m.displayName="Icon",m.propTypes={"aria-hidden":o().string,"aria-label":o().string,"aria-labelledby":o().string,children:o().node,className:o().string,height:o().oneOfType([o().number,o().string]),preserveAspectRatio:o().string,tabIndex:o().string,viewBox:o().string,width:o().oneOfType([o().number,o().string]),xmlns:o().string},m.defaultProps={xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"}},638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=c.default,o=(null==t?void 0:t.suspense)?{}:{loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};if(r(e,Promise)?o.loader=function(){return e}:"function"==typeof e?o.loader=e:"object"==typeof e&&(o=a({},o,e)),(o=a({},o,t)).suspense)throw Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(o.suspense&&(delete o.ssr,delete o.loading),o.loadableGenerated&&delete(o=a({},o,o.loadableGenerated)).loadableGenerated,"boolean"==typeof o.ssr&&!o.suspense){if(!o.ssr)return delete o.ssr,i(n,o);delete o.ssr}return n(o)},t.noSSR=i;var a=n(6495).Z,o=n(2648).Z,c=(o(n(7294)),o(n(4302)));function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext(null);t.LoadableContext=r},4302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9658).Z,a=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(6495).Z,c=(0,n(2648).Z)(n(7294)),i=n(6319),u=n(1688).useSyncExternalStore,s=[],l=[],d=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}var p=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"==typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},n.delay)),"number"==typeof n.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},n.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function m(e){return function(e,t){var n=function(){if(!m){var t=new p(e,f);m={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return m.promise()},r=function(){n();var e=c.default.useContext(i.LoadableContext);e&&Array.isArray(f.modules)&&f.modules.forEach(function(t){e(t)})},a=function(e,t){r();var n=u(m.subscribe,m.getCurrentValue,m.getCurrentValue);return c.default.useImperativeHandle(t,function(){return{retry:m.retry}},[]),c.default.useMemo(function(){var t;return n.loading||n.error?c.default.createElement(f.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:m.retry}):n.loaded?c.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null},[e,n])},s=function(e,t){return r(),c.default.createElement(f.lazy,o({},e,{ref:t}))},f=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);f.suspense&&(f.lazy=c.default.lazy(f.loader));var m=null;if(!d){var y=f.webpack?f.webpack():f.modules;y&&l.push(function(e){var t=!0,r=!1,a=void 0;try{for(var o,c=y[Symbol.iterator]();!(t=(o=c.next()).done);t=!0){var i=o.value;if(-1!==e.indexOf(i))return n()}}catch(u){r=!0,a=u}finally{try{t||null==c.return||c.return()}finally{if(r)throw a}}})}var h=f.suspense?s:a;return h.preload=function(){return n()},h.displayName="LoadableComponent",c.default.forwardRef(h)}(f,e)}function y(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then(function(){if(e.length)return y(e,t)})}m.preloadAll=function(){return new Promise(function(e,t){y(s).then(e,t)})},m.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(function(t){var n=function(){return d=!0,t()};y(l,e).then(n,n)})},window.__NEXT_PRELOADREADY=m.preloadReady,t.default=m},5152:function(e,t,n){e.exports=n(638)},3250:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var r=n(7294),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=r.useState,c=r.useEffect,i=r.useLayoutEffect,u=r.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!a(e,n)}catch(r){return!0}}function l(e,t){return t()}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?l:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),a=r[0].inst,l=r[1];return i(function(){a.value=n,a.getSnapshot=t,s(a)&&l({inst:a})},[e,n,t]),c(function(){return s(a)&&l({inst:a}),e(function(){s(a)&&l({inst:a})})},[e]),u(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:d},1688:function(e,t,n){"use strict";e.exports=n(3250)}}]);