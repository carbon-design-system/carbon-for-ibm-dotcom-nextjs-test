(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{269:function(e,t,a){"use strict";var c=a(4942),n=a(5987),o=a(6011),r=a(3813),s=a.n(r),i=a(893),l=a(5393),h=a(5697),d=a.n(h),m=a(7294),p=a(9033),g=["cards","cta","theme"],u=l.Z.stablePrefix,f=p.Z.prefix,_=function(e){var t=e.cards,a=e.cta,r=e.theme,l=(0,n.Z)(e,g),h=t.filter(function(e){var t=e.image,a=e.heading,c=e.copy,n=e.cta.href;return!t&&a&&c&&n});return m.createElement(i.Z,{heading:l.heading,autoid:"".concat(u,"--card-group-simple-group"),customClassName:s()("".concat(f,"--card-group"),(0,c.Z)({},"".concat(f,"--card-group--").concat(r),r)),children:[m.createElement(o.Z,{cards:h,cta:a})]})};_.propTypes={theme:d().oneOf(["white","g10","g90","g100"]),heading:d().string.isRequired,cards:d().arrayOf(d().exact({heading:d().string,copy:d().string,cta:d().shape({href:d().string})})).isRequired,cta:d().shape({heading:d().string,cta:d().shape({href:d().string})})},t.Z=_},893:function(e,t,a){"use strict";var c=a(4942),n=a(5987),o=a(3813),r=a.n(o),s=a(7251),i=a(5393),l=a(9550),h=a(5697),d=a.n(h),m=a(7294),p=a(9033),g=["heading","copy","theme","children","cta","customClassName","childrenCustomClassName"],u=i.Z.stablePrefix,f=p.Z.prefix,_=function(e){var t=e.heading,a=e.copy,o=e.theme,i=e.children,h=e.cta,d=e.customClassName,p=e.childrenCustomClassName,_=(0,n.Z)(e,g);return m.createElement("section",{className:r()("".concat(f,"--content-section"),d,(0,c.Z)({},"".concat(f,"--content-section--").concat(o),o)),"data-autoid":_.autoid?_.autoid:"".concat(u,"--content-section")},m.createElement("div",{className:"".concat(f,"--content-section__grid")},m.createElement("div",{className:"".concat(f,"--content-section__row")},m.createElement("div",{className:"".concat(f,"--content-section__left")},t&&m.createElement("h2",{className:"".concat(f,"--content-section__heading")},t),a&&m.createElement("div",{"data-autoid":"".concat(u,"--content-section__copy"),className:"".concat(f,"--content-section__copy"),dangerouslySetInnerHTML:{__html:(0,l.Z)(a,{bold:!1})}}),h&&m.createElement(s.Z,{style:"text",type:h.type,copy:h.copy,href:h.href,customClassName:"".concat(f,"--content-section__cta")})),m.createElement("div",{className:r()("".concat(f,"--content-section__children"),p)},i))))};_.propTypes={heading:d().string.isRequired,copy:d().string,theme:d().oneOf(["white","g10","g90","g100"]),children:d().oneOfType([d().arrayOf(d().node),d().node]),cta:d().shape({type:d().oneOfType([d().oneOf(["local","external","download","video"]),d().arrayOf(d().oneOf(["local","external","download","video"]))]),copy:d().string,href:d().string,customClassName:d().string}),customClassName:d().string,childrenCustomClassName:d().string},t.Z=_},5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(3678)}])},3678:function(e,t,a){"use strict";a.r(t);var c=a(5893),n=a(269);a(7294);var o=".html",r=function(){return(0,c.jsx)(n.Z,{heading:"Page Templates",theme:"white",cards:[{heading:"Example page A",copy:" ",cta:{href:"./example-page-a".concat(o)}},{heading:"Example page B",copy:" ",cta:{href:"./example-page-b".concat(o)}},{heading:"Example page c",copy:" ",cta:{href:"./example-page-c".concat(o)}},{heading:"White theme example page",copy:" ",cta:{href:"./white-theme-example".concat(o)}},{heading:"Gray 100 theme example page",copy:" ",cta:{href:"./g100-theme-example".concat(o)}},]})};t.default=r}},function(e){e.O(0,[6011,9774,2888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);