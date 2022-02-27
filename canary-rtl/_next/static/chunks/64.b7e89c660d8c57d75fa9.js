(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[64],{UZWT:function(t,e,n){"use strict";n.r(e),n.d(e,"CustomElement",(function(){return G})),n.d(e,"descriptor",(function(){return P})),n.d(e,"propTypes",(function(){return Z}));var o=n("XLRp"),i=n("CQbg"),r=n("9a1i"),s=n("OT8j"),a=n("JAt+"),c=n("9xvB");let l,d,u,h=t=>t;const{prefix:m}=r.a,{stablePrefix:k}=s.a,f={footer:"_hasFooter"};var v=Object(o.a)([Object(i.c)(`${k}-content-item`)],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[Object(i.h)()],key:"_hasFooter",value:()=>!1},{kind:"method",key:"_handleSlotChange",value:function({target:t}){const{name:e}=t,n=t.assignedNodes().filter((t=>void 0!==t.matches&&(t.matches(this.constructor.selectorTextCTA)||t.matches(this.constructor.selectorButtonCTA)||t.matches(this.constructor.selectorButtonGroup)||t.matches(this.constructor.selectorLinkWithIcon)||t.matches(this.constructor.selectorLinkList)))),o=null===n||void 0===n?void 0:n.some((t=>t.nodeType!==Node.TEXT_NODE||t.textContent.trim()));this[f[e]||"_hasCopy"]=o}},{kind:"method",key:"_renderBody",value:function(){return Object(i.d)(l||(l=h`
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
    `),this._renderBody(),this._renderFooter())}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${k}--content-item`}},{kind:"get",static:!0,key:"selectorTextCTA",value:function(){return`${k}-text-cta`}},{kind:"get",static:!0,key:"selectorButtonCTA",value:function(){return`${k}-button-cta`}},{kind:"get",static:!0,key:"selectorLinkList",value:function(){return`${k}-link-list`}},{kind:"get",static:!0,key:"selectorLinkWithIcon",value:function(){return`${k}-link-with-icon`}},{kind:"get",static:!0,key:"selectorButtonGroup",value:function(){return`${k}-button-group`}},{kind:"field",static:!0,key:"styles",value:()=>c.a}]}}),Object(a.a)(i.a)),g=n("iZHX"),_=(r.a.prefix,s.a.stablePrefix),b={},y={};const p=Object(g.b)("".concat(_,"-content-item"),b);p.propTypes=y;function $(t){return"".concat(t/16,"rem")}var O={sm:{width:$(320),columns:4,margin:"0"},md:{width:$(672),columns:8,margin:$(16)},lg:{width:$(1056),columns:16,margin:$(16)},xlg:{width:$(1312),columns:16,margin:$(16)},max:{width:$(1584),columns:16,margin:$(24)}};function j(t){return $(8*t)}j(.25),j(.5),j(1),j(1.5),j(2),j(3),j(4),j(5),j(6),j(8),j(10),j(12),j(20),j(2),j(3),j(4),j(6),j(8),j(12),j(20),j(3),j(4),j(5),j(6),j(8);var w=n("W0+U"),C=n("Zn4m"),x=n("j8CZ");let T,z;!function(t){t.LEFT="left",t.RIGHT="right"}(T||(T={})),function(t){t.IMAGE="image",t.VIDEO="video"}(z||(z={}));let F,B,E,L,I=t=>t;const{prefix:S}=r.a,{stablePrefix:W}=s.a,A=16*parseFloat(O.lg.width);var G=Object(o.a)([Object(i.c)(`${W}-content-item-horizontal-media`)],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[Object(i.e)({reflect:!0})],key:"align",value:()=>T.RIGHT},{kind:"field",decorators:[Object(i.h)()],key:"_isOneColumn",value:()=>window.innerWidth<A},{kind:"field",decorators:[Object(w.a)("window:resize")],key:"_handleWindowResize",value(){return()=>{this._isOneColumn=window.innerWidth<A}}},{kind:"method",key:"_renderTextCol",value:function(){return Object(i.d)(F||(F=I`
      <div class="${0}--content-item-horizontal__col">
        <slot name="eyebrow" @slotchange="${0}"></slot>
        <slot name="heading"></slot>
        ${0} ${0}
      </div>
    `),S,this._handleSlotChange,this._renderBody(),this._renderFooter())}},{kind:"method",key:"_renderContent",value:function(){return this._isOneColumn||this.align===T.RIGHT?Object(i.d)(B||(B=I`
          ${0}
          <div class="${0}--content-item-horizontal__col">
            <slot name="media" @slotchange="${0}"></slot>
          </div>
        `),this._renderTextCol(),S,this._handleSlotChange):Object(i.d)(E||(E=I`
          <div class="${0}--content-item-horizontal__col">
            <slot name="media" @slotchange="${0}"></slot>
          </div>
          ${0}
        `),S,this._handleSlotChange,this._renderTextCol())}},{kind:"method",key:"render",value:function(){return Object(i.d)(L||(L=I`
      <div class="${0}--content-item-horizontal__row ${0}--content-item-horizontal-media__align-${0}">
        ${0}
      </div>
    `),S,S,this.align,this._renderContent())}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${W}--content-item-horizontal-media`}},{kind:"field",static:!0,key:"styles",value:()=>x.a}]}}),Object(C.a)(v)),N=n("17x9"),R=n.n(N),H=(r.a.prefix,s.a.stablePrefix),P=Object.assign({},b,{align:{}}),Z=Object.assign({},y,{align:R.a.string});const J=Object(g.b)("".concat(H,"-content-item-horizontal-media"),P);J.propTypes=Z;e.default=J}}]);