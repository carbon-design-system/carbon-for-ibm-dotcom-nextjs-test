"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1705],{7226:function(e,t,n){n.d(t,{qI:function(){return l}});n(2576),n(1660);var o=n(9117),r=n(5697),s=n.n(r),i=n(9033),a=n(8474),d=(i.Z.prefix,a.Z.stablePrefix),l={complementaryStyleScheme:{attribute:"complementary-style-scheme"}},c={complementaryStyleScheme:s().string};const h=(0,o.ZP)("".concat(d,"-content-block"),l);h.propTypes=c},2576:function(e,t,n){n.d(t,{A:function(){return o.A}});var o=n(8039)},1705:function(e,t,n){n.r(t),n.d(t,{CustomElement:function(){return b},default:function(){return w},descriptor:function(){return E},propTypes:function(){return R}});var o=n(7226),r=n(6424),s=n(3237),i=n(1120),a=n(6254),d=n(7499),l=n(9033),c=n(2658),h=n(7670),u=n(847),y=n(1660);let _,k,m,f,p,v,C=e=>e;const{prefix:$}=l.Z,{stablePrefix:g}=c.Z,S={action:"_hasAction","link-list":"_hasLinkList"};var b=(0,r.Z)([(0,a.Mo)(`${g}-cta-block`)],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[(0,a.Cb)({type:Boolean,attribute:"no-border",reflect:!0})],key:"_noBorder",value:()=>!1},{kind:"field",decorators:[(0,a.SB)()],key:"_hasAction",value:()=>!1},{kind:"field",decorators:[(0,a.SB)()],key:"_hasLinkList",value:()=>!1},{kind:"method",key:"updated",value:function(e){if(e.has("_noBorder")){const e=this.shadowRoot.querySelector(`.${$}--content-layout`);null===e||void 0===e||e.classList.toggle(`${$}--content-layout--border`,!this._noBorder)}}},{kind:"method",key:"_hasBodyContent",value:function(){const{_hasLinkList:e,_hasAction:t}=this;return e||t||(0,s.Z)((0,i.Z)(n.prototype),"_hasBodyContent",this).call(this)}},{kind:"method",key:"_handleSlotChange",value:function(e){const{target:t}=e,{name:o}=t;if(!S[o])return void(0,s.Z)((0,i.Z)(n.prototype),"_handleSlotChange",this).call(this,e);const r=t.assignedNodes().some((e=>e.nodeType!==Node.TEXT_NODE||e.textContent.trim()));this[S[o]]=r}},{kind:"method",key:"_renderActions",value:function(){const{_hasAction:e,_handleSlotChange:t}=this;return(0,a.dy)(_||(_=C`
      <div ?hidden="${0}" class="${0}--content-layout__cta">
        <slot name="action" @slotchange="${0}"></slot>
      </div>
    `),!e,$,t)}},{kind:"method",key:"_renderContent",value:function(){const{_hasAction:e,_hasCopy:t,_hasLinkList:n,_hasContent:o,_handleSlotChange:r}=this,s=(0,d.$)({[`${$}--helper-wrapper`]:!0,[`${$}--helper-wrapper--less-space`]:!e&&!t&&!n});return(0,a.dy)(k||(k=C`
      <div ?hidden="${0}" class="${0}">
        <div class="${0}--content-item-wrapper">
          <slot @slotchange="${0}"></slot>
        </div>
      </div>
    `),!o,s,$,r)}},{kind:"method",key:"_renderBody",value:function(){const{_hasCopy:e,_hasAction:t,_hasLinkList:n,_hasContent:o}=this,r=(0,d.$)({[`${$}--content-layout__body`]:!0,[`${$}--content-layout__body--tight`]:!e&&!t&&(n||o)});return(0,a.dy)(m||(m=C`
      <div ?hidden="${0}" class="${0}">
        ${0}${0}
      </div>
    `),!this._hasBodyContent(),r,this._renderCopy(),this._renderInnerBody())}},{kind:"method",key:"_renderCopy",value:function(){const{_hasCopy:e,_handleSlotChange:t}=this;return(0,a.dy)(f||(f=C`
      <div ?hidden="${0}" class="${0}--content-layout__copy">
        <slot name="copy" @slotchange="${0}"></slot>
      </div>
    `),!e,$,t)}},{kind:"method",key:"_renderInnerBody",value:function(){return(0,a.dy)(p||(p=C`
      ${0}${0}${0}
    `),this._renderActions(),this._renderLinkList(),this._renderContent())}},{kind:"method",key:"_renderLinkList",value:function(){const{_hasLinkList:e,_handleSlotChange:t}=this;return(0,a.dy)(v||(v=C`
      <div
        ?hidden="${0}"
        class="${0}--content-layout__link-list">
        <slot name="link-list" @slotchange="${0}"></slot>
      </div>
    `),!e,$,t)}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${g}--cta-block`}},{kind:"field",static:!0,key:"styles",value:()=>u.Z}]}}),(0,h.Z)(y.C)),B=n(9117),Z=n(5697),L=n.n(Z),A=n(8474),x=(l.Z.prefix,A.Z.stablePrefix),E=Object.assign({},o.qI,{_noBorder:{serialize:B._P,attribute:"no-border"}}),R={_noBorder:L().bool};const T=(0,B.ZP)("".concat(x,"-cta-block"),E);T.propTypes=R;var w=T},1660:function(e,t,n){var o=n(6424),r=n(7499),s=n(6254),i=n(9033),a=n(2658),d=n(8039),l=n(1216),c=n(7670);let h,u,y,_,k,m,f,p,v,C=e=>e;const{stablePrefix:$}=a.Z,{prefix:g}=i.Z,S={complementary:"_hasComplementary",copy:"_hasCopy",heading:"_hasHeading",footer:"_hasFooter",media:"_hasMedia"};let b=(0,o.Z)([(0,s.Mo)(`${$}-content-block`)],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.SB)()],key:"_hasComplementary",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_hasContent",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_hasHeading",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_hasCopy",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_hasFooter",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_hasMedia",value:()=>!1},{kind:"method",key:"_getContainerClasses",value:function(){const{complementaryStyleScheme:e,_hasComplementary:t}=this;return(0,r.$)({[`${g}--content-layout`]:!0,[`${g}--content-layout--with-complementary`]:t,[`${g}--layout--border`]:e===d.Z.WITH_BORDER})}},{kind:"method",key:"_hasBodyContent",value:function(){const{_hasContent:e,_hasCopy:t,_hasMedia:n,_hasFooter:o}=this;return e||t||n||o}},{kind:"method",key:"_handleSlotChange",value:function({target:e}){const{name:t}=e,n=e.assignedNodes().some((e=>e.nodeType!==Node.TEXT_NODE||e.textContent.trim()));this[S[t]||"_hasContent"]=n}},{kind:"method",key:"_renderBody",value:function(){return(0,s.dy)(h||(h=C`
      <div
        ?hidden="${0}"
        class="${0}--content-layout__body">
        ${0}${0}${0}
      </div>
    `),!this._hasBodyContent(),g,this._renderCopy(),this._renderInnerBody(),this._renderFooter())}},{kind:"method",key:"_renderContent",value:function(){const{_handleSlotChange:e}=this;return(0,s.dy)(u||(u=C` <slot @slotchange="${0}"></slot> `),e)}},{kind:"method",key:"_renderCopy",value:function(){const{_handleSlotChange:e}=this;return(0,s.dy)(y||(y=C` <slot name="copy" @slotchange="${0}"></slot> `),e)}},{kind:"method",key:"_renderFooter",value:function(){const{_hasFooter:e,_handleSlotChange:t}=this;return(0,s.dy)(_||(_=C`
      <div ?hidden="${0}">
        <slot name="footer" @slotchange="${0}"></slot>
      </div>
    `),!e,t)}},{kind:"method",key:"_renderHeading",value:function(){const{_handleSlotChange:e}=this;return(0,s.dy)(k||(k=C`
      <slot name="heading" @slotchange="${0}"></slot>
    `),e)}},{kind:"method",key:"_renderInnerBody",value:function(){return(0,s.dy)(m||(m=C` ${0}${0} `),this._renderContent(),this._renderMedia())}},{kind:"method",key:"_renderMedia",value:function(){const{_handleSlotChange:e}=this;return(0,s.dy)(f||(f=C` <slot name="media" @slotchange="${0}"></slot> `),e)}},{kind:"method",key:"_renderComplementary",value:function(){const{_handleSlotChange:e}=this;return(0,s.dy)(p||(p=C`
      <slot name="complementary" @slotchange="${0}"></slot>
    `),e)}},{kind:"field",decorators:[(0,s.Cb)({attribute:"complementary-style-scheme"})],key:"complementaryStyleScheme",value:()=>d.Z.REGULAR},{kind:"method",key:"render",value:function(){return(0,s.dy)(v||(v=C`
      <div class="${0}">
        ${0}${0}${0}
      </div>
    `),this._getContainerClasses(),this._renderHeading(),this._renderBody(),this._renderComplementary())}},{kind:"field",static:!0,key:"styles",value:()=>l.Z}]}}),(0,c.Z)(s.oi));t.C=b},8039:function(e,t,n){let o,r;n.d(t,{A:function(){return o},Z:function(){return r}}),function(e){e.SMALL="sm",e.REGULAR="md"}(o||(o={})),function(e){e.REGULAR="regular",e.WITH_BORDER="with-border"}(r||(r={}))}}]);