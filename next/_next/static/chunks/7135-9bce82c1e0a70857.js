"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7135],{1554:function(e,t,n){var a=n(4942),o=n(8440),i=n(7536),c=n(3813),l=n.n(c),r=n(5393),s=n(1499),u=n(5697),d=n.n(u),m=n(7294),f=n(9033),p=n(9625),b=r.Z.stablePrefix,v=f.Z.prefix,_=function(e){var t=e.copy,n=e.heading,a=e.mediaType,c=e.mediaData,l=e.cta,r=e.aside;return m.createElement("div",{"data-autoid":"".concat(b,"--content-block-simple"),className:"".concat(v,"--content-block-simple")},m.createElement(o.Z,{heading:n,cta:l,aside:r},m.createElement("div",{className:"".concat(v,"--content-block-simple__content")},m.createElement(i.Z,{copy:t}),g(a,c))))},g=function(e,t){if(t){var n;return m.createElement("div",{"data-autoid":"".concat(b,"--content-block-simple__media"),className:l()((n={},(0,a.Z)(n,"".concat(v,"--content-block-simple__media-video"),"video"===e),(0,a.Z)(n,"".concat(v,"--content-block-simple__media-image"),"image"===e),n))},"image"===e&&m.createElement(s.Z,t),"video"===e&&m.createElement(p.Z,t))}};_.propTypes={copy:d().string.isRequired,heading:d().string.isRequired,mediaType:d().string,mediaData:d().oneOfType([d().shape({image:d().shape({classname:d().string,sources:d().arrayOf(d().shape({src:d().string,breakpoint:d().oneOfType([d().string,d().number])})),defaultSrc:d().string.isRequired,alt:d().string.isRequired,longDescription:d().string}).isRequired,lightbox:d().bool,heading:d().string,copy:d().string,customClassName:d().string}),d().shape({customClassName:d().string,videoId:d().string.isRequired,showCaption:d().bool})]),cta:d().shape({style:d().oneOf(["text","card"]),type:d().oneOfType([d().oneOf(["jump","local","external","download","video"]),d().arrayOf(d().oneOf(["jump","local","external","download","video"]))]),heading:d().string,href:d().string,customClassName:d().string}),aside:d().object},t.Z=_},4447:function(e,t,n){n.d(t,{Z:function(){return S}});var a,o=n(7462),i=n(4942),c=n(4902),l=n(7685),r=n(7294),s=n(3813),u=n.n(s),d=n(5393),m=n(7732),f=n(5697),p=n.n(f),b=n(9033),v=function(e,t){var n,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(null!==e)e.preventDefault(),n=e.currentTarget.getAttribute("href");else{if(!t)return null;n=t}window.scroll({top:document.querySelector(n).getBoundingClientRect().top-a+window.scrollY,behavior:"smooth"})},_=d.Z.stablePrefix,g=b.Z.prefix,h=function(e){var t,n,a=e.menuItems,c=e.selectedId,l=function(e,t){e.preventDefault();var n,a,o,i='a[name="'.concat(t,'"]'),c=e.target.ownerDocument.querySelector(".".concat(g,"--masthead"));v(null,i,null==c?void 0:c.offsetHeight),n=i,a=document.querySelector(n),o=function(e){e.target.removeAttribute("tabindex")},a.setAttribute("tabindex","0"),a.focus({preventScroll:!0}),a.addEventListener("focusout",o,{once:!0})};return r.createElement("div",{className:"".concat(g,"--tableofcontents__desktop"),"data-autoid":"".concat(_,"--tableofcontents__desktop")},r.createElement("ul",null,a.map(function(e,t){if((null==e?void 0:e.id)!=="menuLabel"){var n=c===e.id;return r.createElement("li",{key:t,"data-autoid":"".concat(_,"--tableofcontents__desktop__item-").concat(e.id),className:u()("".concat(g,"--tableofcontents__desktop__item"),(0,i.Z)({},"".concat(g,"--tableofcontents__desktop__item--active"),n))},r.createElement("a",(0,o.Z)({},n?{"aria-current":"location"}:{},{onClick:function(t){return l(t,e.id)},href:"#".concat(e.id)}),e.title))}})))};h.propTypes={menuItems:p().array,selectedId:p().string};var E=n(2900),y=["children"],w=r.forwardRef(function(e,t){var n=e.children,o=(0,E._)(e,y);return r.createElement(E.I,(0,E.a)({width:20,height:20,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",ref:t},o),a||(a=r.createElement("path",{d:"M4 6H22V8H4zM4 12H22V14H4zM4 18H22V20H4zM4 24H22V26H4zM26 6H28V8H26zM26 12H28V14H26zM26 18H28V20H26zM26 24H28V26H26z"})),n)}),Z=d.Z.stablePrefix,k=b.Z.prefix,N=function(e){var t=e.menuItems,n=e.selectedId,a=e.menuLabel,o=e.updateState,i=(0,r.useState)("menuLabel"),c=(0,l.Z)(i,2),s=c[0],u=c[1];(0,r.useEffect)(function(){u(n)},[n]);var d=function(e){var n=e.target.value,a=t.filter(function(e){return e.id===n})[0].title;o(n,a);var i='a[name="'.concat(n,'"]');v(null,i,50),function(e){var t=document.querySelector(e);if(t){var n=function(e){e.target.removeAttribute("tabindex")};t.setAttribute("tabindex","0"),t.focus({preventScroll:!0}),t.addEventListener("focusout",n,{once:!0})}}(i)},m=function(){return null};return r.createElement("div",{className:"".concat(k,"--tableofcontents__mobile"),"data-autoid":"".concat(Z,"--tableofcontents__mobile")},r.createElement("div",{className:"".concat(k,"--tableofcontents__mobile__select__wrapper")},r.createElement("select",{"aria-label":a,className:"".concat(k,"--tableofcontents__mobile__select"),onBlur:m,value:s,onChange:function(e){return d(e)}},x(t,a)),r.createElement(w,{className:"".concat(k,"--tableofcontents__mobile__select__icon"),"aria-label":"menu icon"},r.createElement("title",null,"menu icon"))))},x=function(e,t){var n={title:"".concat(t," ..."),id:"menuLabel"};return -1===e.findIndex(function(e){return e.id===n.id})&&e.unshift(n),e.map(function(e,t){if(e)return r.createElement("option",{className:"".concat(k,"--tableofcontents__mobile__select__option"),"data-autoid":"".concat(Z,"--tableofcontents__mobile__select__option-").concat(e.id),key:t,value:e.id,defaultValue:0===t,disabled:0===t,hidden:0===t},e.title)})};N.propTypes={menuItems:p().array,selectedId:p().string,menuLabel:p().string,updateState:p().func};var H=d.Z.stablePrefix,C=b.Z.prefix,I=function(){var e=document.querySelectorAll("a[name]"),t=[];return e.forEach(function(e){"menuLabel"!==e.getAttribute("name")&&t.push({id:e.getAttribute("name"),title:e.getAttribute("data-title")||""})}),t},R=function(e){var t=e.menuItems,n=e.children,a=e.menuLabel,s=e.theme,d=e.stickyOffset,f=e.menuRule,p=e.headingContent,b=(0,r.useState)([]),v=(0,l.Z)(b,2),_=v[0],g=v[1],E=(0,r.useState)(""),y=(0,l.Z)(E,2),w=y[0],Z=y[1],k=(0,r.useState)(""),x=(0,l.Z)(k,2),R=x[0],S=x[1];(0,r.useEffect)(function(){g(null!=t&&t.length?(0,c.Z)(t):I())},[n,t]),(0,r.useEffect)(function(){var e=_[0]?_[0].id:"",t=_[0]?_[0].title:"";"menuLabel"===e&&_[1]&&(e=_[1].id,t=_[1].title),Z(e),S(t)},[_]),(0,r.useEffect)(function(){var e=function(){window.requestAnimationFrame(L)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}});var q,L=function(){var e=O();if(e){var t,n=e||_[0].id,a=null===(t=_.filter(function(e){if("undefined"!==n)return e.id===n})[0])||void 0===t?void 0:t.title;void 0!==a&&(Z(n),S(a))}},O=function(){var e=(0,c.Z)(document.querySelectorAll("a[name]")).map(function(e,t,n){return{elem:e,height:n[t+1]?n[t+1].getBoundingClientRect().y-e.getBoundingClientRect().y:null,position:e.getBoundingClientRect().y}}).filter(function(e,t,n){return null===e.height?n[t-1].position<n[t-1].height:e.position-50-d>-e.height});return document.documentElement.scrollTop+document.documentElement.clientHeight===document.documentElement.scrollHeight?e[e.length-1].elem.getAttribute("name"):e[0].elem.getAttribute("name")},A=function(e,t){Z(e),S(t)},T={menuItems:_.filter(function(e){var t,n;return(null==e?void 0:null===(t=e.title)||void 0===t?void 0:t.trim().length)&&(null==e?void 0:null===(n=e.id)||void 0===n?void 0:n.trim().length)}),selectedId:w,selectedTitle:R,menuLabel:a,updateState:A,children:n.length>1?n[0]:null};return r.createElement("section",{"data-autoid":"".concat(H,"--tableofcontents"),className:u()("".concat(C,"--tableofcontents"),(0,i.Z)({},"".concat(C,"--tableofcontents--").concat(s),s))},r.createElement("div",{className:"".concat(H,"-ce--table-of-contents__container")},r.createElement("div",{className:"".concat(C,"--tableofcontents__sidebar")},p&&r.createElement("div",{className:"".concat(C,"--tableofcontents__desktop__children")},p,f&&r.createElement(m.Z,null)),r.createElement("div",{className:"".concat(C,"--tableofcontents__mobile-top")}),r.createElement("div",{style:{position:"sticky",top:d?"".concat(d,"px"):0}},r.createElement(h,(0,o.Z)({menuRule:f,headingContent:p},T)),r.createElement(N,T))),r.createElement("div",{className:"".concat(C,"--tableofcontents__content")},r.createElement("div",{className:"".concat(C,"--tableofcontents__content-wrapper")},void 0!==p?r.createElement(r.Fragment,null,r.createElement("div",{className:"".concat(C,"--tableofcontents__children__mobile")},p),n):n))))};R.propTypes={menuItems:p().arrayOf(p().shape({title:p().string.isRequired,id:p().string.isRequired})),children:p().oneOfType([p().arrayOf(p().node),p().node]),menuLabel:p().string,theme:p().oneOf(["white","g10","g100"]),stickyOffset:p().number,menuRule:p().bool,headingContent:p().node},R.defaultProps={menuItems:null,menuLabel:"Jump to",theme:"white",stickyOffset:null};var S=R}}]);