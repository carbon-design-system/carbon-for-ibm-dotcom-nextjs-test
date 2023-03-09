"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2984,7710],{2984:function(e,t,r){r.r(t),r.d(t,{CustomElement:function(){return n.Z},descriptor:function(){return s},propTypes:function(){return u}});var n=r(5447),o=r(1976),i=r(5697),a=r.n(i),l=r(9033),d=r(8474);l.Z.prefix;var c=d.Z.stablePrefix,s={border:{serialize:o._P},colorScheme:{attribute:"color-scheme"},href:{},pictogramPlacement:{attribute:"pictogram-placement"},logo:{serialize:o._P}},u={border:a().bool,colorScheme:a().string,href:a().string,pictogramPlacement:a().string,logo:a().bool};let h=(0,o.ZP)("".concat(c,"-card"),s);h.propTypes=u,t.default=h},5447:function(e,t,r){r.d(t,{Z:function(){return I}});var n,o=r(6424),i=r(3237),a=r(1120),l=r(6254),d=r(9033),c=r(6812),s=r(9550),u=r(2658),h=r(5779),m=r(7670),f=r(3699);/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let p;(n=p||(p={})).TOP="top",n.BOTTOM="bottom";let g=e=>e,y,v,k,_,$,b,P,C,T,O,{prefix:S}=d.Z,{stablePrefix:Z}=u.Z,E={image:"_hasImage",pictogram:"_hasPictogram"};var I=(0,o.Z)([(0,l.Mo)(`${Z}-card`)],function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,l.SB)()],key:"_hasImage",value:()=>!1},{kind:"field",decorators:[(0,l.SB)()],key:"_hasCopy",value:()=>!1},{kind:"field",decorators:[(0,l.SB)()],key:"_hasPictogram",value:()=>!1},{kind:"method",key:"_handleSlotChange",value:function({target:e}){let{name:t}=e,r=e.assignedNodes().some(e=>e.nodeType!==Node.TEXT_NODE||e.textContent.trim());this[E[t]]=r,this._hasCopy=r}},{kind:"method",key:"_renderHeading",value:function(){return(0,l.dy)(y||(y=g` <slot name="heading"></slot> `))}},{kind:"method",key:"_renderCopy",value:function(){let{_hasCopy:e}=this;return(0,l.dy)(v||(v=g`
      <div ?hidden="${0}" class="${0}--card__copy">
        <slot @slotchange="${0}"></slot>
      </div>
    `),!e,S,this._handleSlotChange)}},{kind:"method",key:"_renderImage",value:function(){return(0,l.dy)(k||(k=g`
      <slot name="image" @slotchange="${0}"></slot>
    `),this._handleSlotChange)}},{kind:"method",key:"_renderDisabledLink",value:function(){let{_classes:e}=this;return(0,l.dy)(_||(_=g`
      <div id="link" class="${0}">${0}</div>
    `),e,this._renderInner())}},{kind:"method",key:"_renderInner",value:function(){let{_handleSlotChange:e,_hasPictogram:t,_hasCopy:r}=this;return(0,l.dy)($||($=g`
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
    `),this._renderImage(),S,t?`${S}--card__pictogram`:"",t&&r?`${S}--card__motion`:"",S,t?"":(0,l.dy)(b||(b=g` <slot name="eyebrow"></slot> `)),this.pictogramPlacement===p.TOP?(0,l.dy)(P||(P=g`
                <slot
                  name="pictogram"
                  data-pictogram-placement="${0}"
                  @slotchange="${0}"></slot>
              `),p.TOP,e):"",this.pictogramPlacement===p.TOP&&t?null:this._renderHeading(),this.pictogramPlacement!==p.BOTTOM&&t?"":this._renderCopy(),this.pictogramPlacement===p.BOTTOM?(0,l.dy)(C||(C=g`
                <slot
                  name="pictogram"
                  data-pictogram-placement="${0}"
                  @slotchange="${0}"></slot>
              `),p.BOTTOM,e):"",t&&this.pictogramPlacement===p.TOP?this._renderHeading():null,t&&this.pictogramPlacement===p.TOP?this._renderCopy():"")}},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,reflect:!0})],key:"border",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({attribute:"color-scheme",reflect:!0})],key:"colorScheme",value:()=>h.t.REGULAR},{kind:"field",decorators:[(0,l.Cb)()],key:"href",value:()=>""},{kind:"field",decorators:[(0,l.Cb)({attribute:"pictogram-placement",reflect:!0})],key:"pictogramPlacement",value:()=>""},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,reflect:!0})],key:"logo",value:()=>!1},{kind:"method",key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open",delegatesFocus:!1})}},{kind:"field",decorators:[(0,l.IO)("div")],key:"_linkNode",value:void 0},{kind:"method",key:"updated",value:function(e){var t,n;(0,i.Z)((0,a.Z)(r.prototype),"updated",this).call(this,e);let{colorScheme:o,href:l,_linkNode:d}=this;if(e.has("colorScheme")||e.has("href")){let c=null===(t=this.querySelector(`${Z}-card-heading`))||void 0===t?void 0:t.textContent,u=this.textContent,m=this.querySelector(this.constructor.selectorFooter);m&&l&&(m.colorScheme=o,m.parentHref=l,m.href=l,m.altAriaLabel=c||u)}d&&(d.classList.add(`${S}--tile`),d.classList.add(`${S}--card`),d.classList.toggle(`${S}--tile--clickable`,Boolean(l)),d.classList.toggle(`${S}--card--link`,Boolean(l)),d.classList.toggle(`${S}--card--inverse`,o===h.t.INVERSE)),this._hasPictogram&&(this.onclick=()=>window.open(this.href,"_self"));let f=this.querySelector("p");this._hasCopy&&null!=f&&f.innerText&&(f.innerHTML=`${(0,s.Z)(null==f?void 0:f.innerText,{bold:!1})}`,null===(n=f.firstElementChild)||void 0===n||n.setAttribute("style","all:unset;"))}},{kind:"method",key:"render",value:function(){var e;return this._hasPictogram?(0,l.dy)(T||(T=g`
          <div
            tabindex="0"
            aria-label="${0}"
            aria-live="polite"
            aria-describedby="${0}--card__copy"
            role="button">
            ${0}
          </div>
        `),(null===(e=this.querySelector(`${Z}-card-heading`))||void 0===e?void 0:e.textContent)||"",S,this._renderInner()):(0,l.dy)(O||(O=g` <div>${0}</div> `),this._renderInner())}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${Z}--card`}},{kind:"get",static:!0,key:"selectorFooter",value:function(){return`${Z}-card-footer`}},{kind:"field",static:!0,key:"styles",value:()=>f.Z}]}},(0,m.Z)(c.Z))},5779:function(e,t,r){var n,o;r.d(t,{T:function(){return a},t:function(){return i}});/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let i;(n=i||(i={})).REGULAR="",n.INVERSE="inverse";let a;(o=a||(a={})).LEFT="left",o.RIGHT="right"},3237:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(1120);function o(){return(o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=(0,n.Z)(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(arguments.length<3?e:r):i.value}}).apply(this,arguments)}}}]);