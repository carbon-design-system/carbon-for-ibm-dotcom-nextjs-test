(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"+EOV":function(a,e,t){"use strict";var n=t("pVnL"),o=t.n(n),c=t("C+eC"),r=t("oHr6"),i=t("LcsC"),s=t("17x9"),l=t.n(s),d=t("q1tI"),m=t.n(d),u=t("9a1i"),p=c.a.stablePrefix,g=u.a.prefix,y=function(a){var e=a.eyebrow,t=a.heading,n=a.copy,c=a.cta;return m.a.createElement("div",{className:"".concat(g,"--content-item-horizontal__item "),"data-autoid":"".concat(p,"--content-item-horizontal__item")},m.a.createElement("div",{className:"".concat(g,"--content-item-horizontal__row")},m.a.createElement("div",{className:"".concat(g,"--content-item-horizontal__col")},e&&m.a.createElement("p",{className:"".concat(g,"--content-item-horizontal__item--eyebrow"),"data-autoid":"".concat(p,"--content-item-horizontal__item--eyebrow")},e),m.a.createElement("h3",{className:"".concat(g,"--content-item-horizontal__item--heading"),"data-autoid":"".concat(p,"--content-item-horizontal__item--heading")},t)),m.a.createElement("div",{className:"".concat(g,"--content-item-horizontal__col")},m.a.createElement("div",{className:"".concat(g,"--content-item-horizontal__item--copy"),"data-autoid":"".concat(p,"--content-item-horizontal__item--copy"),dangerouslySetInnerHTML:{__html:Object(i.a)(n,{bold:!1})}}),c&&m.a.createElement("div",{className:"".concat(g,"--content-item-horizontal__item--cta"),"data-autoid":"".concat(p,"--content-item-horizontal__item--cta")},m.a.createElement(r.a,o()({style:"vertical"},c))))))};y.propTypes={eyebrow:l.a.string,heading:l.a.string.isRequired,copy:l.a.string.isRequired,cta:l.a.shape({heading:l.a.string,items:l.a.arrayOf(l.a.shape({type:l.a.oneOfType([l.a.oneOf(["local","external"]),l.a.arrayOf(l.a.oneOf(["local","external"]))]),copy:l.a.string,href:l.a.string,customClassName:l.a.string})).isRequired,iconPlacement:l.a.oneOf(["left","right"])})},e.a=y},"4kvx":function(a,e,t){"use strict";var n=t("ZOMM"),o=t("qVTj"),c=t("C+eC"),r=t("17x9"),i=t.n(r),s=t("q1tI"),l=t.n(s),d=t("9a1i"),m=c.a.stablePrefix,u=d.a.prefix,p=function(a){var e=a.heading,t=a.cards,c=a.cta;return l.a.createElement("div",{"data-autoid":"".concat(m,"--content-block-cards"),className:"".concat(u,"--content-block-cards")},l.a.createElement(o.a,{heading:e,cta:c},l.a.createElement("div",{className:"".concat(u,"--content-block-cards__content")},l.a.createElement(n.a,{cards:t}))))};p.propTypes={heading:i.a.string.isRequired,cards:i.a.arrayOf(i.a.shape({heading:i.a.string,eyebrow:i.a.string,copy:i.a.string,image:i.a.shape({classname:i.a.string,sources:i.a.arrayOf(i.a.shape({src:i.a.string,breakpoint:i.a.oneOfType([i.a.string,i.a.number])})),media:i.a.arrayOf(i.a.shape({src:i.a.string,type:i.a.string})),defaultSrc:i.a.string.isRequired,alt:i.a.string.isRequired,longDescription:i.a.string}),cta:i.a.shape({href:i.a.string})})).isRequired,cta:i.a.shape({style:i.a.oneOf(["card"]),type:i.a.oneOfType([i.a.oneOf(["jump","local","external","download","video"]),i.a.arrayOf(i.a.oneOf(["jump","local","external","download","video"]))]),copy:i.a.string,customClassName:i.a.string})},e.a=p},"9PG6":function(a,e,t){"use strict";var n=t("pVnL"),o=t.n(n),c=t("Hke9"),r=t("4Sc1"),i=t("C+eC"),s=t("q1tI"),l=t.n(s),d=t("9a1i"),m=i.a.stablePrefix,u=d.a.prefix,p=function(a){var e=o()({},a);return l.a.createElement("div",{"data-autoid":"".concat(m,"--callout-with-media"),className:"".concat(u,"--callout-with-media")},l.a.createElement(c.a,null,l.a.createElement(r.a,e)))};p.propTypes=r.a.propTypes,e.a=p},Hke9:function(a,e,t){"use strict";var n=t("C+eC"),o=t("17x9"),c=t.n(o),r=t("q1tI"),i=t.n(r),s=t("9a1i"),l=n.a.stablePrefix,d=s.a.prefix,m=function(a){var e=a.children;return i.a.createElement("section",{className:"".concat(d,"--callout__container"),"data-autoid":"".concat(l,"--callout__container")},i.a.createElement("div",{className:"".concat(d,"--callout__column"),"data-autoid":"".concat(l,"--callout__column")},i.a.createElement("div",{className:"".concat(d,"--callout__content"),"data-autoid":"".concat(l,"--callout__content")},e)))};m.propTypes={children:c.a.node},e.a=m},aGeS:function(a,e,t){"use strict";var n=t("pVnL"),o=t.n(n),c=t("lSNA"),r=t.n(c),i=t("q1tI"),s=t.n(i),l=t("TSYQ"),d=t.n(l),m=t("qVTj"),u=t("U2ia"),p=t("vtTq"),g=t("C+eC"),y=t("17x9"),f=t.n(y),h=t("6eD3"),b=t("9a1i"),O=g.a.stablePrefix,v=b.a.prefix,_=function(a){var e,t=a.heading,n=a.copy,c=a.cta,l=a.items,g=a.theme,y=Object(i.useRef)(),f=Object(i.useRef)(null);Object(i.useEffect)((function(){return f.current=new ResizeObserver(b),f.current.observe(document.documentElement),function(){return f.current=null}}),[]);var b=function(){window.requestAnimationFrame((function(){var a=y.current;a&&(Object(h.a)(a.getElementsByClassName("".concat(v,"--content-item__heading")),"md"),Object(h.a)(a.getElementsByClassName("".concat(v,"--content-item__copy")),"md"))}))};return s.a.createElement("section",{"data-autoid":"".concat(O,"--cta-section"),ref:y,className:d()("".concat(v,"--cta-section"),(e={},r()(e,"".concat(v,"--cta-section__has-items"),l),r()(e,"".concat(v,"--cta-section--").concat(g),g),e))},s.a.createElement(m.a,{heading:t,copy:n}),s.a.createElement(p.a,o()({customClassName:"".concat(v,"--cta-section__cta")},c)),l&&s.a.createElement("div",{className:"".concat(v,"--helper-wrapper")},s.a.createElement("div",{className:"".concat(v,"--content-item-wrapper")},l.map((function(a,e){return s.a.createElement(u.a,{key:e,heading:a.heading,copy:a.copy,cta:a.cta})})))))};_.propTypes={heading:f.a.string.isRequired,copy:f.a.string.isRequired,cta:f.a.shape({style:f.a.oneOf(["text","card","button","feature"]),type:f.a.oneOfType([f.a.oneOf(["jump","local","external","download","video","default"]),f.a.arrayOf(f.a.oneOf(["jump","local","external","download","video","default"]))]),copy:f.a.string,href:f.a.string,customClassName:f.a.string}),theme:f.a.oneOf(["white","g10","g90","g100"]),items:f.a.arrayOf(f.a.shape({heading:f.a.string,copy:f.a.string,cta:f.a.shape({heading:f.a.string,copy:f.a.string,cta:f.a.shape({style:f.a.oneOf(["text","card","button","feature"]),type:f.a.oneOfType([f.a.oneOf(["jump","local","external","download","video","default"]),f.a.arrayOf(f.a.oneOf(["jump","local","external","download","video","default"]))]),copy:f.a.string,href:f.a.string,customClassName:f.a.string})})}))},e.a=_},dakj:function(a,e,t){"use strict";var n=t("lSNA"),o=t.n(n),c=t("qVTj"),r=t("SzR1"),i=t("U2ia"),s=t("TSYQ"),l=t.n(s),d=t("C+eC"),m=t("/J8l"),u=t("17x9"),p=t.n(u),g=t("q1tI"),y=t.n(g),f=t("9a1i"),h=t("vQcT");function b(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function O(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?b(Object(t),!0).forEach((function(e){o()(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}var v=d.a.stablePrefix,_=f.a.prefix,E=function(a){var e=a.copy,t=a.cta,n=a.heading,r=a.mediaType,i=a.mediaData,s=a.items,d=a.aside,m=a.border;return y.a.createElement("div",{"data-autoid":"".concat(v,"--content-block-segmented"),className:l()("".concat(_,"--content-block-segmented"),o()({},"".concat(_,"--content-block-segmented-border"),m||d&&d.border))},y.a.createElement(c.a,{heading:n,copy:e,cta:t,aside:d,border:m},N(r,i),x(s)))},N=function(a,e){if(e)return y.a.createElement("div",{"data-autoid":"".concat(v,"--content-block-segmented__media")},"image"===a&&y.a.createElement(m.a,e),"video"===a&&y.a.createElement(h.a,e))},x=function(a){return a.map((function(a,e){return y.a.createElement(r.a,{heading:a.heading,key:e,cta:!a.cta||"jump"!==a.cta.type&&"local"!==a.cta.type?void 0:O({style:"text"},a.cta)},y.a.createElement("div",{"data-autoid":"".concat(v,"--content-block-segmented__content-group")},y.a.createElement(i.a,{copy:a.copy,key:e}),(a.image||a.video)&&y.a.createElement("div",{"data-autoid":"".concat(v,"--content-block-segmented__media")},a.image&&y.a.createElement(m.a,a.image),a.video&&y.a.createElement(h.a,a.video))))}))};E.propTypes={heading:p.a.string.isRequired,copy:p.a.string,cta:p.a.shape({style:p.a.oneOf(["text","card"]),type:p.a.oneOfType([p.a.oneOf(["jump","local","external","download","video"]),p.a.arrayOf(p.a.oneOf(["jump","local","external","download","video"]))]),heading:p.a.string,href:p.a.string,customClassName:p.a.string}),mediaType:p.a.oneOf(["image","video"]),mediaData:p.a.oneOfType([p.a.shape({inverse:p.a.bool,image:p.a.shape({classname:p.a.string,sources:p.a.arrayOf(p.a.shape({src:p.a.string,breakpoint:p.a.oneOfType([p.a.string,p.a.number])})),defaultSrc:p.a.string.isRequired,alt:p.a.string.isRequired,longDescription:p.a.string}).isRequired,lightbox:p.a.bool,heading:p.a.string,copy:p.a.string,customClassName:p.a.string}),p.a.shape({customClassName:p.a.string,videoId:p.a.string.isRequired,showCaption:p.a.bool,inverse:p.a.bool})]),items:p.a.arrayOf(p.a.shape({heading:p.a.string,copy:p.a.string,image:p.a.shape({inverse:p.a.bool,image:p.a.shape({classname:p.a.string,sources:p.a.arrayOf(p.a.shape({src:p.a.string,breakpoint:p.a.oneOfType([p.a.string,p.a.number])})),defaultSrc:p.a.string.isRequired,alt:p.a.string.isRequired,longDescription:p.a.string}).isRequired,lightbox:p.a.bool,heading:p.a.string,copy:p.a.string,customClassName:p.a.string}),cta:p.a.shape({style:p.a.oneOf(["card"]),type:p.a.oneOf(["local"]),heading:p.a.string,customClassName:p.a.string}),video:p.a.shape({customClassName:p.a.string,videoId:p.a.string.isRequired,showCaption:p.a.bool,inverse:p.a.bool})})).isRequired,aside:p.a.shape({items:p.a.element,border:p.a.bool}),border:p.a.bool},e.a=E},vJbN:function(a,e,t){"use strict";var n=t("lSNA"),o=t.n(n),c=t("TSYQ"),r=t.n(c),i=t("C+eC"),s=t("Qp7z"),l=t("17x9"),d=t.n(l),m=t("q1tI"),u=t.n(m),p=t("9a1i"),g=i.a.stablePrefix,y=p.a.prefix,f={"1-3":["".concat(y,"--col-lg-4"),"".concat(y,"--col-lg-12")],"2-1":["".concat(y,"--layout-2-3"),"".concat(y,"--layout-1-3")]};function h(a,e){return e&&"".concat(y,"--layout--").concat(a,"-").concat(e)}var b=function(a){var e,t=a.type,n=a.marginTop,c=a.marginBottom,i=a.stickyOffset,s=a.border,l=a.nested,d=a.children;return u.a.createElement("section",{"data-autoid":"".concat(g,"--layout"),className:r()(l?"":"".concat(y,"--grid"),(e={},o()(e,h("top",n),n),o()(e,h("bottom",c),c),e))},u.a.createElement("div",{className:r()("".concat(y,"--row"),o()({},"".concat(y,"--layout--border"),s))},function(a,e,t){var n=[];return t.map((function(t,o){"true"===t.props["data-sticky"]?n.push(u.a.createElement("div",{className:r()(f[a]&&f[a][o]?"".concat(f[a][o]," ").concat(y,"--layout--sticky-mobile"):"".concat(y,"--col")),key:o,style:{top:e?"".concat(e,"px"):0}},u.a.cloneElement(t,{className:r()(t.props.className,"".concat(y,"--layout--sticky-desktop")),style:{top:e?"".concat(e,"px"):0}}))):n.push(u.a.cloneElement(t,{className:r()(t.props.className,f[a]&&f[a][o]?f[a][o]:"".concat(y,"--col")),key:o}))})),n}(t,i,d)))};b.propTypes={type:d.a.oneOf(["1-3","2-1"]).isRequired,marginTop:d.a.oneOf(["layout-01","layout-02","layout-03","layout-04","layout-05","layout-06","layout-07"]),marginBottom:d.a.oneOf(["layout-01","layout-02","layout-03","layout-04","layout-05","layout-06","layout-07"]),children:d.a.node,stickyOffset:d.a.number,border:d.a.bool,nested:d.a.bool},b.defaultProps={marginTop:null,marginBottom:null,stickyOffset:null,border:!1,nested:!1},e.a=Object(s.a)(b,"\n  The Layout component has been deprecated in favor of the style mixin and classes.\n  See Layout documentation for more information.\n")}}]);