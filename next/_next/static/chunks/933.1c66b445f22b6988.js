"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[933,7710],{933:function(e,t,i){i.r(t),i.d(t,{CustomElement:function(){return X},default:function(){return Q},descriptor:function(){return W},propTypes:function(){return J}}),i(8911);var r=i(2984),a=i(6424),o=i(3237),n=i(1120),d=i(6254),l=i(9033),s=i(8474),c=i(1523),u=i(3720);function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.duration,i=e.name;return i&&(0===t||t)?"".concat(i," (").concat(t,")"):i||t||""}var v=i(6354),m=i(5447);i(8965);var f=i(7613),p=i(8767);let y=e=>e,g,{stablePrefix:k}=s.Z;(0,a.Z)([(0,d.Mo)(`${k}-card-cta-image`)],function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"get",static:!0,key:"styles",value:function(){return(0,d.iv)(g||(g=y`
      ${0}${0}
    `),(0,o.Z)((0,n.Z)(i),"styles",this),p.Z)}}]}},f.Z);var b=i(3465),$=i(798);i(7551);var Z=i(2092);let _=e=>e,C,P,T,x,S,{prefix:O}=l.Z,{stablePrefix:w}=s.Z,D=(0,a.Z)([(0,d.Mo)(`${w}-card-cta`)],function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"_renderHeading",value:function(){let{ctaType:e,videoName:t,formatVideoCaption:r}=this;if(e!==Z.m.VIDEO)return(0,o.Z)((0,n.Z)(i.prototype),"_renderHeading",this).call(this);let a=r({name:t});this.dispatchEvent(new CustomEvent(this.constructor.eventVideoTitleUpdated,{bubbles:!0,composed:!0}));let l=this.querySelector("dds-card-heading")?(0,d.dy)(C||(C=_``)):(0,d.dy)(P||(P=_` <dds-card-heading>${0}</dds-card-heading> `),a);return(0,d.dy)(T||(T=_` <slot name="heading"></slot>${0} `),l)}},{kind:"method",key:"_renderImage",value:function(){let{ctaType:e,videoName:t,videoThumbnailUrl:i,thumbnail:r,_hasImage:a,noPoster:o}=this,n=a||e!==Z.m.VIDEO||o?void 0:(0,d.dy)(x||(x=_`
            <dds-card-cta-image
              class="${0}--card__video-thumbnail"
              alt="${0}"
              default-src="${0}">
              ${0}
            </dds-card-cta-image>
          `),O,(0,c.Z)(t),(0,c.Z)(r||i),(0,u.Z)({slot:"icon"}));return(0,d.dy)(S||(S=_`
      <slot name="image" @slotchange="${0}"></slot>${0}
    `),this._handleSlotChange,n)}},{kind:"field",decorators:[(0,d.Cb)({reflect:!0,attribute:"cta-type"})],key:"ctaType",value:()=>Z.m.REGULAR},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"formatVideoCaption",value:()=>h},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"formatVideoDuration",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Number,attribute:"video-duration"})],key:"videoDuration",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:"video-name"})],key:"videoName",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:"video-description"})],key:"videoDescription",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:"video-thumbnail-url"})],key:"videoThumbnailUrl",value:void 0},{kind:"field",decorators:[(0,d.Cb)({reflect:!0,attribute:"thumbnail"})],key:"thumbnail",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,reflect:!0,attribute:"no-poster"})],key:"noPoster",value:()=>!1},{kind:"method",key:"updated",value:function(e){(0,o.Z)((0,n.Z)(i.prototype),"updated",this).call(this,e);let t=this.querySelector(this.constructor.selectorFooter);if(e.has("ctaType")||e.has("formatCaption")||e.has("formatDuration")||e.has("videoDuration")||e.has("videoName")){var r;let{ctaType:a,videoDuration:d,videoName:l,videoDescription:s,formatVideoCaption:c,formatVideoDuration:u}=this,h=null===(r=this.querySelector(`${w}-card-heading`))||void 0===r?void 0:r.textContent,m=this.textContent;if(t){let f="";void 0!==d&&(f=`, DURATION ${v.Z.getMediaDurationFormatted(d,!1)}`),t.altAriaLabel=`${l||h||m}${f}`,t.ctaType=a,t.videoDuration=d,t.videoName=l,t.videoDescription=s,c&&(t.formatVideoCaption=c),u&&(t.formatVideoDuration=u)}}}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${w}--card-cta`}},{kind:"get",static:!0,key:"eventVideoTitleUpdated",value:function(){return`${w}-card-cta-video-title-updated`}},{kind:"get",static:!0,key:"selectorFooter",value:function(){return`${w}-card-cta-footer`}},{kind:"field",static:!0,key:"styles",value:()=>p.Z}]}},(0,$.Z)((0,b.ZP)(m.Z)));var E=i(1976),V=i(5697),I=i.n(V);l.Z.prefix;var M=s.Z.stablePrefix,L=Object.assign({},r.descriptor,{ctaType:{attribute:"cta-type"},formatVideoCaption:{attribute:!1},formatVideoDuration:{attribute:!1},videoDuration:{serialize:E.Hf,attribute:"video-duration"},videoName:{attribute:"video-name"},videoDescription:{attribute:"video-description"},videoThumbnailUrl:{attribute:"video-thumbnail-url"},thumbnail:{attribute:"thumbnail"},noPoster:{serialize:E._P,attribute:"no-poster"},onVideoTitleUpdated:{event:"".concat(M,"-card-cta-video-title-updated")}}),N={ctaType:I().string,formatVideoCaption:I().string,formatVideoDuration:I().string,videoDuration:I().number,videoName:I().string,videoDescription:I().string,videoThumbnailUrl:I().string,thumbnail:I().string,noPoster:I().bool,onVideoTitleUpdated:I().func};let F=(0,E.ZP)("".concat(M,"-card-cta"),L);F.propTypes=N;var A=i(2658);i(5703);var B=i(8082),q=i(7670);let R=e=>e,U,H,j,{prefix:z}=l.Z,{stablePrefix:G}=A.Z;var X=(0,a.Z)([(0,d.Mo)(`${G}-card-in-card`)],function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"_renderImage",value:function(){let{ctaType:e,videoName:t,videoThumbnailUrl:i,thumbnail:r,_hasImage:a}=this,o=a||e!==Z.m.VIDEO?void 0:(0,d.dy)(U||(U=R`
            <dds-card-in-card-image
              alt="${0}"
              default-src="${0}">
              ${0}
            </dds-card-in-card-image>
          `),(0,c.Z)(t),(0,c.Z)(r||i),(0,u.Z)({slot:"icon"}));return(0,d.dy)(H||(H=R`
      <slot name="image" @slotchange="${0}"></slot>${0}
    `),this._handleSlotChange,o)}},{kind:"method",key:"updated",value:function(e){var t,r,a;(0,o.Z)((0,n.Z)(i.prototype),"updated",this).call(this,e);let{_linkNode:d}=this;d&&d.classList.add(`${z}--card-in-card`);let l=this.querySelector(`${G}-card-in-card-image`),s=null===(t=this.parentElement)||void 0===t?void 0:null===(r=t.querySelector(`${G}-card-in-card`))||void 0===r?void 0:null===(a=r.shadowRoot)||void 0===a?void 0:a.querySelector("dds-card-in-card-image");(l||s)&&((l||s).onclick=()=>{var e,t,i;return null===(e=this.querySelector(`${G}-card-cta-footer`))||void 0===e?void 0:null===(t=e.shadowRoot)||void 0===t?void 0:null===(i=t.querySelector("a"))||void 0===i?void 0:i.click()})}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${G}--card-in-card`}},{kind:"get",static:!0,key:"styles",value:function(){return(0,d.iv)(j||(j=R`
      ${0}${0}
    `),(0,o.Z)((0,n.Z)(i),"styles",this),B.Z)}}]}},(0,q.Z)(D));l.Z.prefix;var Y=s.Z.stablePrefix,W=Object.assign({},L,{}),J={};let K=(0,E.ZP)("".concat(Y,"-card-in-card"),W);K.propTypes=J;var Q=K},2984:function(e,t,i){i.r(t),i.d(t,{CustomElement:function(){return r.Z},descriptor:function(){return c},propTypes:function(){return u}});var r=i(5447),a=i(1976),o=i(5697),n=i.n(o),d=i(9033),l=i(8474);d.Z.prefix;var s=l.Z.stablePrefix,c={border:{serialize:a._P},colorScheme:{attribute:"color-scheme"},href:{},pictogramPlacement:{attribute:"pictogram-placement"},logo:{serialize:a._P}},u={border:n().bool,colorScheme:n().string,href:n().string,pictogramPlacement:n().string,logo:n().bool};let h=(0,a.ZP)("".concat(s,"-card"),c);h.propTypes=u,t.default=h},8911:function(e,t,i){i(2092);/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ },5703:function(e,t,i){var r=i(6424),a=i(3237),o=i(1120),n=i(6254),d=i(8474),l=i(7613),s=i(8082);let c=e=>e,u,{stablePrefix:h}=d.Z,v=(0,r.Z)([(0,n.Mo)(`${h}-card-in-card-image`)],function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"get",static:!0,key:"styles",value:function(){return(0,n.iv)(u||(u=c`
      ${0}${0}
    `),(0,a.Z)((0,o.Z)(i),"styles",this),s.Z)}}]}},l.Z);t.Z=v},8965:function(e,t,i){var r=i(6424),a=i(3237),o=i(1120),n=i(6254),d=i(2658),l=i(3699),s=i(7670);let c=e=>e,u,{stablePrefix:h}=d.Z,v=(0,r.Z)([(0,n.Mo)(`${h}-card-heading`)],function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,n.Cb)({reflect:!0})],key:"slot",value:()=>"heading"},{kind:"method",key:"connectedCallback",value:function(){this.hasAttribute("role")||this.setAttribute("role","heading"),this.hasAttribute("aria-level")||this.setAttribute("aria-level","3"),(0,a.Z)((0,o.Z)(i.prototype),"connectedCallback",this).call(this)}},{kind:"method",key:"render",value:function(){return(0,n.dy)(u||(u=c` <slot></slot> `))}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${h}--card-heading`}},{kind:"field",static:!0,key:"styles",value:()=>l.Z}]}},(0,s.Z)(n.oi));t.Z=v},5447:function(e,t,i){i.d(t,{Z:function(){return w}});var r,a=i(6424),o=i(3237),n=i(1120),d=i(6254),l=i(9033),s=i(6812),c=i(9550),u=i(2658),h=i(5779),v=i(7670),m=i(3699);/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let f;(r=f||(f={})).TOP="top",r.BOTTOM="bottom";let p=e=>e,y,g,k,b,$,Z,_,C,P,T,{prefix:x}=l.Z,{stablePrefix:S}=u.Z,O={image:"_hasImage",pictogram:"_hasPictogram"};var w=(0,a.Z)([(0,d.Mo)(`${S}-card`)],function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.SB)()],key:"_hasImage",value:()=>!1},{kind:"field",decorators:[(0,d.SB)()],key:"_hasCopy",value:()=>!1},{kind:"field",decorators:[(0,d.SB)()],key:"_hasPictogram",value:()=>!1},{kind:"method",key:"_handleSlotChange",value:function({target:e}){let{name:t}=e,i=e.assignedNodes().some(e=>e.nodeType!==Node.TEXT_NODE||e.textContent.trim());this[O[t]]=i,this._hasCopy=i}},{kind:"method",key:"_renderHeading",value:function(){return(0,d.dy)(y||(y=p` <slot name="heading"></slot> `))}},{kind:"method",key:"_renderCopy",value:function(){let{_hasCopy:e}=this;return(0,d.dy)(g||(g=p`
      <div ?hidden="${0}" class="${0}--card__copy">
        <slot @slotchange="${0}"></slot>
      </div>
    `),!e,x,this._handleSlotChange)}},{kind:"method",key:"_renderImage",value:function(){return(0,d.dy)(k||(k=p`
      <slot name="image" @slotchange="${0}"></slot>
    `),this._handleSlotChange)}},{kind:"method",key:"_renderDisabledLink",value:function(){let{_classes:e}=this;return(0,d.dy)(b||(b=p`
      <div id="link" class="${0}">${0}</div>
    `),e,this._renderInner())}},{kind:"method",key:"_renderInner",value:function(){let{_handleSlotChange:e,_hasPictogram:t,_hasCopy:i}=this;return(0,d.dy)($||($=p`
      ${0}
      <div
        class="${0}--card__wrapper ${0} ${0}">
        <div class="${0}--card__content">
          ${0}
          ${0}
          ${0}
          ${0}
          ${0}
          ${0}
          ${0}
          <slot name="footer"></slot>
        </div>
      </div>
    `),this._renderImage(),x,t?`${x}--card__pictogram`:"",t&&i?`${x}--card__motion`:"",x,t?"":(0,d.dy)(Z||(Z=p` <slot name="eyebrow"></slot> `)),this.pictogramPlacement===f.TOP?(0,d.dy)(_||(_=p`
                <slot
                  name="pictogram"
                  data-pictogram-placement="${0}"
                  @slotchange="${0}"></slot>
              `),f.TOP,e):"",this.pictogramPlacement===f.TOP&&t?null:this._renderHeading(),this.pictogramPlacement!==f.BOTTOM&&t?"":this._renderCopy(),this.pictogramPlacement===f.BOTTOM?(0,d.dy)(C||(C=p`
                <slot
                  name="pictogram"
                  data-pictogram-placement="${0}"
                  @slotchange="${0}"></slot>
              `),f.BOTTOM,e):"",t&&this.pictogramPlacement===f.TOP?this._renderHeading():null,t&&this.pictogramPlacement===f.TOP?this._renderCopy():"")}},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,reflect:!0})],key:"border",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)({attribute:"color-scheme",reflect:!0})],key:"colorScheme",value:()=>h.t.REGULAR},{kind:"field",decorators:[(0,d.Cb)()],key:"href",value:()=>""},{kind:"field",decorators:[(0,d.Cb)({attribute:"pictogram-placement",reflect:!0})],key:"pictogramPlacement",value:()=>""},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,reflect:!0})],key:"logo",value:()=>!1},{kind:"method",key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open",delegatesFocus:!1})}},{kind:"field",decorators:[(0,d.IO)("div")],key:"_linkNode",value:void 0},{kind:"method",key:"updated",value:function(e){var t,r;(0,o.Z)((0,n.Z)(i.prototype),"updated",this).call(this,e);let{colorScheme:a,href:d,_linkNode:l}=this;if(e.has("colorScheme")||e.has("href")){let s=null===(t=this.querySelector(`${S}-card-heading`))||void 0===t?void 0:t.textContent,u=this.textContent,v=this.querySelector(this.constructor.selectorFooter);v&&d&&(v.colorScheme=a,v.parentHref=d,v.href=d,v.altAriaLabel=s||u)}l&&(l.classList.add(`${x}--tile`),l.classList.add(`${x}--card`),l.classList.toggle(`${x}--tile--clickable`,Boolean(d)),l.classList.toggle(`${x}--card--link`,Boolean(d)),l.classList.toggle(`${x}--card--inverse`,a===h.t.INVERSE)),this._hasPictogram&&(this.onclick=()=>window.open(this.href,"_self"));let m=this.querySelector("p");this._hasCopy&&null!=m&&m.innerText&&(m.innerHTML=`${(0,c.Z)(null==m?void 0:m.innerText,{bold:!1})}`,null===(r=m.firstElementChild)||void 0===r||r.setAttribute("style","all:unset;"))}},{kind:"method",key:"render",value:function(){var e;return this._hasPictogram?(0,d.dy)(P||(P=p`
          <div
            tabindex="0"
            aria-label="${0}"
            aria-live="polite"
            aria-describedby="${0}--card__copy"
            role="button">
            ${0}
          </div>
        `),(null===(e=this.querySelector(`${S}-card-heading`))||void 0===e?void 0:e.textContent)||"",x,this._renderInner()):(0,d.dy)(T||(T=p` <div>${0}</div> `),this._renderInner())}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${S}--card`}},{kind:"get",static:!0,key:"selectorFooter",value:function(){return`${S}-card-footer`}},{kind:"field",static:!0,key:"styles",value:()=>m.Z}]}},(0,v.Z)(s.Z))},3720:function(e,t,i){i.d(t,{Z:function(){return d}});var r=i(6069);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let a=new WeakMap,o=(0,r.XM)(e=>t=>{if(!(t instanceof r.sL)||".."!==t.committer.name||t.committer.parts.length>1)throw Error("The `spread` directive must be used in with `...` name and must be the only part in the attribute.");let{committer:i}=t,{element:o}=i,n=a.get(t);n&&Object.keys(n).forEach(t=>{t in e||o.removeAttribute(t)}),Object.keys(e).forEach(t=>{let i=e[t];n&&Object.is(i,n[t])||void 0===i||o.setAttribute(t,i)}),a.set(t,e)}),n=({children:e,...t}={})=>r.YP`<svg focusable="false" preserveAspectRatio="xMidYMid meet" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ...="${o(t)}" aria-hidden="true" width="64px" height="64px" viewBox="0 0 64 64">${e}<g id="visual-spec" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Card-group-video" transform="translate(-736.000000, -1746.000000)"><g id="Group-2-Copy-2" transform="translate(608.000000, 1658.000000)"><g id="Group-3" transform="translate(128.000000, 88.000000)"><circle id="Oval-Copy-3" fill-opacity="0.9" fill="#525252" cx="32" cy="32" r="32"></circle><path d="M26.5555476,43.111135 C26.0032708,43.111135 25.5555476,42.6633959 25.5555476,42.1111111 L25.5555476,20.1111111 C25.5541311,19.7531358 25.7441673,19.4217049 26.0538295,19.2421008 C26.3634918,19.0624967 26.745539,19.0621192 27.0555476,19.2411111 L46.0555476,30.2411111 C46.368866,30.4186723 46.5625038,30.7509842 46.5625038,31.1111111 C46.5625038,31.4712381 46.368866,31.8035499 46.0555476,31.9811111 L27.0555476,42.9811111 C26.9031526,43.0674916 26.7307319,43.1123209 26.5555476,43.111135 Z" id="Path-Copy" fill="#F3F3F3" fill-rule="nonzero"></path></g></g></g></g></svg>`;var d=n}}]);