"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7710],{7909:function(e,t,n){var o=n(9238),a=n.n(o),i=n(7441),r=n(9033),c=n(3726),l=n.n(c),s=r.Z.prefix,d=/\n|\s{2,}|&;/g,h=function(e){return e.replace(d," ")};t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.allowHtml,o=void 0!==n&&n,r=t.renderer,c=void 0===r?{}:r,d=t.customTags,u=o?e:l()(e),m={link:function(e,t,n){var o=t?'title="'.concat(t,'"'):null;return'<a class="'.concat(s,"--link ").concat(s,'--link--lg" href="').concat(e,'" ').concat(o,">").concat(n,"</a>")},list:function(e,t){var n=t?"ol":"ul",o="".concat(s,t?"--list--ordered":"--list--unordered");return"<".concat(n,' class="').concat(o,'">').concat(e,"</").concat(n,">")},listitem:function(e){return'<li class="'.concat(s,'--list__item">').concat(e,"</li>")}};i.TU.use({smartypants:!0,renderer:Object.assign(m,c)}),d&&a().addHook("uponSanitizeElement",(function(e,t){var n=t.allowedTags,o=t.tagName;d.has(o)&&!n[o]&&(n[o]=!0)}));var g=a().sanitize((0,i.TU)(u));return d&&a().removeHook("uponSanitizeElement"),h(g)}},2984:function(e,t,n){n.r(t),n.d(t,{CustomElement:function(){return a.Z},descriptor:function(){return h},propTypes:function(){return u}});var o=n(9697),a=n(5447),i=n(7921),r=n(5697),c=n.n(r),l=n(9033),s=n(8474),d=(l.Z.prefix,s.Z.stablePrefix),h=Object.assign({},o.qI,{border:{serialize:i._P},colorScheme:{attribute:"color-scheme"},href:{},pictogramPlacement:{attribute:"pictogram-placement"},logo:{serialize:i._P}}),u=Object.assign({},o.iG,{border:c().bool,colorScheme:c().string,href:c().string,pictogramPlacement:c().string,logo:c().bool});const m=(0,i.ZP)("".concat(d,"-card"),h);m.propTypes=u,t.default=m},5447:function(e,t,n){n.d(t,{Z:function(){return x}});var o=n(6424),a=n(3237),i=n(1120),r=n(6254),c=n(9033),l=n(6727),s=n(7909),d=n(2658),h=n(5779),u=n(7670),m=n(3699);let g;!function(e){e.TOP="top",e.BOTTOM="bottom"}(g||(g={}));let p,f,v,y,k,_,$,b,C,P,T=e=>e;const{prefix:S}=c.Z,{stablePrefix:O}=d.Z,Z={image:"_hasImage",pictogram:"_hasPictogram"};var x=(0,o.Z)([(0,r.Mo)(`${O}-card`)],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[(0,r.SB)()],key:"_hasImage",value:()=>!1},{kind:"field",decorators:[(0,r.SB)()],key:"_hasCopy",value:()=>!1},{kind:"field",decorators:[(0,r.SB)()],key:"_hasPictogram",value:()=>!1},{kind:"method",key:"_handleSlotChange",value:function({target:e}){const{pictogramPlacement:t}=this,{dataset:n,name:o}=e,{pictogramPlacement:a}=n;if(!a||a===t){const t=e.assignedNodes().some((e=>e.nodeType!==Node.TEXT_NODE||e.textContent.trim()));this[Z[o]||"_hasCopy"]=t}}},{kind:"method",key:"_renderHeading",value:function(){return(0,r.dy)(p||(p=T`
      <slot name="heading"></slot>
    `))}},{kind:"method",key:"_handleCopySlotChange",value:function({target:e}){const{pictogramPlacement:t}=this,{dataset:n,name:o}=e,{pictogramPlacement:a}=n;if(!this._hasCopy&&!a||a===t){const t=e.assignedNodes().some((e=>e.nodeType!==Node.TEXT_NODE||e.textContent.trim()));this[Z[o]||"_hasCopy"]=t}}},{kind:"method",key:"_renderCopy",value:function(){const{_hasCopy:e}=this;return(0,r.dy)(f||(f=T`
      <div ?hidden="${0}" class="${0}--card__copy">
        <slot @slotchange="${0}"></slot>
      </div>
    `),!e,S,this._handleCopySlotChange)}},{kind:"method",key:"_renderImage",value:function(){return(0,r.dy)(v||(v=T`
      <slot name="image" @slotchange="${0}"></slot>
    `),this._handleSlotChange)}},{kind:"method",key:"_renderDisabledLink",value:function(){const{_classes:e}=this;return(0,r.dy)(y||(y=T`
      <div id="link" class="${0}">${0}</div>
    `),e,this._renderInner())}},{kind:"method",key:"_renderInner",value:function(){const{_handleSlotChange:e,_hasPictogram:t,_hasCopy:n}=this;return(0,r.dy)(k||(k=T`
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
    `),this._renderImage(),S,t?`${S}--card__pictogram`:"",t&&n?`${S}--card__motion`:"",S,t?"":(0,r.dy)(_||(_=T`
                <slot name="eyebrow"></slot>
              `)),this.pictogramPlacement===g.TOP?(0,r.dy)($||($=T`
                <slot
                  name="pictogram"
                  data-pictogram-placement="${0}"
                  @slotchange="${0}"
                ></slot>
              `),g.TOP,e):"",this.pictogramPlacement===g.TOP&&t?null:this._renderHeading(),this.pictogramPlacement!==g.BOTTOM&&t?"":this._renderCopy(),this.pictogramPlacement===g.BOTTOM?(0,r.dy)(b||(b=T`
                <slot
                  name="pictogram"
                  data-pictogram-placement="${0}"
                  @slotchange="${0}"
                ></slot>
              `),g.BOTTOM,e):"",t&&this.pictogramPlacement===g.TOP?this._renderHeading():null,t&&this.pictogramPlacement===g.TOP?this._renderCopy():"")}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0})],key:"border",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({attribute:"color-scheme",reflect:!0})],key:"colorScheme",value:()=>h.t.REGULAR},{kind:"field",decorators:[(0,r.Cb)()],key:"href",value:()=>""},{kind:"field",decorators:[(0,r.Cb)({attribute:"pictogram-placement",reflect:!0})],key:"pictogramPlacement",value:()=>g.TOP},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0})],key:"logo",value:()=>!1},{kind:"method",key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open",delegatesFocus:!1})}},{kind:"field",decorators:[(0,r.IO)("div")],key:"_linkNode",value:void 0},{kind:"method",key:"updated",value:function(e){(0,a.Z)((0,i.Z)(n.prototype),"updated",this).call(this,e);const{colorScheme:t,href:o,_linkNode:r}=this;if(e.has("colorScheme")||e.has("href")){var c;const e=null===(c=this.querySelector(`${O}-card-heading`))||void 0===c?void 0:c.textContent,n=this.textContent,a=this.querySelector(this.constructor.selectorFooter);a&&o&&(a.colorScheme=t,a.parentHref=o,a.href=o,a.altAriaLabel=e||n)}r&&(r.classList.add(`${S}--tile`),r.classList.add(`${S}--card`),r.classList.toggle(`${S}--tile--clickable`,Boolean(o)),r.classList.toggle(`${S}--card--link`,Boolean(o)),r.classList.toggle(`${S}--card--inverse`,t===h.t.INVERSE)),this._hasPictogram&&(this.onclick=()=>window.open(this.href,"_self"));const l=this.querySelector("p");var d;this._hasCopy&&(null===l||void 0===l?void 0:l.innerText)&&(l.innerHTML=`${(0,s.Z)(null===l||void 0===l?void 0:l.innerText,{bold:!1})}`,null===(d=l.firstElementChild)||void 0===d||d.setAttribute("style","all:unset;"))}},{kind:"method",key:"render",value:function(){var e;return this._hasPictogram?(0,r.dy)(C||(C=T`
          <div
            tabindex="0"
            aria-label="${0}"
            aria-live="polite"
            aria-describedby="${0}--card__copy"
            role="button"
          >
            ${0}
          </div>
        `),(null===(e=this.querySelector(`${O}-card-heading`))||void 0===e?void 0:e.textContent)||"",S,this._renderInner()):(0,r.dy)(P||(P=T`
          <div>${0}</div>
        `),this._renderInner())}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${O}--card`}},{kind:"get",static:!0,key:"selectorFooter",value:function(){return`${O}-card-footer`}},{kind:"field",static:!0,key:"styles",value:()=>m.Z}]}}),(0,u.Z)(l.Z))}}]);