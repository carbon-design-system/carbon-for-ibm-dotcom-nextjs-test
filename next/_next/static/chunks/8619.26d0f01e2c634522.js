"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8619],{8619:function(t,e,n){n.r(e),n.d(e,{CustomElement:function(){return G},default:function(){return M},descriptor:function(){return W},propTypes:function(){return R}});var o=n(6424),i=n(6254),r=n(9033),s=n(2658),l=n(7670),a=n(6887);let c,d,u,h=t=>t;const{prefix:m}=r.Z,{stablePrefix:f}=s.Z,k={footer:"_hasFooter"};var v=(0,o.Z)([(0,i.Mo)(`${f}-content-item`)],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,i.SB)()],key:"_hasFooter",value:()=>!1},{kind:"method",key:"_handleSlotChange",value:function({target:t}){const{name:e}=t,n=t.assignedNodes().filter((t=>void 0!==t.matches&&(t.matches(this.constructor.selectorTextCTA)||t.matches(this.constructor.selectorButtonCTA)||t.matches(this.constructor.selectorButtonGroup)||t.matches(this.constructor.selectorLinkWithIcon)||t.matches(this.constructor.selectorLinkList)))),o=null===n||void 0===n?void 0:n.some((t=>t.nodeType!==Node.TEXT_NODE||t.textContent.trim()));this[k[e]||"_hasCopy"]=o}},{kind:"method",key:"_renderBody",value:function(){return(0,i.dy)(c||(c=h` <slot></slot> `))}},{kind:"method",key:"_renderFooter",value:function(){const{_hasFooter:t}=this;return(0,i.dy)(d||(d=h`
      <div ?hidden="${0}" class="${0}--content-item__cta">
        <slot name="footer" @slotchange="${0}"></slot>
      </div>
    `),!t,m,this._handleSlotChange)}},{kind:"method",key:"render",value:function(){return(0,i.dy)(u||(u=h`
      <slot name="heading"></slot>
      <div>
        <slot name="media"></slot>
      </div>
      ${0}${0}
    `),this._renderBody(),this._renderFooter())}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${f}--content-item`}},{kind:"get",static:!0,key:"selectorTextCTA",value:function(){return`${f}-text-cta`}},{kind:"get",static:!0,key:"selectorButtonCTA",value:function(){return`${f}-button-cta`}},{kind:"get",static:!0,key:"selectorLinkList",value:function(){return`${f}-link-list`}},{kind:"get",static:!0,key:"selectorLinkWithIcon",value:function(){return`${f}-link-with-icon`}},{kind:"get",static:!0,key:"selectorButtonGroup",value:function(){return`${f}-button-group`}},{kind:"field",static:!0,key:"styles",value:()=>a.Z}]}}),(0,l.Z)(i.oi)),_=n(9117),g=n(8474),y=(r.Z.prefix,g.Z.stablePrefix),$={};const p=(0,_.ZP)("".concat(y,"-content-item"),$);p.propTypes={};var C=n(1394),x=n(5744),T=n(8213),w=n(9232);let Z,b;!function(t){t.LEFT="left",t.RIGHT="right"}(Z||(Z={})),function(t){t.IMAGE="image",t.VIDEO="video"}(b||(b={}));let z,E,F,B,S=t=>t;const{prefix:A}=r.Z,{stablePrefix:I}=s.Z,L=parseFloat(C.AV.lg.width)*C.XE;var G=(0,o.Z)([(0,i.Mo)(`${I}-content-item-horizontal-media`)],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,i.Cb)({reflect:!0})],key:"align",value:()=>Z.RIGHT},{kind:"field",decorators:[(0,i.SB)()],key:"_isOneColumn",value:()=>window.innerWidth<L},{kind:"field",decorators:[(0,x.Z)("window:resize")],key:"_handleWindowResize",value(){return()=>{this._isOneColumn=window.innerWidth<L}}},{kind:"method",key:"_renderTextCol",value:function(){return(0,i.dy)(z||(z=S`
      <div class="${0}--content-item-horizontal__col">
        <slot name="eyebrow" @slotchange="${0}"></slot>
        <slot name="heading"></slot>
        ${0} ${0}
      </div>
    `),A,this._handleSlotChange,this._renderBody(),this._renderFooter())}},{kind:"method",key:"_renderContent",value:function(){return this._isOneColumn||this.align===Z.RIGHT?(0,i.dy)(E||(E=S`
          ${0}
          <div class="${0}--content-item-horizontal__col">
            <slot name="media" @slotchange="${0}"></slot>
          </div>
        `),this._renderTextCol(),A,this._handleSlotChange):(0,i.dy)(F||(F=S`
          <div class="${0}--content-item-horizontal__col">
            <slot name="media" @slotchange="${0}"></slot>
          </div>
          ${0}
        `),A,this._handleSlotChange,this._renderTextCol())}},{kind:"method",key:"render",value:function(){return(0,i.dy)(B||(B=S`
      <div
        class="${0}--content-item-horizontal__row ${0}--content-item-horizontal-media__align-${0}">
        ${0}
      </div>
    `),A,A,this.align,this._renderContent())}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${I}--content-item-horizontal-media`}},{kind:"field",static:!0,key:"styles",value:()=>w.Z}]}}),(0,T.Z)(v)),O=n(5697),P=n.n(O),N=(r.Z.prefix,g.Z.stablePrefix),W=Object.assign({},$,{align:{}}),R={align:P().string};const H=(0,_.ZP)("".concat(N,"-content-item-horizontal-media"),W);H.propTypes=R;var M=H},1394:function(t,e,n){n.d(e,{XE:function(){return o},AV:function(){return r}});var o=16;function i(t){return"".concat(t/o,"rem")}var r={sm:{width:i(320),columns:4,margin:"0"},md:{width:i(672),columns:8,margin:i(16)},lg:{width:i(1056),columns:16,margin:i(16)},xlg:{width:i(1312),columns:16,margin:i(16)},max:{width:i(1584),columns:16,margin:i(24)}};function s(t){return i(8*t)}s(.25),s(.5),s(1),s(1.5),s(2),s(3),s(4),s(5),s(6),s(8),s(10),s(12),s(20),s(2),s(3),s(4),s(6),s(8),s(12),s(20),s(3),s(4),s(5),s(6),s(8),i(24),i(32),i(40),i(48),i(64),i(80)}}]);