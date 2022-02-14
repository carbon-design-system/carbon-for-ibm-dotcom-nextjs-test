(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[65],{"254g":function(e,t,n){"use strict";n.r(t),n.d(t,"CustomElement",(function(){return O})),n.d(t,"descriptor",(function(){return L})),n.d(t,"propTypes",(function(){return w}));var o=n("a47h"),i=n("XLRp"),a=n("ReuC"),r=n("foSv"),s=n("CQbg"),c=n("9a1i"),d=n("OT8j"),l=n("JAt+"),h=n("X94v"),u=n("+suV");let k,b,_,p,f=e=>e;const{prefix:v}=c.a,{stablePrefix:y}=d.a,g={action:"_hasAction","link-list":"_hasLinkList"};var O=Object(i.a)([Object(s.c)(`${y}-cta-block`)],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[Object(s.e)({type:Boolean,attribute:"no-border",reflect:!0})],key:"_noBorder",value:()=>!1},{kind:"field",decorators:[Object(s.h)()],key:"_hasAction",value:()=>!1},{kind:"field",decorators:[Object(s.h)()],key:"_hasLinkList",value:()=>!1},{kind:"method",key:"updated",value:function(e){e.has("_noBorder")&&this.classList.toggle(`${v}--cta-block__border`,!this._noBorder)}},{kind:"method",key:"_handleSlotChange",value:function(e){const{target:t}=e,{name:o}=t;if(!g[o])return void Object(a.a)(Object(r.a)(n.prototype),"_handleSlotChange",this).call(this,e);const i=t.assignedNodes().some((e=>e.nodeType!==Node.TEXT_NODE||e.textContent.trim()));this[g[o]]=i}},{kind:"method",key:"_renderActions",value:function(){const{_hasAction:e,_handleSlotChange:t}=this;return Object(s.d)(k||(k=f`
      <div ?hidden="${0}" class="${0}--content-item__cta">
        <slot name="action" @slotchange="${0}"></slot>
      </div>
    `),!e,v,t)}},{kind:"method",key:"_renderContent",value:function(){const{_hasContent:e,_handleSlotChange:t}=this;return Object(s.d)(b||(b=f`
      <div ?hidden="${0}" class="${0}--helper-wrapper">
        <div class="${0}--content-item-wrapper">
          <slot @slotchange="${0}"></slot>
        </div>
      </div>
    `),!e,v,v,t)}},{kind:"method",key:"_renderInnerBody",value:function(){return Object(s.d)(_||(_=f`
      ${0}${0}${0}
    `),this._renderActions(),this._renderLinkList(),this._renderContent())}},{kind:"method",key:"_renderLinkList",value:function(){const{_handleSlotChange:e}=this;return Object(s.d)(p||(p=f`
      <slot name="link-list" @slotchange="${0}"></slot>
    `),e)}},{kind:"method",key:"_renderFooter",value:function(){}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${y}--cta-block`}},{kind:"field",static:!0,key:"styles",value:()=>h.a}]}}),Object(l.a)(u.a)),j=n("iZHX"),m=n("17x9"),$=n.n(m),C=(c.a.prefix,d.a.stablePrefix),L=Object.assign({},o.a,{_noBorder:{serialize:j.a,attribute:"no-border"}}),w=Object.assign({},o.b,{_noBorder:$.a.bool});const x=Object(j.b)("".concat(C,"-cta-block"),L);x.propTypes=w;t.default=x}}]);