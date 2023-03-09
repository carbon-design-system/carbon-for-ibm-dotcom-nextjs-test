"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6628],{8440:function(e,t,a){var n=a(4942),c=a(7462),o=a(7251),i=a(3813),r=a.n(i),l=a(5393),s=a(7732),m=a(9550),d=a(5697),u=a.n(d),p=a(7294),g=a(9033),h=l.Z.stablePrefix,_=g.Z.prefix,f=function(e){var t,a,i=e.heading,l=e.copy,d=e.children,u=e.customClassName,g=e.cta,f=e.aside,b=e.border,v=r()("".concat(_,"--content-block"),u),Z=p.createElement(p.Fragment,null,l&&p.createElement("div",{className:"".concat(_,"--content-block__copy"),dangerouslySetInnerHTML:{__html:(0,m.Z)(l,{bold:!1})}}),p.createElement("div",{"data-autoid":"".concat(h,"--content-block__children"),className:"".concat(_,"--content-block__children")},d),g&&(t=g,a=b,"feature"===t.style?p.createElement(o.Z,(0,c.Z)({customClassName:r()("".concat(_,"--content-block__cta"))},t)):p.createElement("div",{"data-autoid":"".concat(h,"--content-block__cta"),className:r()("".concat(_,"--content-block__cta-row"),(0,n.Z)({},"".concat(_,"--content-block__cta-row-border"),a))},p.createElement(o.Z,(0,c.Z)({customClassName:"".concat(_,"--content-block__cta ").concat(_,"--content-block__cta-col")},t))))),N=p.createElement(p.Fragment,null,i&&p.createElement("h2",{"data-autoid":"".concat(h,"--content-block__heading"),className:"".concat(_,"--content-block__heading")},i));return p.createElement("div",{"data-autoid":"".concat(h,"--content-block"),className:v},N,f&&f.items?y(Z,f):Z,b?p.createElement(s.Z,null):"")},y=function(e,t){return p.createElement("div",{className:"".concat(_,"--content-layout ").concat(_,"--content-layout--with-complementary")},p.createElement("div",{className:"".concat(_,"--content-layout__body")},e),p.createElement("aside",{className:"".concat(_,"--content-layout__aside")},t.items))};f.propTypes={heading:u().string,copy:u().string,children:u().oneOfType([u().arrayOf(u().node),u().node]),cta:u().shape({style:u().oneOf(["text","card","button","feature"]),type:u().oneOfType([u().oneOf(["jump","local","external","download","video"]),u().arrayOf(u().oneOf(["jump","local","external","download","video"]))]),copy:u().string,href:u().string,customClassName:u().string}),customClassName:u().string,aside:u().shape({items:u().element}),border:u().bool},f.defaultProps={border:!1},t.Z=f},3866:function(e,t,a){var n=a(7462),c=a(3813),o=a.n(c),i=a(7251),r=a(5393),l=a(9550),s=a(5697),m=a.n(s),d=a(7294),u=a(9033),p=r.Z.stablePrefix,g=u.Z.prefix,h=function(e){var t=e.children,a=e.heading,c=e.customClassName,r=e.cta,s=e.copy,m=o()("".concat(g,"--content-group"),c);return d.createElement("div",{className:m,"data-autoid":"".concat(p,"--content-group")},d.createElement("h3",{"data-autoid":"".concat(p,"--content-group__title"),className:"".concat(g,"--content-group__title")},a),s&&d.createElement("div",{className:"".concat(g,"--content-group__copy"),dangerouslySetInnerHTML:{__html:(0,l.Z)(s,{bold:!1})}}),d.createElement("div",{"data-autoid":"".concat(p,"--content-group__children"),className:o()("".concat(g,"--content-group__col"),"".concat(g,"--content-group__children"))},t),r&&d.createElement("div",{"data-autoid":"".concat(p,"--content-group__cta"),className:"".concat(g,"--content-group__cta-row")},d.createElement(i.Z,(0,n.Z)({customClassName:"".concat(g,"--content-group__cta")},r))))};h.propTypes={heading:m().string,copy:m().string,children:m().oneOfType([m().arrayOf(m().node),m().node]),customClassName:m().string,cta:m().shape({type:m().oneOf(["local"]),copy:m().string,customClassName:m().string})},t.Z=h},7536:function(e,t,a){var n=a(7462),c=a(4942),o=a(7251),i=a(3813),r=a.n(i),l=a(5393),s=a(1499),m=a(9550),d=a(5697),u=a.n(d),p=a(7294),g=a(9033),h=a(9625),_=l.Z.stablePrefix,f=g.Z.prefix,y=function(e){var t=e.cta,a=e.copy,i=e.heading,l=e.mediaType,s=e.mediaData,d=e.inverse,u=e.customClassName,g=r()("".concat(f,"--content-item"),(0,c.Z)({},"".concat(f,"--content-item--inverse"),d),u);return p.createElement("div",{className:g,"data-autoid":"".concat(_,"--content-item")},i&&p.createElement("h4",{"data-autoid":"".concat(_,"--content-item__heading"),className:"".concat(f,"--content-item__heading")},i),b(l,s,d),a&&p.createElement("div",{"data-autoid":"".concat(_,"--content-item__copy"),className:"".concat(f,"--content-item__copy"),dangerouslySetInnerHTML:{__html:(0,m.Z)(a,{bold:!1})}}),t&&p.createElement(o.Z,(0,n.Z)({},t,{customClassName:"".concat(f,"--content-item__cta")})))},b=function(e,t,a){if(t)return p.createElement("div",{"data-autoid":"".concat(_,"--content-item__media")},"image"===e&&p.createElement(s.Z,(0,n.Z)({inverse:a},t)),"video"===e&&p.createElement(h.Z,(0,n.Z)({inverse:a},t)))};y.propTypes={cta:u().shape({style:u().oneOf(["text","button"]),type:u().oneOfType([u().oneOf(["jump","local","external","download","video"]),u().arrayOf(u().oneOf(["jump","local","external","download","video"]))]),copy:u().string,href:u().string,customClassName:u().string}),customClassName:u().string,copy:u().string,heading:u().string,mediaType:u().oneOf(["image","video"]),mediaData:u().oneOfType([u().shape({inverse:u().bool,image:u().shape({classname:u().string,sources:u().arrayOf(u().shape({src:u().string,breakpoint:u().oneOfType([u().string,u().number])})),defaultSrc:u().string.isRequired,alt:u().string.isRequired,longDescription:u().string}).isRequired,lightbox:u().bool,heading:u().string,copy:u().string,customClassName:u().string}),u().shape({customClassName:u().string,videoId:u().string.isRequired,showCaption:u().bool,inverse:u().bool})]),inverse:u().bool},t.Z=y},7732:function(e,t,a){var n=a(4942),c=a(3813),o=a.n(c),i=a(5393),r=a(5697),l=a.n(r),s=a(7294),m=a(9033),d=i.Z.stablePrefix,u=m.Z.prefix,p=function(e){var t,a=e.type,c=e.size,i=e.contrast,r=e.weight;return s.createElement("hr",{"data-autoid":"".concat(d,"--hr"),className:o()("".concat(u,"--hr"),(t={},(0,n.Z)(t,"".concat(u,"--hr--").concat(a),a),(0,n.Z)(t,"".concat(u,"--hr--").concat(i),i),(0,n.Z)(t,"".concat(u,"--hr--").concat(c),c),(0,n.Z)(t,"".concat(u,"--hr--").concat(r),r),t))})};p.propTypes={type:l().oneOf(["solid","dashed"]),size:l().oneOf(["fluid","small","medium","large"]),contrast:l().oneOf(["medium-contrast","low-contrast","high-contrast"]),weight:l().oneOf(["thin","thick"])},t.Z=p},1499:function(e,t,a){a.d(t,{Z:function(){return Z}});var n,c,o=a(7685),i=a(7294),r=a(9124),l=a(3813),s=a.n(l),m=a(5393),d=a(5174),u=a(5697),p=a.n(u),g=a(9033),h=a(2900),_=["children"],f=i.forwardRef(function(e,t){var a=e.children,o=(0,h._)(e,_);return i.createElement(h.I,(0,h.a)({width:20,height:20,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",ref:t},o),n||(n=i.createElement("path",{d:"M18 12L14 12 14 8 12 8 12 12 8 12 8 14 12 14 12 18 14 18 14 14 18 14 18 12z"})),c||(c=i.createElement("path",{d:"M21.4479,20A10.856,10.856,0,0,0,24,13,11,11,0,1,0,13,24a10.856,10.856,0,0,0,7-2.5521L27.5859,29,29,27.5859ZM13,22a9,9,0,1,1,9-9A9.01,9.01,0,0,1,13,22Z"})),a)}),y=m.Z.stablePrefix,b=g.Z.prefix,v=function(e){var t=e.image,a=e.lightbox,n=e.heading,c=e.copy,l=e.customClassName,m=(0,i.useState)(!1),u=(0,o.Z)(m,2),p=u[0],g=u[1];if(!t)return null;var h=s()("".concat(b,"--image-with-caption"),l),_={type:"image",src:t.defaultSrc,title:n,alt:t.alt,description:c};return i.createElement("div",{className:h,"data-autoid":"".concat(y,"--image-with-caption")},r.Z.launchLightBox(p,g,_),a?i.createElement("button",{"aria-label":"launch light box media viewer",className:"".concat(b,"--image-with-caption__image"),onClick:function(e){return r.Z.setLightBox(e,g)}},i.createElement(d.Z,t),i.createElement("div",{className:"".concat(b,"--image-with-caption__zoom-button")},i.createElement(f,{"aria-label":"Zoom In Icon"}))):i.createElement(d.Z,t),i.createElement("p",{className:"".concat(b,"--image__caption"),"data-autoid":"".concat(y,"--image__caption")},n))};v.propTypes={image:p().shape({classname:p().string,sources:p().arrayOf(p().shape({src:p().string,breakpoint:p().oneOfType([p().string,p().number])})),defaultSrc:p().string.isRequired,alt:p().string.isRequired,longDescription:p().string}).isRequired,lightbox:p().bool,heading:p().string,copy:p().string,customClassName:p().string},v.defaultProps={copy:"",lightbox:!1};var Z=v},4710:function(e,t,a){var n=a(7462),c=a(7251),o=a(5393),i=a(5697),r=a.n(i),l=a(7294),s=a(9033),m=o.Z.stablePrefix,d=s.Z.prefix,u=function(e){var t=e.heading,a=e.iconPlacement,o=e.items,i=e.style,r="card"===i?"card":"text",s="vertical"===i||"horizontal"===i;return l.createElement("div",{className:"".concat(d,"--link-list"),"data-autoid":"".concat(m,"--link-list")},t&&l.createElement("h4",{className:"".concat(d,"--link-list__heading")},t),l.createElement("ul",{className:"".concat(d,"--link-list__list ").concat(d,"--link-list__list--").concat(i)},o.map(function(e,t){return l.createElement("li",{className:"".concat(d,"--link-list__list__CTA ").concat(d,"--link-list__list--").concat(e.type),key:t},l.createElement(c.Z,(0,n.Z)({style:r,ariaRole:"listitem"},e,{disableImage:!0},a&&"text"===r&&{iconPlacement:a},"text"===r&&{iconInline:s})))})))};u.propTypes={heading:r().string,items:r().arrayOf(r().shape({style:r().oneOf(["text","card","button","feature"]),type:r().oneOfType([r().oneOf(["jump","local","external","download","video"]),r().arrayOf(r().oneOf(["jump","local","external","download","video"]))]),copy:r().string,href:r().string,customClassName:r().string})).isRequired,iconPlacement:r().oneOf(["left","right"]),style:r().oneOf(["card","horizontal","vertical","vertical-end"]).isRequired},t.Z=u}}]);