(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[63],{"254g":function(t,e,n){"use strict";n.r(e),n.d(e,"CustomElement",(function(){return g})),n.d(e,"descriptor",(function(){return S})),n.d(e,"propTypes",(function(){return x}));var o=n("a47h"),s=n("XLRp"),i=n("ReuC"),a=n("foSv"),d=n("CQbg"),c=n("4qtV"),r=n("9a1i"),l=n("ljsJ"),h=n("JAt+"),u=n("X94v"),_=n("+suV");let k,y,b,p,v,f,$=t=>t;const{prefix:j}=r.a,{stablePrefix:O}=l.a,C={action:"_hasAction","link-list":"_hasLinkList"};var g=Object(s.a)([Object(d.c)(`${O}-cta-block`)],(function(t,e){class n extends e{constructor(...e){super(...e),t(this)}}return{F:n,d:[{kind:"field",decorators:[Object(d.e)({type:Boolean,attribute:"no-border",reflect:!0})],key:"_noBorder",value:()=>!1},{kind:"field",decorators:[Object(d.h)()],key:"_hasAction",value:()=>!1},{kind:"field",decorators:[Object(d.h)()],key:"_hasLinkList",value:()=>!1},{kind:"method",key:"updated",value:function(t){if(t.has("_noBorder")){const t=this.shadowRoot.querySelector(`.${j}--content-layout`);null===t||void 0===t||t.classList.toggle(`${j}--content-layout--border`,!this._noBorder)}}},{kind:"method",key:"_hasBodyContent",value:function(){const{_hasLinkList:t,_hasAction:e}=this;return t||e||Object(i.a)(Object(a.a)(n.prototype),"_hasBodyContent",this).call(this)}},{kind:"method",key:"_handleSlotChange",value:function(t){const{target:e}=t,{name:o}=e;if(!C[o])return void Object(i.a)(Object(a.a)(n.prototype),"_handleSlotChange",this).call(this,t);const s=e.assignedNodes().some((t=>t.nodeType!==Node.TEXT_NODE||t.textContent.trim()));this[C[o]]=s}},{kind:"method",key:"_renderActions",value:function(){const{_hasAction:t,_handleSlotChange:e}=this;return Object(d.d)(k||(k=$`
      <div ?hidden="${0}" class="${0}--content-layout__cta">
        <slot name="action" @slotchange="${0}"></slot>
      </div>
    `),!t,j,e)}},{kind:"method",key:"_renderContent",value:function(){const{_hasAction:t,_hasCopy:e,_hasLinkList:n,_hasContent:o,_handleSlotChange:s}=this,i=Object(c.a)({[`${j}--helper-wrapper`]:!0,[`${j}--helper-wrapper--less-space`]:!t&&!e&&!n});return Object(d.d)(y||(y=$`
      <div ?hidden="${0}" class="${0}">
        <div class="${0}--content-item-wrapper">
          <slot @slotchange="${0}"></slot>
        </div>
      </div>
    `),!o,i,j,s)}},{kind:"method",key:"_renderBody",value:function(){const{_hasCopy:t,_hasAction:e,_hasLinkList:n,_hasContent:o}=this,s=Object(c.a)({[`${j}--content-layout__body`]:!0,[`${j}--content-layout__body--tight`]:!t&&!e&&(n||o)});return Object(d.d)(b||(b=$`
      <div ?hidden="${0}" class="${0}">
        ${0}${0}
      </div>
    `),!this._hasBodyContent(),s,this._renderCopy(),this._renderInnerBody())}},{kind:"method",key:"_renderCopy",value:function(){const{_hasCopy:t,_handleSlotChange:e}=this;return Object(d.d)(p||(p=$`
      <div ?hidden="${0}" class="${0}--content-layout__copy">
        <slot name="copy" @slotchange="${0}"></slot>
      </div>
    `),!t,j,e)}},{kind:"method",key:"_renderInnerBody",value:function(){return Object(d.d)(v||(v=$`
      ${0}${0}${0}
    `),this._renderActions(),this._renderLinkList(),this._renderContent())}},{kind:"method",key:"_renderLinkList",value:function(){const{_hasLinkList:t,_handleSlotChange:e}=this;return Object(d.d)(f||(f=$`
      <div ?hidden="${0}" class="${0}--content-layout__link-list">
        <slot name="link-list" @slotchange="${0}"></slot>
      </div>
    `),!t,j,e)}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${O}--cta-block`}},{kind:"field",static:!0,key:"styles",value:()=>u.a}]}}),Object(h.a)(_.a)),m=n("iZHX"),L=n("17x9"),B=n.n(L),w=n("OT8j"),A=(r.a.prefix,w.a.stablePrefix),S=Object.assign({},o.a,{_noBorder:{serialize:m.a,attribute:"no-border"}}),x=Object.assign({},o.b,{_noBorder:B.a.bool});const T=Object(m.b)("".concat(A,"-cta-block"),S);T.propTypes=x;e.default=T}}]);