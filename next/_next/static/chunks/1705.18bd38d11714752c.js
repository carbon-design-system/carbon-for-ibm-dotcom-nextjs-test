"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1705],{7226:function(e,t,n){n.d(t,{qI:function(){return s}}),n(2576),n(1660);var o=n(1976),r=n(5697),d=n.n(r),i=n(9033),a=n(8474);i.Z.prefix;var l=a.Z.stablePrefix,s={complementaryStyleScheme:{attribute:"complementary-style-scheme"}},h={complementaryStyleScheme:d().string};let c=(0,o.ZP)("".concat(l,"-content-block"),s);c.propTypes=h},2576:function(e,t,n){n.d(t,{A:function(){return o.A}});var o=n(8039);/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ },1705:function(e,t,n){n.r(t),n.d(t,{CustomElement:function(){return b},default:function(){return w},descriptor:function(){return R},propTypes:function(){return T}});var o=n(7226),r=n(6424),d=n(3237),i=n(1120),a=n(6254),l=n(7499),s=n(9033),h=n(2658),c=n(7670),u=n(847),y=n(1660);let _=e=>e,k,m,f,v,p,$,{prefix:C}=s.Z,{stablePrefix:g}=h.Z,S={action:"_hasAction","link-list":"_hasLinkList"};var b=(0,r.Z)([(0,a.Mo)(`${g}-cta-block`)],function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[(0,a.Cb)({type:Boolean,attribute:"no-border",reflect:!0})],key:"_noBorder",value:()=>!1},{kind:"field",decorators:[(0,a.SB)()],key:"_hasAction",value:()=>!1},{kind:"field",decorators:[(0,a.SB)()],key:"_hasLinkList",value:()=>!1},{kind:"method",key:"updated",value:function(e){if(e.has("_noBorder")){let t=this.shadowRoot.querySelector(`.${C}--content-layout`);null==t||t.classList.toggle(`${C}--content-layout--border`,!this._noBorder)}}},{kind:"method",key:"_hasBodyContent",value:function(){let{_hasLinkList:e,_hasAction:t}=this;return e||t||(0,d.Z)((0,i.Z)(n.prototype),"_hasBodyContent",this).call(this)}},{kind:"method",key:"_handleSlotChange",value:function(e){let{target:t}=e,{name:o}=t;if(!S[o]){(0,d.Z)((0,i.Z)(n.prototype),"_handleSlotChange",this).call(this,e);return}let r=t.assignedNodes().some(e=>e.nodeType!==Node.TEXT_NODE||e.textContent.trim());this[S[o]]=r}},{kind:"method",key:"_renderActions",value:function(){let{_hasAction:e,_handleSlotChange:t}=this;return(0,a.dy)(k||(k=_`
      <div ?hidden="${0}" class="${0}--content-layout__cta">
        <slot name="action" @slotchange="${0}"></slot>
      </div>
    `),!e,C,t)}},{kind:"method",key:"_renderContent",value:function(){let{_hasAction:e,_hasCopy:t,_hasLinkList:n,_hasContent:o,_handleSlotChange:r}=this,d=(0,l.$)({[`${C}--helper-wrapper`]:!0,[`${C}--helper-wrapper--less-space`]:!e&&!t&&!n});return(0,a.dy)(m||(m=_`
      <div ?hidden="${0}" class="${0}">
        <div class="${0}--content-item-wrapper">
          <slot @slotchange="${0}"></slot>
        </div>
      </div>
    `),!o,d,C,r)}},{kind:"method",key:"_renderBody",value:function(){let{_hasCopy:e,_hasAction:t,_hasLinkList:n,_hasContent:o}=this,r=(0,l.$)({[`${C}--content-layout__body`]:!0,[`${C}--content-layout__body--tight`]:!e&&!t&&(n||o)});return(0,a.dy)(f||(f=_`
      <div ?hidden="${0}" class="${0}">
        ${0}${0}
      </div>
    `),!this._hasBodyContent(),r,this._renderCopy(),this._renderInnerBody())}},{kind:"method",key:"_renderCopy",value:function(){let{_hasCopy:e,_handleSlotChange:t}=this;return(0,a.dy)(v||(v=_`
      <div ?hidden="${0}" class="${0}--content-layout__copy">
        <slot name="copy" @slotchange="${0}"></slot>
      </div>
    `),!e,C,t)}},{kind:"method",key:"_renderInnerBody",value:function(){return(0,a.dy)(p||(p=_`
      ${0}${0}${0}
    `),this._renderActions(),this._renderLinkList(),this._renderContent())}},{kind:"method",key:"_renderLinkList",value:function(){let{_hasLinkList:e,_handleSlotChange:t}=this;return(0,a.dy)($||($=_`
      <div
        ?hidden="${0}"
        class="${0}--content-layout__link-list">
        <slot name="link-list" @slotchange="${0}"></slot>
      </div>
    `),!e,C,t)}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${g}--cta-block`}},{kind:"field",static:!0,key:"styles",value:()=>u.Z}]}},(0,c.Z)(y.C)),B=n(1976),Z=n(5697),L=n.n(Z),A=n(8474);s.Z.prefix;var E=A.Z.stablePrefix,R=Object.assign({},o.qI,{_noBorder:{serialize:B._P,attribute:"no-border"}}),T={_noBorder:L().bool};let x=(0,B.ZP)("".concat(E,"-cta-block"),R);x.propTypes=T;var w=x},1660:function(e,t,n){var o=n(6424),r=n(7499),d=n(6254),i=n(9033),a=n(2658),l=n(8039),s=n(1216),h=n(7670);let c=e=>e,u,y,_,k,m,f,v,p,$,{stablePrefix:C}=a.Z,{prefix:g}=i.Z,S={complementary:"_hasComplementary",copy:"_hasCopy",heading:"_hasHeading",footer:"_hasFooter",media:"_hasMedia"},b=(0,o.Z)([(0,d.Mo)(`${C}-content-block`)],function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,d.SB)()],key:"_hasComplementary",value:()=>!1},{kind:"field",decorators:[(0,d.SB)()],key:"_hasContent",value:()=>!1},{kind:"field",decorators:[(0,d.SB)()],key:"_hasHeading",value:()=>!1},{kind:"field",decorators:[(0,d.SB)()],key:"_hasCopy",value:()=>!1},{kind:"field",decorators:[(0,d.SB)()],key:"_hasFooter",value:()=>!1},{kind:"field",decorators:[(0,d.SB)()],key:"_hasMedia",value:()=>!1},{kind:"method",key:"_getContainerClasses",value:function(){let{complementaryStyleScheme:e,_hasComplementary:t}=this;return(0,r.$)({[`${g}--content-layout`]:!0,[`${g}--content-layout--with-complementary`]:t,[`${g}--layout--border`]:e===l.Z.WITH_BORDER})}},{kind:"method",key:"_hasBodyContent",value:function(){let{_hasContent:e,_hasCopy:t,_hasMedia:n,_hasFooter:o}=this;return e||t||n||o}},{kind:"method",key:"_handleSlotChange",value:function({target:e}){let{name:t}=e,n=e.assignedNodes().some(e=>e.nodeType!==Node.TEXT_NODE||e.textContent.trim());this[S[t]||"_hasContent"]=n}},{kind:"method",key:"_renderBody",value:function(){return(0,d.dy)(u||(u=c`
      <div
        ?hidden="${0}"
        class="${0}--content-layout__body">
        ${0}${0}${0}
      </div>
    `),!this._hasBodyContent(),g,this._renderCopy(),this._renderInnerBody(),this._renderFooter())}},{kind:"method",key:"_renderContent",value:function(){let{_handleSlotChange:e}=this;return(0,d.dy)(y||(y=c` <slot @slotchange="${0}"></slot> `),e)}},{kind:"method",key:"_renderCopy",value:function(){let{_handleSlotChange:e}=this;return(0,d.dy)(_||(_=c` <slot name="copy" @slotchange="${0}"></slot> `),e)}},{kind:"method",key:"_renderFooter",value:function(){let{_hasFooter:e,_handleSlotChange:t}=this;return(0,d.dy)(k||(k=c`
      <div ?hidden="${0}">
        <slot name="footer" @slotchange="${0}"></slot>
      </div>
    `),!e,t)}},{kind:"method",key:"_renderHeading",value:function(){let{_handleSlotChange:e}=this;return(0,d.dy)(m||(m=c`
      <slot name="heading" @slotchange="${0}"></slot>
    `),e)}},{kind:"method",key:"_renderInnerBody",value:function(){return(0,d.dy)(f||(f=c` ${0}${0} `),this._renderContent(),this._renderMedia())}},{kind:"method",key:"_renderMedia",value:function(){let{_handleSlotChange:e}=this;return(0,d.dy)(v||(v=c` <slot name="media" @slotchange="${0}"></slot> `),e)}},{kind:"method",key:"_renderComplementary",value:function(){let{_handleSlotChange:e}=this;return(0,d.dy)(p||(p=c`
      <slot name="complementary" @slotchange="${0}"></slot>
    `),e)}},{kind:"field",decorators:[(0,d.Cb)({attribute:"complementary-style-scheme"})],key:"complementaryStyleScheme",value:()=>l.Z.REGULAR},{kind:"method",key:"render",value:function(){return(0,d.dy)($||($=c`
      <div class="${0}">
        ${0}${0}${0}
      </div>
    `),this._getContainerClasses(),this._renderHeading(),this._renderBody(),this._renderComplementary())}},{kind:"field",static:!0,key:"styles",value:()=>s.Z}]}},(0,h.Z)(d.oi));t.C=b},8039:function(e,t,n){var o,r;n.d(t,{A:function(){return d},Z:function(){return i}});/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let d;(o=d||(d={})).SMALL="sm",o.REGULAR="md";let i;(r=i||(i={})).REGULAR="regular",r.WITH_BORDER="with-border"}}]);