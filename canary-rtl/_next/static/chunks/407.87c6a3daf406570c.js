"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[407],{407:function(e,t,n){n.r(t),n.d(t,{CustomElement:function(){return l.Z},descriptor:function(){return r},propTypes:function(){return u}});var l=n(5645),d=n(1976),i=n(5697),a=n.n(i),s=n(9033),c=n(8474),o=(s.Z.prefix,c.Z.stablePrefix),r={label:{},disabled:{serialize:d._P},selected:{serialize:d._P},onTabSelected:{event:"".concat(o,"-tab-selected")}},u={label:a().string,disabled:a().bool,selected:a().bool,onTabSelected:a().func};const b=(0,d.ZP)("".concat(o,"-tab"),r);b.propTypes=u,t.default=b},5645:function(e,t,n){var l=n(6424),d=n(3237),i=n(1120),a=n(6254),s=n(2658),c=n(2898),o=n(7670);let r,u=e=>e;const{stablePrefix:b}=s.Z;let f=(0,l.Z)([(0,a.Mo)(`${b}-tab`)],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"field",decorators:[(0,a.Cb)({reflect:!0})],key:"label",value:()=>""},{kind:"field",decorators:[(0,a.Cb)({reflect:!0,type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)({reflect:!0,type:Boolean})],key:"selected",value:()=>!1},{kind:"field",decorators:[(0,a.SB)()],key:"_index",value:()=>0},{kind:"method",key:"setIndex",value:function(e){this._index=e}},{kind:"method",key:"updated",value:function(e){if(e.has("selected")){const{eventTabSelected:e}=this.constructor;this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:{selected:this.selected}}))}(0,d.Z)((0,i.Z)(n.prototype),"updated",this).call(this,e)}},{kind:"method",key:"render",value:function(){return(0,a.dy)(r||(r=u`
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
    `),this._index,this._index,this._index,!this.selected,!this.selected)}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${b}--tab`}},{kind:"get",static:!0,key:"eventTabSelected",value:function(){return`${b}-tab-selected`}},{kind:"field",static:!0,key:"styles",value:()=>c.Z}]}}),(0,o.Z)(a.oi));t.Z=f}}]);