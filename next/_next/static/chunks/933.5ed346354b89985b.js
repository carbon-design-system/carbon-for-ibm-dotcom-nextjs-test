"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[933,7710],{7909:function(e,t,i){var o=i(9238),a=i.n(o),n=i(7441),r=i(9033),d=i(3726),c=i.n(d),s=r.Z.prefix,l=/\n|\s{2,}|&;/g,u=function(e){return e.replace(l," ")};t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.allowHtml,o=void 0!==i&&i,r=t.renderer,d=void 0===r?{}:r,l=t.customTags,h=o?e:c()(e),m={link:function(e,t,i){var o=t?'title="'.concat(t,'"'):null;return'<a class="'.concat(s,"--link ").concat(s,'--link--lg" href="').concat(e,'" ').concat(o,">").concat(i,"</a>")},list:function(e,t){var i=t?"ol":"ul",o="".concat(s,t?"--list--ordered":"--list--unordered");return"<".concat(i,' class="').concat(o,'">').concat(e,"</").concat(i,">")},listitem:function(e){return'<li class="'.concat(s,'--list__item">').concat(e,"</li>")}};n.TU.use({smartypants:!0,renderer:Object.assign(m,d)}),l&&a().addHook("uponSanitizeElement",(function(e,t){var i=t.allowedTags,o=t.tagName;l.has(o)&&!i[o]&&(i[o]=!0)}));var v=a().sanitize((0,n.TU)(h));return l&&a().removeHook("uponSanitizeElement"),u(v)}},933:function(e,t,i){i.r(t),i.d(t,{CustomElement:function(){return z},default:function(){return Q},descriptor:function(){return X},propTypes:function(){return J}});i(8911);var o=i(2984),a=i(6424),n=i(3237),r=i(1120),d=i(6254),c=i(9033),s=i(8474),l=i(8905),u=i(3732);function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.duration,i=e.name;return!i||0!==t&&!t?i||t||"":"".concat(i," (").concat(t,")")}var m=i(6354),v=i(5447),p=(i(8965),i(6024)),f=i(8767);let y,g=e=>e;const{stablePrefix:k}=s.Z;(0,a.Z)([(0,d.Mo)(`${k}-card-cta-image`)],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"get",static:!0,key:"styles",value:function(){return(0,d.iv)(y||(y=g`${0}${0}`),(0,n.Z)((0,r.Z)(i),"styles",this),f.Z)}}]}}),p.Z);var b=i(1689),$=i(798),_=(i(7551),i(2092));let Z,C,T,P=e=>e;const{prefix:S}=c.Z,{stablePrefix:x}=s.Z;var O=(0,a.Z)([(0,d.Mo)(`${x}-card-cta`)],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"_renderHeading",value:function(){const{ctaType:e,videoName:t,formatVideoCaption:o}=this;if(e!==_.m.VIDEO)return(0,n.Z)((0,r.Z)(i.prototype),"_renderHeading",this).call(this);const a=o({name:t});return this.dispatchEvent(new CustomEvent(this.constructor.eventVideoTitleUpdated,{bubbles:!0,composed:!0})),(0,d.dy)(Z||(Z=P`
      <slot name="heading"></slot><dds-card-heading>${0}</dds-card-heading>
    `),a)}},{kind:"method",key:"_renderImage",value:function(){const{ctaType:e,videoName:t,videoThumbnailUrl:i,thumbnail:o,_hasImage:a,noPoster:n}=this,r=a||e!==_.m.VIDEO||n?void 0:(0,d.dy)(C||(C=P`
            <dds-card-cta-image
              class="${0}--card__video-thumbnail"
              alt="${0}"
              default-src="${0}"
            >
              ${0}
            </dds-card-cta-image>
          `),S,(0,l.Z)(t),(0,l.Z)(o||i),(0,u.Z)({slot:"icon"}));return(0,d.dy)(T||(T=P`
      <slot name="image" @slotchange="${0}"></slot>${0}
    `),this._handleSlotChange,r)}},{kind:"field",decorators:[(0,d.Cb)({reflect:!0,attribute:"cta-type"})],key:"ctaType",value:()=>_.m.REGULAR},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"formatVideoCaption",value:()=>h},{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"formatVideoDuration",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Number,attribute:"video-duration"})],key:"videoDuration",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:"video-name"})],key:"videoName",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:"video-description"})],key:"videoDescription",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:"video-thumbnail-url"})],key:"videoThumbnailUrl",value:void 0},{kind:"field",decorators:[(0,d.Cb)({reflect:!0,attribute:"thumbnail"})],key:"thumbnail",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,reflect:!0,attribute:"no-poster"})],key:"noPoster",value:()=>!1},{kind:"method",key:"updated",value:function(e){(0,n.Z)((0,r.Z)(i.prototype),"updated",this).call(this,e);const t=this.querySelector(this.constructor.selectorFooter);if(e.has("ctaType")||e.has("formatCaption")||e.has("formatDuration")||e.has("videoDuration")||e.has("videoName")){var o;const{ctaType:e,videoDuration:i,videoName:a,videoDescription:n,formatVideoCaption:r,formatVideoDuration:d}=this,c=null===(o=this.querySelector(`${x}-card-heading`))||void 0===o?void 0:o.textContent,s=this.textContent;if(t){const o=a||c||s;let l="";void 0!==i&&(l=`, DURATION ${m.Z.getMediaDurationFormatted(i,!1)}`),t.altAriaLabel=`${o}${l}`,t.ctaType=e,t.videoDuration=i,t.videoName=a,t.videoDescription=n,r&&(t.formatVideoCaption=r),d&&(t.formatVideoDuration=d)}}}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${x}--card-cta`}},{kind:"get",static:!0,key:"eventVideoTitleUpdated",value:function(){return`${x}-card-cta-video-title-updated`}},{kind:"get",static:!0,key:"selectorFooter",value:function(){return`${x}-card-cta-footer`}},{kind:"field",static:!0,key:"styles",value:()=>f.Z}]}}),(0,$.Z)((0,b.ZP)(v.Z))),D=i(7921),N=i(5697),E=i.n(N),I=(c.Z.prefix,s.Z.stablePrefix),V=Object.assign({},o.descriptor,{ctaType:{attribute:"cta-type"},formatVideoCaption:{attribute:!1},formatVideoDuration:{attribute:!1},videoDuration:{serialize:D.Hf,attribute:"video-duration"},videoName:{attribute:"video-name"},videoDescription:{attribute:"video-description"},videoThumbnailUrl:{attribute:"video-thumbnail-url"},thumbnail:{attribute:"thumbnail"},noPoster:{serialize:D._P,attribute:"no-poster"},onVideoTitleUpdated:{event:"".concat(I,"-card-cta-video-title-updated")}}),U=Object.assign({},o.propTypes,{ctaType:E().string,formatVideoCaption:E().string,formatVideoDuration:E().string,videoDuration:E().number,videoName:E().string,videoDescription:E().string,videoThumbnailUrl:E().string,thumbnail:E().string,noPoster:E().bool,onVideoTitleUpdated:E().func});const q=(0,D.ZP)("".concat(I,"-card-cta"),V);q.propTypes=U;var w=i(2658),B=(i(5703),i(8082)),F=i(7670);let L,M,H,A=e=>e;const{prefix:R}=c.Z,{stablePrefix:j}=w.Z;var z=(0,a.Z)([(0,d.Mo)(`${j}-card-in-card`)],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"_renderImage",value:function(){const{ctaType:e,videoName:t,videoThumbnailUrl:i,thumbnail:o,_hasImage:a}=this,n=a||e!==_.m.VIDEO?void 0:(0,d.dy)(L||(L=A`
            <dds-card-in-card-image alt="${0}" default-src="${0}">
              ${0}
            </dds-card-in-card-image>
          `),(0,l.Z)(t),(0,l.Z)(o||i),(0,u.Z)({slot:"icon"}));return(0,d.dy)(M||(M=A`
      <slot name="image" @slotchange="${0}"></slot>${0}
    `),this._handleSlotChange,n)}},{kind:"method",key:"updated",value:function(e){var t,o,a;(0,n.Z)((0,r.Z)(i.prototype),"updated",this).call(this,e);const{_linkNode:d}=this;d&&d.classList.add(`${R}--card-in-card`);const c=this.querySelector(`${j}-card-in-card-image`),s=null===(t=this.parentElement)||void 0===t||null===(o=t.querySelector(`${j}-card-in-card`))||void 0===o||null===(a=o.shadowRoot)||void 0===a?void 0:a.querySelector("dds-card-in-card-image");(c||s)&&((c||s).onclick=()=>{var e,t,i;return null===(e=this.querySelector(`${j}-card-cta-footer`))||void 0===e||null===(t=e.shadowRoot)||void 0===t||null===(i=t.querySelector("a"))||void 0===i?void 0:i.click()})}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${j}--card-in-card`}},{kind:"get",static:!0,key:"styles",value:function(){return(0,d.iv)(H||(H=A`${0}${0}`),(0,n.Z)((0,r.Z)(i),"styles",this),B.Z)}}]}}),(0,F.Z)(O)),G=(c.Z.prefix,s.Z.stablePrefix),X=Object.assign({},V,{}),J=Object.assign({},U,{});const K=(0,D.ZP)("".concat(G,"-card-in-card"),X);K.propTypes=J;var Q=K},2984:function(e,t,i){i.r(t),i.d(t,{CustomElement:function(){return a.Z},descriptor:function(){return u},propTypes:function(){return h}});var o=i(9697),a=i(5447),n=i(7921),r=i(5697),d=i.n(r),c=i(9033),s=i(8474),l=(c.Z.prefix,s.Z.stablePrefix),u=Object.assign({},o.qI,{border:{serialize:n._P},colorScheme:{attribute:"color-scheme"},href:{},pictogramPlacement:{attribute:"pictogram-placement"},logo:{serialize:n._P}}),h=Object.assign({},o.iG,{border:d().bool,colorScheme:d().string,href:d().string,pictogramPlacement:d().string,logo:d().bool});const m=(0,n.ZP)("".concat(l,"-card"),u);m.propTypes=h,t.default=m},8911:function(e,t,i){i(2092)},5703:function(e,t,i){var o=i(6424),a=i(3237),n=i(1120),r=i(6254),d=i(8474),c=i(6024),s=i(8082);let l,u=e=>e;const{stablePrefix:h}=d.Z;let m=(0,o.Z)([(0,r.Mo)(`${h}-card-in-card-image`)],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"get",static:!0,key:"styles",value:function(){return(0,r.iv)(l||(l=u`${0}${0}`),(0,a.Z)((0,n.Z)(i),"styles",this),s.Z)}}]}}),c.Z);t.Z=m},8965:function(e,t,i){var o=i(6424),a=i(3237),n=i(1120),r=i(6254),d=i(2658),c=i(3699),s=i(7670);let l,u=e=>e;const{stablePrefix:h}=d.Z;let m=(0,o.Z)([(0,r.Mo)(`${h}-card-heading`)],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.Cb)({reflect:!0})],key:"slot",value:()=>"heading"},{kind:"method",key:"connectedCallback",value:function(){this.hasAttribute("role")||this.setAttribute("role","heading"),this.hasAttribute("aria-level")||this.setAttribute("aria-level","3"),(0,a.Z)((0,n.Z)(i.prototype),"connectedCallback",this).call(this)}},{kind:"method",key:"render",value:function(){return(0,r.dy)(l||(l=u`
      <slot></slot>
    `))}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${h}--card-heading`}},{kind:"field",static:!0,key:"styles",value:()=>c.Z}]}}),(0,s.Z)(r.oi));t.Z=m},5447:function(e,t,i){i.d(t,{Z:function(){return O}});var o=i(6424),a=i(3237),n=i(1120),r=i(6254),d=i(9033),c=i(6727),s=i(7909),l=i(2658),u=i(5779),h=i(7670),m=i(3699);let v;!function(e){e.TOP="top",e.BOTTOM="bottom"}(v||(v={}));let p,f,y,g,k,b,$,_,Z,C,T=e=>e;const{prefix:P}=d.Z,{stablePrefix:S}=l.Z,x={image:"_hasImage",pictogram:"_hasPictogram"};var O=(0,o.Z)([(0,r.Mo)(`${S}-card`)],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.SB)()],key:"_hasImage",value:()=>!1},{kind:"field",decorators:[(0,r.SB)()],key:"_hasCopy",value:()=>!1},{kind:"field",decorators:[(0,r.SB)()],key:"_hasPictogram",value:()=>!1},{kind:"method",key:"_handleSlotChange",value:function({target:e}){const{pictogramPlacement:t}=this,{dataset:i,name:o}=e,{pictogramPlacement:a}=i;if(!a||a===t){const t=e.assignedNodes().some((e=>e.nodeType!==Node.TEXT_NODE||e.textContent.trim()));this[x[o]||"_hasCopy"]=t}}},{kind:"method",key:"_renderHeading",value:function(){return(0,r.dy)(p||(p=T`
      <slot name="heading"></slot>
    `))}},{kind:"method",key:"_handleCopySlotChange",value:function({target:e}){const{pictogramPlacement:t}=this,{dataset:i,name:o}=e,{pictogramPlacement:a}=i;if(!this._hasCopy&&!a||a===t){const t=e.assignedNodes().some((e=>e.nodeType!==Node.TEXT_NODE||e.textContent.trim()));this[x[o]||"_hasCopy"]=t}}},{kind:"method",key:"_renderCopy",value:function(){const{_hasCopy:e}=this;return(0,r.dy)(f||(f=T`
      <div ?hidden="${0}" class="${0}--card__copy">
        <slot @slotchange="${0}"></slot>
      </div>
    `),!e,P,this._handleCopySlotChange)}},{kind:"method",key:"_renderImage",value:function(){return(0,r.dy)(y||(y=T`
      <slot name="image" @slotchange="${0}"></slot>
    `),this._handleSlotChange)}},{kind:"method",key:"_renderDisabledLink",value:function(){const{_classes:e}=this;return(0,r.dy)(g||(g=T`
      <div id="link" class="${0}">${0}</div>
    `),e,this._renderInner())}},{kind:"method",key:"_renderInner",value:function(){const{_handleSlotChange:e,_hasPictogram:t,_hasCopy:i}=this;return(0,r.dy)(k||(k=T`
      ${0}
      <div
        class="${0}--card__wrapper ${0} ${0}"
      >
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
    `),this._renderImage(),P,t?`${P}--card__pictogram`:"",t&&i?`${P}--card__motion`:"",P,t?"":(0,r.dy)(b||(b=T`
                <slot name="eyebrow"></slot>
              `)),this.pictogramPlacement===v.TOP?(0,r.dy)($||($=T`
                <slot
                  name="pictogram"
                  data-pictogram-placement="${0}"
                  @slotchange="${0}"
                ></slot>
              `),v.TOP,e):"",this.pictogramPlacement===v.TOP&&t?null:this._renderHeading(),this.pictogramPlacement!==v.BOTTOM&&t?"":this._renderCopy(),this.pictogramPlacement===v.BOTTOM?(0,r.dy)(_||(_=T`
                <slot
                  name="pictogram"
                  data-pictogram-placement="${0}"
                  @slotchange="${0}"
                ></slot>
              `),v.BOTTOM,e):"",t&&this.pictogramPlacement===v.TOP?this._renderHeading():null,t&&this.pictogramPlacement===v.TOP?this._renderCopy():"")}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0})],key:"border",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({attribute:"color-scheme",reflect:!0})],key:"colorScheme",value:()=>u.t.REGULAR},{kind:"field",decorators:[(0,r.Cb)()],key:"href",value:()=>""},{kind:"field",decorators:[(0,r.Cb)({attribute:"pictogram-placement",reflect:!0})],key:"pictogramPlacement",value:()=>v.TOP},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0})],key:"logo",value:()=>!1},{kind:"method",key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open",delegatesFocus:!1})}},{kind:"field",decorators:[(0,r.IO)("div")],key:"_linkNode",value:void 0},{kind:"method",key:"updated",value:function(e){(0,a.Z)((0,n.Z)(i.prototype),"updated",this).call(this,e);const{colorScheme:t,href:o,_linkNode:r}=this;if(e.has("colorScheme")||e.has("href")){var d;const e=null===(d=this.querySelector(`${S}-card-heading`))||void 0===d?void 0:d.textContent,i=this.textContent,a=this.querySelector(this.constructor.selectorFooter);a&&o&&(a.colorScheme=t,a.parentHref=o,a.href=o,a.altAriaLabel=e||i)}r&&(r.classList.add(`${P}--tile`),r.classList.add(`${P}--card`),r.classList.toggle(`${P}--tile--clickable`,Boolean(o)),r.classList.toggle(`${P}--card--link`,Boolean(o)),r.classList.toggle(`${P}--card--inverse`,t===u.t.INVERSE)),this._hasPictogram&&(this.onclick=()=>window.open(this.href,"_self"));const c=this.querySelector("p");var l;this._hasCopy&&(null===c||void 0===c?void 0:c.innerText)&&(c.innerHTML=`${(0,s.Z)(null===c||void 0===c?void 0:c.innerText,{bold:!1})}`,null===(l=c.firstElementChild)||void 0===l||l.setAttribute("style","all:unset;"))}},{kind:"method",key:"render",value:function(){var e;return this._hasPictogram?(0,r.dy)(Z||(Z=T`
          <div
            tabindex="0"
            aria-label="${0}"
            aria-live="polite"
            aria-describedby="${0}--card__copy"
            role="button"
          >
            ${0}
          </div>
        `),(null===(e=this.querySelector(`${S}-card-heading`))||void 0===e?void 0:e.textContent)||"",P,this._renderInner()):(0,r.dy)(C||(C=T`
          <div>${0}</div>
        `),this._renderInner())}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${S}--card`}},{kind:"get",static:!0,key:"selectorFooter",value:function(){return`${S}-card-footer`}},{kind:"field",static:!0,key:"styles",value:()=>m.Z}]}}),(0,h.Z)(c.Z))}}]);