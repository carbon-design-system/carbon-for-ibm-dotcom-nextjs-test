"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8219,8386],{8779:function(e,t,a){var r=a(4942),n=a(5987),o=a(6011),i=a(3813),c=a.n(i),l=a(893),s=a(5393),d=a(5697),u=a.n(d),f=a(7294),p=a(9033),m=["cards","theme"],h=s.Z.stablePrefix,g=p.default.prefix,y=function(e){var t=e.cards,a=e.theme,i=(0,n.Z)(e,m),s=t.filter((function(e){var t=e.image,a=e.eyebrow,r=e.heading,n=e.copy,o=e.cta.href;return t&&a&&r&&!n&&o}));return f.createElement(l.Z,{heading:i.heading,autoid:"".concat(h,"--card-group-images-group"),customClassName:c()("".concat(g,"--card-group"),(0,r.default)({},"".concat(g,"--card-group--").concat(a),a)),children:[f.createElement(o.Z,{cards:s})]})};y.propTypes={theme:u().oneOf(["white","g10","g90","g100"]),heading:u().string.isRequired,cards:u().arrayOf(u().exact({image:u().shape({classname:u().string,sources:u().arrayOf(u().shape({src:u().string,breakpoint:u().oneOfType([u().string,u().number])})),defaultSrc:u().string.isRequired,alt:u().string.isRequired,longDescription:u().string}),eyebrow:u().string,heading:u().string,cta:u().shape({href:u().string})})).isRequired},t.Z=y},6914:function(e,t,a){var r=a(8440),n=a(4908),o=a(5393),i=a(5697),c=a.n(i),l=a(7294),s=a(9033),d=o.Z.stablePrefix,u=s.default.prefix,f=function(e){var t=e.heading,a=e.items,o=e.border;return l.createElement("div",{"data-autoid":"".concat(d,"--content-block-horizontal"),className:"".concat(u,"--content-block-horizontal")},l.createElement(r.Z,{heading:t,border:o},a.map((function(e,t){return l.createElement(n.Z,{eyebrow:e.eyebrow,heading:e.heading,copy:e.copy,cta:e.cta,key:t})}))))};f.propTypes={heading:c().string.isRequired,items:c().arrayOf(c().shape({eyebrow:c().string,heading:c().string.isRequired,copy:c().string.isRequired,cta:c().shape({heading:c().string,items:c().arrayOf(c().shape({type:c().oneOfType([c().oneOf(["local","external"]),c().arrayOf(c().oneOf(["local","external"]))]),copy:c().string,href:c().string,customClassName:c().string})).isRequired,iconPlacement:c().oneOf(["left","right"])})})).isRequired,border:c().bool},t.Z=f},4514:function(e,t,a){var r=a(4942),n=a(8440),o=a(3866),i=a(7536),c=a(3813),l=a.n(c),s=a(5393),d=a(1499),u=a(5697),f=a.n(u),p=a(7294),m=a(9033),h=a(9625);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){(0,r.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var v=s.Z.stablePrefix,b=m.default.prefix,_=function(e){var t=e.copy,a=e.cta,o=e.heading,i=e.mediaType,c=e.mediaData,s=e.items,d=e.aside,u=e.border;return p.createElement("div",{"data-autoid":"".concat(v,"--content-block-segmented"),className:l()("".concat(b,"--content-block-segmented"),(0,r.default)({},"".concat(b,"--content-block-segmented-border"),u||d&&d.border))},p.createElement(n.Z,{heading:o,copy:t,cta:a,aside:d,border:u},O(i,c),k(s)))},O=function(e,t){if(t)return p.createElement("div",{"data-autoid":"".concat(v,"--content-block-segmented__media")},"image"===e&&p.createElement(d.Z,t),"video"===e&&p.createElement(h.Z,t))},k=function(e){return e.map((function(e,t){return p.createElement(o.Z,{heading:e.heading,key:t,cta:!e.cta||"jump"!==e.cta.type&&"local"!==e.cta.type?void 0:y({style:"text"},e.cta)},p.createElement("div",{"data-autoid":"".concat(v,"--content-block-segmented__content-group")},p.createElement(i.Z,{copy:e.copy,key:t}),(e.image||e.video)&&p.createElement("div",{"data-autoid":"".concat(v,"--content-block-segmented__media")},e.image&&p.createElement(d.Z,e.image),e.video&&p.createElement(h.Z,e.video))))}))};_.propTypes={heading:f().string.isRequired,copy:f().string,cta:f().shape({style:f().oneOf(["text","card"]),type:f().oneOfType([f().oneOf(["jump","local","external","download","video"]),f().arrayOf(f().oneOf(["jump","local","external","download","video"]))]),heading:f().string,href:f().string,customClassName:f().string}),mediaType:f().oneOf(["image","video"]),mediaData:f().oneOfType([f().shape({inverse:f().bool,image:f().shape({classname:f().string,sources:f().arrayOf(f().shape({src:f().string,breakpoint:f().oneOfType([f().string,f().number])})),defaultSrc:f().string.isRequired,alt:f().string.isRequired,longDescription:f().string}).isRequired,lightbox:f().bool,heading:f().string,copy:f().string,customClassName:f().string}),f().shape({customClassName:f().string,videoId:f().string.isRequired,showCaption:f().bool,inverse:f().bool})]),items:f().arrayOf(f().shape({heading:f().string,copy:f().string,image:f().shape({inverse:f().bool,image:f().shape({classname:f().string,sources:f().arrayOf(f().shape({src:f().string,breakpoint:f().oneOfType([f().string,f().number])})),defaultSrc:f().string.isRequired,alt:f().string.isRequired,longDescription:f().string}).isRequired,lightbox:f().bool,heading:f().string,copy:f().string,customClassName:f().string}),cta:f().shape({style:f().oneOf(["card"]),type:f().oneOf(["local"]),heading:f().string,customClassName:f().string}),video:f().shape({customClassName:f().string,videoId:f().string.isRequired,showCaption:f().bool,inverse:f().bool})})).isRequired,aside:f().shape({items:f().element,border:f().bool}),border:f().bool},t.Z=_},4908:function(e,t,a){var r=a(7462),n=a(5393),o=a(4710),i=a(8568),c=a(5697),l=a.n(c),s=a(7294),d=a(9033),u=n.Z.stablePrefix,f=d.default.prefix,p=function(e){var t=e.eyebrow,a=e.heading,n=e.copy,c=e.cta;return s.createElement("div",{className:"".concat(f,"--content-item-horizontal__item "),"data-autoid":"".concat(u,"--content-item-horizontal__item")},s.createElement("div",{className:"".concat(f,"--content-item-horizontal__row")},s.createElement("div",{className:"".concat(f,"--content-item-horizontal__col")},t&&s.createElement("p",{className:"".concat(f,"--content-item-horizontal__item--eyebrow"),"data-autoid":"".concat(u,"--content-item-horizontal__item--eyebrow")},t),s.createElement("h3",{className:"".concat(f,"--content-item-horizontal__item--heading"),"data-autoid":"".concat(u,"--content-item-horizontal__item--heading")},a)),s.createElement("div",{className:"".concat(f,"--content-item-horizontal__col")},s.createElement("div",{className:"".concat(f,"--content-item-horizontal__item--copy"),"data-autoid":"".concat(u,"--content-item-horizontal__item--copy"),dangerouslySetInnerHTML:{__html:(0,i.Z)(n,{bold:!1})}}),c&&s.createElement("div",{className:"".concat(f,"--content-item-horizontal__item--cta"),"data-autoid":"".concat(u,"--content-item-horizontal__item--cta")},s.createElement(o.Z,(0,r.Z)({style:"vertical"},c))))))};p.propTypes={eyebrow:l().string,heading:l().string.isRequired,copy:l().string.isRequired,cta:l().shape({heading:l().string,items:l().arrayOf(l().shape({type:l().oneOfType([l().oneOf(["local","external"]),l().arrayOf(l().oneOf(["local","external"]))]),copy:l().string,href:l().string,customClassName:l().string})).isRequired,iconPlacement:l().oneOf(["left","right"])})},t.Z=p},5892:function(e,t,a){var r=a(4942),n=a(6312),o=a(3813),i=a.n(o),c=a(5393),l=a(259),s=a(5174),d=a(5697),u=a.n(d),f=a(7294),p=a(9033),m=c.Z.stablePrefix,h=p.default.prefix,g=function(e,t){var a;return i()("".concat(h,"--leadspace__section"),(a={},(0,r.default)(a,"".concat(h,"--leadspace--").concat(t),t),(0,r.default)(a,"".concat(h,"--leadspace--centered"),"centered"===e),(0,r.default)(a,"".concat(h,"--leadspace--productive"),"small"===e),a))};var y=function(e){var t,a=e.buttons,o=e.copy,c=e.image,l=e.theme,d=e.title,u=e.type,p=e.size,y=void 0===p?"tall":p;return f.createElement("div",{"data-autoid":"".concat(m,"--leadspace"),className:i()("".concat(h,"--leadspace"),(t={},(0,r.default)(t,"".concat(h,"--leadspace--medium"),"medium"===y),(0,r.default)(t,"".concat(h,"--leadspace--tall"),"tall"===y),(0,r.default)(t,"".concat(h,"--leadspace--super"),"super"===y),t))},f.createElement("section",{className:g(u,l)},f.createElement("div",{className:"".concat(h,"--leadspace__container")},f.createElement("div",{className:i()("".concat(h,"--leadspace__overlay"),(0,r.default)({},"".concat(h,"--leadspace--gradient"),c&&c.defaultSrc))},c&&!0===c.defaultSrc?void 0:f.createElement("svg",{className:"".concat(h,"--leadspace__gradient"),viewBox:"0 0 100 100",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},f.createElement("defs",null,f.createElement("linearGradient",{id:"stops",className:"".concat(h,"--leadspace__gradient__stops"),gradientTransform:"centered"===u?"rotate(90)":""},"centered"===u?f.createElement(f.Fragment,null,f.createElement("stop",{offset:"0%"}),f.createElement("stop",{offset:"54%"}),f.createElement("stop",{offset:"77%"}),f.createElement("stop",{offset:"100%"})):f.createElement(f.Fragment,null,f.createElement("stop",{offset:"0%"}),f.createElement("stop",{offset:"25%"}),f.createElement("stop",{offset:"50%"}),f.createElement("stop",{offset:"75%"})))),f.createElement("rect",{className:"".concat(h,"--leadspace__gradient__rect"),width:"100",height:"100"})),f.createElement("div",{className:"".concat(h,"--leadspace--content__container")},f.createElement("div",{className:"".concat(h,"--leadspace__row")},f.createElement("h1",{className:"".concat(h,"--leadspace__title")},d)),f.createElement("div",{className:"".concat(h,"--leadspace__content")},o&&f.createElement("div",{className:"".concat(h,"--leadspace__row")},f.createElement("p",{"data-autoid":"".concat(m,"--leadspace__desc"),className:"".concat(h,"--leadspace__desc")},o)),a&&a.length>0&&f.createElement(n.Z,{buttons:a})))),c&&function(e){return f.createElement(s.Z,e)}(c))))};y.propTypes={buttons:u().arrayOf(u().shape({copy:u().string.isRequired,href:u().string.isRequired,renderIcon:u().elementType})),copy:u().string,image:u().shape({classname:u().string,sources:u().arrayOf(u().shape({src:u().string,breakpoint:u().oneOfType([u().string,u().number])})),defaultSrc:u().string.isRequired,alt:u().string.isRequired,longDescription:u().string}),theme:u().oneOf(["white","g10","g90","g100"]),title:u().string.isRequired,type:u().oneOf(["default","left","centered"]),size:u().oneOf(["tall","medium","super"])},t.Z=(0,l.Z)(y,"\n  The Leadspace Small and Leadspace Small With Image variations are now deprecated.\n  Please refer to the Carbon for IBM.com documentation for further details.\n  https://www.ibm.com/standards/carbon/components/leadspace\n")},8386:function(e,t,a){a.r(t),a.d(t,{CustomElement:function(){return n.default},descriptor:function(){return u},propTypes:function(){return f}});var r=a(7147),n=a(6881),o=a(1976),i=a(5697),c=a.n(i),l=a(9033),s=a(8474),d=(l.default.prefix,s.default.stablePrefix),u=Object.assign({},r.descriptor,{altAriaLabel:{},colorScheme:{attribute:"color-scheme"},parentHref:{attribute:"parent-href"},iconInline:{serialize:o._P},slot:{}}),f={altAriaLabel:c().string,colorScheme:c().string,parentHref:c().string,iconInline:c().bool,slot:c().string};const p=(0,o.ZP)("".concat(d,"-card-footer"),u);p.propTypes=f,t.default=p},1955:function(e,t,a){var r=a(8386),n=(a(7551),a(1976)),o=a(5697),i=a.n(o),c=a(9033),l=a(8474),s=(c.default.prefix,l.default.stablePrefix),d=Object.assign({},r.descriptor,{ctaType:{attribute:"cta-type"},formatVideoCaption:{attribute:!1},formatVideoDuration:{attribute:!1},videoDuration:{serialize:n.Hf,attribute:"video-duration"},mode:{},videoDescription:{attribute:"video-description"}}),u={ctaType:i().string,formatVideoCaption:i().string,formatVideoDuration:i().string,videoDuration:i().number,mode:i().string,videoDescription:i().string};const f=(0,n.ZP)("".concat(s,"-card-cta-footer"),d);f.propTypes=u,t.ZP=f},6881:function(e,t,a){var r=a(5318),n=a(1160);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i,c,l=r(a(168)),s=r(a(3144)),d=r(a(5671)),u=r(a(7326)),f=r(a(136)),p=r(a(2963)),m=r(a(6424)),h=r(a(3237)),g=r(a(1120)),y=a(6254),v=r(a(9033)),b=r(a(8474)),_=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var a=E(t);if(a&&a.has(e))return a.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var c=o?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(r,i,c):r[i]=e[i]}r.default=e,a&&a.set(e,r);return r}(a(7231)),O=a(5779),k=r(a(3699));function E(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(E=function(e){return e?a:t})(e)}function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=(0,g.default)(e);if(t){var n=(0,g.default)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return(0,p.default)(this,a)}}var P=v.default.prefix,C=b.default.stablePrefix,N=(0,m.default)([(0,y.customElement)("".concat(C,"-card-footer"))],(function(e,t){var a=function(t){(0,f.default)(r,t);var a=w(r);function r(){var t;(0,d.default)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return t=a.call.apply(a,[this].concat(o)),e((0,u.default)(t)),t}return(0,s.default)(r)}(t);return{F:a,d:[{kind:"field",decorators:[(0,y.query)(".".concat(C,"-ce--card__footer--static"))],key:"_staticNode",value:void 0},{kind:"field",decorators:[(0,y.state)()],key:"_hasCopy",value:function(){return!1}},{kind:"get",key:"_shouldUseParentLink",value:function(){var e=this.href,t=this.parentHref;return Boolean(t)&&(!e||t===e)}},{kind:"method",key:"_handleSlotChange",value:function(e){var t=e.target;if(!t.name){var a=t.assignedNodes().some((function(e){return e.nodeType!==Node.TEXT_NODE||e.textContent.trim()}));this._hasCopy=a}}},{kind:"method",key:"_renderContent",value:function(){var e=this._hasCopy;return(0,y.html)(o||(o=(0,l.default)(['\n      <span ?hidden="','" class="','--card__cta__copy">\n        <slot @slotchange="','"></slot>\n      </span>\n    '])),!e,P,this._handleSlotChange)}},{kind:"method",key:"_renderInner",value:function(){return this.iconPlacement===_.ICON_PLACEMENT.LEFT?(0,y.html)(i||(i=(0,l.default)([" ",""," "])),this._renderIcon(),this._renderContent()):(0,y.html)(c||(c=(0,l.default)([" ",""," "])),this._renderContent(),this._renderIcon())}},{kind:"field",decorators:[(0,y.property)({reflect:!1})],key:"altAriaLabel",value:void 0},{kind:"field",decorators:[(0,y.property)({attribute:"color-scheme",reflect:!0})],key:"colorScheme",value:function(){return O.BASIC_COLOR_SCHEME.REGULAR}},{kind:"field",decorators:[(0,y.property)({attribute:"parent-href",reflect:!0})],key:"parentHref",value:void 0},{kind:"field",decorators:[(0,y.property)({type:Boolean})],key:"iconInline",value:function(){return!0}},{kind:"field",decorators:[(0,y.property)({reflect:!0})],key:"slot",value:function(){return"footer"}},{kind:"method",key:"updated",value:function(){var e,t,r,n;((0,h.default)((0,g.default)(a.prototype),"updated",this).call(this),this._hasCopy)?null===(e=this.shadowRoot)||void 0===e||null===(t=e.querySelector("a"))||void 0===t||t.removeAttribute("aria-label"):null===(r=this.shadowRoot)||void 0===r||null===(n=r.querySelector("a"))||void 0===n||n.setAttribute("aria-label",this.altAriaLabel?this.altAriaLabel:"");var o=this.iconInline,i=this.iconPlacement,c=this._staticNode,l=this._linkNode,s=null!==l&&void 0!==l?l:c;s.classList.add("".concat(P,"--card__footer")),s.classList.add("".concat(C,"-ce--card__footer")),s.classList.toggle("".concat(P,"--card__footer__icon-left"),i===_.ICON_PLACEMENT.LEFT),o&&i===_.ICON_PLACEMENT.RIGHT&&s.classList.add("".concat(P,"--link-with-icon--inline-icon"))}},{kind:"get",static:!0,key:"stableSelector",value:function(){return"".concat(C,"--card-footer")}},{kind:"field",static:!0,key:"styles",value:function(){return k.default}}]}}),_.default),R=N;t.default=R},7551:function(e,t,a){var r=a(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=r(a(168)),i=r(a(3144)),c=r(a(5671)),l=r(a(7326)),s=r(a(136)),d=r(a(2963)),u=r(a(6424)),f=r(a(3237)),p=r(a(1120)),m=a(6254),h=r(a(9033)),g=r(a(8474)),y=a(2398),v=r(a(6881)),b=r(a(1689)),_=r(a(798)),O=a(2092),k=r(a(8767));function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=(0,p.default)(e);if(t){var n=(0,p.default)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return(0,d.default)(this,a)}}var w=h.default.prefix,P=g.default.stablePrefix,C=(0,u.default)([(0,m.customElement)("".concat(P,"-card-cta-footer"))],(function(e,t){var a=function(t){(0,s.default)(r,t);var a=E(r);function r(){var t;(0,c.default)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return t=a.call.apply(a,[this].concat(o)),e((0,l.default)(t)),t}return(0,i.default)(r)}(t);return{F:a,d:[{kind:"method",key:"_renderContent",value:function(){var e=this.ctaType,t=this._hasCopy;if(e!==O.CTA_TYPE.VIDEO)return(0,f.default)((0,p.default)(a.prototype),"_renderContent",this).call(this);var r=this.videoDuration,i=this.formatVideoCaption,c=this.formatVideoDuration,l=t?void 0:i({duration:c({duration:r?1e3*r:r})});return(0,m.html)(n||(n=(0,o.default)(['\n      <span class="','--card__cta__copy"\n        ><slot @slotchange="','"></slot>',"</span\n      >\n    "])),w,this._handleSlotChange,l)}},{kind:"field",decorators:[(0,m.property)({reflect:!0,attribute:"cta-type"})],key:"ctaType",value:function(){return O.CTA_TYPE.REGULAR}},{kind:"field",decorators:[(0,m.property)({attribute:!1})],key:"formatVideoCaption",value:function(){return y.formatVideoCaption}},{kind:"field",decorators:[(0,m.property)({attribute:!1})],key:"formatVideoDuration",value:function(){return y.formatVideoDuration}},{kind:"field",decorators:[(0,m.property)({type:Number,attribute:"video-duration"})],key:"videoDuration",value:void 0},{kind:"field",decorators:[(0,m.property)({reflect:!0})],key:"mode",value:void 0},{kind:"field",decorators:[(0,m.property)({attribute:"video-description"})],key:"videoDescription",value:void 0},{kind:"method",key:"connectedCallback",value:function(){var e;null!==(e=this.parentElement)&&void 0!==e&&e.matches("".concat(P,"-link-list-item-card-cta"))&&(this.mode="link-list"),(0,f.default)((0,p.default)(a.prototype),"connectedCallback",this).call(this)}},{kind:"get",static:!0,key:"stableSelector",value:function(){return"".concat(P,"--card-cta-footer")}},{kind:"field",static:!0,key:"styles",value:function(){return k.default}}]}}),(0,_.default)((0,b.default)(v.default))),N=C;t.default=N},1281:function(e,t,a){function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}a.d(t,{u9:function(){return d}});var c=["width","height","viewBox"],l=["tabindex"],s={focusable:"false",preserveAspectRatio:"xMidYMid meet"};function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,a=e.height,r=e.viewBox,o=void 0===r?"0 0 ".concat(t," ").concat(a):r,d=i(e,c),u=d.tabindex,f=i(d,l),p=n(n(n({},s),f),{},{width:t,height:a,viewBox:o});return p["aria-label"]||p["aria-labelledby"]||p.title?(p.role="img",void 0!==u&&null!==u&&(p.focusable="true",p.tabindex=u)):p["aria-hidden"]=!0,p}}}]);