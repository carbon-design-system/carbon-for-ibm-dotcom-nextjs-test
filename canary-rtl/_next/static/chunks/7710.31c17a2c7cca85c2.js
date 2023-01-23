"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7710],{7909:function(e,t,n){var o=n(9238),r=n.n(o),a=n(7441),i=n(9033),c=n(3726),l=n.n(c),s=i.Z.prefix,d=/\n|\s{2,}|&;/g,u=function(e){return e.replace(d," ")};t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.allowHtml,o=void 0!==n&&n,i=t.renderer,c=void 0===i?{}:i,d=t.customTags,h=o?e:l()(e),m={link:function(e,t,n){var o=t?'title="'.concat(t,'"'):null;return'<a class="'.concat(s,"--link ").concat(s,'--link--lg" href="').concat(e,'" ').concat(o,">").concat(n,"</a>")},list:function(e,t){var n=t?"ol":"ul",o="".concat(s,t?"--list--ordered":"--list--unordered");return"<".concat(n,' class="').concat(o,'">').concat(e,"</").concat(n,">")},listitem:function(e){return'<li class="'.concat(s,'--list__item">').concat(e,"</li>")}};a.TU.use({smartypants:!0,renderer:Object.assign(m,c)}),d&&r().addHook("uponSanitizeElement",(function(e,t){var n=t.allowedTags,o=t.tagName;d.has(o)&&!n[o]&&(n[o]=!0)}));var g=r().sanitize((0,a.TU)(h));return d&&r().removeHook("uponSanitizeElement"),u(g)}},2984:function(e,t,n){n.r(t),n.d(t,{CustomElement:function(){return o.Z},descriptor:function(){return d},propTypes:function(){return u}});var o=n(5447),r=n(1976),a=n(5697),i=n.n(a),c=n(9033),l=n(8474),s=(c.Z.prefix,l.Z.stablePrefix),d={border:{serialize:r._P},colorScheme:{attribute:"color-scheme"},href:{},pictogramPlacement:{attribute:"pictogram-placement"},logo:{serialize:r._P}},u={border:i().bool,colorScheme:i().string,href:i().string,pictogramPlacement:i().string,logo:i().bool};const h=(0,r.ZP)("".concat(s,"-card"),d);h.propTypes=u,t.default=h},5447:function(e,t,n){n.d(t,{Z:function(){return x}});var o=n(6424),r=n(3237),a=n(1120),i=n(6254),c=n(9033),l=n(6812),s=n(7909),d=n(2658),u=n(5779),h=n(7670),m=n(3699);let g;!function(e){e.TOP="top",e.BOTTOM="bottom"}(g||(g={}));let p,f,v,k,y,_,$,b,T,C,P=e=>e;const{prefix:S}=c.Z,{stablePrefix:O}=d.Z,Z={image:"_hasImage",pictogram:"_hasPictogram"};var x=(0,o.Z)([(0,i.Mo)(`${O}-card`)],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[(0,i.SB)()],key:"_hasImage",value:()=>!1},{kind:"field",decorators:[(0,i.SB)()],key:"_hasCopy",value:()=>!1},{kind:"field",decorators:[(0,i.SB)()],key:"_hasPictogram",value:()=>!1},{kind:"method",key:"_handleSlotChange",value:function({target:e}){const{name:t}=e,n=e.assignedNodes().some((e=>e.nodeType!==Node.TEXT_NODE||e.textContent.trim()));this[Z[t]]=n,this._hasCopy=n}},{kind:"method",key:"_renderHeading",value:function(){return(0,i.dy)(p||(p=P` <slot name="heading"></slot> `))}},{kind:"method",key:"_renderCopy",value:function(){const{_hasCopy:e}=this;return(0,i.dy)(f||(f=P`
      <div ?hidden="${0}" class="${0}--card__copy">
        <slot @slotchange="${0}"></slot>
      </div>
    `),!e,S,this._handleSlotChange)}},{kind:"method",key:"_renderImage",value:function(){return(0,i.dy)(v||(v=P`
      <slot name="image" @slotchange="${0}"></slot>
    `),this._handleSlotChange)}},{kind:"method",key:"_renderDisabledLink",value:function(){const{_classes:e}=this;return(0,i.dy)(k||(k=P`
      <div id="link" class="${0}">${0}</div>
    `),e,this._renderInner())}},{kind:"method",key:"_renderInner",value:function(){const{_handleSlotChange:e,_hasPictogram:t,_hasCopy:n}=this;return(0,i.dy)(y||(y=P`
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
    `),this._renderImage(),S,t?`${S}--card__pictogram`:"",t&&n?`${S}--card__motion`:"",S,t?"":(0,i.dy)(_||(_=P` <slot name="eyebrow"></slot> `)),this.pictogramPlacement===g.TOP?(0,i.dy)($||($=P`
                <slot
                  name="pictogram"
                  data-pictogram-placement="${0}"
                  @slotchange="${0}"></slot>
              `),g.TOP,e):"",this.pictogramPlacement===g.TOP&&t?null:this._renderHeading(),this.pictogramPlacement!==g.BOTTOM&&t?"":this._renderCopy(),this.pictogramPlacement===g.BOTTOM?(0,i.dy)(b||(b=P`
                <slot
                  name="pictogram"
                  data-pictogram-placement="${0}"
                  @slotchange="${0}"></slot>
              `),g.BOTTOM,e):"",t&&this.pictogramPlacement===g.TOP?this._renderHeading():null,t&&this.pictogramPlacement===g.TOP?this._renderCopy():"")}},{kind:"field",decorators:[(0,i.Cb)({type:Boolean,reflect:!0})],key:"border",value:()=>!1},{kind:"field",decorators:[(0,i.Cb)({attribute:"color-scheme",reflect:!0})],key:"colorScheme",value:()=>u.t.REGULAR},{kind:"field",decorators:[(0,i.Cb)()],key:"href",value:()=>""},{kind:"field",decorators:[(0,i.Cb)({attribute:"pictogram-placement",reflect:!0})],key:"pictogramPlacement",value:()=>""},{kind:"field",decorators:[(0,i.Cb)({type:Boolean,reflect:!0})],key:"logo",value:()=>!1},{kind:"method",key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open",delegatesFocus:!1})}},{kind:"field",decorators:[(0,i.IO)("div")],key:"_linkNode",value:void 0},{kind:"method",key:"updated",value:function(e){(0,r.Z)((0,a.Z)(n.prototype),"updated",this).call(this,e);const{colorScheme:t,href:o,_linkNode:i}=this;if(e.has("colorScheme")||e.has("href")){var c;const e=null===(c=this.querySelector(`${O}-card-heading`))||void 0===c?void 0:c.textContent,n=this.textContent,r=this.querySelector(this.constructor.selectorFooter);r&&o&&(r.colorScheme=t,r.parentHref=o,r.href=o,r.altAriaLabel=e||n)}i&&(i.classList.add(`${S}--tile`),i.classList.add(`${S}--card`),i.classList.toggle(`${S}--tile--clickable`,Boolean(o)),i.classList.toggle(`${S}--card--link`,Boolean(o)),i.classList.toggle(`${S}--card--inverse`,t===u.t.INVERSE)),this._hasPictogram&&(this.onclick=()=>window.open(this.href,"_self"));const l=this.querySelector("p");var d;this._hasCopy&&null!==l&&void 0!==l&&l.innerText&&(l.innerHTML=`${(0,s.Z)(null===l||void 0===l?void 0:l.innerText,{bold:!1})}`,null===(d=l.firstElementChild)||void 0===d||d.setAttribute("style","all:unset;"))}},{kind:"method",key:"render",value:function(){var e;return this._hasPictogram?(0,i.dy)(T||(T=P`
          <div
            tabindex="0"
            aria-label="${0}"
            aria-live="polite"
            aria-describedby="${0}--card__copy"
            role="button">
            ${0}
          </div>
        `),(null===(e=this.querySelector(`${O}-card-heading`))||void 0===e?void 0:e.textContent)||"",S,this._renderInner()):(0,i.dy)(C||(C=P` <div>${0}</div> `),this._renderInner())}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${O}--card`}},{kind:"get",static:!0,key:"selectorFooter",value:function(){return`${O}-card-footer`}},{kind:"field",static:!0,key:"styles",value:()=>m.Z}]}}),(0,h.Z)(l.Z))}}]);