(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{50269:function(e,t,a){"use strict";var c=a(4942),n=a(45987),o=a(56011),r=a(94184),s=a.n(r),i=a(893),l=a(55393),d=a(45697),h=a.n(d),m=a(67294),p=a(69033),g=["cards","cta","theme"],u=l.Z.stablePrefix,f=p.default.prefix,_=function(e){var t=e.cards,a=e.cta,r=e.theme,l=(0,n.Z)(e,g),d=t.filter(function(e){var t=e.image,a=e.heading,c=e.copy,n=e.cta.href;return!t&&a&&c&&n});return m.createElement(i.Z,{heading:l.heading,autoid:"".concat(u,"--card-group-simple-group"),customClassName:s()("".concat(f,"--card-group"),(0,c.default)({},"".concat(f,"--card-group--").concat(r),r)),children:[m.createElement(o.Z,{cards:d,cta:a})]})};_.propTypes={theme:h().oneOf(["white","g10","g90","g100"]),heading:h().string.isRequired,cards:h().arrayOf(h().exact({heading:h().string,copy:h().string,cta:h().shape({href:h().string})})).isRequired,cta:h().shape({heading:h().string,cta:h().shape({href:h().string})})},t.Z=_},893:function(e,t,a){"use strict";var c=a(4942),n=a(45987),o=a(94184),r=a.n(o),s=a(27251),i=a(55393),l=a(33791),d=a(45697),h=a.n(d),m=a(67294),p=a(69033),g=["heading","copy","theme","children","cta","customClassName","childrenCustomClassName"],u=i.Z.stablePrefix,f=p.default.prefix,_=function(e){var t=e.heading,a=e.copy,o=e.theme,i=e.children,d=e.cta,h=e.customClassName,p=e.childrenCustomClassName,_=(0,n.Z)(e,g);return m.createElement("section",{className:r()("".concat(f,"--content-section"),h,(0,c.default)({},"".concat(f,"--content-section--").concat(o),o)),"data-autoid":_.autoid?_.autoid:"".concat(u,"--content-section")},m.createElement("div",{className:"".concat(f,"--content-section__grid")},m.createElement("div",{className:"".concat(f,"--content-section__row")},m.createElement("div",{className:"".concat(f,"--content-section__left")},t&&m.createElement("h2",{className:"".concat(f,"--content-section__heading")},t),a&&m.createElement("div",{"data-autoid":"".concat(u,"--content-section__copy"),className:"".concat(f,"--content-section__copy"),dangerouslySetInnerHTML:{__html:(0,l.Z)(a,{bold:!1})}}),d&&m.createElement(s.Z,{style:"text",type:d.type,copy:d.copy,href:d.href,customClassName:"".concat(f,"--content-section__cta")})),m.createElement("div",{className:r()("".concat(f,"--content-section__children"),p)},i))))};_.propTypes={heading:h().string.isRequired,copy:h().string,theme:h().oneOf(["white","g10","g90","g100"]),children:h().oneOfType([h().arrayOf(h().node),h().node]),cta:h().shape({type:h().oneOfType([h().oneOf(["local","external","download","video"]),h().arrayOf(h().oneOf(["local","external","download","video"]))]),copy:h().string,href:h().string,customClassName:h().string}),customClassName:h().string,childrenCustomClassName:h().string},t.Z=_},75557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(53678)}])},53678:function(e,t,a){"use strict";a.r(t);var c=a(85893),n=a(50269);a(67294);var o=".html",r=function(){return(0,c.jsx)(n.Z,{heading:"Page Templates",theme:"white",cards:[{heading:"Example page A",copy:" ",cta:{href:"./example-page-a".concat(o)}},{heading:"Example page B",copy:" ",cta:{href:"./example-page-b".concat(o)}},{heading:"Example page c",copy:" ",cta:{href:"./example-page-c".concat(o)}},{heading:"White theme example page",copy:" ",cta:{href:"./white-theme-example".concat(o)}},{heading:"Gray 100 theme example page",copy:" ",cta:{href:"./g100-theme-example".concat(o)}},]})};t.default=r}},function(e){e.O(0,[6011,9774,2888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);