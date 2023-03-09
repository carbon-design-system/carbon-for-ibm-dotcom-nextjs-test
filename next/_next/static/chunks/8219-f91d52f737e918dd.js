"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8219],{8779:function(e,t,a){var n=a(4942),r=a(5987),o=a(6011),i=a(3813),c=a.n(i),s=a(893),l=a(5393),d=a(5697),u=a.n(d),p=a(7294),m=a(9033),f=["cards","theme"],g=l.Z.stablePrefix,h=m.Z.prefix,y=function(e){var t=e.cards,a=e.theme,i=(0,r.Z)(e,f),l=t.filter(function(e){var t=e.image,a=e.eyebrow,n=e.heading,r=e.copy,o=e.cta.href;return t&&a&&n&&!r&&o});return p.createElement(s.Z,{heading:i.heading,autoid:"".concat(g,"--card-group-images-group"),customClassName:c()("".concat(h,"--card-group"),(0,n.Z)({},"".concat(h,"--card-group--").concat(a),a)),children:[p.createElement(o.Z,{cards:l})]})};y.propTypes={theme:u().oneOf(["white","g10","g90","g100"]),heading:u().string.isRequired,cards:u().arrayOf(u().exact({image:u().shape({classname:u().string,sources:u().arrayOf(u().shape({src:u().string,breakpoint:u().oneOfType([u().string,u().number])})),defaultSrc:u().string.isRequired,alt:u().string.isRequired,longDescription:u().string}),eyebrow:u().string,heading:u().string,cta:u().shape({href:u().string})})).isRequired},t.Z=y},6914:function(e,t,a){var n=a(8440),r=a(4908),o=a(5393),i=a(5697),c=a.n(i),s=a(7294),l=a(9033),d=o.Z.stablePrefix,u=l.Z.prefix,p=function(e){var t=e.heading,a=e.items,o=e.border;return s.createElement("div",{"data-autoid":"".concat(d,"--content-block-horizontal"),className:"".concat(u,"--content-block-horizontal")},s.createElement(n.Z,{heading:t,border:o},a.map(function(e,t){return s.createElement(r.Z,{eyebrow:e.eyebrow,heading:e.heading,copy:e.copy,cta:e.cta,key:t})})))};p.propTypes={heading:c().string.isRequired,items:c().arrayOf(c().shape({eyebrow:c().string,heading:c().string.isRequired,copy:c().string.isRequired,cta:c().shape({heading:c().string,items:c().arrayOf(c().shape({type:c().oneOfType([c().oneOf(["local","external"]),c().arrayOf(c().oneOf(["local","external"]))]),copy:c().string,href:c().string,customClassName:c().string})).isRequired,iconPlacement:c().oneOf(["left","right"])})})).isRequired,border:c().bool},t.Z=p},4514:function(e,t,a){var n=a(4942),r=a(8440),o=a(3866),i=a(7536),c=a(3813),s=a.n(c),l=a(5393),d=a(1499),u=a(5697),p=a.n(u),m=a(7294),f=a(9033),g=a(9625);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var y=l.Z.stablePrefix,b=f.Z.prefix,v=function(e){var t=e.copy,a=e.cta,o=e.heading,i=e.mediaType,c=e.mediaData,l=e.items,d=e.aside,u=e.border;return m.createElement("div",{"data-autoid":"".concat(y,"--content-block-segmented"),className:s()("".concat(b,"--content-block-segmented"),(0,n.Z)({},"".concat(b,"--content-block-segmented-border"),u||d&&d.border))},m.createElement(r.Z,{heading:o,copy:t,cta:a,aside:d,border:u},_(i,c),O(l)))},_=function(e,t){if(t)return m.createElement("div",{"data-autoid":"".concat(y,"--content-block-segmented__media")},"image"===e&&m.createElement(d.Z,t),"video"===e&&m.createElement(g.Z,t))},O=function(e){return e.map(function(e,t){return m.createElement(o.Z,{heading:e.heading,key:t,cta:e.cta&&("jump"===e.cta.type||"local"===e.cta.type)?function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach(function(t){(0,n.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({style:"text"},e.cta):void 0},m.createElement("div",{"data-autoid":"".concat(y,"--content-block-segmented__content-group")},m.createElement(i.Z,{copy:e.copy,key:t}),(e.image||e.video)&&m.createElement("div",{"data-autoid":"".concat(y,"--content-block-segmented__media")},e.image&&m.createElement(d.Z,e.image),e.video&&m.createElement(g.Z,e.video))))})};v.propTypes={heading:p().string.isRequired,copy:p().string,cta:p().shape({style:p().oneOf(["text","card"]),type:p().oneOfType([p().oneOf(["jump","local","external","download","video"]),p().arrayOf(p().oneOf(["jump","local","external","download","video"]))]),heading:p().string,href:p().string,customClassName:p().string}),mediaType:p().oneOf(["image","video"]),mediaData:p().oneOfType([p().shape({inverse:p().bool,image:p().shape({classname:p().string,sources:p().arrayOf(p().shape({src:p().string,breakpoint:p().oneOfType([p().string,p().number])})),defaultSrc:p().string.isRequired,alt:p().string.isRequired,longDescription:p().string}).isRequired,lightbox:p().bool,heading:p().string,copy:p().string,customClassName:p().string}),p().shape({customClassName:p().string,videoId:p().string.isRequired,showCaption:p().bool,inverse:p().bool})]),items:p().arrayOf(p().shape({heading:p().string,copy:p().string,image:p().shape({inverse:p().bool,image:p().shape({classname:p().string,sources:p().arrayOf(p().shape({src:p().string,breakpoint:p().oneOfType([p().string,p().number])})),defaultSrc:p().string.isRequired,alt:p().string.isRequired,longDescription:p().string}).isRequired,lightbox:p().bool,heading:p().string,copy:p().string,customClassName:p().string}),cta:p().shape({style:p().oneOf(["card"]),type:p().oneOf(["local"]),heading:p().string,customClassName:p().string}),video:p().shape({customClassName:p().string,videoId:p().string.isRequired,showCaption:p().bool,inverse:p().bool})})).isRequired,aside:p().shape({items:p().element,border:p().bool}),border:p().bool},t.Z=v},4908:function(e,t,a){var n=a(7462),r=a(5393),o=a(4710),i=a(9550),c=a(5697),s=a.n(c),l=a(7294),d=a(9033),u=r.Z.stablePrefix,p=d.Z.prefix,m=function(e){var t=e.eyebrow,a=e.heading,r=e.copy,c=e.cta;return l.createElement("div",{className:"".concat(p,"--content-item-horizontal__item "),"data-autoid":"".concat(u,"--content-item-horizontal__item")},l.createElement("div",{className:"".concat(p,"--content-item-horizontal__row")},l.createElement("div",{className:"".concat(p,"--content-item-horizontal__col")},t&&l.createElement("p",{className:"".concat(p,"--content-item-horizontal__item--eyebrow"),"data-autoid":"".concat(u,"--content-item-horizontal__item--eyebrow")},t),l.createElement("h3",{className:"".concat(p,"--content-item-horizontal__item--heading"),"data-autoid":"".concat(u,"--content-item-horizontal__item--heading")},a)),l.createElement("div",{className:"".concat(p,"--content-item-horizontal__col")},l.createElement("div",{className:"".concat(p,"--content-item-horizontal__item--copy"),"data-autoid":"".concat(u,"--content-item-horizontal__item--copy"),dangerouslySetInnerHTML:{__html:(0,i.Z)(r,{bold:!1})}}),c&&l.createElement("div",{className:"".concat(p,"--content-item-horizontal__item--cta"),"data-autoid":"".concat(u,"--content-item-horizontal__item--cta")},l.createElement(o.Z,(0,n.Z)({style:"vertical"},c))))))};m.propTypes={eyebrow:s().string,heading:s().string.isRequired,copy:s().string.isRequired,cta:s().shape({heading:s().string,items:s().arrayOf(s().shape({type:s().oneOfType([s().oneOf(["local","external"]),s().arrayOf(s().oneOf(["local","external"]))]),copy:s().string,href:s().string,customClassName:s().string})).isRequired,iconPlacement:s().oneOf(["left","right"])})},t.Z=m},5892:function(e,t,a){var n=a(4942),r=a(6312),o=a(3813),i=a.n(o),c=a(5393),s=a(259),l=a(5174),d=a(5697),u=a.n(d),p=a(7294),m=a(9033),f=c.Z.stablePrefix,g=m.Z.prefix,h=function(e,t){var a;return i()("".concat(g,"--leadspace__section"),(a={},(0,n.Z)(a,"".concat(g,"--leadspace--").concat(t),t),(0,n.Z)(a,"".concat(g,"--leadspace--centered"),"centered"===e),(0,n.Z)(a,"".concat(g,"--leadspace--productive"),"small"===e),a))},y=function(e){var t,a,o=e.buttons,c=e.copy,s=e.image,d=e.theme,u=e.title,m=e.type,y=e.size,b=void 0===y?"tall":y;return p.createElement("div",{"data-autoid":"".concat(f,"--leadspace"),className:i()("".concat(g,"--leadspace"),(t={},(0,n.Z)(t,"".concat(g,"--leadspace--medium"),"medium"===b),(0,n.Z)(t,"".concat(g,"--leadspace--tall"),"tall"===b),(0,n.Z)(t,"".concat(g,"--leadspace--super"),"super"===b),t))},p.createElement("section",{className:h(m,d)},p.createElement("div",{className:"".concat(g,"--leadspace__container")},p.createElement("div",{className:i()("".concat(g,"--leadspace__overlay"),(0,n.Z)({},"".concat(g,"--leadspace--gradient"),s&&s.defaultSrc))},s&&!0===s.defaultSrc?void 0:p.createElement("svg",{className:"".concat(g,"--leadspace__gradient"),viewBox:"0 0 100 100",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},p.createElement("defs",null,p.createElement("linearGradient",{id:"stops",className:"".concat(g,"--leadspace__gradient__stops"),gradientTransform:"centered"===m?"rotate(90)":""},"centered"===m?p.createElement(p.Fragment,null,p.createElement("stop",{offset:"0%"}),p.createElement("stop",{offset:"54%"}),p.createElement("stop",{offset:"77%"}),p.createElement("stop",{offset:"100%"})):p.createElement(p.Fragment,null,p.createElement("stop",{offset:"0%"}),p.createElement("stop",{offset:"25%"}),p.createElement("stop",{offset:"50%"}),p.createElement("stop",{offset:"75%"})))),p.createElement("rect",{className:"".concat(g,"--leadspace__gradient__rect"),width:"100",height:"100"})),p.createElement("div",{className:"".concat(g,"--leadspace--content__container")},p.createElement("div",{className:"".concat(g,"--leadspace__row")},p.createElement("h1",{className:"".concat(g,"--leadspace__title")},u)),p.createElement("div",{className:"".concat(g,"--leadspace__content")},c&&p.createElement("div",{className:"".concat(g,"--leadspace__row")},p.createElement("p",{"data-autoid":"".concat(f,"--leadspace__desc"),className:"".concat(g,"--leadspace__desc")},c)),o&&o.length>0&&p.createElement(r.Z,{buttons:o})))),s&&p.createElement(l.Z,s))))};y.propTypes={buttons:u().arrayOf(u().shape({copy:u().string.isRequired,href:u().string.isRequired,renderIcon:u().elementType})),copy:u().string,image:u().shape({classname:u().string,sources:u().arrayOf(u().shape({src:u().string,breakpoint:u().oneOfType([u().string,u().number])})),defaultSrc:u().string.isRequired,alt:u().string.isRequired,longDescription:u().string}),theme:u().oneOf(["white","g10","g90","g100"]),title:u().string.isRequired,type:u().oneOf(["default","left","centered"]),size:u().oneOf(["tall","medium","super"])},t.Z=(0,s.Z)(y,"\n  The Leadspace Small and Leadspace Small With Image variations are now deprecated.\n  Please refer to the Carbon for IBM.com documentation for further details.\n  https://www.ibm.com/standards/carbon/components/leadspace\n")},8386:function(e,t,a){a.r(t),a.d(t,{CustomElement:function(){return r.Z},descriptor:function(){return u},propTypes:function(){return p}});var n=a(7147),r=a(6881),o=a(1976),i=a(5697),c=a.n(i),s=a(9033),l=a(8474);s.Z.prefix;var d=l.Z.stablePrefix,u=Object.assign({},n.descriptor,{altAriaLabel:{},colorScheme:{attribute:"color-scheme"},parentHref:{attribute:"parent-href"},iconInline:{serialize:o._P},slot:{}}),p={altAriaLabel:c().string,colorScheme:c().string,parentHref:c().string,iconInline:c().bool,slot:c().string};let m=(0,o.ZP)("".concat(d,"-card-footer"),u);m.propTypes=p,t.default=m},1955:function(e,t,a){var n=a(8386);a(7551);var r=a(1976),o=a(5697),i=a.n(o),c=a(9033),s=a(8474);c.Z.prefix;var l=s.Z.stablePrefix,d=Object.assign({},n.descriptor,{ctaType:{attribute:"cta-type"},formatVideoCaption:{attribute:!1},formatVideoDuration:{attribute:!1},videoDuration:{serialize:r.Hf,attribute:"video-duration"},mode:{},videoDescription:{attribute:"video-description"}}),u={ctaType:i().string,formatVideoCaption:i().string,formatVideoDuration:i().string,videoDuration:i().number,mode:i().string,videoDescription:i().string};let p=(0,r.ZP)("".concat(l,"-card-cta-footer"),d);p.propTypes=u,t.ZP=p},6881:function(e,t,a){var n=a(6424),r=a(3237),o=a(1120),i=a(6254),c=a(9033),s=a(8474),l=a(4747),d=a(5779),u=a(3699);let p=e=>e,m,f,g,{prefix:h}=c.Z,{stablePrefix:y}=s.Z,b=(0,n.Z)([(0,i.Mo)(`${y}-card-footer`)],function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[(0,i.IO)(`.${y}-ce--card__footer--static`)],key:"_staticNode",value:void 0},{kind:"field",decorators:[(0,i.SB)()],key:"_hasCopy",value:()=>!1},{kind:"get",key:"_shouldUseParentLink",value:function(){let{href:e,parentHref:t}=this;return Boolean(t)&&(!e||t===e)}},{kind:"method",key:"_handleSlotChange",value:function({target:e}){if(!e.name){let t=e.assignedNodes().some(e=>e.nodeType!==Node.TEXT_NODE||e.textContent.trim());this._hasCopy=t}}},{kind:"method",key:"_renderContent",value:function(){let{_hasCopy:e}=this;return(0,i.dy)(m||(m=p`
      <span ?hidden="${0}" class="${0}--card__cta__copy">
        <slot @slotchange="${0}"></slot>
      </span>
    `),!e,h,this._handleSlotChange)}},{kind:"method",key:"_renderInner",value:function(){return this.iconPlacement===l.T.LEFT?(0,i.dy)(f||(f=p` ${0}${0} `),this._renderIcon(),this._renderContent()):(0,i.dy)(g||(g=p` ${0}${0} `),this._renderContent(),this._renderIcon())}},{kind:"field",decorators:[(0,i.Cb)({reflect:!1})],key:"altAriaLabel",value:void 0},{kind:"field",decorators:[(0,i.Cb)({attribute:"color-scheme",reflect:!0})],key:"colorScheme",value:()=>d.t.REGULAR},{kind:"field",decorators:[(0,i.Cb)({attribute:"parent-href",reflect:!0})],key:"parentHref",value:void 0},{kind:"field",decorators:[(0,i.Cb)({type:Boolean})],key:"iconInline",value:()=>!0},{kind:"field",decorators:[(0,i.Cb)({reflect:!0})],key:"slot",value:()=>"footer"},{kind:"method",key:"updated",value:function(){var e,t,n,i;(0,r.Z)((0,o.Z)(a.prototype),"updated",this).call(this),this._hasCopy?null===(n=this.shadowRoot)||void 0===n||null===(i=n.querySelector("a"))||void 0===i||i.removeAttribute("aria-label"):null===(e=this.shadowRoot)||void 0===e||null===(t=e.querySelector("a"))||void 0===t||t.setAttribute("aria-label",this.altAriaLabel?this.altAriaLabel:"");let{iconInline:c,iconPlacement:s,_staticNode:d,_linkNode:u}=this,p=null!=u?u:d;p.classList.add(`${h}--card__footer`),p.classList.add(`${y}-ce--card__footer`),p.classList.toggle(`${h}--card__footer__icon-left`,s===l.T.LEFT),c&&s===l.T.RIGHT&&p.classList.add(`${h}--link-with-icon--inline-icon`)}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${y}--card-footer`}},{kind:"field",static:!0,key:"styles",value:()=>u.Z}]}},l.Z);t.Z=b},7551:function(e,t,a){var n=a(6424),r=a(3237),o=a(1120),i=a(6254),c=a(9033),s=a(8474),l=a(2398),d=a(6881),u=a(3465),p=a(798),m=a(2092),f=a(8767);let g=e=>e,h,{prefix:y}=c.Z,{stablePrefix:b}=s.Z;(0,n.Z)([(0,i.Mo)(`${b}-card-cta-footer`)],function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"method",key:"_renderContent",value:function(){let{ctaType:e,_hasCopy:t}=this;if(e!==m.m.VIDEO)return(0,r.Z)((0,o.Z)(a.prototype),"_renderContent",this).call(this);let{videoDuration:n,formatVideoCaption:c,formatVideoDuration:s}=this,l=t?void 0:c({duration:s({duration:n?1e3*n:n})});return(0,i.dy)(h||(h=g`
      <span class="${0}--card__cta__copy"
        ><slot @slotchange="${0}"></slot>${0}</span
      >
    `),y,this._handleSlotChange,l)}},{kind:"field",decorators:[(0,i.Cb)({reflect:!0,attribute:"cta-type"})],key:"ctaType",value:()=>m.m.REGULAR},{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"formatVideoCaption",value:()=>l.Y},{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"formatVideoDuration",value:()=>l.$},{kind:"field",decorators:[(0,i.Cb)({type:Number,attribute:"video-duration"})],key:"videoDuration",value:void 0},{kind:"field",decorators:[(0,i.Cb)({reflect:!0})],key:"mode",value:void 0},{kind:"field",decorators:[(0,i.Cb)({attribute:"video-description"})],key:"videoDescription",value:void 0},{kind:"method",key:"connectedCallback",value:function(){var e;null!==(e=this.parentElement)&&void 0!==e&&e.matches(`${b}-link-list-item-card-cta`)&&(this.mode="link-list"),(0,r.Z)((0,o.Z)(a.prototype),"connectedCallback",this).call(this)}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${b}--card-cta-footer`}},{kind:"field",static:!0,key:"styles",value:()=>f.Z}]}},(0,p.Z)((0,u.ZP)(d.Z)))},1281:function(e,t,a){function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach(function(t){o(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,{u9:function(){return d}});var c=["width","height","viewBox"],s=["tabindex"],l={focusable:"false",preserveAspectRatio:"xMidYMid meet"};function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,a=e.height,n=e.viewBox,o=void 0===n?"0 0 ".concat(t," ").concat(a):n,d=i(e,c),u=d.tabindex,p=i(d,s),m=r(r(r({},l),p),{},{width:t,height:a,viewBox:o});return m["aria-label"]||m["aria-labelledby"]||m.title?(m.role="img",null!=u&&(m.focusable="true",m.tabindex=u)):m["aria-hidden"]=!0,m}}}]);