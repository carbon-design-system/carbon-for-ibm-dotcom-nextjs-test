"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8386],{98386:function(e,t,r){r.r(t),r.d(t,{CustomElement:function(){return o.default},descriptor:function(){return f},propTypes:function(){return s}});var n=r(7147),o=r(66881),a=r(11976),i=r(45697),l=r.n(i),c=r(69033),u=r(38474);c.default.prefix;var d=u.default.stablePrefix,f=Object.assign({},n.descriptor,{altAriaLabel:{},colorScheme:{attribute:"color-scheme"},parentHref:{attribute:"parent-href"},iconInline:{serialize:a._P},slot:{}}),s={altAriaLabel:l().string,colorScheme:l().string,parentHref:l().string,iconInline:l().bool,slot:l().string};let p=(0,a.ZP)("".concat(d,"-card-footer"),f);p.propTypes=s,t.default=p},66881:function(e,t,r){var n,o,a,i=r(95318),l=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=i(r(30168)),u=i(r(43144)),d=i(r(15671)),f=i(r(97326)),s=i(r(60136)),p=i(r(82963)),h=i(r(66424)),y=i(r(73237)),v=i(r(61120)),_=r(26254),k=i(r(69033)),b=i(r(38474)),m=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var r=E(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(r(77231)),C=r(5779),g=i(r(63699));function E(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(E=function(e){return e?r:t})(e)}var L=k.default.prefix,O=b.default.stablePrefix,P=(0,h.default)([(0,_.customElement)("".concat(O,"-card-footer"))],function(e,t){var r=function(t){(0,s.default)(a,t);var r,n,o=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=(0,v.default)(a);if(n){var r=(0,v.default)(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return(0,p.default)(this,e)});function a(){var t;(0,d.default)(this,a);for(var r=arguments.length,n=Array(r),i=0;i<r;i++)n[i]=arguments[i];return t=o.call.apply(o,[this].concat(n)),e((0,f.default)(t)),t}return(0,u.default)(a)}(t);return{F:r,d:[{kind:"field",decorators:[(0,_.query)(".".concat(O,"-ce--card__footer--static"))],key:"_staticNode",value:void 0},{kind:"field",decorators:[(0,_.state)()],key:"_hasCopy",value:function(){return!1}},{kind:"get",key:"_shouldUseParentLink",value:function(){var e=this.href,t=this.parentHref;return Boolean(t)&&(!e||t===e)}},{kind:"method",key:"_handleSlotChange",value:function(e){var t=e.target;if(!t.name){var r=t.assignedNodes().some(function(e){return e.nodeType!==Node.TEXT_NODE||e.textContent.trim()});this._hasCopy=r}}},{kind:"method",key:"_renderContent",value:function(){var e=this._hasCopy;return(0,_.html)(n||(n=(0,c.default)(['\n      <span ?hidden="','" class="','--card__cta__copy">\n        <slot @slotchange="','"></slot>\n      </span>\n    '])),!e,L,this._handleSlotChange)}},{kind:"method",key:"_renderInner",value:function(){return this.iconPlacement===m.ICON_PLACEMENT.LEFT?(0,_.html)(o||(o=(0,c.default)([" ",""," "])),this._renderIcon(),this._renderContent()):(0,_.html)(a||(a=(0,c.default)([" ",""," "])),this._renderContent(),this._renderIcon())}},{kind:"field",decorators:[(0,_.property)({reflect:!1})],key:"altAriaLabel",value:void 0},{kind:"field",decorators:[(0,_.property)({attribute:"color-scheme",reflect:!0})],key:"colorScheme",value:function(){return C.BASIC_COLOR_SCHEME.REGULAR}},{kind:"field",decorators:[(0,_.property)({attribute:"parent-href",reflect:!0})],key:"parentHref",value:void 0},{kind:"field",decorators:[(0,_.property)({type:Boolean})],key:"iconInline",value:function(){return!0}},{kind:"field",decorators:[(0,_.property)({reflect:!0})],key:"slot",value:function(){return"footer"}},{kind:"method",key:"updated",value:function(){(0,y.default)((0,v.default)(r.prototype),"updated",this).call(this),this._hasCopy?null===(n=this.shadowRoot)||void 0===n||null===(o=n.querySelector("a"))||void 0===o||o.removeAttribute("aria-label"):null===(e=this.shadowRoot)||void 0===e||null===(t=e.querySelector("a"))||void 0===t||t.setAttribute("aria-label",this.altAriaLabel?this.altAriaLabel:"");var e,t,n,o,a=this.iconInline,i=this.iconPlacement,l=this._staticNode,c=this._linkNode,u=null!=c?c:l;u.classList.add("".concat(L,"--card__footer")),u.classList.add("".concat(O,"-ce--card__footer")),u.classList.toggle("".concat(L,"--card__footer__icon-left"),i===m.ICON_PLACEMENT.LEFT),a&&i===m.ICON_PLACEMENT.RIGHT&&u.classList.add("".concat(L,"--link-with-icon--inline-icon"))}},{kind:"get",static:!0,key:"stableSelector",value:function(){return"".concat(O,"--card-footer")}},{kind:"field",static:!0,key:"styles",value:function(){return g.default}}]}},m.default);t.default=P}}]);