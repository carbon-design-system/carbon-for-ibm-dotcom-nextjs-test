"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4161],{7226:function(e,t,n){n.d(t,{qI:function(){return s}}),n(62576),n(11660);var a=n(11976),o=n(45697),r=n.n(o),l=n(69033),i=n(38474);l.default.prefix;var d=i.default.stablePrefix,s={complementaryStyleScheme:{attribute:"complementary-style-scheme"}},u={complementaryStyleScheme:r().string};let c=(0,a.ZP)("".concat(d,"-content-block"),s);c.propTypes=u},62576:function(e,t,n){n.d(t,{AL:function(){return a.CONTENT_BLOCK_COPY_SIZE}});var a=n(68039);/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ },34161:function(e,t,n){n.r(t),n.d(t,{CustomElement:function(){return o.Z},descriptor:function(){return c},propTypes:function(){return h}});var a=n(7226),o=n(15450),r=n(11976),l=n(45697),i=n.n(l),d=n(69033),s=n(38474);d.default.prefix;var u=s.default.stablePrefix,c=Object.assign({},a.qI,{_noBorder:{serialize:r._P,attribute:"no-border"}}),h={_noBorder:i().bool};let f=(0,r.ZP)("".concat(u,"-cta-block"),c);f.propTypes=h,t.default=f},11660:function(e,t,n){var a,o,r,l,i,d,s,u,c,h=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"CONTENT_BLOCK_COMPLEMENTARY_STYLE_SCHEME",{enumerable:!0,get:function(){return S.CONTENT_BLOCK_COMPLEMENTARY_STYLE_SCHEME}}),t.default=void 0;var f=h(n(30168)),_=h(n(4942)),y=h(n(43144)),v=h(n(15671)),m=h(n(97326)),C=h(n(60136)),k=h(n(82963)),p=h(n(61120)),E=h(n(66424)),L=n(7499),T=n(26254),g=h(n(69033)),O=h(n(32658)),S=n(68039),N=h(n(31216)),B=h(n(87670)),b=n(57353),M=O.default.stablePrefix,R=g.default.prefix,P={complementary:"_hasComplementary",copy:"_hasCopy",heading:"_hasHeading",footer:"_hasFooter",media:"_hasMedia"},A=(0,E.default)([(0,b.carbonElement)("".concat(M,"-content-block"))],function(e,t){return{F:function(t){(0,C.default)(r,t);var n,a,o=(a=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=(0,p.default)(r);if(a){var n=(0,p.default)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,k.default)(this,e)});function r(){var t;(0,v.default)(this,r);for(var n=arguments.length,a=Array(n),l=0;l<n;l++)a[l]=arguments[l];return t=o.call.apply(o,[this].concat(a)),e((0,m.default)(t)),t}return(0,y.default)(r)}(t),d:[{kind:"field",decorators:[(0,T.state)()],key:"_hasComplementary",value:function(){return!1}},{kind:"field",decorators:[(0,T.state)()],key:"_hasContent",value:function(){return!1}},{kind:"field",decorators:[(0,T.state)()],key:"_hasHeading",value:function(){return!1}},{kind:"field",decorators:[(0,T.state)()],key:"_hasCopy",value:function(){return!1}},{kind:"field",decorators:[(0,T.state)()],key:"_hasFooter",value:function(){return!1}},{kind:"field",decorators:[(0,T.state)()],key:"_hasMedia",value:function(){return!1}},{kind:"method",key:"_getContainerClasses",value:function(){var e,t=this.complementaryStyleScheme,n=this._hasComplementary;return(0,L.classMap)((e={},(0,_.default)(e,"".concat(R,"--content-layout"),!0),(0,_.default)(e,"".concat(R,"--content-layout--with-complementary"),n),(0,_.default)(e,"".concat(R,"--layout--border"),t===S.CONTENT_BLOCK_COMPLEMENTARY_STYLE_SCHEME.WITH_BORDER),e))}},{kind:"method",key:"_hasBodyContent",value:function(){var e=this._hasContent,t=this._hasCopy,n=this._hasMedia,a=this._hasFooter;return e||t||n||a}},{kind:"method",key:"_handleSlotChange",value:function(e){var t=e.target,n=t.name,a=t.assignedNodes().some(function(e){return e.nodeType!==Node.TEXT_NODE||e.textContent.trim()});this[P[n]||"_hasContent"]=a}},{kind:"method",key:"_renderBody",value:function(){return(0,T.html)(a||(a=(0,f.default)(['\n      <div\n        ?hidden="','"\n        class="','--content-layout__body">\n        ',"","","\n      </div>\n    "])),!this._hasBodyContent(),R,this._renderCopy(),this._renderInnerBody(),this._renderFooter())}},{kind:"method",key:"_renderContent",value:function(){var e=this._handleSlotChange;return(0,T.html)(o||(o=(0,f.default)([' <slot @slotchange="','"></slot> '])),e)}},{kind:"method",key:"_renderCopy",value:function(){var e=this._handleSlotChange;return(0,T.html)(r||(r=(0,f.default)([' <slot name="copy" @slotchange="','"></slot> '])),e)}},{kind:"method",key:"_renderFooter",value:function(){var e=this._hasFooter,t=this._handleSlotChange;return(0,T.html)(l||(l=(0,f.default)(['\n      <div ?hidden="','">\n        <slot name="footer" @slotchange="','"></slot>\n      </div>\n    '])),!e,t)}},{kind:"method",key:"_renderHeading",value:function(){var e=this._handleSlotChange;return(0,T.html)(i||(i=(0,f.default)(['\n      <slot name="heading" @slotchange="','"></slot>\n    '])),e)}},{kind:"method",key:"_renderInnerBody",value:function(){return(0,T.html)(d||(d=(0,f.default)([" ",""," "])),this._renderContent(),this._renderMedia())}},{kind:"method",key:"_renderMedia",value:function(){var e=this._handleSlotChange;return(0,T.html)(s||(s=(0,f.default)([' <slot name="media" @slotchange="','"></slot> '])),e)}},{kind:"method",key:"_renderComplementary",value:function(){var e=this._handleSlotChange;return(0,T.html)(u||(u=(0,f.default)(['\n      <slot name="complementary" @slotchange="','"></slot>\n    '])),e)}},{kind:"field",decorators:[(0,T.property)({attribute:"complementary-style-scheme"})],key:"complementaryStyleScheme",value:function(){return S.CONTENT_BLOCK_COMPLEMENTARY_STYLE_SCHEME.REGULAR}},{kind:"method",key:"render",value:function(){return(0,T.html)(c||(c=(0,f.default)(['\n      <div class="','">\n        ',"","","\n      </div>\n    "])),this._getContainerClasses(),this._renderHeading(),this._renderBody(),this._renderComplementary())}},{kind:"field",static:!0,key:"styles",value:function(){return N.default}}]}},(0,B.default)(T.LitElement));t.default=A},68039:function(e,t){var n,a,o,r;Object.defineProperty(t,"__esModule",{value:!0}),t.CONTENT_BLOCK_COPY_SIZE=t.CONTENT_BLOCK_COMPLEMENTARY_STYLE_SCHEME=void 0,t.CONTENT_BLOCK_COPY_SIZE=n,(o=n||(t.CONTENT_BLOCK_COPY_SIZE=n={})).SMALL="sm",o.REGULAR="md",t.CONTENT_BLOCK_COMPLEMENTARY_STYLE_SCHEME=a,(r=a||(t.CONTENT_BLOCK_COMPLEMENTARY_STYLE_SCHEME=a={})).REGULAR="regular",r.WITH_BORDER="with-border"},15450:function(e,t,n){var a,o,r,l,i,d,s=n(95318);t.Z=void 0;var u=s(n(4942)),c=s(n(30168)),h=s(n(43144)),f=s(n(15671)),_=s(n(97326)),y=s(n(60136)),v=s(n(82963)),m=s(n(66424)),C=s(n(73237)),k=s(n(61120)),p=n(26254),E=n(7499),L=s(n(69033)),T=s(n(32658)),g=s(n(87670)),O=s(n(847)),S=s(n(11660)),N=n(57353),B=L.default.prefix,b=T.default.stablePrefix,M={action:"_hasAction","link-list":"_hasLinkList"},R=(0,m.default)([(0,N.carbonElement)("".concat(b,"-cta-block"))],function(e,t){var n=function(t){(0,y.default)(r,t);var n,a,o=(a=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=(0,k.default)(r);if(a){var n=(0,k.default)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,v.default)(this,e)});function r(){var t;(0,f.default)(this,r);for(var n=arguments.length,a=Array(n),l=0;l<n;l++)a[l]=arguments[l];return t=o.call.apply(o,[this].concat(a)),e((0,_.default)(t)),t}return(0,h.default)(r)}(t);return{F:n,d:[{kind:"field",decorators:[(0,p.property)({type:Boolean,attribute:"no-border",reflect:!0})],key:"_noBorder",value:function(){return!1}},{kind:"field",decorators:[(0,p.state)()],key:"_hasAction",value:function(){return!1}},{kind:"field",decorators:[(0,p.state)()],key:"_hasLinkList",value:function(){return!1}},{kind:"method",key:"updated",value:function(e){if(e.has("_noBorder")){var t=this.shadowRoot.querySelector(".".concat(B,"--content-layout"));null==t||t.classList.toggle("".concat(B,"--content-layout--border"),!this._noBorder)}}},{kind:"method",key:"_hasBodyContent",value:function(){var e=this._hasLinkList,t=this._hasAction;return e||t||(0,C.default)((0,k.default)(n.prototype),"_hasBodyContent",this).call(this)}},{kind:"method",key:"_handleSlotChange",value:function(e){var t=e.target,a=t.name;if(!M[a]){(0,C.default)((0,k.default)(n.prototype),"_handleSlotChange",this).call(this,e);return}var o=t.assignedNodes().some(function(e){return e.nodeType!==Node.TEXT_NODE||e.textContent.trim()});this[M[a]]=o}},{kind:"method",key:"_renderActions",value:function(){var e=this._hasAction,t=this._handleSlotChange;return(0,p.html)(a||(a=(0,c.default)(['\n      <div ?hidden="','" class="','--content-layout__cta">\n        <slot name="action" @slotchange="','"></slot>\n      </div>\n    '])),!e,B,t)}},{kind:"method",key:"_renderContent",value:function(){var e,t=this._hasAction,n=this._hasCopy,a=this._hasLinkList,r=this._hasContent,l=this._handleSlotChange,i=(0,E.classMap)((e={},(0,u.default)(e,"".concat(B,"--helper-wrapper"),!0),(0,u.default)(e,"".concat(B,"--helper-wrapper--less-space"),!t&&!n&&!a),e));return(0,p.html)(o||(o=(0,c.default)(['\n      <div ?hidden="','" class="','">\n        <div class="','--content-item-wrapper">\n          <slot @slotchange="','"></slot>\n        </div>\n      </div>\n    '])),!r,i,B,l)}},{kind:"method",key:"_renderBody",value:function(){var e,t=this._hasCopy,n=this._hasAction,a=this._hasLinkList,o=this._hasContent,l=(0,E.classMap)((e={},(0,u.default)(e,"".concat(B,"--content-layout__body"),!0),(0,u.default)(e,"".concat(B,"--content-layout__body--tight"),!t&&!n&&(a||o)),e));return(0,p.html)(r||(r=(0,c.default)(['\n      <div ?hidden="','" class="','">\n        ',"","\n      </div>\n    "])),!this._hasBodyContent(),l,this._renderCopy(),this._renderInnerBody())}},{kind:"method",key:"_renderCopy",value:function(){var e=this._hasCopy,t=this._handleSlotChange;return(0,p.html)(l||(l=(0,c.default)(['\n      <div ?hidden="','" class="','--content-layout__copy">\n        <slot name="copy" @slotchange="','"></slot>\n      </div>\n    '])),!e,B,t)}},{kind:"method",key:"_renderInnerBody",value:function(){return(0,p.html)(i||(i=(0,c.default)(["\n      ","","","\n    "])),this._renderActions(),this._renderLinkList(),this._renderContent())}},{kind:"method",key:"_renderLinkList",value:function(){var e=this._hasLinkList,t=this._handleSlotChange;return(0,p.html)(d||(d=(0,c.default)(['\n      <div\n        ?hidden="','"\n        class="','--content-layout__link-list">\n        <slot name="link-list" @slotchange="','"></slot>\n      </div>\n    '])),!e,B,t)}},{kind:"get",static:!0,key:"stableSelector",value:function(){return"".concat(b,"--cta-block")}},{kind:"field",static:!0,key:"styles",value:function(){return O.default}}]}},(0,g.default)(S.default));t.Z=R}}]);