"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2340],{2340:function(t,e,n){n.r(e),n.d(e,{CustomElement:function(){return m},default:function(){return R},descriptor:function(){return b},propTypes:function(){return A}});var o=n(6424),r=n(3237),s=n(1120),c=n(6254);let u,i,a;!function(t){t.PRIMARY="primary",t.SECONDARY="secondary",t.TERTIARY="tertiary",t.GHOST="ghost",t.DANGER="danger",t.DANGER_TERTIARY="danger-tertiary",t.DANGER_GHOST="danger-ghost"}(u||(u={})),function(t){t.REGULAR="",t.SMALL="sm",t.EXTRA_LARGE="xl",t.FIELD="field"}(i||(i={})),function(t){t.REGULAR="",t.CONDENSED="condensed"}(a||(a={}));var l=n(8474),d=n(431),h=n(7670);let f,p=t=>t;const{stablePrefix:k}=l.Z;var m=(0,o.Z)([(0,c.Mo)(`${k}-button-group`)],(function(t,e){class n extends e{constructor(...e){super(...e),t(this)}}return{F:n,d:[{kind:"method",key:"_handleSlotChange",value:function(t){const e=t.target.assignedNodes().filter((t=>void 0!==t.matches&&(t.matches(this.constructor.selectorItem)||t.matches(this.constructor.selectorItemCTA)||t.matches(this.constructor.selectorItemDefaultCTA))));e.forEach(((t,e)=>{t.setAttribute("kind",0===e?u.PRIMARY:u.TERTIARY)}));const{customPropertyItemCount:n}=this.constructor;this.style.setProperty(n,String(e.length));const o=new CustomEvent(`${k}-button-group-update`,{bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(o)}},{kind:"method",key:"render",value:function(){return(0,c.dy)(f||(f=p` <slot @slotchange="${0}"></slot> `),this._handleSlotChange)}},{kind:"method",key:"connectedCallback",value:function(){(0,r.Z)((0,s.Z)(n.prototype),"connectedCallback",this).call(this),this.setAttribute("role","list")}},{kind:"get",static:!0,key:"customPropertyItemCount",value:function(){return`--${k}--button-group--item-count`}},{kind:"get",static:!0,key:"selectorItem",value:function(){return`${k}-button-group-item`}},{kind:"get",static:!0,key:"selectorItemDefaultCTA",value:function(){return`${k}-cta`}},{kind:"get",static:!0,key:"selectorItemCTA",value:function(){return`${k}-button-cta`}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${k}--button-group`}},{kind:"field",static:!0,key:"styles",value:()=>d.Z}]}}),(0,h.Z)(c.oi)),g=n(1976),y=(n(9033).Z.prefix,l.Z.stablePrefix),b={},A={};const E=(0,g.ZP)("".concat(y,"-button-group"),b);E.propTypes=A;var R=E}}]);