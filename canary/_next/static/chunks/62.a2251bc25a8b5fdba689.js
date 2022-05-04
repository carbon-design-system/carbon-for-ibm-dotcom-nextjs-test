(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[62],{UZWT:function(t,e,n){"use strict";n.r(e),n.d(e,"CustomElement",(function(){return A})),n.d(e,"descriptor",(function(){return H})),n.d(e,"propTypes",(function(){return J}));var o=n("XLRp"),i=n("CQbg"),r=n("9a1i"),s=n("ljsJ"),a=n("JAt+"),c=n("9xvB");let l,d,u,h=t=>t;const{prefix:m}=r.a,{stablePrefix:k}=s.a,f={footer:"_hasFooter"};var v=Object(o.a)([Object(i.c)(`${k}-content-item`)],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[Object(i.h)()],key:"_hasFooter",value:()=>!1},{kind:"method",key:"_handleSlotChange",value:function({target:t}){const{name:e}=t,n=t.assignedNodes().filter((t=>void 0!==t.matches&&(t.matches(this.constructor.selectorTextCTA)||t.matches(this.constructor.selectorButtonCTA)||t.matches(this.constructor.selectorButtonGroup)||t.matches(this.constructor.selectorLinkWithIcon)||t.matches(this.constructor.selectorLinkList)))),o=null===n||void 0===n?void 0:n.some((t=>t.nodeType!==Node.TEXT_NODE||t.textContent.trim()));this[f[e]||"_hasCopy"]=o}},{kind:"method",key:"_renderBody",value:function(){return Object(i.d)(l||(l=h`
      <slot></slot>
    `))}},{kind:"method",key:"_renderFooter",value:function(){const{_hasFooter:t}=this;return Object(i.d)(d||(d=h`
      <div ?hidden="${0}" class="${0}--content-item__cta">
        <slot name="footer" @slotchange="${0}"></slot>
      </div>
    `),!t,m,this._handleSlotChange)}},{kind:"method",key:"render",value:function(){return Object(i.d)(u||(u=h`
      <slot name="heading"></slot>
      <div>
        <slot name="media"></slot>
      </div>
      ${0}${0}
    `),this._renderBody(),this._renderFooter())}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${k}--content-item`}},{kind:"get",static:!0,key:"selectorTextCTA",value:function(){return`${k}-text-cta`}},{kind:"get",static:!0,key:"selectorButtonCTA",value:function(){return`${k}-button-cta`}},{kind:"get",static:!0,key:"selectorLinkList",value:function(){return`${k}-link-list`}},{kind:"get",static:!0,key:"selectorLinkWithIcon",value:function(){return`${k}-link-with-icon`}},{kind:"get",static:!0,key:"selectorButtonGroup",value:function(){return`${k}-button-group`}},{kind:"field",static:!0,key:"styles",value:()=>c.a}]}}),Object(a.a)(i.a)),_=n("iZHX"),b=n("OT8j"),g=(r.a.prefix,b.a.stablePrefix),y={},p={};const $=Object(_.b)("".concat(g,"-content-item"),y);$.propTypes=p;var O=n("gI0D"),j=n("W0+U"),C=n("Zn4m"),T=n("j8CZ");let x,w;!function(t){t.LEFT="left",t.RIGHT="right"}(x||(x={})),function(t){t.IMAGE="image",t.VIDEO="video"}(w||(w={}));let z,F,B,E,I=t=>t;const{prefix:L}=r.a,{stablePrefix:S}=s.a,W=parseFloat(O.b.lg.width)*O.a;var A=Object(o.a)([Object(i.c)(`${S}-content-item-horizontal-media`)],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[Object(i.e)({reflect:!0})],key:"align",value:()=>x.RIGHT},{kind:"field",decorators:[Object(i.h)()],key:"_isOneColumn",value:()=>window.innerWidth<W},{kind:"field",decorators:[Object(j.a)("window:resize")],key:"_handleWindowResize",value(){return()=>{this._isOneColumn=window.innerWidth<W}}},{kind:"method",key:"_renderTextCol",value:function(){return Object(i.d)(z||(z=I`
      <div class="${0}--content-item-horizontal__col">
        <slot name="eyebrow" @slotchange="${0}"></slot>
        <slot name="heading"></slot>
        ${0} ${0}
      </div>
    `),L,this._handleSlotChange,this._renderBody(),this._renderFooter())}},{kind:"method",key:"_renderContent",value:function(){return this._isOneColumn||this.align===x.RIGHT?Object(i.d)(F||(F=I`
          ${0}
          <div class="${0}--content-item-horizontal__col">
            <slot name="media" @slotchange="${0}"></slot>
          </div>
        `),this._renderTextCol(),L,this._handleSlotChange):Object(i.d)(B||(B=I`
          <div class="${0}--content-item-horizontal__col">
            <slot name="media" @slotchange="${0}"></slot>
          </div>
          ${0}
        `),L,this._handleSlotChange,this._renderTextCol())}},{kind:"method",key:"render",value:function(){return Object(i.d)(E||(E=I`
      <div class="${0}--content-item-horizontal__row ${0}--content-item-horizontal-media__align-${0}">
        ${0}
      </div>
    `),L,L,this.align,this._renderContent())}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${S}--content-item-horizontal-media`}},{kind:"field",static:!0,key:"styles",value:()=>T.a}]}}),Object(C.a)(v)),G=n("17x9"),N=n.n(G),R=(r.a.prefix,b.a.stablePrefix),H=Object.assign({},y,{align:{}}),J=Object.assign({},p,{align:N.a.string});const P=Object(_.b)("".concat(R,"-content-item-horizontal-media"),H);P.propTypes=J;e.default=P}}]);