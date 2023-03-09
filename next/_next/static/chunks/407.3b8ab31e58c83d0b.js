"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[407],{407:function(e,t,l){l.r(t),l.d(t,{CustomElement:function(){return n.Z},descriptor:function(){return r},propTypes:function(){return u}});var n=l(5645),i=l(1976),d=l(5697),a=l.n(d),s=l(9033),c=l(8474);s.Z.prefix;var o=c.Z.stablePrefix,r={label:{},disabled:{serialize:i._P},selected:{serialize:i._P},onTabSelected:{event:"".concat(o,"-tab-selected")}},u={label:a().string,disabled:a().bool,selected:a().bool,onTabSelected:a().func};let b=(0,i.ZP)("".concat(o,"-tab"),r);b.propTypes=u,t.default=b},5645:function(e,t,l){var n=l(6424),i=l(3237),d=l(1120),a=l(6254),s=l(2658),c=l(2898),o=l(7670);let r=e=>e,u,{stablePrefix:b}=s.Z,f=(0,n.Z)([(0,a.Mo)(`${b}-tab`)],function(e,t){class l extends t{constructor(...t){super(...t),e(this)}}return{F:l,d:[{kind:"field",decorators:[(0,a.Cb)({reflect:!0})],key:"label",value:()=>""},{kind:"field",decorators:[(0,a.Cb)({reflect:!0,type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)({reflect:!0,type:Boolean})],key:"selected",value:()=>!1},{kind:"field",decorators:[(0,a.SB)()],key:"_index",value:()=>0},{kind:"method",key:"setIndex",value:function(e){this._index=e}},{kind:"method",key:"updated",value:function(e){if(e.has("selected")){let{eventTabSelected:t}=this.constructor;this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:{selected:this.selected}}))}(0,i.Z)((0,d.Z)(l.prototype),"updated",this).call(this,e)}},{kind:"method",key:"render",value:function(){return(0,a.dy)(u||(u=r`
      <div
        id="tab-panel-${0}-default"
        tabindex="0"
        class="tab-${0}-container"
        role="tabpanel"
        aria-labelledby="tab-link-${0}-default"
        aria-hidden="${0}"
        ?hidden="${0}">
        <slot></slot>
      </div>
    `),this._index,this._index,this._index,!this.selected,!this.selected)}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${b}--tab`}},{kind:"get",static:!0,key:"eventTabSelected",value:function(){return`${b}-tab-selected`}},{kind:"field",static:!0,key:"styles",value:()=>c.Z}]}},(0,o.Z)(a.oi));t.Z=f}}]);