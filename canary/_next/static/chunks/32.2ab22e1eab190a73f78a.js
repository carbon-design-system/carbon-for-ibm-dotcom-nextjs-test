(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{"t/7J":function(t,e,i){"use strict";i.r(e),i.d(e,"CustomElement",(function(){return y})),i.d(e,"descriptor",(function(){return T})),i.d(e,"propTypes",(function(){return N}));var l=i("XLRp"),n=i("4qtV"),s=i("CQbg"),c=i("9a1i"),a=i("OT8j"),o=i("JAt+"),d=i("dVVy"),r=i("8tB5");let u,h=t=>t;const{prefix:_}=c.a,{stablePrefix:p}=a.a;let k;!function(t){t.DEFAULT="default",t.TWO_COLUMNS="two-columns",t.THREE_COLUMNS="three-columns"}(k||(k={}));var y=Object(l.a)([Object(s.c)(`${p}-link-list`)],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[Object(s.h)()],key:"_endTypeLayout",value:()=>k.DEFAULT},{kind:"field",decorators:[Object(s.h)()],key:"_childItems",value:()=>[]},{kind:"method",key:"_handleSlotChange",value:function(t){const{selectorItem:e}=this.constructor;this._childItems=t.target.assignedNodes({flatten:!0}).filter((t=>{var i;return t.nodeType===Node.ELEMENT_NODE&&(null===(i=t)||void 0===i?void 0:i.matches(e))})),this._childItems.length>3?this._childItems.length<7?this._endTypeLayout=k.TWO_COLUMNS:this._endTypeLayout=k.THREE_COLUMNS:this._endTypeLayout=k.DEFAULT,this.type===d.b.END&&this._childItems.forEach((t=>{t.type=d.a.END}))}},{kind:"field",decorators:[Object(s.e)({reflect:!0})],key:"type",value:()=>d.b.DEFAULT},{kind:"method",key:"render",value:function(){var t;const{type:e,_endTypeLayout:i}=this,l=Object(n.a)({[`${p}-ce--link-list__heading__wrapper`]:!0,[`${p}-ce--link-list__heading--split`]:e===d.b.END&&i===k.TWO_COLUMNS}),c=null!==(t={[d.b.HORIZONTAL]:`${_}--link-list__list--horizontal`,[d.b.VERTICAL]:`${_}--link-list__list--vertical`,[d.b.END]:`${p}-ce--link-list__list--end`}[e])&&void 0!==t?t:`${_}--link-list__list--card`,a=Object(n.a)({[`${_}--link-list__list`]:!0,[c]:!0,[`${p}-ce--link-list__list--split`]:e===d.b.END&&i===k.TWO_COLUMNS,[`${p}-ce--link-list__list--three-columns`]:e===d.b.END&&i===k.THREE_COLUMNS});return Object(s.d)(u||(u=h`
      <div class="${0}"><slot name="heading"></slot></div>
      <ul name="list" class="${0}">
        <slot @slotchange="${0}"></slot>
      </ul>
    `),l,a,this._handleSlotChange)}},{kind:"method",key:"updated",value:function(){this.type===d.b.END&&this._childItems.forEach((t=>{t.type=d.a.END})),this.type!==d.b.HORIZONTAL&&this.type!==d.b.VERTICAL||this._childItems.forEach((t=>{t.iconInline=!0}))}},{kind:"get",static:!0,key:"selectorItem",value:function(){return`${p}-link-list-item, ${p}-link-list-item-cta`}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${p}--link-list`}},{kind:"field",static:!0,key:"styles",value:()=>r.a}]}}),Object(o.a)(s.a)),E=i("iZHX"),b=i("17x9"),f=i.n(b),O=(c.a.prefix,a.a.stablePrefix),T={type:{}},N={type:f.a.string};const m=Object(E.b)("".concat(O,"-link-list"),T);m.propTypes=N;e.default=m}}]);