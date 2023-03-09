"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7710],{2984:function(e,t,r){r.r(t),r.d(t,{CustomElement:function(){return o.Z},descriptor:function(){return c},propTypes:function(){return h}});var o=r(5447),a=r(1976),i=r(5697),n=r.n(i),l=r(9033),d=r(8474);l.Z.prefix;var s=d.Z.stablePrefix,c={border:{serialize:a._P},colorScheme:{attribute:"color-scheme"},href:{},pictogramPlacement:{attribute:"pictogram-placement"},logo:{serialize:a._P}},h={border:n().bool,colorScheme:n().string,href:n().string,pictogramPlacement:n().string,logo:n().bool};let u=(0,a.ZP)("".concat(s,"-card"),c);u.propTypes=h,t.default=u},5447:function(e,t,r){r.d(t,{Z:function(){return B}});var o,a=r(6424),i=r(3237),n=r(1120),l=r(6254),d=r(9033),s=r(6812),c=r(9550),h=r(2658),u=r(5779),m=r(7670),g=r(3699);/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let p;(o=p||(p={})).TOP="top",o.BOTTOM="bottom";let y=e=>e,k,_,f,v,$,b,C,P,T,S,{prefix:O}=d.Z,{stablePrefix:Z}=h.Z,x={image:"_hasImage",pictogram:"_hasPictogram"};var B=(0,a.Z)([(0,l.Mo)(`${Z}-card`)],function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,l.SB)()],key:"_hasImage",value:()=>!1},{kind:"field",decorators:[(0,l.SB)()],key:"_hasCopy",value:()=>!1},{kind:"field",decorators:[(0,l.SB)()],key:"_hasPictogram",value:()=>!1},{kind:"method",key:"_handleSlotChange",value:function({target:e}){let{name:t}=e,r=e.assignedNodes().some(e=>e.nodeType!==Node.TEXT_NODE||e.textContent.trim());this[x[t]]=r,this._hasCopy=r}},{kind:"method",key:"_renderHeading",value:function(){return(0,l.dy)(k||(k=y` <slot name="heading"></slot> `))}},{kind:"method",key:"_renderCopy",value:function(){let{_hasCopy:e}=this;return(0,l.dy)(_||(_=y`
      <div ?hidden="${0}" class="${0}--card__copy">
        <slot @slotchange="${0}"></slot>
      </div>
    `),!e,O,this._handleSlotChange)}},{kind:"method",key:"_renderImage",value:function(){return(0,l.dy)(f||(f=y`
      <slot name="image" @slotchange="${0}"></slot>
    `),this._handleSlotChange)}},{kind:"method",key:"_renderDisabledLink",value:function(){let{_classes:e}=this;return(0,l.dy)(v||(v=y`
      <div id="link" class="${0}">${0}</div>
    `),e,this._renderInner())}},{kind:"method",key:"_renderInner",value:function(){let{_handleSlotChange:e,_hasPictogram:t,_hasCopy:r}=this;return(0,l.dy)($||($=y`
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
    `),this._renderImage(),O,t?`${O}--card__pictogram`:"",t&&r?`${O}--card__motion`:"",O,t?"":(0,l.dy)(b||(b=y` <slot name="eyebrow"></slot> `)),this.pictogramPlacement===p.TOP?(0,l.dy)(C||(C=y`
                <slot
                  name="pictogram"
                  data-pictogram-placement="${0}"
                  @slotchange="${0}"></slot>
              `),p.TOP,e):"",this.pictogramPlacement===p.TOP&&t?null:this._renderHeading(),this.pictogramPlacement!==p.BOTTOM&&t?"":this._renderCopy(),this.pictogramPlacement===p.BOTTOM?(0,l.dy)(P||(P=y`
                <slot
                  name="pictogram"
                  data-pictogram-placement="${0}"
                  @slotchange="${0}"></slot>
              `),p.BOTTOM,e):"",t&&this.pictogramPlacement===p.TOP?this._renderHeading():null,t&&this.pictogramPlacement===p.TOP?this._renderCopy():"")}},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,reflect:!0})],key:"border",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({attribute:"color-scheme",reflect:!0})],key:"colorScheme",value:()=>u.t.REGULAR},{kind:"field",decorators:[(0,l.Cb)()],key:"href",value:()=>""},{kind:"field",decorators:[(0,l.Cb)({attribute:"pictogram-placement",reflect:!0})],key:"pictogramPlacement",value:()=>""},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,reflect:!0})],key:"logo",value:()=>!1},{kind:"method",key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open",delegatesFocus:!1})}},{kind:"field",decorators:[(0,l.IO)("div")],key:"_linkNode",value:void 0},{kind:"method",key:"updated",value:function(e){var t,o;(0,i.Z)((0,n.Z)(r.prototype),"updated",this).call(this,e);let{colorScheme:a,href:l,_linkNode:d}=this;if(e.has("colorScheme")||e.has("href")){let s=null===(t=this.querySelector(`${Z}-card-heading`))||void 0===t?void 0:t.textContent,h=this.textContent,m=this.querySelector(this.constructor.selectorFooter);m&&l&&(m.colorScheme=a,m.parentHref=l,m.href=l,m.altAriaLabel=s||h)}d&&(d.classList.add(`${O}--tile`),d.classList.add(`${O}--card`),d.classList.toggle(`${O}--tile--clickable`,Boolean(l)),d.classList.toggle(`${O}--card--link`,Boolean(l)),d.classList.toggle(`${O}--card--inverse`,a===u.t.INVERSE)),this._hasPictogram&&(this.onclick=()=>window.open(this.href,"_self"));let g=this.querySelector("p");this._hasCopy&&null!=g&&g.innerText&&(g.innerHTML=`${(0,c.Z)(null==g?void 0:g.innerText,{bold:!1})}`,null===(o=g.firstElementChild)||void 0===o||o.setAttribute("style","all:unset;"))}},{kind:"method",key:"render",value:function(){var e;return this._hasPictogram?(0,l.dy)(T||(T=y`
          <div
            tabindex="0"
            aria-label="${0}"
            aria-live="polite"
            aria-describedby="${0}--card__copy"
            role="button">
            ${0}
          </div>
        `),(null===(e=this.querySelector(`${Z}-card-heading`))||void 0===e?void 0:e.textContent)||"",O,this._renderInner()):(0,l.dy)(S||(S=y` <div>${0}</div> `),this._renderInner())}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${Z}--card`}},{kind:"get",static:!0,key:"selectorFooter",value:function(){return`${Z}-card-footer`}},{kind:"field",static:!0,key:"styles",value:()=>g.Z}]}},(0,m.Z)(s.Z))}}]);