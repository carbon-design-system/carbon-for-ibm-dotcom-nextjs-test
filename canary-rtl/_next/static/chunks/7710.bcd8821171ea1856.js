"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7710,2984],{2984:function(e,t,n){n.r(t),n.d(t,{CustomElement:function(){return r.default},descriptor:function(){return s},propTypes:function(){return u}});var r=n(13),a=n(1976),o=n(5697),l=n.n(o),i=n(9033),c=n(8474);i.default.prefix;var d=c.default.stablePrefix,s={border:{serialize:a._P},colorScheme:{attribute:"color-scheme"},href:{},pictogramPlacement:{attribute:"pictogram-placement"},logo:{serialize:a._P}},u={border:l().bool,colorScheme:l().string,href:l().string,pictogramPlacement:l().string,logo:l().bool};let h=(0,a.ZP)("".concat(d,"-card"),s);h.propTypes=u,t.default=h},13:function(e,t,n){var r,a,o,l,i,c,d,s,u,h,f=n(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var m=f(n(168)),_=f(n(3144)),p=f(n(5671)),v=f(n(7326)),y=f(n(136)),C=f(n(2963)),g=f(n(6424)),P=f(n(3237)),k=f(n(1120)),E=n(6254),T=f(n(9033)),O=f(n(6812)),M=f(n(9550)),A=f(n(2658)),I=n(5779),L=f(n(7670)),R=f(n(3699)),b=n(2589),S=T.default.prefix,N=A.default.stablePrefix,B={image:"_hasImage",pictogram:"_hasPictogram"},G=(0,g.default)([(0,E.customElement)("".concat(N,"-card"))],function(e,t){var n=function(t){(0,y.default)(o,t);var n,r,a=(r=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=(0,k.default)(o);if(r){var n=(0,k.default)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,C.default)(this,e)});function o(){var t;(0,p.default)(this,o);for(var n=arguments.length,r=Array(n),l=0;l<n;l++)r[l]=arguments[l];return t=a.call.apply(a,[this].concat(r)),e((0,v.default)(t)),t}return(0,_.default)(o)}(t);return{F:n,d:[{kind:"field",decorators:[(0,E.state)()],key:"_hasImage",value:function(){return!1}},{kind:"field",decorators:[(0,E.state)()],key:"_hasCopy",value:function(){return!1}},{kind:"field",decorators:[(0,E.state)()],key:"_hasPictogram",value:function(){return!1}},{kind:"method",key:"_handleSlotChange",value:function(e){var t,n=e.target.name,r=Boolean(this.querySelector("p"));this[B[n]]=r,this._hasCopy=r}},{kind:"method",key:"_renderHeading",value:function(){return(0,E.html)(r||(r=(0,m.default)([' <slot name="heading"></slot> '])))}},{kind:"method",key:"_renderCopy",value:function(){var e=this._hasCopy;return(0,E.html)(a||(a=(0,m.default)(['\n      <div ?hidden="','" class="','--card__copy">\n        <slot @slotchange="','"></slot>\n      </div>\n    '])),!e,S,this._handleSlotChange)}},{kind:"method",key:"_renderImage",value:function(){return(0,E.html)(o||(o=(0,m.default)(['\n      <slot name="image" @slotchange="','"></slot>\n    '])),this._handleSlotChange)}},{kind:"method",key:"_renderDisabledLink",value:function(){var e=this._classes;return(0,E.html)(l||(l=(0,m.default)(['\n      <div id="link" class="','">',"</div>\n    "])),e,this._renderInner())}},{kind:"method",key:"_renderInner",value:function(){var e=this._handleSlotChange,t=this._hasPictogram,n=this._hasCopy;return(0,E.html)(i||(i=(0,m.default)(["\n      ",'\n      <div\n        class="',"--card__wrapper "," ",'">\n        <div class="','--card__content">\n          ',"\n          ","\n          ","\n          ","\n          ","\n          ","\n          ",'\n          <slot name="footer"></slot>\n        </div>\n      </div>\n    '])),this._renderImage(),S,t?"".concat(S,"--card__pictogram"):"",t&&n?"".concat(S,"--card__motion"):"",S,t?"":(0,E.html)(c||(c=(0,m.default)([' <slot name="eyebrow"></slot> ']))),this.pictogramPlacement===b.PICTOGRAM_PLACEMENT.TOP?(0,E.html)(d||(d=(0,m.default)(['\n                <slot\n                  name="pictogram"\n                  data-pictogram-placement="','"\n                  @slotchange="','"></slot>\n              '])),b.PICTOGRAM_PLACEMENT.TOP,e):"",this.pictogramPlacement===b.PICTOGRAM_PLACEMENT.TOP&&t?null:this._renderHeading(),this.pictogramPlacement!==b.PICTOGRAM_PLACEMENT.BOTTOM&&t?"":this._renderCopy(),this.pictogramPlacement===b.PICTOGRAM_PLACEMENT.BOTTOM?(0,E.html)(s||(s=(0,m.default)(['\n                <slot\n                  name="pictogram"\n                  data-pictogram-placement="','"\n                  @slotchange="','"></slot>\n              '])),b.PICTOGRAM_PLACEMENT.BOTTOM,e):"",t&&this.pictogramPlacement===b.PICTOGRAM_PLACEMENT.TOP?this._renderHeading():null,t&&this.pictogramPlacement===b.PICTOGRAM_PLACEMENT.TOP?this._renderCopy():"")}},{kind:"field",decorators:[(0,E.property)({type:Boolean,reflect:!0})],key:"border",value:function(){return!1}},{kind:"field",decorators:[(0,E.property)({attribute:"color-scheme",reflect:!0})],key:"colorScheme",value:function(){return I.BASIC_COLOR_SCHEME.REGULAR}},{kind:"field",decorators:[(0,E.property)()],key:"href",value:function(){return""}},{kind:"field",decorators:[(0,E.property)({attribute:"pictogram-placement",reflect:!0})],key:"pictogramPlacement",value:function(){return""}},{kind:"field",decorators:[(0,E.property)({type:Boolean,reflect:!0})],key:"logo",value:function(){return!1}},{kind:"method",key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open",delegatesFocus:!1})}},{kind:"field",decorators:[(0,E.query)("div")],key:"_linkNode",value:void 0},{kind:"method",key:"updated",value:function(e){var t,r=this;(0,P.default)((0,k.default)(n.prototype),"updated",this).call(this,e);var a=this.colorScheme,o=this.href,l=this._linkNode;if(e.has("colorScheme")||e.has("href")){var i,c=null===(i=this.querySelector("".concat(N,"-card-heading")))||void 0===i?void 0:i.textContent,d=this.textContent,s=this.querySelector(this.constructor.selectorFooter);s&&o&&(s.colorScheme=a,s.parentHref=o,s.href=o,s.altAriaLabel=c||d)}l&&(l.classList.add("".concat(S,"--tile")),l.classList.add("".concat(S,"--card")),l.classList.toggle("".concat(S,"--tile--clickable"),Boolean(o)),l.classList.toggle("".concat(S,"--card--link"),Boolean(o)),l.classList.toggle("".concat(S,"--card--inverse"),a===I.BASIC_COLOR_SCHEME.INVERSE)),this._hasPictogram&&(this.onclick=function(){return window.open(r.href,"_self")});var u=this.querySelector("p");this._hasCopy&&null!=u&&u.innerText&&(u.innerHTML="".concat((0,M.default)(null==u?void 0:u.innerText,{bold:!1})),null===(t=u.firstElementChild)||void 0===t||t.setAttribute("style","all:unset;"))}},{kind:"method",key:"render",value:function(){var e;return this._hasPictogram?(0,E.html)(u||(u=(0,m.default)(['\n          <div\n            tabindex="0"\n            aria-label="','"\n            aria-live="polite"\n            aria-describedby="','--card__copy"\n            role="button">\n            ',"\n          </div>\n        "])),(null===(e=this.querySelector("".concat(N,"-card-heading")))||void 0===e?void 0:e.textContent)||"",S,this._renderInner()):(0,E.html)(h||(h=(0,m.default)([" <div>","</div> "])),this._renderInner())}},{kind:"get",static:!0,key:"stableSelector",value:function(){return"".concat(N,"--card")}},{kind:"get",static:!0,key:"selectorFooter",value:function(){return"".concat(N,"-card-footer")}},{kind:"field",static:!0,key:"styles",value:function(){return R.default}}]}},(0,L.default)(O.default));t.default=G},2589:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.PICTOGRAM_PLACEMENT=void 0,t.PICTOGRAM_PLACEMENT=r,(n=r||(t.PICTOGRAM_PLACEMENT=r={})).TOP="top",n.BOTTOM="bottom";var n,r,a=r;t.default=a},5779:function(e,t){var n,r,a,o;Object.defineProperty(t,"__esModule",{value:!0}),t.ICON_PLACEMENT=t.BASIC_COLOR_SCHEME=void 0,t.BASIC_COLOR_SCHEME=n,(a=n||(t.BASIC_COLOR_SCHEME=n={})).REGULAR="",a.INVERSE="inverse",t.ICON_PLACEMENT=r,(o=r||(t.ICON_PLACEMENT=r={})).LEFT="left",o.RIGHT="right"}}]);