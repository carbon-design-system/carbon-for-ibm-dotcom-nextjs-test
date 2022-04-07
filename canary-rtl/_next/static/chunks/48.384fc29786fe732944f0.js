(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[48],{KJD9:function(e,t,a){"use strict";a.r(t),a.d(t,"CustomElement",(function(){return z})),a.d(t,"descriptor",(function(){return Q})),a.d(t,"propTypes",(function(){return Z}));a("2TRz");var i=a("Xdd8"),o=a("XLRp"),r=a("ReuC"),n=a("foSv"),c=a("CQbg"),d=a("9a1i"),s=a("OT8j"),l=a("l2/T"),u=a("YjeJ");function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.duration,a=e.name;return!a||0!==t&&!t?a||t||"":"".concat(a," (").concat(t,")")}var b=a("mk+o"),m=a("TJic"),v=(a("OQ8r"),a("tfz1")),p=a("CX7s");let f,g=e=>e;const{stablePrefix:y}=s.a;Object(o.a)([Object(c.c)(`${y}-card-cta-image`)],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"get",static:!0,key:"styles",value:function(){return Object(c.b)(f||(f=g`${0}${0}`),Object(r.a)(Object(n.a)(a),"styles",this),p.a)}}]}}),v.a);var k=a("XfVf"),O=a("gsxF"),j=(a("2Xsx"),a("RQ6T"));let $,_,T,C=e=>e;const{prefix:P}=d.a,{stablePrefix:x}=s.a;var S=Object(o.a)([Object(c.c)(`${x}-card-cta`)],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"method",key:"_renderHeading",value:function(){const{ctaType:e,videoName:t,formatVideoCaption:i}=this;if(e!==j.a.VIDEO)return Object(r.a)(Object(n.a)(a.prototype),"_renderHeading",this).call(this);const o=i({name:t});return this.dispatchEvent(new CustomEvent(this.constructor.eventVideoTitleUpdated,{bubbles:!0,composed:!0})),Object(c.d)($||($=C`
      <slot name="heading"></slot><dds-card-heading>${0}</dds-card-heading>
    `),o)}},{kind:"method",key:"_renderImage",value:function(){const{ctaType:e,videoName:t,videoThumbnailUrl:a,thumbnail:i,_hasImage:o,noPoster:r}=this,n=o||e!==j.a.VIDEO||r?void 0:Object(c.d)(_||(_=C`
            <dds-card-cta-image
              class="${0}--card__video-thumbnail"
              alt="${0}"
              default-src="${0}"
            >
              ${0}
            </dds-card-cta-image>
          `),P,Object(l.a)(t),Object(l.a)(i||a),Object(u.a)({slot:"icon"}));return Object(c.d)(T||(T=C`
      <slot name="image" @slotchange="${0}"></slot>${0}
    `),this._handleSlotChange,n)}},{kind:"field",decorators:[Object(c.e)({reflect:!0,attribute:"cta-type"})],key:"ctaType",value:()=>j.a.REGULAR},{kind:"field",decorators:[Object(c.e)({attribute:!1})],key:"formatVideoCaption",value:()=>h},{kind:"field",decorators:[Object(c.e)({attribute:!1})],key:"formatVideoDuration",value:void 0},{kind:"field",decorators:[Object(c.e)({type:Number,attribute:"video-duration"})],key:"videoDuration",value:void 0},{kind:"field",decorators:[Object(c.e)({attribute:"video-name"})],key:"videoName",value:void 0},{kind:"field",decorators:[Object(c.e)({attribute:"video-description"})],key:"videoDescription",value:void 0},{kind:"field",decorators:[Object(c.e)({attribute:"video-thumbnail-url"})],key:"videoThumbnailUrl",value:void 0},{kind:"field",decorators:[Object(c.e)({reflect:!0,attribute:"thumbnail"})],key:"thumbnail",value:void 0},{kind:"field",decorators:[Object(c.e)({type:Boolean,reflect:!0,attribute:"no-poster"})],key:"noPoster",value:()=>!1},{kind:"method",key:"updated",value:function(e){Object(r.a)(Object(n.a)(a.prototype),"updated",this).call(this,e);const t=this.querySelector(this.constructor.selectorFooter);if(e.has("ctaType")||e.has("formatCaption")||e.has("formatDuration")||e.has("videoDuration")||e.has("videoName")){var i;const{ctaType:e,videoDuration:a,videoName:o,videoDescription:r,formatVideoCaption:n,formatVideoDuration:c}=this,d=null===(i=this.querySelector(`${x}-card-heading`))||void 0===i?void 0:i.textContent,s=this.textContent;if(t){const i=o||d||s;let l="";void 0!==a&&(l=`, DURATION ${b.a.getMediaDurationFormatted(a,!1)}`),t.altAriaLabel=`${i}${l}`,t.ctaType=e,t.videoDuration=a,t.videoName=o,t.videoDescription=r,n&&(t.formatVideoCaption=n),c&&(t.formatVideoDuration=c)}}}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${x}--card-cta`}},{kind:"get",static:!0,key:"eventVideoTitleUpdated",value:function(){return`${x}-card-cta-video-title-updated`}},{kind:"get",static:!0,key:"selectorFooter",value:function(){return`${x}-card-cta-footer`}},{kind:"field",static:!0,key:"styles",value:()=>p.a}]}}),Object(O.a)(Object(k.a)(m.a))),D=a("iZHX"),N=a("17x9"),E=a.n(N),V=(d.a.prefix,s.a.stablePrefix),I=Object.assign({},i.descriptor,{ctaType:{attribute:"cta-type"},formatVideoCaption:{attribute:!1},formatVideoDuration:{attribute:!1},videoDuration:{serialize:D.c,attribute:"video-duration"},videoName:{attribute:"video-name"},videoDescription:{attribute:"video-description"},videoThumbnailUrl:{attribute:"video-thumbnail-url"},thumbnail:{attribute:"thumbnail"},noPoster:{serialize:D.a,attribute:"no-poster"},onVideoTitleUpdated:{event:"".concat(V,"-card-cta-video-title-updated")}}),R=Object.assign({},i.propTypes,{ctaType:E.a.string,formatVideoCaption:E.a.string,formatVideoDuration:E.a.string,videoDuration:E.a.number,videoName:E.a.string,videoDescription:E.a.string,videoThumbnailUrl:E.a.string,thumbnail:E.a.string,noPoster:E.a.bool,onVideoTitleUpdated:E.a.func});const w=Object(D.b)("".concat(V,"-card-cta"),I);w.propTypes=R;var L=a("ljsJ"),J=(a("IBma"),a("eaEr")),U=a("JAt+");let q,B,F,X=e=>e;const{prefix:H}=d.a,{stablePrefix:A}=L.a;var z=Object(o.a)([Object(c.c)(`${A}-card-in-card`)],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"method",key:"_renderImage",value:function(){const{ctaType:e,videoName:t,videoThumbnailUrl:a,thumbnail:i,_hasImage:o}=this,r=o||e!==j.a.VIDEO?void 0:Object(c.d)(q||(q=X`
            <dds-card-in-card-image alt="${0}" default-src="${0}">
              ${0}
            </dds-card-in-card-image>
          `),Object(l.a)(t),Object(l.a)(i||a),Object(u.a)({slot:"icon"}));return Object(c.d)(B||(B=X`
      <slot name="image" @slotchange="${0}"></slot>${0}
    `),this._handleSlotChange,r)}},{kind:"method",key:"updated",value:function(e){var t,i,o;Object(r.a)(Object(n.a)(a.prototype),"updated",this).call(this,e);const{_linkNode:c}=this;c&&c.classList.add(`${H}--card-in-card`);const d=this.querySelector(`${A}-card-in-card-image`),s=null===(t=this.parentElement)||void 0===t||null===(i=t.querySelector(`${A}-card-in-card`))||void 0===i||null===(o=i.shadowRoot)||void 0===o?void 0:o.querySelector("dds-card-in-card-image");(d||s)&&((d||s).onclick=()=>{var e,t,a;return null===(e=this.querySelector(`${A}-card-cta-footer`))||void 0===e||null===(t=e.shadowRoot)||void 0===t||null===(a=t.querySelector("a"))||void 0===a?void 0:a.click()})}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${A}--card-in-card`}},{kind:"get",static:!0,key:"styles",value:function(){return Object(c.b)(F||(F=X`${0}${0}`),Object(r.a)(Object(n.a)(a),"styles",this),J.a)}}]}}),Object(U.a)(S)),M=(d.a.prefix,s.a.stablePrefix),Q=Object.assign({},I,{}),Z=Object.assign({},R,{});const G=Object(D.b)("".concat(M,"-card-in-card"),Q);G.propTypes=Z;t.default=G},TJic:function(e,t,a){"use strict";var i=a("XLRp"),o=a("ReuC"),r=a("foSv"),n=a("CQbg"),c=a("9a1i"),d=a("fyJ3"),s=a("h86B"),l=a("ljsJ"),u=a("iZPr"),h=a("JAt+"),b=a("cNcK");let m;!function(e){e.TOP="top",e.BOTTOM="bottom"}(m||(m={}));let v,p,f,g,y,k,O,j,$,_,T=e=>e;const{prefix:C}=c.a,{stablePrefix:P}=l.a,x={image:"_hasImage",pictogram:"_hasPictogram"};let S=Object(i.a)([Object(n.c)(`${P}-card`)],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[Object(n.h)()],key:"_hasImage",value:()=>!1},{kind:"field",decorators:[Object(n.h)()],key:"_hasCopy",value:()=>!1},{kind:"field",decorators:[Object(n.h)()],key:"_hasPictogram",value:()=>!1},{kind:"method",key:"_handleSlotChange",value:function({target:e}){const{pictogramPlacement:t}=this,{dataset:a,name:i}=e,{pictogramPlacement:o}=a;if(!o||o===t){const t=e.assignedNodes().some((e=>e.nodeType!==Node.TEXT_NODE||e.textContent.trim()));this[x[i]||"_hasCopy"]=t}}},{kind:"method",key:"_renderHeading",value:function(){return Object(n.d)(v||(v=T`
      <slot name="heading"></slot>
    `))}},{kind:"method",key:"_handleCopySlotChange",value:function({target:e}){const{pictogramPlacement:t}=this,{dataset:a,name:i}=e,{pictogramPlacement:o}=a;if(!this._hasCopy&&!o||o===t){const t=e.assignedNodes().some((e=>e.nodeType!==Node.TEXT_NODE||e.textContent.trim()));this[x[i]||"_hasCopy"]=t}}},{kind:"method",key:"_renderCopy",value:function(){const{_hasCopy:e}=this;return Object(n.d)(p||(p=T`
      <div ?hidden="${0}" class="${0}--card__copy">
        <slot @slotchange="${0}"></slot>
      </div>
    `),!e,C,this._handleCopySlotChange)}},{kind:"method",key:"_renderImage",value:function(){return Object(n.d)(f||(f=T`
      <slot name="image" @slotchange="${0}"></slot>
    `),this._handleSlotChange)}},{kind:"method",key:"_renderDisabledLink",value:function(){const{_classes:e}=this;return Object(n.d)(g||(g=T`
      <div id="link" class="${0}">${0}</div>
    `),e,this._renderInner())}},{kind:"method",key:"_renderInner",value:function(){const{_handleSlotChange:e,_hasPictogram:t,_hasCopy:a}=this;return Object(n.d)(y||(y=T`
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
    `),this._renderImage(),C,t?`${C}--card__pictogram`:"",t&&a?`${C}--card__motion`:"",C,t?"":Object(n.d)(k||(k=T`
                <slot name="eyebrow"></slot>
              `)),this.pictogramPlacement===m.TOP?Object(n.d)(O||(O=T`
                <slot
                  name="pictogram"
                  data-pictogram-placement="${0}"
                  @slotchange="${0}"
                ></slot>
              `),m.TOP,e):"",this.pictogramPlacement===m.TOP&&t?null:this._renderHeading(),this.pictogramPlacement!==m.BOTTOM&&t?"":this._renderCopy(),this.pictogramPlacement===m.BOTTOM?Object(n.d)(j||(j=T`
                <slot
                  name="pictogram"
                  data-pictogram-placement="${0}"
                  @slotchange="${0}"
                ></slot>
              `),m.BOTTOM,e):"",t&&this.pictogramPlacement===m.TOP?this._renderHeading():null,t&&this.pictogramPlacement===m.TOP?this._renderCopy():"")}},{kind:"field",decorators:[Object(n.e)({type:Boolean,reflect:!0})],key:"border",value:()=>!1},{kind:"field",decorators:[Object(n.e)({attribute:"color-scheme",reflect:!0})],key:"colorScheme",value:()=>u.a.REGULAR},{kind:"field",decorators:[Object(n.e)()],key:"href",value:()=>""},{kind:"field",decorators:[Object(n.e)({attribute:"pictogram-placement",reflect:!0})],key:"pictogramPlacement",value:()=>m.TOP},{kind:"field",decorators:[Object(n.e)({type:Boolean,reflect:!0})],key:"logo",value:()=>!1},{kind:"method",key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open",delegatesFocus:!1})}},{kind:"field",decorators:[Object(n.f)("div")],key:"_linkNode",value:void 0},{kind:"method",key:"updated",value:function(e){Object(o.a)(Object(r.a)(a.prototype),"updated",this).call(this,e);const{colorScheme:t,href:i,_linkNode:n}=this;if(e.has("colorScheme")||e.has("href")){var c;const e=null===(c=this.querySelector(`${P}-card-heading`))||void 0===c?void 0:c.textContent,a=this.textContent,o=this.querySelector(this.constructor.selectorFooter);o&&i&&(o.colorScheme=t,o.parentHref=i,o.href=i,o.altAriaLabel=e||a)}n&&(n.classList.add(`${C}--tile`),n.classList.add(`${C}--card`),n.classList.toggle(`${C}--tile--clickable`,Boolean(i)),n.classList.toggle(`${C}--card--link`,Boolean(i)),n.classList.toggle(`${C}--card--inverse`,t===u.a.INVERSE)),this._hasPictogram&&(this.onclick=()=>window.open(this.href,"_self"));const d=this.querySelector("p");var l;this._hasCopy&&(null===d||void 0===d?void 0:d.innerText)&&(d.innerHTML=`${Object(s.a)(null===d||void 0===d?void 0:d.innerText,{bold:!1})}`,null===(l=d.firstElementChild)||void 0===l||l.setAttribute("style","all:unset;"))}},{kind:"method",key:"render",value:function(){var e;return this._hasPictogram?Object(n.d)($||($=T`
          <div
            tabindex="0"
            aria-label="${0}"
            aria-live="polite"
            aria-describedby="${0}--card__copy"
            role="button"
          >
            ${0}
          </div>
        `),(null===(e=this.querySelector(`${P}-card-heading`))||void 0===e?void 0:e.textContent)||"",C,this._renderInner()):Object(n.d)(_||(_=T`
          <div>${0}</div>
        `),this._renderInner())}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${P}--card`}},{kind:"get",static:!0,key:"selectorFooter",value:function(){return`${P}-card-footer`}},{kind:"field",static:!0,key:"styles",value:()=>b.a}]}}),Object(h.a)(d.b));t.a=S},Xdd8:function(e,t,a){"use strict";a.r(t),a.d(t,"descriptor",(function(){return u})),a.d(t,"propTypes",(function(){return h}));var i=a("0e4H"),o=a("TJic");a.d(t,"CustomElement",(function(){return o.a}));var r=a("iZHX"),n=a("17x9"),c=a.n(n),d=a("9a1i"),s=a("OT8j"),l=(d.a.prefix,s.a.stablePrefix),u=Object.assign({},i.a,{border:{serialize:r.a},colorScheme:{attribute:"color-scheme"},href:{},pictogramPlacement:{attribute:"pictogram-placement"},logo:{serialize:r.a}}),h=Object.assign({},i.b,{border:c.a.bool,colorScheme:c.a.string,href:c.a.string,pictogramPlacement:c.a.string,logo:c.a.bool});const b=Object(r.b)("".concat(l,"-card"),u);b.propTypes=h,t.default=b}}]);