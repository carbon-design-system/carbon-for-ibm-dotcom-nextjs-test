"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[407],{407:function(e,t,n){n.r(t),n.d(t,{CustomElement:function(){return l.default},descriptor:function(){return o},propTypes:function(){return s}});var l=n(1852),a=n(1976),r=n(5697),d=n.n(r),i=n(9033),u=n(8474);i.default.prefix;var c=u.default.stablePrefix,o={label:{},disabled:{serialize:a._P},selected:{serialize:a._P},onTabSelected:{event:"".concat(c,"-tab-selected")}},s={label:d().string,disabled:d().bool,selected:d().bool,onTabSelected:d().func};let f=(0,a.ZP)("".concat(c,"-tab"),o);f.propTypes=s,t.default=f},1852:function(e,t,n){var l,a=n(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(168)),d=a(n(3144)),i=a(n(5671)),u=a(n(7326)),c=a(n(136)),o=a(n(2963)),s=a(n(6424)),f=a(n(3237)),p=a(n(1120)),b=n(6254),v=a(n(2658)),h=a(n(2898)),y=a(n(7670)),k=v.default.stablePrefix,_=(0,s.default)([(0,b.customElement)("".concat(k,"-tab"))],function(e,t){var n=function(t){(0,c.default)(r,t);var n,l,a=(l=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=(0,p.default)(r);if(l){var n=(0,p.default)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,o.default)(this,e)});function r(){var t;(0,i.default)(this,r);for(var n=arguments.length,l=Array(n),d=0;d<n;d++)l[d]=arguments[d];return t=a.call.apply(a,[this].concat(l)),e((0,u.default)(t)),t}return(0,d.default)(r)}(t);return{F:n,d:[{kind:"field",decorators:[(0,b.property)({reflect:!0})],key:"label",value:function(){return""}},{kind:"field",decorators:[(0,b.property)({reflect:!0,type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,b.property)({reflect:!0,type:Boolean})],key:"selected",value:function(){return!1}},{kind:"field",decorators:[(0,b.state)()],key:"_index",value:function(){return 0}},{kind:"method",key:"setIndex",value:function(e){this._index=e}},{kind:"method",key:"updated",value:function(e){if(e.has("selected")){var t=this.constructor.eventTabSelected;this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:{selected:this.selected}}))}(0,f.default)((0,p.default)(n.prototype),"updated",this).call(this,e)}},{kind:"method",key:"render",value:function(){return(0,b.html)(l||(l=(0,r.default)(['\n      <div\n        id="tab-panel-','-default"\n        tabindex="0"\n        class="tab-','-container"\n        role="tabpanel"\n        aria-labelledby="tab-link-','-default"\n        aria-hidden="','"\n        ?hidden="','">\n        <slot></slot>\n      </div>\n    '])),this._index,this._index,this._index,!this.selected,!this.selected)}},{kind:"get",static:!0,key:"stableSelector",value:function(){return"".concat(k,"--tab")}},{kind:"get",static:!0,key:"eventTabSelected",value:function(){return"".concat(k,"-tab-selected")}},{kind:"field",static:!0,key:"styles",value:function(){return h.default}}]}},(0,y.default)(b.LitElement));t.default=_}}]);