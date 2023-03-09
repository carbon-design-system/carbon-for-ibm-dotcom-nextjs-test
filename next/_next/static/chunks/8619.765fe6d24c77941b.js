"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8619],{8619:function(t,e,n){n.r(e),n.d(e,{CustomElement:function(){return G},default:function(){return j},descriptor:function(){return W},propTypes:function(){return D}});var o,i,r=n(6424),s=n(6254),a=n(9033),l=n(2658),d=n(7670),c=n(6887);let h=t=>t,u,f,m,{prefix:k}=a.Z,{stablePrefix:v}=l.Z,_={footer:"_hasFooter"},y=(0,r.Z)([(0,s.Mo)(`${v}-content-item`)],function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,s.SB)()],key:"_hasFooter",value:()=>!1},{kind:"method",key:"_handleSlotChange",value:function({target:t}){let{name:e}=t,n=t.assignedNodes().filter(t=>void 0!==t.matches&&(t.matches(this.constructor.selectorTextCTA)||t.matches(this.constructor.selectorButtonCTA)||t.matches(this.constructor.selectorButtonGroup)||t.matches(this.constructor.selectorLinkWithIcon)||t.matches(this.constructor.selectorLinkList))),o=null==n?void 0:n.some(t=>t.nodeType!==Node.TEXT_NODE||t.textContent.trim());this[_[e]||"_hasCopy"]=o}},{kind:"method",key:"_renderBody",value:function(){return(0,s.dy)(u||(u=h` <slot></slot> `))}},{kind:"method",key:"_renderFooter",value:function(){let{_hasFooter:t}=this;return(0,s.dy)(f||(f=h`
      <div ?hidden="${0}" class="${0}--content-item__cta">
        <slot name="footer" @slotchange="${0}"></slot>
      </div>
    `),!t,k,this._handleSlotChange)}},{kind:"method",key:"render",value:function(){return(0,s.dy)(m||(m=h`
      <slot name="heading"></slot>
      <div>
        <slot name="media"></slot>
      </div>
      ${0}${0}
    `),this._renderBody(),this._renderFooter())}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${v}--content-item`}},{kind:"get",static:!0,key:"selectorTextCTA",value:function(){return`${v}-text-cta`}},{kind:"get",static:!0,key:"selectorButtonCTA",value:function(){return`${v}-button-cta`}},{kind:"get",static:!0,key:"selectorLinkList",value:function(){return`${v}-link-list`}},{kind:"get",static:!0,key:"selectorLinkWithIcon",value:function(){return`${v}-link-with-icon`}},{kind:"get",static:!0,key:"selectorButtonGroup",value:function(){return`${v}-button-group`}},{kind:"field",static:!0,key:"styles",value:()=>c.Z}]}},(0,d.Z)(s.oi));var g=n(1976),p=n(8474);a.Z.prefix;var $=p.Z.stablePrefix,w={};let C=(0,g.ZP)("".concat($,"-content-item"),w);C.propTypes={};var Z=n(3514),b=n(599),T=n(9074),x=n(9232);/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let E;(o=E||(E={})).LEFT="left",o.RIGHT="right";let L;(i=L||(L={})).IMAGE="image",i.VIDEO="video";let z=t=>t,F,R,S,B,{prefix:O}=a.Z,{stablePrefix:I}=l.Z,A=parseFloat(Z.AV.lg.width)*Z.XE;var G=(0,r.Z)([(0,s.Mo)(`${I}-content-item-horizontal-media`)],function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({reflect:!0})],key:"align",value:()=>E.RIGHT},{kind:"field",decorators:[(0,s.SB)()],key:"_isOneColumn",value:()=>window.innerWidth<A},{kind:"field",decorators:[(0,b.Z)("window:resize")],key:"_handleWindowResize",value(){return()=>{this._isOneColumn=window.innerWidth<A}}},{kind:"method",key:"_renderTextCol",value:function(){return(0,s.dy)(F||(F=z`
      <div class="${0}--content-item-horizontal__col">
        <slot name="eyebrow" @slotchange="${0}"></slot>
        <slot name="heading"></slot>
        ${0} ${0}
      </div>
    `),O,this._handleSlotChange,this._renderBody(),this._renderFooter())}},{kind:"method",key:"_renderContent",value:function(){let t=this._isOneColumn||this.align===E.RIGHT;return t?(0,s.dy)(R||(R=z`
          ${0}
          <div class="${0}--content-item-horizontal__col">
            <slot name="media" @slotchange="${0}"></slot>
          </div>
        `),this._renderTextCol(),O,this._handleSlotChange):(0,s.dy)(S||(S=z`
          <div class="${0}--content-item-horizontal__col">
            <slot name="media" @slotchange="${0}"></slot>
          </div>
          ${0}
        `),O,this._handleSlotChange,this._renderTextCol())}},{kind:"method",key:"render",value:function(){return(0,s.dy)(B||(B=z`
      <div
        class="${0}--content-item-horizontal__row ${0}--content-item-horizontal-media__align-${0}">
        ${0}
      </div>
    `),O,O,this.align,this._renderContent())}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${I}--content-item-horizontal-media`}},{kind:"field",static:!0,key:"styles",value:()=>x.Z}]}},(0,T.Z)(y)),H=n(5697),N=n.n(H);a.Z.prefix;var P=p.Z.stablePrefix,W=Object.assign({},w,{align:{}}),D={align:N().string};let M=(0,g.ZP)("".concat(P,"-content-item-horizontal-media"),W);M.propTypes=D;var j=M},599:function(t,e,n){var o=n(1413);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let i=(t,e,n,o)=>{let i=n._hostListeners;if(!i)throw Error("The method `@HostListener()` is defined on has to be of a class that has `HostListerMixin`.");i[o]||(i[o]={}),i[o][t]={options:e}},r=(t,e,n)=>{let{kind:r,key:s,placement:a}=n;if(!("method"===r&&"prototype"===a||"field"===r&&"own"===a))throw Error("`@HostListener()` must be defined on instance methods, but you may have defined it on static, field, etc.");return(0,o.Z)((0,o.Z)({},n),{},{finisher(n){i(t,e,n,s)}})},s=(t,e)=>(n,o)=>void 0!==o?i(t,e,n.constructor,o):r(t,e,n);e.Z=s},9074:function(t,e,n){var o=n(4942),i=n(4962);/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let r=/^((document|window|parentRoot|shadowRoot):)?([\w-]+)$/,s=t=>{class e extends t{constructor(...t){super(...t),(0,o.Z)(this,"_handles",new Set)}connectedCallback(){super.connectedCallback();let t=this.constructor._hostListeners;Object.keys(t).forEach(e=>{Object.keys(t[e]).forEach(n=>{var o;let s=r.exec(n);if(!s)throw Error(`Could not parse the event name: ${e}`);let[,,a,l]=s,d={document:this.ownerDocument,window:this.ownerDocument.defaultView,parentRoot:this.getRootNode(),shadowRoot:this.shadowRoot}[a]||this,{options:c}=t[e][n];this._handles.add((0,i.Z)(d,null!==(o=this.constructor[l])&&void 0!==o?o:l,this[e],c))})})}disconnectedCallback(){this._handles.forEach(t=>{t.release(),this._handles.delete(t)}),super.disconnectedCallback()}}return(0,o.Z)(e,"_hostListeners",{}),e};e.Z=s}}]);