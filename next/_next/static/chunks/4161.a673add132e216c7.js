"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4161],{7226:function(t,e,n){n.d(e,{qI:function(){return s}}),n(2576),n(1660);var o=n(1976),a=n(5697),r=n.n(a),l=n(9033),i=n(8474);l.default.prefix;var d=i.default.stablePrefix,s={complementaryStyleScheme:{attribute:"complementary-style-scheme"}},u={complementaryStyleScheme:r().string};let c=(0,o.ZP)("".concat(d,"-content-block"),s);c.propTypes=u},2576:function(t,e,n){n.d(e,{AL:function(){return o.CONTENT_BLOCK_COPY_SIZE}});var o=n(8039);/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ },4161:function(t,e,n){n.r(e),n.d(e,{CustomElement:function(){return a.Z},descriptor:function(){return c},propTypes:function(){return h}});var o=n(7226),a=n(5450),r=n(1976),l=n(5697),i=n.n(l),d=n(9033),s=n(8474);d.default.prefix;var u=s.default.stablePrefix,c=Object.assign({},o.qI,{_noBorder:{serialize:r._P,attribute:"no-border"}}),h={_noBorder:i().bool};let f=(0,r.ZP)("".concat(u,"-cta-block"),c);f.propTypes=h,e.default=f},1660:function(t,e,n){var o,a,r,l,i,d,s,u,c,h=n(5318);Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"CONTENT_BLOCK_COMPLEMENTARY_STYLE_SCHEME",{enumerable:!0,get:function(){return S.CONTENT_BLOCK_COMPLEMENTARY_STYLE_SCHEME}}),e.default=void 0;var f=h(n(168)),_=h(n(4942)),y=h(n(3144)),v=h(n(5671)),m=h(n(7326)),C=h(n(136)),k=h(n(2963)),p=h(n(1120)),E=h(n(6424)),L=n(7499),g=n(6254),T=h(n(9033)),O=h(n(2658)),S=n(8039),N=h(n(1216)),B=h(n(7670)),b=n(7353),M=O.default.stablePrefix,R=T.default.prefix,A={complementary:"_hasComplementary",copy:"_hasCopy",heading:"_hasHeading",footer:"_hasFooter",media:"_hasMedia"},P=(0,E.default)([(0,b.carbonElement)("".concat(M,"-content-block"))],function(t,e){return{F:function(e){(0,C.default)(r,e);var n,o,a=(o=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}} /**
                                                                                                                                                                                                                                                                                                                                           * @license
                                                                                                                                                                                                                                                                                                                                           *
                                                                                                                                                                                                                                                                                                                                           * Copyright IBM Corp. 2020, 2023
                                                                                                                                                                                                                                                                                                                                           *
                                                                                                                                                                                                                                                                                                                                           * This source code is licensed under the Apache-2.0 license found in the
                                                                                                                                                                                                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                           */ (),function(){var t,e=(0,p.default)(r);if(o){var n=(0,p.default)(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return(0,k.default)(this,t)});function r(){var e;(0,v.default)(this,r);for(var n=arguments.length,o=Array(n),l=0;l<n;l++)o[l]=arguments[l];return e=a.call.apply(a,[this].concat(o)),t((0,m.default)(e)),e}return(0,y.default)(r)}(e),d:[{kind:"field",decorators:[(0,g.state)()],key:"_hasComplementary",value:function(){return!1}},{kind:"field",decorators:[(0,g.state)()],key:"_hasContent",value:function(){return!1}},{kind:"field",decorators:[(0,g.state)()],key:"_hasHeading",value:function(){return!1}},{kind:"field",decorators:[(0,g.state)()],key:"_hasCopy",value:function(){return!1}},{kind:"field",decorators:[(0,g.state)()],key:"_hasFooter",value:function(){return!1}},{kind:"field",decorators:[(0,g.state)()],key:"_hasMedia",value:function(){return!1}},{kind:"method",key:"_getContainerClasses",value:function(){var t,e=this.complementaryStyleScheme,n=this._hasComplementary;return(0,L.classMap)((t={},(0,_.default)(t,"".concat(R,"--content-layout"),!0),(0,_.default)(t,"".concat(R,"--content-layout--with-complementary"),n),(0,_.default)(t,"".concat(R,"--layout--border"),e===S.CONTENT_BLOCK_COMPLEMENTARY_STYLE_SCHEME.WITH_BORDER),t))}},{kind:"method",key:"_hasBodyContent",value:function(){var t=this._hasContent,e=this._hasCopy,n=this._hasMedia,o=this._hasFooter;return t||e||n||o}},{kind:"method",key:"_handleSlotChange",value:function(t){var e=t.target,n=e.name,o=e.assignedNodes().some(function(t){return t.nodeType!==Node.TEXT_NODE||t.textContent.trim()});this[A[n]||"_hasContent"]=o}},{kind:"method",key:"_renderBody",value:function(){return(0,g.html)(o||(o=(0,f.default)(['\n      <div\n        ?hidden="','"\n        class="','--content-layout__body">\n        ',"","","\n      </div>\n    "])),!this._hasBodyContent(),R,this._renderCopy(),this._renderInnerBody(),this._renderFooter())}},{kind:"method",key:"_renderContent",value:function(){var t=this._handleSlotChange;return(0,g.html)(a||(a=(0,f.default)([' <slot @slotchange="','"></slot> '])),t)}},{kind:"method",key:"_renderCopy",value:function(){var t=this._handleSlotChange;return(0,g.html)(r||(r=(0,f.default)([' <slot name="copy" @slotchange="','"></slot> '])),t)}},{kind:"method",key:"_renderFooter",value:function(){var t=this._hasFooter,e=this._handleSlotChange,n=this.querySelector(this.constructor.selectorCardGroup),o=null==n?void 0:n.getAttribute("style");return(0,g.html)(l||(l=(0,f.default)(['\n      <div\n        ?hidden="','"\n        class="','"\n        style="','">\n        <slot name="footer" @slotchange="','"></slot>\n      </div>\n    '])),!t,n&&t&&"".concat(M,"--content-block-footer"),o,e)}},{kind:"method",key:"_renderHeading",value:function(){var t=this._handleSlotChange;return(0,g.html)(i||(i=(0,f.default)(['\n      <slot name="heading" @slotchange="','"></slot>\n    '])),t)}},{kind:"method",key:"_renderInnerBody",value:function(){return(0,g.html)(d||(d=(0,f.default)([" ",""," "])),this._renderContent(),this._renderMedia())}},{kind:"method",key:"_renderMedia",value:function(){var t=this._handleSlotChange;return(0,g.html)(s||(s=(0,f.default)([' <slot name="media" @slotchange="','"></slot> '])),t)}},{kind:"method",key:"_renderComplementary",value:function(){var t=this._handleSlotChange;return(0,g.html)(u||(u=(0,f.default)(['\n      <slot name="complementary" @slotchange="','"></slot>\n    '])),t)}},{kind:"field",decorators:[(0,g.property)({attribute:"complementary-style-scheme"})],key:"complementaryStyleScheme",value:function(){return S.CONTENT_BLOCK_COMPLEMENTARY_STYLE_SCHEME.REGULAR}},{kind:"method",key:"render",value:function(){return(0,g.html)(c||(c=(0,f.default)(['\n      <div class="','">\n        ',"","","\n      </div>\n    "])),this._getContainerClasses(),this._renderHeading(),this._renderBody(),this._renderComplementary())}},{kind:"get",static:!0,key:"selectorCardGroup",value:function(){return"".concat(M,"-card-group")}},{kind:"field",static:!0,key:"styles",value:function(){return N.default}}]}},(0,B.default)(g.LitElement));e.default=P},8039:function(t,e){var n,o,a,r;Object.defineProperty(e,"__esModule",{value:!0}),e.CONTENT_BLOCK_COPY_SIZE=e.CONTENT_BLOCK_COMPLEMENTARY_STYLE_SCHEME=void 0,e.CONTENT_BLOCK_COPY_SIZE=n,(a=n||(e.CONTENT_BLOCK_COPY_SIZE=n={})).SMALL="sm",a.REGULAR="md",e.CONTENT_BLOCK_COMPLEMENTARY_STYLE_SCHEME=o,(r=o||(e.CONTENT_BLOCK_COMPLEMENTARY_STYLE_SCHEME=o={})).REGULAR="regular",r.WITH_BORDER="with-border"},5450:function(t,e,n){var o,a,r,l,i,d,s=n(5318);e.Z=void 0;var u=s(n(4942)),c=s(n(168)),h=s(n(3144)),f=s(n(5671)),_=s(n(7326)),y=s(n(136)),v=s(n(2963)),m=s(n(6424)),C=s(n(3237)),k=s(n(1120)),p=n(6254),E=n(7499),L=s(n(9033)),g=s(n(2658)),T=s(n(7670)),O=s(n(847)),S=s(n(1660)),N=n(7353),B=L.default.prefix,b=g.default.stablePrefix,M={action:"_hasAction","link-list":"_hasLinkList"},R=(0,m.default)([(0,N.carbonElement)("".concat(b,"-cta-block"))],function(t,e){var n=function(e){(0,y.default)(r,e);var n,o,a=(o=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}} /**
                                                                                                                                                                                                                                                                                                                                           * @license
                                                                                                                                                                                                                                                                                                                                           *
                                                                                                                                                                                                                                                                                                                                           * Copyright IBM Corp. 2020, 2023
                                                                                                                                                                                                                                                                                                                                           *
                                                                                                                                                                                                                                                                                                                                           * This source code is licensed under the Apache-2.0 license found in the
                                                                                                                                                                                                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                           */ (),function(){var t,e=(0,k.default)(r);if(o){var n=(0,k.default)(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return(0,v.default)(this,t)});function r(){var e;(0,f.default)(this,r);for(var n=arguments.length,o=Array(n),l=0;l<n;l++)o[l]=arguments[l];return e=a.call.apply(a,[this].concat(o)),t((0,_.default)(e)),e}return(0,h.default)(r)}(e);return{F:n,d:[{kind:"field",decorators:[(0,p.property)({type:Boolean,attribute:"no-border",reflect:!0})],key:"_noBorder",value:function(){return!1}},{kind:"field",decorators:[(0,p.state)()],key:"_hasAction",value:function(){return!1}},{kind:"field",decorators:[(0,p.state)()],key:"_hasLinkList",value:function(){return!1}},{kind:"method",key:"updated",value:function(t){if(t.has("_noBorder")){var e=this.shadowRoot.querySelector(".".concat(B,"--content-layout"));null==e||e.classList.toggle("".concat(B,"--content-layout--border"),!this._noBorder)}}},{kind:"method",key:"_hasBodyContent",value:function(){var t=this._hasLinkList,e=this._hasAction;return t||e||(0,C.default)((0,k.default)(n.prototype),"_hasBodyContent",this).call(this)}},{kind:"method",key:"_handleSlotChange",value:function(t){var e=t.target,o=e.name;if(!M[o]){(0,C.default)((0,k.default)(n.prototype),"_handleSlotChange",this).call(this,t);return}var a=e.assignedNodes().some(function(t){return t.nodeType!==Node.TEXT_NODE||t.textContent.trim()});this[M[o]]=a}},{kind:"method",key:"_renderActions",value:function(){var t=this._hasAction,e=this._handleSlotChange;return(0,p.html)(o||(o=(0,c.default)(['\n      <div ?hidden="','" class="','--content-layout__cta">\n        <slot name="action" @slotchange="','"></slot>\n      </div>\n    '])),!t,B,e)}},{kind:"method",key:"_renderContent",value:function(){var t,e=this._hasAction,n=this._hasCopy,o=this._hasLinkList,r=this._hasContent,l=this._handleSlotChange,i=(0,E.classMap)((t={},(0,u.default)(t,"".concat(B,"--helper-wrapper"),!0),(0,u.default)(t,"".concat(B,"--helper-wrapper--less-space"),!e&&!n&&!o),t));return(0,p.html)(a||(a=(0,c.default)(['\n      <div ?hidden="','" class="','">\n        <div class="','--content-item-wrapper">\n          <slot @slotchange="','"></slot>\n        </div>\n      </div>\n    '])),!r,i,B,l)}},{kind:"method",key:"_renderBody",value:function(){var t,e=this._hasCopy,n=this._hasAction,o=this._hasLinkList,a=this._hasContent,l=(0,E.classMap)((t={},(0,u.default)(t,"".concat(B,"--content-layout__body"),!0),(0,u.default)(t,"".concat(B,"--content-layout__body--tight"),!e&&!n&&(o||a)),t));return(0,p.html)(r||(r=(0,c.default)(['\n      <div ?hidden="','" class="','">\n        ',"","\n      </div>\n    "])),!this._hasBodyContent(),l,this._renderCopy(),this._renderInnerBody())}},{kind:"method",key:"_renderCopy",value:function(){var t=this._hasCopy,e=this._handleSlotChange;return(0,p.html)(l||(l=(0,c.default)(['\n      <div ?hidden="','" class="','--content-layout__copy">\n        <slot name="copy" @slotchange="','"></slot>\n      </div>\n    '])),!t,B,e)}},{kind:"method",key:"_renderInnerBody",value:function(){return(0,p.html)(i||(i=(0,c.default)(["\n      ","","","\n    "])),this._renderActions(),this._renderLinkList(),this._renderContent())}},{kind:"method",key:"_renderLinkList",value:function(){var t=this._hasLinkList,e=this._handleSlotChange;return(0,p.html)(d||(d=(0,c.default)(['\n      <div\n        ?hidden="','"\n        class="','--content-layout__link-list">\n        <slot name="link-list" @slotchange="','"></slot>\n      </div>\n    '])),!t,B,e)}},{kind:"get",static:!0,key:"stableSelector",value:function(){return"".concat(b,"--cta-block")}},{kind:"field",static:!0,key:"styles",value:function(){return O.default}}]}},(0,T.default)(S.default));e.Z=R}}]);