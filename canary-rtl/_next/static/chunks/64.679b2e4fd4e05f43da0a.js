(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[64],{UZWT:function(t,e,n){"use strict";n.r(e),n.d(e,"CustomElement",(function(){return S})),n.d(e,"descriptor",(function(){return R})),n.d(e,"propTypes",(function(){return H}));var o=n("XLRp"),i=n("CQbg"),r=n("9a1i"),s=n("W5jE"),a=n("JAt+"),c=n("9xvB");let l,d,u,h=t=>t;const{prefix:m}=r.a,{stablePrefix:k}=s.a,f={footer:"_hasFooter"};var v=Object(o.a)([Object(i.c)(`${k}-content-item`)],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[Object(i.h)()],key:"_hasFooter",value:()=>!1},{kind:"method",key:"_handleSlotChange",value:function({target:t}){const{name:e}=t,n=t.assignedNodes().filter((t=>void 0!==t.matches&&(t.matches(this.constructor.selectorTextCTA)||t.matches(this.constructor.selectorButtonCTA)||t.matches(this.constructor.selectorButtonGroup)||t.matches(this.constructor.selectorLinkWithIcon)||t.matches(this.constructor.selectorLinkList)))),o=null===n||void 0===n?void 0:n.some((t=>t.nodeType!==Node.TEXT_NODE||t.textContent.trim()));this[f[e]||"_hasCopy"]=o}},{kind:"method",key:"_renderBody",value:function(){return Object(i.d)(l||(l=h`
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
    `),this._renderBody(),this._renderFooter())}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${k}--content-item`}},{kind:"get",static:!0,key:"selectorTextCTA",value:function(){return`${k}-text-cta`}},{kind:"get",static:!0,key:"selectorButtonCTA",value:function(){return`${k}-button-cta`}},{kind:"get",static:!0,key:"selectorLinkList",value:function(){return`${k}-link-list`}},{kind:"get",static:!0,key:"selectorLinkWithIcon",value:function(){return`${k}-link-with-icon`}},{kind:"get",static:!0,key:"selectorButtonGroup",value:function(){return`${k}-button-group`}},{kind:"field",static:!0,key:"styles",value:()=>c.a}]}}),Object(a.a)(i.a)),_=n("iZHX"),b=(r.a.prefix,s.a.stablePrefix),g={},y={};const p=Object(_.b)("".concat(b,"-content-item"),g);p.propTypes=y;var $=n("gI0D"),O=n("W0+U"),j=n("Zn4m"),C=n("j8CZ");let T,x;!function(t){t.LEFT="left",t.RIGHT="right"}(T||(T={})),function(t){t.IMAGE="image",t.VIDEO="video"}(x||(x={}));let w,z,F,E,B=t=>t;const{prefix:I}=r.a,{stablePrefix:L}=s.a,W=parseFloat($.b.lg.width)*$.a;var S=Object(o.a)([Object(i.c)(`${L}-content-item-horizontal-media`)],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[Object(i.e)({reflect:!0})],key:"align",value:()=>T.RIGHT},{kind:"field",decorators:[Object(i.h)()],key:"_isOneColumn",value:()=>window.innerWidth<W},{kind:"field",decorators:[Object(O.a)("window:resize")],key:"_handleWindowResize",value(){return()=>{this._isOneColumn=window.innerWidth<W}}},{kind:"method",key:"_renderTextCol",value:function(){return Object(i.d)(w||(w=B`
      <div class="${0}--content-item-horizontal__col">
        <slot name="eyebrow" @slotchange="${0}"></slot>
        <slot name="heading"></slot>
        ${0} ${0}
      </div>
    `),I,this._handleSlotChange,this._renderBody(),this._renderFooter())}},{kind:"method",key:"_renderContent",value:function(){return this._isOneColumn||this.align===T.RIGHT?Object(i.d)(z||(z=B`
          ${0}
          <div class="${0}--content-item-horizontal__col">
            <slot name="media" @slotchange="${0}"></slot>
          </div>
        `),this._renderTextCol(),I,this._handleSlotChange):Object(i.d)(F||(F=B`
          <div class="${0}--content-item-horizontal__col">
            <slot name="media" @slotchange="${0}"></slot>
          </div>
          ${0}
        `),I,this._handleSlotChange,this._renderTextCol())}},{kind:"method",key:"render",value:function(){return Object(i.d)(E||(E=B`
      <div class="${0}--content-item-horizontal__row ${0}--content-item-horizontal-media__align-${0}">
        ${0}
      </div>
    `),I,I,this.align,this._renderContent())}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${L}--content-item-horizontal-media`}},{kind:"field",static:!0,key:"styles",value:()=>C.a}]}}),Object(j.a)(v)),A=n("17x9"),G=n.n(A),N=(r.a.prefix,s.a.stablePrefix),R=Object.assign({},g,{align:{}}),H=Object.assign({},y,{align:G.a.string});const P=Object(_.b)("".concat(N,"-content-item-horizontal-media"),R);P.propTypes=H;e.default=P}}]);