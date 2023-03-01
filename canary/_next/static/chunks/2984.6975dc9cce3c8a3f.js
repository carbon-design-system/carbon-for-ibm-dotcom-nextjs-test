"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2984],{7909:function(e,t,n){n.r(t);var r=n(9238),a=n.n(r),o=n(7441),i=n(9033),l=n(3726),c=n.n(l),d=i.default.prefix,s=/\n|\s{2,}|&;/g,u=function(e){return e.replace(s," ")};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.allowHtml,r=void 0!==n&&n,i=t.renderer,l=void 0===i?{}:i,s=t.customTags,f=r?e:c()(e),h={link:function(e,t,n){var r=t?'title="'.concat(t,'"'):null;return'<a class="'.concat(d,"--link ").concat(d,'--link--lg" href="').concat(e,'" ').concat(r,">").concat(n,"</a>")},list:function(e,t){var n=t?"ol":"ul",r="".concat(d,t?"--list--ordered":"--list--unordered");return"<".concat(n,' class="').concat(r,'">').concat(e,"</").concat(n,">")},listitem:function(e){return'<li class="'.concat(d,'--list__item">').concat(e,"</li>")}};o.TU.use({smartypants:!0,renderer:Object.assign(h,l)}),s&&a().addHook("uponSanitizeElement",(function(e,t){var n=t.allowedTags,r=t.tagName;s.has(r)&&!n[r]&&(n[r]=!0)}));var m=a().sanitize((0,o.TU)(f));return s&&a().removeHook("uponSanitizeElement"),u(m)}},2984:function(e,t,n){n.r(t),n.d(t,{CustomElement:function(){return r.default},descriptor:function(){return s},propTypes:function(){return u}});var r=n(13),a=n(1976),o=n(5697),i=n.n(o),l=n(9033),c=n(8474),d=(l.default.prefix,c.default.stablePrefix),s={border:{serialize:a._P},colorScheme:{attribute:"color-scheme"},href:{},pictogramPlacement:{attribute:"pictogram-placement"},logo:{serialize:a._P}},u={border:i().bool,colorScheme:i().string,href:i().string,pictogramPlacement:i().string,logo:i().bool};const f=(0,a.ZP)("".concat(d,"-card"),s);f.propTypes=u,t.default=f},13:function(e,t,n){var r=n(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o,i,l,c,d,s,u,f,h,m=r(n(168)),p=r(n(3144)),v=r(n(5671)),_=r(n(7326)),g=r(n(136)),y=r(n(2963)),k=r(n(6424)),P=r(n(3237)),C=r(n(1120)),T=n(6254),E=r(n(9033)),O=r(n(6812)),M=r(n(7909)),b=r(n(2658)),A=n(5779),R=r(n(7670)),S=r(n(3699)),I=n(2589);function L(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,C.default)(e);if(t){var a=(0,C.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,y.default)(this,n)}}var N=E.default.prefix,x=b.default.stablePrefix,B={image:"_hasImage",pictogram:"_hasPictogram"},G=(0,k.default)([(0,T.customElement)("".concat(x,"-card"))],(function(e,t){var n=function(t){(0,g.default)(r,t);var n=L(r);function r(){var t;(0,v.default)(this,r);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return t=n.call.apply(n,[this].concat(o)),e((0,_.default)(t)),t}return(0,p.default)(r)}(t);return{F:n,d:[{kind:"field",decorators:[(0,T.state)()],key:"_hasImage",value:function(){return!1}},{kind:"field",decorators:[(0,T.state)()],key:"_hasCopy",value:function(){return!1}},{kind:"field",decorators:[(0,T.state)()],key:"_hasPictogram",value:function(){return!1}},{kind:"method",key:"_handleSlotChange",value:function(e){var t=e.target,n=t.name,r=t.assignedNodes().some((function(e){return e.nodeType!==Node.TEXT_NODE||e.textContent.trim()}));this[B[n]]=r,this._hasCopy=r}},{kind:"method",key:"_renderHeading",value:function(){return(0,T.html)(a||(a=(0,m.default)([' <slot name="heading"></slot> '])))}},{kind:"method",key:"_renderCopy",value:function(){var e=this._hasCopy;return(0,T.html)(o||(o=(0,m.default)(['\n      <div ?hidden="','" class="','--card__copy">\n        <slot @slotchange="','"></slot>\n      </div>\n    '])),!e,N,this._handleSlotChange)}},{kind:"method",key:"_renderImage",value:function(){return(0,T.html)(i||(i=(0,m.default)(['\n      <slot name="image" @slotchange="','"></slot>\n    '])),this._handleSlotChange)}},{kind:"method",key:"_renderDisabledLink",value:function(){var e=this._classes;return(0,T.html)(l||(l=(0,m.default)(['\n      <div id="link" class="','">',"</div>\n    "])),e,this._renderInner())}},{kind:"method",key:"_renderInner",value:function(){var e=this._handleSlotChange,t=this._hasPictogram,n=this._hasCopy;return(0,T.html)(c||(c=(0,m.default)(["\n      ",'\n      <div\n        class="',"--card__wrapper "," ",'">\n        <div class="','--card__content">\n          ',"\n          ","\n          ","\n          ","\n          ","\n          ","\n          ",'\n          <slot name="footer"></slot>\n        </div>\n      </div>\n    '])),this._renderImage(),N,t?"".concat(N,"--card__pictogram"):"",t&&n?"".concat(N,"--card__motion"):"",N,t?"":(0,T.html)(d||(d=(0,m.default)([' <slot name="eyebrow"></slot> ']))),this.pictogramPlacement===I.PICTOGRAM_PLACEMENT.TOP?(0,T.html)(s||(s=(0,m.default)(['\n                <slot\n                  name="pictogram"\n                  data-pictogram-placement="','"\n                  @slotchange="','"></slot>\n              '])),I.PICTOGRAM_PLACEMENT.TOP,e):"",this.pictogramPlacement===I.PICTOGRAM_PLACEMENT.TOP&&t?null:this._renderHeading(),this.pictogramPlacement!==I.PICTOGRAM_PLACEMENT.BOTTOM&&t?"":this._renderCopy(),this.pictogramPlacement===I.PICTOGRAM_PLACEMENT.BOTTOM?(0,T.html)(u||(u=(0,m.default)(['\n                <slot\n                  name="pictogram"\n                  data-pictogram-placement="','"\n                  @slotchange="','"></slot>\n              '])),I.PICTOGRAM_PLACEMENT.BOTTOM,e):"",t&&this.pictogramPlacement===I.PICTOGRAM_PLACEMENT.TOP?this._renderHeading():null,t&&this.pictogramPlacement===I.PICTOGRAM_PLACEMENT.TOP?this._renderCopy():"")}},{kind:"field",decorators:[(0,T.property)({type:Boolean,reflect:!0})],key:"border",value:function(){return!1}},{kind:"field",decorators:[(0,T.property)({attribute:"color-scheme",reflect:!0})],key:"colorScheme",value:function(){return A.BASIC_COLOR_SCHEME.REGULAR}},{kind:"field",decorators:[(0,T.property)()],key:"href",value:function(){return""}},{kind:"field",decorators:[(0,T.property)({attribute:"pictogram-placement",reflect:!0})],key:"pictogramPlacement",value:function(){return""}},{kind:"field",decorators:[(0,T.property)({type:Boolean,reflect:!0})],key:"logo",value:function(){return!1}},{kind:"method",key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open",delegatesFocus:!1})}},{kind:"field",decorators:[(0,T.query)("div")],key:"_linkNode",value:void 0},{kind:"method",key:"updated",value:function(e){var t=this;(0,P.default)((0,C.default)(n.prototype),"updated",this).call(this,e);var r=this.colorScheme,a=this.href,o=this._linkNode;if(e.has("colorScheme")||e.has("href")){var i,l=null===(i=this.querySelector("".concat(x,"-card-heading")))||void 0===i?void 0:i.textContent,c=this.textContent,d=this.querySelector(this.constructor.selectorFooter);d&&a&&(d.colorScheme=r,d.parentHref=a,d.href=a,d.altAriaLabel=l||c)}o&&(o.classList.add("".concat(N,"--tile")),o.classList.add("".concat(N,"--card")),o.classList.toggle("".concat(N,"--tile--clickable"),Boolean(a)),o.classList.toggle("".concat(N,"--card--link"),Boolean(a)),o.classList.toggle("".concat(N,"--card--inverse"),r===A.BASIC_COLOR_SCHEME.INVERSE)),this._hasPictogram&&(this.onclick=function(){return window.open(t.href,"_self")});var s,u=this.querySelector("p");this._hasCopy&&null!==u&&void 0!==u&&u.innerText&&(u.innerHTML="".concat((0,M.default)(null===u||void 0===u?void 0:u.innerText,{bold:!1})),null===(s=u.firstElementChild)||void 0===s||s.setAttribute("style","all:unset;"))}},{kind:"method",key:"render",value:function(){var e;return this._hasPictogram?(0,T.html)(f||(f=(0,m.default)(['\n          <div\n            tabindex="0"\n            aria-label="','"\n            aria-live="polite"\n            aria-describedby="','--card__copy"\n            role="button">\n            ',"\n          </div>\n        "])),(null===(e=this.querySelector("".concat(x,"-card-heading")))||void 0===e?void 0:e.textContent)||"",N,this._renderInner()):(0,T.html)(h||(h=(0,m.default)([" <div>","</div> "])),this._renderInner())}},{kind:"get",static:!0,key:"stableSelector",value:function(){return"".concat(x,"--card")}},{kind:"get",static:!0,key:"selectorFooter",value:function(){return"".concat(x,"-card-footer")}},{kind:"field",static:!0,key:"styles",value:function(){return S.default}}]}}),(0,R.default)(O.default)),w=G;t.default=w},2589:function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.PICTOGRAM_PLACEMENT=void 0,t.PICTOGRAM_PLACEMENT=n,function(e){e.TOP="top",e.BOTTOM="bottom"}(n||(t.PICTOGRAM_PLACEMENT=n={}));var r=n;t.default=r}}]);