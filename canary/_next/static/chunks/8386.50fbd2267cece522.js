"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8386],{8386:function(e,t,r){r.r(t),r.d(t,{CustomElement:function(){return o.default},descriptor:function(){return f},propTypes:function(){return s}});var n=r(7147),o=r(6881),a=r(1976),i=r(5697),l=r.n(i),c=r(9033),u=r(8474),d=(c.default.prefix,u.default.stablePrefix),f=Object.assign({},n.descriptor,{altAriaLabel:{},colorScheme:{attribute:"color-scheme"},parentHref:{attribute:"parent-href"},iconInline:{serialize:a._P},slot:{}}),s={altAriaLabel:l().string,colorScheme:l().string,parentHref:l().string,iconInline:l().bool,slot:l().string};const p=(0,a.ZP)("".concat(d,"-card-footer"),f);p.propTypes=s,t.default=p},6881:function(e,t,r){var n=r(5318),o=r(1160);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i,l,c=n(r(168)),u=n(r(3144)),d=n(r(5671)),f=n(r(7326)),s=n(r(136)),p=n(r(2963)),h=n(r(6424)),y=n(r(3237)),v=n(r(1120)),_=r(6254),k=n(r(9033)),b=n(r(8474)),m=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var r=E(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(n,i,l):n[i]=e[i]}n.default=e,r&&r.set(e,n);return n}(r(7231)),C=r(5779),g=n(r(3699));function E(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(E=function(e){return e?r:t})(e)}function L(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,v.default)(e);if(t){var o=(0,v.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,p.default)(this,r)}}var O=k.default.prefix,P=b.default.stablePrefix,N=(0,h.default)([(0,_.customElement)("".concat(P,"-card-footer"))],(function(e,t){var r=function(t){(0,s.default)(n,t);var r=L(n);function n(){var t;(0,d.default)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=r.call.apply(r,[this].concat(a)),e((0,f.default)(t)),t}return(0,u.default)(n)}(t);return{F:r,d:[{kind:"field",decorators:[(0,_.query)(".".concat(P,"-ce--card__footer--static"))],key:"_staticNode",value:void 0},{kind:"field",decorators:[(0,_.state)()],key:"_hasCopy",value:function(){return!1}},{kind:"get",key:"_shouldUseParentLink",value:function(){var e=this.href,t=this.parentHref;return Boolean(t)&&(!e||t===e)}},{kind:"method",key:"_handleSlotChange",value:function(e){var t=e.target;if(!t.name){var r=t.assignedNodes().some((function(e){return e.nodeType!==Node.TEXT_NODE||e.textContent.trim()}));this._hasCopy=r}}},{kind:"method",key:"_renderContent",value:function(){var e=this._hasCopy;return(0,_.html)(a||(a=(0,c.default)(['\n      <span ?hidden="','" class="','--card__cta__copy">\n        <slot @slotchange="','"></slot>\n      </span>\n    '])),!e,O,this._handleSlotChange)}},{kind:"method",key:"_renderInner",value:function(){return this.iconPlacement===m.ICON_PLACEMENT.LEFT?(0,_.html)(i||(i=(0,c.default)([" ",""," "])),this._renderIcon(),this._renderContent()):(0,_.html)(l||(l=(0,c.default)([" ",""," "])),this._renderContent(),this._renderIcon())}},{kind:"field",decorators:[(0,_.property)({reflect:!1})],key:"altAriaLabel",value:void 0},{kind:"field",decorators:[(0,_.property)({attribute:"color-scheme",reflect:!0})],key:"colorScheme",value:function(){return C.BASIC_COLOR_SCHEME.REGULAR}},{kind:"field",decorators:[(0,_.property)({attribute:"parent-href",reflect:!0})],key:"parentHref",value:void 0},{kind:"field",decorators:[(0,_.property)({type:Boolean})],key:"iconInline",value:function(){return!0}},{kind:"field",decorators:[(0,_.property)({reflect:!0})],key:"slot",value:function(){return"footer"}},{kind:"method",key:"updated",value:function(){var e,t,n,o;((0,y.default)((0,v.default)(r.prototype),"updated",this).call(this),this._hasCopy)?null===(e=this.shadowRoot)||void 0===e||null===(t=e.querySelector("a"))||void 0===t||t.removeAttribute("aria-label"):null===(n=this.shadowRoot)||void 0===n||null===(o=n.querySelector("a"))||void 0===o||o.setAttribute("aria-label",this.altAriaLabel?this.altAriaLabel:"");var a=this.iconInline,i=this.iconPlacement,l=this._staticNode,c=this._linkNode,u=null!==c&&void 0!==c?c:l;u.classList.add("".concat(O,"--card__footer")),u.classList.add("".concat(P,"-ce--card__footer")),u.classList.toggle("".concat(O,"--card__footer__icon-left"),i===m.ICON_PLACEMENT.LEFT),a&&i===m.ICON_PLACEMENT.RIGHT&&u.classList.add("".concat(O,"--link-with-icon--inline-icon"))}},{kind:"get",static:!0,key:"stableSelector",value:function(){return"".concat(P,"--card-footer")}},{kind:"field",static:!0,key:"styles",value:function(){return g.default}}]}}),m.default),A=N;t.default=A}}]);