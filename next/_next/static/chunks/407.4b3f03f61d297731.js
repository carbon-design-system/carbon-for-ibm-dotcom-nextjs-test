"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[407],{407:function(e,t,n){n.r(t),n.d(t,{CustomElement:function(){return a.default},descriptor:function(){return o},propTypes:function(){return f}});var a=n(1852),l=n(1976),r=n(5697),d=n.n(r),i=n(9033),u=n(8474);i.default.prefix;var c=u.default.stablePrefix,o={label:{},disabled:{serialize:l._P},selected:{serialize:l._P},onTabSelected:{event:"".concat(c,"-tab-selected")}},f={label:d().string,disabled:d().bool,selected:d().bool,onTabSelected:d().func};let s=(0,l.ZP)("".concat(c,"-tab"),o);s.propTypes=f,t.default=s},1852:function(e,t,n){var a,l=n(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(168)),d=l(n(3144)),i=l(n(5671)),u=l(n(7326)),c=l(n(136)),o=l(n(2963)),f=l(n(6424)),s=l(n(3237)),p=l(n(1120)),b=n(6254),v=l(n(2658)),h=l(n(2898)),y=l(n(7670)),k=n(7353),_=v.default.stablePrefix,m=(0,f.default)([(0,k.carbonElement)("".concat(_,"-tab"))],function(e,t){var n=function(t){(0,c.default)(r,t);var n,a,l=(a=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}} /**
                                                                                                                                                                                                                                                                                                                                           * @license
                                                                                                                                                                                                                                                                                                                                           *
                                                                                                                                                                                                                                                                                                                                           * Copyright IBM Corp. 2020, 2023
                                                                                                                                                                                                                                                                                                                                           *
                                                                                                                                                                                                                                                                                                                                           * This source code is licensed under the Apache-2.0 license found in the
                                                                                                                                                                                                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                           */ (),function(){var e,t=(0,p.default)(r);if(a){var n=(0,p.default)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,o.default)(this,e)});function r(){var t;(0,i.default)(this,r);for(var n=arguments.length,a=Array(n),d=0;d<n;d++)a[d]=arguments[d];return t=l.call.apply(l,[this].concat(a)),e((0,u.default)(t)),t}return(0,d.default)(r)}(t);return{F:n,d:[{kind:"field",decorators:[(0,b.property)({reflect:!0})],key:"label",value:function(){return""}},{kind:"field",decorators:[(0,b.property)({reflect:!0,type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,b.property)({reflect:!0,type:Boolean})],key:"selected",value:function(){return!1}},{kind:"field",decorators:[(0,b.state)()],key:"_index",value:function(){return 0}},{kind:"method",key:"setIndex",value:function(e){this._index=e}},{kind:"method",key:"updated",value:function(e){if(e.has("selected")){var t=this.constructor.eventTabSelected;this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:{selected:this.selected}}))}(0,s.default)((0,p.default)(n.prototype),"updated",this).call(this,e)}},{kind:"method",key:"render",value:function(){return(0,b.html)(a||(a=(0,r.default)(['\n      <div\n        id="tab-panel-','-default"\n        tabindex="0"\n        class="tab-','-container"\n        role="tabpanel"\n        aria-labelledby="tab-link-','-default"\n        aria-hidden="','"\n        ?hidden="','">\n        <slot></slot>\n      </div>\n    '])),this._index,this._index,this._index,!this.selected,!this.selected)}},{kind:"get",static:!0,key:"stableSelector",value:function(){return"".concat(_,"--tab")}},{kind:"get",static:!0,key:"eventTabSelected",value:function(){return"".concat(_,"-tab-selected")}},{kind:"field",static:!0,key:"styles",value:function(){return h.default}}]}},(0,y.default)(b.LitElement));t.default=m}}]);