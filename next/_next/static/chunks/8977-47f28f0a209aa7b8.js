"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8977],{9540:function(e,t,a){var n=a(7462),r=a(4942),c=a(7294),o=a(3813),i=a.n(o),s=a(8440),l=a(7536),u=a(7251),p=a(5393),m=a(5697),d=a.n(m),g=a(1811),f=a(9033),y=p.Z.stablePrefix,h=f.Z.prefix,_=function(e){var t,a=e.heading,o=e.copy,p=e.cta,m=e.items,d=e.theme,f=(0,c.useRef)(),_=(0,c.useRef)(null);(0,c.useEffect)(function(){return _.current=new ResizeObserver(v),_.current.observe(document.documentElement),function(){return _.current=null}},[]);var v=function(){window.requestAnimationFrame(function(){var e=f.current;e&&((0,g.Z)(e.getElementsByClassName("".concat(h,"--content-item__heading")),"md"),(0,g.Z)(e.getElementsByClassName("".concat(h,"--content-item__copy")),"md"))})};return c.createElement("section",{"data-autoid":"".concat(y,"--cta-section"),ref:f,className:i()("".concat(h,"--cta-section"),(t={},(0,r.Z)(t,"".concat(h,"--cta-section__has-items"),m),(0,r.Z)(t,"".concat(h,"--cta-section--").concat(d),d),t))},c.createElement(s.Z,{heading:a,copy:o}),c.createElement(u.Z,(0,n.Z)({customClassName:"".concat(h,"--cta-section__cta")},p)),m&&c.createElement("div",{className:"".concat(h,"--helper-wrapper")},c.createElement("div",{className:"".concat(h,"--content-item-wrapper")},m.map(function(e,t){return c.createElement(l.Z,{key:t,heading:e.heading,copy:e.copy,cta:e.cta})}))))};_.propTypes={heading:d().string.isRequired,copy:d().string.isRequired,cta:d().shape({style:d().oneOf(["text","card","button","feature"]),type:d().oneOfType([d().oneOf(["jump","local","external","download","video","default"]),d().arrayOf(d().oneOf(["jump","local","external","download","video","default"]))]),copy:d().string,href:d().string,customClassName:d().string}),theme:d().oneOf(["white","g10","g90","g100"]),items:d().arrayOf(d().shape({heading:d().string,copy:d().string,cta:d().shape({heading:d().string,copy:d().string,cta:d().shape({style:d().oneOf(["text","card","button","feature"]),type:d().oneOfType([d().oneOf(["jump","local","external","download","video","default"]),d().arrayOf(d().oneOf(["jump","local","external","download","video","default"]))]),copy:d().string,href:d().string,customClassName:d().string})})}))},t.Z=_},1574:function(e,t,a){a.d(t,{Z:function(){return Z}});var n=a(8782),r=a(5393),c=a(5697),o=a.n(c),i=a(4942),s=a(7685),l=a(7294),u=a(757),p=a(3813),m=a.n(p),d=function(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent},g=a(7732),f=a(5178),y=a(8203),h=a(9033),_=r.Z.stablePrefix,v=h.Z.prefix,b=function(e){var t=e.markType,a=void 0===t?"doubleCurved":t,n=e.copy,r=e.source,c=e.cta,o=e.inverse,p=(0,l.useState)(""),h=(0,s.Z)(p,2),b=h[0],E=h[1];return(0,l.useEffect)(function(){E(d(n))},[n]),l.createElement("div",{"data-autoid":"".concat(_,"--quote"),className:m()("".concat(v,"--quote"),(0,i.Z)({},"".concat(v,"--quote__inverse"),o))},l.createElement("div",{className:"".concat(v,"--quote__container")},l.createElement("div",{className:"".concat(v,"--quote__wrapper"),"data-autoid":"".concat(_,"--quote__copy")},function(){switch(a){case"doubleCurved":return l.createElement(l.Fragment,null,l.createElement("span",{className:"".concat(v,"--quote__mark")},"“"),l.createElement("blockquote",{className:"".concat(v,"--quote__copy")},b,"”"));case"singleCurved":return l.createElement(l.Fragment,null,l.createElement("span",{className:"".concat(v,"--quote__mark")},"‘"),l.createElement("blockquote",{className:"".concat(v,"--quote__copy")},b,"’"));case"doubleAngle":return l.createElement(l.Fragment,null,l.createElement("span",{className:"".concat(v,"--quote__mark")},"\xab"),l.createElement("blockquote",{className:"".concat(v,"--quote__copy")},b,"\xbb"));case"singleAngle":return l.createElement(l.Fragment,null,l.createElement("span",{className:"".concat(v,"--quote__mark")},"‹"),l.createElement("blockquote",{className:"".concat(v,"--quote__copy")},b,"›"));case"lowHighReversedDoubleCurved":return l.createElement(l.Fragment,null,l.createElement("span",{className:"".concat(v,"--quote__mark")},"„"),l.createElement("blockquote",{className:"".concat(v,"--quote__copy")},b,"“"));case"cornerBracket":return l.createElement(l.Fragment,null,l.createElement("span",{className:"".concat(v,"--quote__mark ").concat(v,"--quote__mark-corner-bracket")},"「"),l.createElement("blockquote",{className:"".concat(v,"--quote__copy")},b,"」"))}}()),!!r&&!!r.heading&&!!r.copy&&l.createElement("div",{className:"".concat(v,"--quote__source"),"data-autoid":"".concat(_,"--quote__source")},l.createElement("p",{className:"".concat(v,"--quote__source-heading")},r.heading),l.createElement("p",{className:"".concat(v,"--quote__source-body")},r.copy),r.copy2&&l.createElement("p",{className:"".concat(v,"--quote__source-optional-copy")},r.copy2))),!!c&&l.createElement("div",{className:"".concat(v,"--quote__footer")},l.createElement(g.Z,null),l.createElement(y.Z,{href:c.href},l.createElement("span",null,c.copy),"local"===c.type&&l.createElement(u.Z,null),"external"===c.type&&l.createElement(f.Z,null))))};b.propTypes={markType:o().oneOf(["doubleCurved","singleCurved","doubleAngle","singleAngle","lowHighReversedDoubleCurved","cornerBracket"]),copy:o().string.isRequired,source:o().shape({heading:o().string.isRequired,copy:o().string.isRequired,copy2:o().string}),cta:o().shape({copy:o().string,type:o().oneOf(["local","external"]),href:o().string}),inverse:o().bool};var E=r.Z.stablePrefix,O=h.Z.prefix,N=function(e){var t=e.quote;return l.createElement("div",{className:"".concat(O,"--callout-quote"),"data-autoid":"".concat(E,"--callout-quote")},l.createElement(n.Z,null,l.createElement(b,t)))};N.propTypes={quote:o().shape({markType:o().oneOf(["doubleCurved","singleCurved","doubleAngle","singleAngle","lowHighReversedDoubleCurved"]),copy:o().string.isRequired,source:o().shape({heading:o().string,copy:o().string}),cta:o().shape({copy:o().string,type:o().oneOf(["local","external"]),href:o().string}),inverse:o().bool})};var Z=N},269:function(e,t,a){var n=a(4942),r=a(5987),c=a(6011),o=a(3813),i=a.n(o),s=a(893),l=a(5393),u=a(5697),p=a.n(u),m=a(7294),d=a(9033),g=["cards","cta","theme"],f=l.Z.stablePrefix,y=d.Z.prefix,h=function(e){var t=e.cards,a=e.cta,o=e.theme,l=(0,r.Z)(e,g),u=t.filter(function(e){var t=e.image,a=e.heading,n=e.copy,r=e.cta.href;return!t&&a&&n&&r});return m.createElement(s.Z,{heading:l.heading,autoid:"".concat(f,"--card-group-simple-group"),customClassName:i()("".concat(y,"--card-group"),(0,n.Z)({},"".concat(y,"--card-group--").concat(o),o)),children:[m.createElement(c.Z,{cards:u,cta:a})]})};h.propTypes={theme:p().oneOf(["white","g10","g90","g100"]),heading:p().string.isRequired,cards:p().arrayOf(p().exact({heading:p().string,copy:p().string,cta:p().shape({href:p().string})})).isRequired,cta:p().shape({heading:p().string,cta:p().shape({href:p().string})})},t.Z=h},8161:function(e,t,a){var n=a(757),r=a(9931),c=a(3866),o=a(5393),i=a(5697),s=a.n(i),l=a(7294),u=a(9033).Z.prefix,p=o.Z.stablePrefix,m=function(e){var t=e.heading,a=e.items,n=e.copy;return l.createElement("section",{"data-autoid":"".concat(p,"--content-group-cards"),className:"".concat(u,"--content-group-cards")},l.createElement(c.Z,{heading:t,copy:n},l.createElement("div",{"data-autoid":"".concat(p,"--content-group-cards-group"),className:"".concat(u,"--content-group-cards-group ").concat(u,"--grid--condensed")},l.createElement("div",{className:"".concat(u,"--content-group-cards__row")},d(a)))))},d=function(e){return e.map(function(e,t){return l.createElement("div",{"data-autoid":"".concat(p,"--content-group-cards-item"),className:"".concat(u,"--content-group-cards-item__col"),key:t,role:"region"},l.createElement(r.Z,{customClassName:"".concat(u,"--content-group-cards-item"),heading:e.heading,copy:e.copy,cta:{href:e.cta.href,icon:{src:n.Z}},"aria-label":e.heading}))})};m.propTypes={heading:s().string.isRequired,copy:s().string,items:s().arrayOf(s().shape({title:s().string,heading:s().string,cta:s().shape({href:s().string})}))},t.Z=m},8240:function(e,t,a){a.d(t,{Z:function(){return Z}});var n=a(7462),r=a(3813),c=a.n(r),o=a(3866),i=a(5393),s=a(4942),l=a(5987),u=a(7536),p=a(5697),m=a.n(p),d=a(7294),g=a(9033),f=["src"];function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var h=i.Z.stablePrefix,_=g.Z.prefix,v=function(e){var t=e.heading,a=e.copy,r=e.pictogram,o=r.src,i=(0,l.Z)(r,f),p=e.cta,m=e.className;return d.createElement("div",{className:c()(m,"".concat(_,"--pictogram-item")),"data-autoid":"".concat(h,"--pictogram-item")},d.createElement("div",{className:"".concat(_,"--pictogram-item__row")},d.createElement("div",{className:"".concat(_,"--pictogram-item__wrapper")},d.createElement(o,(0,n.Z)({"data-autoid":"".concat(h,"--pictogram-item__pictogram"),className:"".concat(_,"--pictogram-item__pictogram")},i))),d.createElement("div",{"data-autoid":"".concat(h,"--pictogram-item__content"),className:"".concat(_,"--pictogram-item__content")},d.createElement(u.Z,{heading:t,copy:a,cta:p&&function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach(function(t){(0,s.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({style:"text"},p)}))))};v.propTypes={heading:m().string.isRequired,copy:m().string.isRequired,cta:m().shape({type:m().oneOfType([m().oneOf(["jump","local","external","download","video"]),m().arrayOf(m().oneOf(["jump","local","external","download","video"]))]),copy:m().string,href:m().string,customClassName:m().string}),pictogram:m().shape({src:m().object.isRequired}).isRequired,className:m().string};var b=i.Z.stablePrefix,E=g.Z.prefix,O=function(e){var t=e.heading,a=e.items,n=e.className,r=e.copy;return d.createElement("div",{"data-autoid":"".concat(b,"--content-group-pictograms"),className:c()(n,"".concat(E,"--content-group-pictograms"))},d.createElement(o.Z,{heading:t,copy:r},N(a)))},N=function(e){return e.map(function(e,t){return d.createElement(v,(0,n.Z)({className:"".concat(E,"--content-group-pictograms__item"),"data-autoid":"".concat(E,"--content-group-pictograms__item")},e,{key:t}))})};O.propTypes={heading:m().string.isRequired,copy:m().string,items:m().arrayOf(m().shape({heading:m().string.isRequired,copy:m().string.isRequired,cta:m().shape({style:m().oneOf(["text","card","button","feature"]),type:m().oneOfType([m().oneOf(["jump","local","external","download","video"]),m().arrayOf(m().oneOf(["jump","local","external","download","video"]))]),copy:m().string,href:m().string,customClassName:m().string}),pictogram:m().shape({src:m().object.isRequired}),className:m().string})).isRequired,className:m().string};var Z=O},7436:function(e,t,a){var n=a(8440),r=a(5393),c=a(7732),o=a(5174),i=a(5697),s=a.n(i),l=a(7294),u=a(9033),p=r.Z.stablePrefix,m=u.Z.prefix,d=function(e){var t=e.heading,a=e.logosGroup,r=e.ctaCopy,i=e.ctaHref,s=e.hideBorder,u=null;return i&&(u={style:"card",type:"local",heading:r,cta:{href:i}}),l.createElement("section",{"data-autoid":"".concat(p,"--logo-grid"),className:"".concat(m,"--logo-grid")},l.createElement("div",{className:"".concat(m,"--logo-grid__container")},l.createElement("div",{className:"".concat(m,"--logo-grid__wrapper")},l.createElement(n.Z,{heading:t,cta:u},l.createElement("div",{className:"".concat(m,"--logo-grid__row")},a.map(function(e,t){return l.createElement("div",{className:"".concat(m,"--logo-grid__col"),key:t},l.createElement("div",{className:"".concat(m,"--logo-grid__logo"),key:e.label},l.createElement(o.Z,{defaultSrc:e.imgSrc,classname:"".concat(m,"--logo-grid_img"),alt:e.altText,longDescription:e.label})))}))))),!s&&l.createElement(c.Z,null))};d.propTypes={heading:s().string,logosGroup:s().arrayOf(s().shape({label:s().string,imgSrc:s().string,altText:s().string})).isRequired,ctaCopy:s().string,ctaHref:s().string,hideBorder:s().bool},t.Z=d},8782:function(e,t,a){var n=a(5393),r=a(5697),c=a.n(r),o=a(7294),i=a(9033),s=n.Z.stablePrefix,l=i.Z.prefix,u=function(e){var t=e.children;return o.createElement("section",{className:"".concat(l,"--callout__container"),"data-autoid":"".concat(s,"--callout__container")},o.createElement("div",{className:"".concat(l,"--callout__column"),"data-autoid":"".concat(s,"--callout__column")},o.createElement("div",{className:"".concat(l,"--callout__content"),"data-autoid":"".concat(s,"--callout__content")},t)))};u.propTypes={children:c().node},t.Z=u},1629:function(e,t,a){a.d(t,{I:function(){return g},_:function(){return p},a:function(){return u}});var n=a(1281),r=a(5697),c=a.n(r),o=a(7294);function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach(function(t){l(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=["className","children","tabIndex"],d=["tabindex"],g=o.forwardRef(function(e,t){var a=e.className,r=e.children,c=e.tabIndex,i=p(e,m),l=(0,n.u9)(s(s({},i),{},{tabindex:c})),u=l.tabindex,g=p(l,d);return a&&(g.className=a),null!=u&&(g.tabIndex=u),t&&(g.ref=t),o.createElement("svg",g,r)});g.displayName="Icon",g.propTypes={"aria-hidden":c().string,"aria-label":c().string,"aria-labelledby":c().string,children:c().node,className:c().string,height:c().oneOfType([c().number,c().string]),preserveAspectRatio:c().string,tabIndex:c().string,viewBox:c().string,width:c().oneOfType([c().number,c().string]),xmlns:c().string},g.defaultProps={xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"}}}]);