"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2984,7710],{7909:function(e,t,n){var o=n(9238),r=n.n(o),i=n(7441),a=n(9033),l=n(3726),c=n.n(l),s=a.Z.prefix,d=/\n|\s{2,}|&;/g,u=function(e){return e.replace(d," ")};t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.allowHtml,o=void 0!==n&&n,a=t.renderer,l=void 0===a?{}:a,d=t.customTags,h=o?e:c()(e),g={link:function(e,t,n){var o=t?'title="'.concat(t,'"'):null;return'<a class="'.concat(s,"--link ").concat(s,'--link--lg" href="').concat(e,'" ').concat(o,">").concat(n,"</a>")},list:function(e,t){var n=t?"ol":"ul",o="".concat(s,t?"--list--ordered":"--list--unordered");return"<".concat(n,' class="').concat(o,'">').concat(e,"</").concat(n,">")},listitem:function(e){return'<li class="'.concat(s,'--list__item">').concat(e,"</li>")}};i.TU.use({smartypants:!0,renderer:Object.assign(g,l)}),d&&r().addHook("uponSanitizeElement",(function(e,t){var n=t.allowedTags,o=t.tagName;d.has(o)&&!n[o]&&(n[o]=!0)}));var m=r().sanitize((0,i.TU)(h));return d&&r().removeHook("uponSanitizeElement"),u(m)}},2984:function(e,t,n){n.r(t),n.d(t,{CustomElement:function(){return r.Z},descriptor:function(){return u},propTypes:function(){return h}});var o=n(9697),r=n(5447),i=n(7921),a=n(5697),l=n.n(a),c=n(9033),s=n(8474),d=(c.Z.prefix,s.Z.stablePrefix),u=Object.assign({},o.qI,{border:{serialize:i._P},colorScheme:{attribute:"color-scheme"},href:{},pictogramPlacement:{attribute:"pictogram-placement"},logo:{serialize:i._P}}),h=Object.assign({},o.iG,{border:l().bool,colorScheme:l().string,href:l().string,pictogramPlacement:l().string,logo:l().bool});const g=(0,i.ZP)("".concat(d,"-card"),u);g.propTypes=h,t.default=g},5447:function(e,t,n){n.d(t,{Z:function(){return E}});var o=n(6424),r=n(3237),i=n(1120),a=n(6254),l=n(9033),c=n(6727),s=n(7909),d=n(2658),u=n(5779),h=n(7670),g=n(3699);let m;!function(e){e.TOP="top",e.BOTTOM="bottom"}(m||(m={}));let f,p,v,k,y,_,$,b,T,P,C=e=>e;const{prefix:S}=l.Z,{stablePrefix:O}=d.Z,Z={image:"_hasImage",pictogram:"_hasPictogram"};var E=(0,o.Z)([(0,a.Mo)(`${O}-card`)],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[(0,a.SB)()],key:"_hasImage",value:()=>!1},{kind:"field",decorators:[(0,a.SB)()],key:"_hasCopy",value:()=>!1},{kind:"field",decorators:[(0,a.SB)()],key:"_hasPictogram",value:()=>!1},{kind:"method",key:"_handleSlotChange",value:function({target:e}){const{name:t}=e,n=e.assignedNodes().some((e=>e.nodeType!==Node.TEXT_NODE||e.textContent.trim()));this[Z[t]]=n,this._hasCopy=n}},{kind:"method",key:"_renderHeading",value:function(){return(0,a.dy)(f||(f=C` <slot name="heading"></slot> `))}},{kind:"method",key:"_renderCopy",value:function(){const{_hasCopy:e}=this;return(0,a.dy)(p||(p=C`
      <div ?hidden="${0}" class="${0}--card__copy">
        <slot @slotchange="${0}"></slot>
      </div>
    `),!e,S,this._handleSlotChange)}},{kind:"method",key:"_renderImage",value:function(){return(0,a.dy)(v||(v=C`
      <slot name="image" @slotchange="${0}"></slot>
    `),this._handleSlotChange)}},{kind:"method",key:"_renderDisabledLink",value:function(){const{_classes:e}=this;return(0,a.dy)(k||(k=C`
      <div id="link" class="${0}">${0}</div>
    `),e,this._renderInner())}},{kind:"method",key:"_renderInner",value:function(){const{_handleSlotChange:e,_hasPictogram:t,_hasCopy:n}=this;return(0,a.dy)(y||(y=C`
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
    `),this._renderImage(),S,t?`${S}--card__pictogram`:"",t&&n?`${S}--card__motion`:"",S,t?"":(0,a.dy)(_||(_=C` <slot name="eyebrow"></slot> `)),this.pictogramPlacement===m.TOP?(0,a.dy)($||($=C`
                <slot
                  name="pictogram"
                  data-pictogram-placement="${0}"
                  @slotchange="${0}"
                ></slot>
              `),m.TOP,e):"",this.pictogramPlacement===m.TOP&&t?null:this._renderHeading(),this.pictogramPlacement!==m.BOTTOM&&t?"":this._renderCopy(),this.pictogramPlacement===m.BOTTOM?(0,a.dy)(b||(b=C`
                <slot
                  name="pictogram"
                  data-pictogram-placement="${0}"
                  @slotchange="${0}"
                ></slot>
              `),m.BOTTOM,e):"",t&&this.pictogramPlacement===m.TOP?this._renderHeading():null,t&&this.pictogramPlacement===m.TOP?this._renderCopy():"")}},{kind:"field",decorators:[(0,a.Cb)({type:Boolean,reflect:!0})],key:"border",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)({attribute:"color-scheme",reflect:!0})],key:"colorScheme",value:()=>u.t.REGULAR},{kind:"field",decorators:[(0,a.Cb)()],key:"href",value:()=>""},{kind:"field",decorators:[(0,a.Cb)({attribute:"pictogram-placement",reflect:!0})],key:"pictogramPlacement",value:()=>""},{kind:"field",decorators:[(0,a.Cb)({type:Boolean,reflect:!0})],key:"logo",value:()=>!1},{kind:"method",key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open",delegatesFocus:!1})}},{kind:"field",decorators:[(0,a.IO)("div")],key:"_linkNode",value:void 0},{kind:"method",key:"updated",value:function(e){(0,r.Z)((0,i.Z)(n.prototype),"updated",this).call(this,e);const{colorScheme:t,href:o,_linkNode:a}=this;if(e.has("colorScheme")||e.has("href")){var l;const e=null===(l=this.querySelector(`${O}-card-heading`))||void 0===l?void 0:l.textContent,n=this.textContent,r=this.querySelector(this.constructor.selectorFooter);r&&o&&(r.colorScheme=t,r.parentHref=o,r.href=o,r.altAriaLabel=e||n)}a&&(a.classList.add(`${S}--tile`),a.classList.add(`${S}--card`),a.classList.toggle(`${S}--tile--clickable`,Boolean(o)),a.classList.toggle(`${S}--card--link`,Boolean(o)),a.classList.toggle(`${S}--card--inverse`,t===u.t.INVERSE)),this._hasPictogram&&(this.onclick=()=>window.open(this.href,"_self"));const c=this.querySelector("p");var d;this._hasCopy&&null!==c&&void 0!==c&&c.innerText&&(c.innerHTML=`${(0,s.Z)(null===c||void 0===c?void 0:c.innerText,{bold:!1})}`,null===(d=c.firstElementChild)||void 0===d||d.setAttribute("style","all:unset;"))}},{kind:"method",key:"render",value:function(){var e;return this._hasPictogram?(0,a.dy)(T||(T=C`
          <div
            tabindex="0"
            aria-label="${0}"
            aria-live="polite"
            aria-describedby="${0}--card__copy"
            role="button"
          >
            ${0}
          </div>
        `),(null===(e=this.querySelector(`${O}-card-heading`))||void 0===e?void 0:e.textContent)||"",S,this._renderInner()):(0,a.dy)(P||(P=C` <div>${0}</div> `),this._renderInner())}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${O}--card`}},{kind:"get",static:!0,key:"selectorFooter",value:function(){return`${O}-card-footer`}},{kind:"field",static:!0,key:"styles",value:()=>g.Z}]}}),(0,h.Z)(c.Z))},5779:function(e,t,n){let o,r;n.d(t,{t:function(){return o},T:function(){return r}}),function(e){e.REGULAR="",e.INVERSE="inverse"}(o||(o={})),function(e){e.LEFT="left",e.RIGHT="right"}(r||(r={}))},9697:function(e,t,n){n.d(t,{qI:function(){return l},iG:function(){return c}});n(6727);var o=n(7921),r=n(5697),i=n.n(r),a=n(3200).Z.prefix,l={disabled:{serialize:o._P},download:{},href:{},hreflang:{},linkRole:{attribute:"link-role"},ping:{},rel:{},size:{},target:{},type:{}},c={disabled:i().bool,download:i().string,href:i().string,hreflang:i().string,linkRole:i().string,ping:i().string,rel:i().string,size:i().string,target:i().string,type:i().string};const s=(0,o.ZP)("".concat(a,"-link"),l);s.propTypes=c}}]);