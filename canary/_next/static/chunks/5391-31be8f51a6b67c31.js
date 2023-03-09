"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5391,8386],{8779:function(e,t,a){var n=a(4942),r=a(5987),o=a(6011),i=a(4184),c=a.n(i),s=a(893),l=a(5393),d=a(5697),u=a.n(d),f=a(7294),p=a(9033),m=["cards","theme"],h=l.Z.stablePrefix,g=p.default.prefix,y=function(e){var t=e.cards,a=e.theme,i=(0,r.Z)(e,m),l=t.filter(function(e){var t=e.image,a=e.eyebrow,n=e.heading,r=e.copy,o=e.cta.href;return t&&a&&n&&!r&&o});return f.createElement(s.Z,{heading:i.heading,autoid:"".concat(h,"--card-group-images-group"),customClassName:c()("".concat(g,"--card-group"),(0,n.default)({},"".concat(g,"--card-group--").concat(a),a)),children:[f.createElement(o.Z,{cards:l})]})};y.propTypes={theme:u().oneOf(["white","g10","g90","g100"]),heading:u().string.isRequired,cards:u().arrayOf(u().exact({image:u().shape({classname:u().string,sources:u().arrayOf(u().shape({src:u().string,breakpoint:u().oneOfType([u().string,u().number])})),defaultSrc:u().string.isRequired,alt:u().string.isRequired,longDescription:u().string}),eyebrow:u().string,heading:u().string,cta:u().shape({href:u().string})})).isRequired},t.Z=y},6914:function(e,t,a){var n=a(8440),r=a(4908),o=a(5393),i=a(5697),c=a.n(i),s=a(7294),l=a(9033),d=o.Z.stablePrefix,u=l.default.prefix,f=function(e){var t=e.heading,a=e.items,o=e.border;return s.createElement("div",{"data-autoid":"".concat(d,"--content-block-horizontal"),className:"".concat(u,"--content-block-horizontal")},s.createElement(n.Z,{heading:t,border:o},a.map(function(e,t){return s.createElement(r.Z,{eyebrow:e.eyebrow,heading:e.heading,copy:e.copy,cta:e.cta,key:t})})))};f.propTypes={heading:c().string.isRequired,items:c().arrayOf(c().shape({eyebrow:c().string,heading:c().string.isRequired,copy:c().string.isRequired,cta:c().shape({heading:c().string,items:c().arrayOf(c().shape({type:c().oneOfType([c().oneOf(["local","external"]),c().arrayOf(c().oneOf(["local","external"]))]),copy:c().string,href:c().string,customClassName:c().string})).isRequired,iconPlacement:c().oneOf(["left","right"])})})).isRequired,border:c().bool},t.Z=f},4514:function(e,t,a){var n=a(4942),r=a(8440),o=a(3866),i=a(7536),c=a(4184),s=a.n(c),l=a(5393),d=a(7930),u=a(5697),f=a.n(u),p=a(7294),m=a(9033),h=a(9625);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var y=l.Z.stablePrefix,v=m.default.prefix,_=function(e){var t=e.copy,a=e.cta,o=e.heading,i=e.mediaType,c=e.mediaData,l=e.items,d=e.aside,u=e.border;return p.createElement("div",{"data-autoid":"".concat(y,"--content-block-segmented"),className:s()("".concat(v,"--content-block-segmented"),(0,n.default)({},"".concat(v,"--content-block-segmented-border"),u||d&&d.border))},p.createElement(r.Z,{heading:o,copy:t,cta:a,aside:d,border:u},b(i,c),k(l)))},b=function(e,t){if(t)return p.createElement("div",{"data-autoid":"".concat(y,"--content-block-segmented__media")},"image"===e&&p.createElement(d.Z,t),"video"===e&&p.createElement(h.Z,t))},k=function(e){return e.map(function(e,t){return p.createElement(o.Z,{heading:e.heading,key:t,cta:e.cta&&("jump"===e.cta.type||"local"===e.cta.type)?function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach(function(t){(0,n.default)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({style:"text"},e.cta):void 0},p.createElement("div",{"data-autoid":"".concat(y,"--content-block-segmented__content-group")},p.createElement(i.Z,{copy:e.copy,key:t}),(e.image||e.video)&&p.createElement("div",{"data-autoid":"".concat(y,"--content-block-segmented__media")},e.image&&p.createElement(d.Z,e.image),e.video&&p.createElement(h.Z,e.video))))})};_.propTypes={heading:f().string.isRequired,copy:f().string,cta:f().shape({style:f().oneOf(["text","card"]),type:f().oneOfType([f().oneOf(["jump","local","external","download","video"]),f().arrayOf(f().oneOf(["jump","local","external","download","video"]))]),heading:f().string,href:f().string,customClassName:f().string}),mediaType:f().oneOf(["image","video"]),mediaData:f().oneOfType([f().shape({inverse:f().bool,image:f().shape({classname:f().string,sources:f().arrayOf(f().shape({src:f().string,breakpoint:f().oneOfType([f().string,f().number])})),defaultSrc:f().string.isRequired,alt:f().string.isRequired,longDescription:f().string}).isRequired,lightbox:f().bool,heading:f().string,copy:f().string,customClassName:f().string}),f().shape({customClassName:f().string,videoId:f().string.isRequired,showCaption:f().bool,inverse:f().bool})]),items:f().arrayOf(f().shape({heading:f().string,copy:f().string,image:f().shape({inverse:f().bool,image:f().shape({classname:f().string,sources:f().arrayOf(f().shape({src:f().string,breakpoint:f().oneOfType([f().string,f().number])})),defaultSrc:f().string.isRequired,alt:f().string.isRequired,longDescription:f().string}).isRequired,lightbox:f().bool,heading:f().string,copy:f().string,customClassName:f().string}),cta:f().shape({style:f().oneOf(["card"]),type:f().oneOf(["local"]),heading:f().string,customClassName:f().string}),video:f().shape({customClassName:f().string,videoId:f().string.isRequired,showCaption:f().bool,inverse:f().bool})})).isRequired,aside:f().shape({items:f().element,border:f().bool}),border:f().bool},t.Z=_},4908:function(e,t,a){var n=a(7462),r=a(5393),o=a(4710),i=a(9550),c=a(5697),s=a.n(c),l=a(7294),d=a(9033),u=r.Z.stablePrefix,f=d.default.prefix,p=function(e){var t=e.eyebrow,a=e.heading,r=e.copy,c=e.cta;return l.createElement("div",{className:"".concat(f,"--content-item-horizontal__item "),"data-autoid":"".concat(u,"--content-item-horizontal__item")},l.createElement("div",{className:"".concat(f,"--content-item-horizontal__row")},l.createElement("div",{className:"".concat(f,"--content-item-horizontal__col")},t&&l.createElement("p",{className:"".concat(f,"--content-item-horizontal__item--eyebrow"),"data-autoid":"".concat(u,"--content-item-horizontal__item--eyebrow")},t),l.createElement("h3",{className:"".concat(f,"--content-item-horizontal__item--heading"),"data-autoid":"".concat(u,"--content-item-horizontal__item--heading")},a)),l.createElement("div",{className:"".concat(f,"--content-item-horizontal__col")},l.createElement("div",{className:"".concat(f,"--content-item-horizontal__item--copy"),"data-autoid":"".concat(u,"--content-item-horizontal__item--copy"),dangerouslySetInnerHTML:{__html:(0,i.default)(r,{bold:!1})}}),c&&l.createElement("div",{className:"".concat(f,"--content-item-horizontal__item--cta"),"data-autoid":"".concat(u,"--content-item-horizontal__item--cta")},l.createElement(o.Z,(0,n.Z)({style:"vertical"},c))))))};p.propTypes={eyebrow:s().string,heading:s().string.isRequired,copy:s().string.isRequired,cta:s().shape({heading:s().string,items:s().arrayOf(s().shape({type:s().oneOfType([s().oneOf(["local","external"]),s().arrayOf(s().oneOf(["local","external"]))]),copy:s().string,href:s().string,customClassName:s().string})).isRequired,iconPlacement:s().oneOf(["left","right"])})},t.Z=p},5892:function(e,t,a){var n=a(4942),r=a(6312),o=a(4184),i=a.n(o),c=a(5393),s=a(259),l=a(5174),d=a(5697),u=a.n(d),f=a(7294),p=a(9033),m=c.Z.stablePrefix,h=p.default.prefix,g=function(e,t){var a;return i()("".concat(h,"--leadspace__section"),(a={},(0,n.default)(a,"".concat(h,"--leadspace--").concat(t),t),(0,n.default)(a,"".concat(h,"--leadspace--centered"),"centered"===e),(0,n.default)(a,"".concat(h,"--leadspace--productive"),"small"===e),a))},y=function(e){var t,a,o=e.buttons,c=e.copy,s=e.image,d=e.theme,u=e.title,p=e.type,y=e.size,v=void 0===y?"tall":y;return f.createElement("div",{"data-autoid":"".concat(m,"--leadspace"),className:i()("".concat(h,"--leadspace"),(t={},(0,n.default)(t,"".concat(h,"--leadspace--medium"),"medium"===v),(0,n.default)(t,"".concat(h,"--leadspace--tall"),"tall"===v),(0,n.default)(t,"".concat(h,"--leadspace--super"),"super"===v),t))},f.createElement("section",{className:g(p,d)},f.createElement("div",{className:"".concat(h,"--leadspace__container")},f.createElement("div",{className:i()("".concat(h,"--leadspace__overlay"),(0,n.default)({},"".concat(h,"--leadspace--gradient"),s&&s.defaultSrc))},s&&!0===s.defaultSrc?void 0:f.createElement("svg",{className:"".concat(h,"--leadspace__gradient"),viewBox:"0 0 100 100",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},f.createElement("defs",null,f.createElement("linearGradient",{id:"stops",className:"".concat(h,"--leadspace__gradient__stops"),gradientTransform:"centered"===p?"rotate(90)":""},"centered"===p?f.createElement(f.Fragment,null,f.createElement("stop",{offset:"0%"}),f.createElement("stop",{offset:"54%"}),f.createElement("stop",{offset:"77%"}),f.createElement("stop",{offset:"100%"})):f.createElement(f.Fragment,null,f.createElement("stop",{offset:"0%"}),f.createElement("stop",{offset:"25%"}),f.createElement("stop",{offset:"50%"}),f.createElement("stop",{offset:"75%"})))),f.createElement("rect",{className:"".concat(h,"--leadspace__gradient__rect"),width:"100",height:"100"})),f.createElement("div",{className:"".concat(h,"--leadspace--content__container")},f.createElement("div",{className:"".concat(h,"--leadspace__row")},f.createElement("h1",{className:"".concat(h,"--leadspace__title")},u)),f.createElement("div",{className:"".concat(h,"--leadspace__content")},c&&f.createElement("div",{className:"".concat(h,"--leadspace__row")},f.createElement("p",{"data-autoid":"".concat(m,"--leadspace__desc"),className:"".concat(h,"--leadspace__desc")},c)),o&&o.length>0&&f.createElement(r.Z,{buttons:o})))),s&&f.createElement(l.Z,s))))};y.propTypes={buttons:u().arrayOf(u().shape({copy:u().string.isRequired,href:u().string.isRequired,renderIcon:u().elementType})),copy:u().string,image:u().shape({classname:u().string,sources:u().arrayOf(u().shape({src:u().string,breakpoint:u().oneOfType([u().string,u().number])})),defaultSrc:u().string.isRequired,alt:u().string.isRequired,longDescription:u().string}),theme:u().oneOf(["white","g10","g90","g100"]),title:u().string.isRequired,type:u().oneOf(["default","left","centered"]),size:u().oneOf(["tall","medium","super"])},t.Z=(0,s.Z)(y,"\n  The Leadspace Small and Leadspace Small With Image variations are now deprecated.\n  Please refer to the Carbon for IBM.com documentation for further details.\n  https://www.ibm.com/standards/carbon/components/leadspace\n")},8386:function(e,t,a){a.r(t),a.d(t,{CustomElement:function(){return r.default},descriptor:function(){return u},propTypes:function(){return f}});var n=a(7147),r=a(6881),o=a(1976),i=a(5697),c=a.n(i),s=a(9033),l=a(8474);s.default.prefix;var d=l.default.stablePrefix,u=Object.assign({},n.descriptor,{altAriaLabel:{},colorScheme:{attribute:"color-scheme"},parentHref:{attribute:"parent-href"},iconInline:{serialize:o._P},slot:{}}),f={altAriaLabel:c().string,colorScheme:c().string,parentHref:c().string,iconInline:c().bool,slot:c().string};let p=(0,o.ZP)("".concat(d,"-card-footer"),u);p.propTypes=f,t.default=p},1955:function(e,t,a){var n=a(8386);a(7551);var r=a(1976),o=a(5697),i=a.n(o),c=a(9033),s=a(8474);c.default.prefix;var l=s.default.stablePrefix,d=Object.assign({},n.descriptor,{ctaType:{attribute:"cta-type"},formatVideoCaption:{attribute:!1},formatVideoDuration:{attribute:!1},videoDuration:{serialize:r.Hf,attribute:"video-duration"},mode:{},videoDescription:{attribute:"video-description"}}),u={ctaType:i().string,formatVideoCaption:i().string,formatVideoDuration:i().string,videoDuration:i().number,mode:i().string,videoDescription:i().string};let f=(0,r.ZP)("".concat(l,"-card-cta-footer"),d);f.propTypes=u,t.ZP=f},6881:function(e,t,a){var n,r,o,i=a(5318),c=a(1160);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(a(168)),l=i(a(3144)),d=i(a(5671)),u=i(a(7326)),f=i(a(136)),p=i(a(2963)),m=i(a(6424)),h=i(a(3237)),g=i(a(1120)),y=a(6254),v=i(a(9033)),_=i(a(8474)),b=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==c(e)&&"function"!=typeof e)return{default:e};var a=O(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,a&&a.set(e,n),n}(a(7231)),k=a(5779),E=i(a(3699));function O(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(O=function(e){return e?a:t})(e)}var w=v.default.prefix,C=_.default.stablePrefix,N=(0,m.default)([(0,y.customElement)("".concat(C,"-card-footer"))],function(e,t){var a=function(t){(0,f.default)(o,t);var a,n,r=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=(0,g.default)(o);if(n){var a=(0,g.default)(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return(0,p.default)(this,e)});function o(){var t;(0,d.default)(this,o);for(var a=arguments.length,n=Array(a),i=0;i<a;i++)n[i]=arguments[i];return t=r.call.apply(r,[this].concat(n)),e((0,u.default)(t)),t}return(0,l.default)(o)}(t);return{F:a,d:[{kind:"field",decorators:[(0,y.query)(".".concat(C,"-ce--card__footer--static"))],key:"_staticNode",value:void 0},{kind:"field",decorators:[(0,y.state)()],key:"_hasCopy",value:function(){return!1}},{kind:"get",key:"_shouldUseParentLink",value:function(){var e=this.href,t=this.parentHref;return Boolean(t)&&(!e||t===e)}},{kind:"method",key:"_handleSlotChange",value:function(e){var t=e.target;if(!t.name){var a=t.assignedNodes().some(function(e){return e.nodeType!==Node.TEXT_NODE||e.textContent.trim()});this._hasCopy=a}}},{kind:"method",key:"_renderContent",value:function(){var e=this._hasCopy;return(0,y.html)(n||(n=(0,s.default)(['\n      <span ?hidden="','" class="','--card__cta__copy">\n        <slot @slotchange="','"></slot>\n      </span>\n    '])),!e,w,this._handleSlotChange)}},{kind:"method",key:"_renderInner",value:function(){return this.iconPlacement===b.ICON_PLACEMENT.LEFT?(0,y.html)(r||(r=(0,s.default)([" ",""," "])),this._renderIcon(),this._renderContent()):(0,y.html)(o||(o=(0,s.default)([" ",""," "])),this._renderContent(),this._renderIcon())}},{kind:"field",decorators:[(0,y.property)({reflect:!1})],key:"altAriaLabel",value:void 0},{kind:"field",decorators:[(0,y.property)({attribute:"color-scheme",reflect:!0})],key:"colorScheme",value:function(){return k.BASIC_COLOR_SCHEME.REGULAR}},{kind:"field",decorators:[(0,y.property)({attribute:"parent-href",reflect:!0})],key:"parentHref",value:void 0},{kind:"field",decorators:[(0,y.property)({type:Boolean})],key:"iconInline",value:function(){return!0}},{kind:"field",decorators:[(0,y.property)({reflect:!0})],key:"slot",value:function(){return"footer"}},{kind:"method",key:"updated",value:function(){(0,h.default)((0,g.default)(a.prototype),"updated",this).call(this),this._hasCopy?null===(n=this.shadowRoot)||void 0===n||null===(r=n.querySelector("a"))||void 0===r||r.removeAttribute("aria-label"):null===(e=this.shadowRoot)||void 0===e||null===(t=e.querySelector("a"))||void 0===t||t.setAttribute("aria-label",this.altAriaLabel?this.altAriaLabel:"");var e,t,n,r,o=this.iconInline,i=this.iconPlacement,c=this._staticNode,s=this._linkNode,l=null!=s?s:c;l.classList.add("".concat(w,"--card__footer")),l.classList.add("".concat(C,"-ce--card__footer")),l.classList.toggle("".concat(w,"--card__footer__icon-left"),i===b.ICON_PLACEMENT.LEFT),o&&i===b.ICON_PLACEMENT.RIGHT&&l.classList.add("".concat(w,"--link-with-icon--inline-icon"))}},{kind:"get",static:!0,key:"stableSelector",value:function(){return"".concat(C,"--card-footer")}},{kind:"field",static:!0,key:"styles",value:function(){return E.default}}]}},b.default);t.default=N},7551:function(e,t,a){var n,r=a(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(168)),i=r(a(3144)),c=r(a(5671)),s=r(a(7326)),l=r(a(136)),d=r(a(2963)),u=r(a(6424)),f=r(a(3237)),p=r(a(1120)),m=a(6254),h=r(a(9033)),g=r(a(8474)),y=a(2398),v=r(a(6881)),_=r(a(1689)),b=r(a(798)),k=a(2092),E=r(a(8767)),O=h.default.prefix,w=g.default.stablePrefix,C=(0,u.default)([(0,m.customElement)("".concat(w,"-card-cta-footer"))],function(e,t){var a=function(t){(0,l.default)(o,t);var a,n,r=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=(0,p.default)(o);if(n){var a=(0,p.default)(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return(0,d.default)(this,e)});function o(){var t;(0,c.default)(this,o);for(var a=arguments.length,n=Array(a),i=0;i<a;i++)n[i]=arguments[i];return t=r.call.apply(r,[this].concat(n)),e((0,s.default)(t)),t}return(0,i.default)(o)}(t);return{F:a,d:[{kind:"method",key:"_renderContent",value:function(){var e=this.ctaType,t=this._hasCopy;if(e!==k.CTA_TYPE.VIDEO)return(0,f.default)((0,p.default)(a.prototype),"_renderContent",this).call(this);var r=this.videoDuration,i=this.formatVideoCaption,c=this.formatVideoDuration,s=t?void 0:i({duration:c({duration:r?1e3*r:r})});return(0,m.html)(n||(n=(0,o.default)(['\n      <span class="','--card__cta__copy"\n        ><slot @slotchange="','"></slot>',"</span\n      >\n    "])),O,this._handleSlotChange,s)}},{kind:"field",decorators:[(0,m.property)({reflect:!0,attribute:"cta-type"})],key:"ctaType",value:function(){return k.CTA_TYPE.REGULAR}},{kind:"field",decorators:[(0,m.property)({attribute:!1})],key:"formatVideoCaption",value:function(){return y.formatVideoCaption}},{kind:"field",decorators:[(0,m.property)({attribute:!1})],key:"formatVideoDuration",value:function(){return y.formatVideoDuration}},{kind:"field",decorators:[(0,m.property)({type:Number,attribute:"video-duration"})],key:"videoDuration",value:void 0},{kind:"field",decorators:[(0,m.property)({reflect:!0})],key:"mode",value:void 0},{kind:"field",decorators:[(0,m.property)({attribute:"video-description"})],key:"videoDescription",value:void 0},{kind:"method",key:"connectedCallback",value:function(){var e;null!==(e=this.parentElement)&&void 0!==e&&e.matches("".concat(w,"-link-list-item-card-cta"))&&(this.mode="link-list"),(0,f.default)((0,p.default)(a.prototype),"connectedCallback",this).call(this)}},{kind:"get",static:!0,key:"stableSelector",value:function(){return"".concat(w,"--card-cta-footer")}},{kind:"field",static:!0,key:"styles",value:function(){return E.default}}]}},(0,b.default)((0,_.default)(v.default)));t.default=C}}]);