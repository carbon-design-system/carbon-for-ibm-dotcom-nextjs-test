"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2737],{79078:function(t,e,a){function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.duration,a=t.name;return a&&(0===e||e)?"".concat(a," (").concat(e,")"):a||e||""}function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.duration,a=Math.floor((null!=e?e:0)/1e3%60),r=Array.from({length:2-String(a).length+1}).join("0");return null==e?e:"".concat(Math.floor((null!=e?e:0)/6e4),":").concat(r).concat(a)}a.r(e),a.d(e,{formatVideoCaption:function(){return r},formatVideoDuration:function(){return n}})},82737:function(t,e,a){a.r(e),a.d(e,{CustomElement:function(){return v.Z},default:function(){return b},descriptor:function(){return p},propTypes:function(){return y}}),a(98911);var r=a(2984);a(91419);var n=a(11976),o=a(45697),i=a.n(o),u=a(69033),l=a(38474);u.default.prefix;var c=l.default.stablePrefix,d=Object.assign({},r.descriptor,{ctaType:{attribute:"cta-type"},formatVideoCaption:{attribute:!1},formatVideoDuration:{attribute:!1},videoDuration:{serialize:n.Hf,attribute:"video-duration"},videoName:{attribute:"video-name"},videoDescription:{attribute:"video-description"},videoThumbnailUrl:{attribute:"video-thumbnail-url"},thumbnail:{attribute:"thumbnail"},noPoster:{serialize:n._P,attribute:"no-poster"},onVideoTitleUpdated:{event:"".concat(c,"-card-cta-video-title-updated")}}),f={ctaType:i().string,formatVideoCaption:i().string,formatVideoDuration:i().string,videoDuration:i().number,videoName:i().string,videoDescription:i().string,videoThumbnailUrl:i().string,thumbnail:i().string,noPoster:i().bool,onVideoTitleUpdated:i().func};let s=(0,n.ZP)("".concat(c,"-card-cta"),d);s.propTypes=f;var v=a(13766);u.default.prefix;var h=l.default.stablePrefix,p=Object.assign({},d,{}),y={};let m=(0,n.ZP)("".concat(h,"-card-in-card"),p);m.propTypes=y;var b=m},98911:function(t,e,a){a(52092);/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ },15703:function(t,e,a){var r,n=a(95318);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(a(30168)),i=n(a(43144)),u=n(a(15671)),l=n(a(97326)),c=n(a(60136)),d=n(a(82963)),f=n(a(66424)),s=n(a(73237)),v=n(a(61120)),h=a(26254),p=n(a(38474)),y=n(a(85645)),m=n(a(78082)),b=p.default.stablePrefix,k=(0,f.default)([(0,h.customElement)("".concat(b,"-card-in-card-image"))],function(t,e){var a=function(e){(0,c.default)(o,e);var a,r,n=(r=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t,e=(0,v.default)(o);if(r){var a=(0,v.default)(this).constructor;t=Reflect.construct(e,arguments,a)}else t=e.apply(this,arguments);return(0,d.default)(this,t)});function o(){var e;(0,u.default)(this,o);for(var a=arguments.length,r=Array(a),i=0;i<a;i++)r[i]=arguments[i];return e=n.call.apply(n,[this].concat(r)),t((0,l.default)(e)),e}return(0,i.default)(o)}(e);return{F:a,d:[{kind:"get",static:!0,key:"styles",value:function(){return(0,h.css)(r||(r=(0,o.default)(["\n      ","","\n    "])),(0,s.default)((0,v.default)(a),"styles",this),m.default)}}]}},y.default);e.default=k},13766:function(t,e,a){var r,n,o,i=a(95318),u=a(50008);e.Z=void 0;var l=i(a(30168)),c=i(a(43144)),d=i(a(15671)),f=i(a(97326)),s=i(a(60136)),v=i(a(82963)),h=i(a(66424)),p=i(a(73237)),y=i(a(61120)),m=a(26254),b=i(a(69033)),k=i(a(41523)),g=i(a(33720)),P=i(a(32658)),T=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==u(t)&&"function"!=typeof t)return{default:t};var a=C(e);if(a&&a.has(t))return a.get(t);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var i=n?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=t[o]}return r.default=t,a&&a.set(t,r),r}(a(91419));a(15703);var _=i(a(78082)),R=i(a(87670));function C(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,a=new WeakMap;return(C=function(t){return t?a:e})(t)}var D=b.default.prefix,O=P.default.stablePrefix,E=(0,h.default)([(0,m.customElement)("".concat(O,"-card-in-card"))],function(t,e){var a=function(e){(0,s.default)(o,e);var a,r,n=(r=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t,e=(0,y.default)(o);if(r){var a=(0,y.default)(this).constructor;t=Reflect.construct(e,arguments,a)}else t=e.apply(this,arguments);return(0,v.default)(this,t)});function o(){var e;(0,d.default)(this,o);for(var a=arguments.length,r=Array(a),i=0;i<a;i++)r[i]=arguments[i];return e=n.call.apply(n,[this].concat(r)),t((0,f.default)(e)),e}return(0,c.default)(o)}(e);return{F:a,d:[{kind:"method",key:"_renderImage",value:function(){var t=this.ctaType,e=this.videoName,a=this.videoThumbnailUrl,o=this.thumbnail,i=this._hasImage||t!==T.CTA_TYPE.VIDEO?void 0:(0,m.html)(r||(r=(0,l.default)(['\n            <dds-card-in-card-image\n              alt="','"\n              default-src="','">\n              ',"\n            </dds-card-in-card-image>\n          "])),(0,k.default)(e),(0,k.default)(o||a),(0,g.default)({slot:"icon"}));return(0,m.html)(n||(n=(0,l.default)(['\n      <slot name="image" @slotchange="','"></slot>',"\n    "])),this._handleSlotChange,i)}},{kind:"method",key:"updated",value:function(t){var e,r,n,o=this;(0,p.default)((0,y.default)(a.prototype),"updated",this).call(this,t);var i=this._linkNode;i&&i.classList.add("".concat(D,"--card-in-card"));var u=this.querySelector("".concat(O,"-card-in-card-image")),l=null===(e=this.parentElement)||void 0===e?void 0:null===(r=e.querySelector("".concat(O,"-card-in-card")))||void 0===r?void 0:null===(n=r.shadowRoot)||void 0===n?void 0:n.querySelector("dds-card-in-card-image");(u||l)&&((u||l).onclick=function(){var t,e,a;return null===(t=o.querySelector("".concat(O,"-card-cta-footer")))||void 0===t?void 0:null===(e=t.shadowRoot)||void 0===e?void 0:null===(a=e.querySelector("a"))||void 0===a?void 0:a.click()})}},{kind:"get",static:!0,key:"stableSelector",value:function(){return"".concat(O,"--card-in-card")}},{kind:"get",static:!0,key:"styles",value:function(){return(0,m.css)(o||(o=(0,l.default)(["\n      ","","\n    "])),(0,p.default)((0,y.default)(a),"styles",this),_.default)}}]}},(0,R.default)(T.default));e.Z=E},78965:function(t,e,a){var r,n=a(95318);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(a(30168)),i=n(a(43144)),u=n(a(15671)),l=n(a(97326)),c=n(a(60136)),d=n(a(82963)),f=n(a(66424)),s=n(a(73237)),v=n(a(61120)),h=a(26254),p=n(a(32658)),y=n(a(63699)),m=n(a(87670)),b=p.default.stablePrefix,k=(0,f.default)([(0,h.customElement)("".concat(b,"-card-heading"))],function(t,e){var a=function(e){(0,c.default)(o,e);var a,r,n=(r=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t,e=(0,v.default)(o);if(r){var a=(0,v.default)(this).constructor;t=Reflect.construct(e,arguments,a)}else t=e.apply(this,arguments);return(0,d.default)(this,t)});function o(){var e;(0,u.default)(this,o);for(var a=arguments.length,r=Array(a),i=0;i<a;i++)r[i]=arguments[i];return e=n.call.apply(n,[this].concat(r)),t((0,l.default)(e)),e}return(0,i.default)(o)}(e);return{F:a,d:[{kind:"field",decorators:[(0,h.property)({reflect:!0})],key:"slot",value:function(){return"heading"}},{kind:"method",key:"connectedCallback",value:function(){this.hasAttribute("role")||this.setAttribute("role","heading"),this.hasAttribute("aria-level")||this.setAttribute("aria-level","3"),(0,s.default)((0,v.default)(a.prototype),"connectedCallback",this).call(this)}},{kind:"method",key:"render",value:function(){return(0,h.html)(r||(r=(0,o.default)([" <slot></slot> "])))}},{kind:"get",static:!0,key:"stableSelector",value:function(){return"".concat(b,"--card-heading")}},{kind:"field",static:!0,key:"styles",value:function(){return y.default}}]}},(0,m.default)(h.LitElement));e.default=k},92286:function(t,e,a){var r,n=a(95318);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(a(30168)),i=n(a(43144)),u=n(a(15671)),l=n(a(97326)),c=n(a(60136)),d=n(a(82963)),f=n(a(66424)),s=n(a(73237)),v=n(a(61120)),h=a(26254),p=n(a(38474)),y=n(a(85645)),m=n(a(68767)),b=p.default.stablePrefix,k=(0,f.default)([(0,h.customElement)("".concat(b,"-card-cta-image"))],function(t,e){var a=function(e){(0,c.default)(o,e);var a,r,n=(r=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t,e=(0,v.default)(o);if(r){var a=(0,v.default)(this).constructor;t=Reflect.construct(e,arguments,a)}else t=e.apply(this,arguments);return(0,d.default)(this,t)});function o(){var e;(0,u.default)(this,o);for(var a=arguments.length,r=Array(a),i=0;i<a;i++)r[i]=arguments[i];return e=n.call.apply(n,[this].concat(r)),t((0,l.default)(e)),e}return(0,i.default)(o)}(e);return{F:a,d:[{kind:"get",static:!0,key:"styles",value:function(){return(0,h.css)(r||(r=(0,o.default)(["\n      ","","\n    "])),(0,s.default)((0,v.default)(a),"styles",this),m.default)}}]}},y.default);e.default=k},91419:function(t,e,a){var r,n,o,i,u,l=a(95318);Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"CTA_TYPE",{enumerable:!0,get:function(){return E.CTA_TYPE}}),e.default=void 0;var c=l(a(30168)),d=l(a(43144)),f=l(a(15671)),s=l(a(97326)),v=l(a(60136)),h=l(a(82963)),p=l(a(66424)),y=l(a(73237)),m=l(a(61120)),b=a(26254),k=l(a(69033)),g=l(a(38474)),P=l(a(41523)),T=l(a(33720)),_=a(79078),R=l(a(46354)),C=l(a(10013));a(78965),a(92286);var D=l(a(1689)),O=l(a(30798));a(7551);var E=a(52092),V=l(a(68767)),A=k.default.prefix,x=g.default.stablePrefix,j=(0,p.default)([(0,b.customElement)("".concat(x,"-card-cta"))],function(t,e){var a=function(e){(0,v.default)(o,e);var a,r,n=(r=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t,e=(0,m.default)(o);if(r){var a=(0,m.default)(this).constructor;t=Reflect.construct(e,arguments,a)}else t=e.apply(this,arguments);return(0,h.default)(this,t)});function o(){var e;(0,f.default)(this,o);for(var a=arguments.length,r=Array(a),i=0;i<a;i++)r[i]=arguments[i];return e=n.call.apply(n,[this].concat(r)),t((0,s.default)(e)),e}return(0,d.default)(o)}(e);return{F:a,d:[{kind:"method",key:"_renderHeading",value:function(){var t=this.ctaType,e=this.videoName,i=this.formatVideoCaption;if(t!==E.CTA_TYPE.VIDEO)return(0,y.default)((0,m.default)(a.prototype),"_renderHeading",this).call(this);var u=i({name:e});this.dispatchEvent(new CustomEvent(this.constructor.eventVideoTitleUpdated,{bubbles:!0,composed:!0}));var l=this.querySelector("dds-card-heading")?(0,b.html)(r||(r=(0,c.default)([""]))):(0,b.html)(n||(n=(0,c.default)([" <dds-card-heading>","</dds-card-heading> "])),u);return(0,b.html)(o||(o=(0,c.default)([' <slot name="heading"></slot>'," "])),l)}},{kind:"method",key:"_renderImage",value:function(){var t=this.ctaType,e=this.videoName,a=this.videoThumbnailUrl,r=this.thumbnail,n=this._hasImage,o=this.noPoster,l=n||t!==E.CTA_TYPE.VIDEO||o?void 0:(0,b.html)(i||(i=(0,c.default)(['\n            <dds-card-cta-image\n              class="','--card__video-thumbnail"\n              alt="','"\n              default-src="','">\n              ',"\n            </dds-card-cta-image>\n          "])),A,(0,P.default)(e),(0,P.default)(r||a),(0,T.default)({slot:"icon"}));return(0,b.html)(u||(u=(0,c.default)(['\n      <slot name="image" @slotchange="','"></slot>',"\n    "])),this._handleSlotChange,l)}},{kind:"field",decorators:[(0,b.property)({reflect:!0,attribute:"cta-type"})],key:"ctaType",value:function(){return E.CTA_TYPE.REGULAR}},{kind:"field",decorators:[(0,b.property)({attribute:!1})],key:"formatVideoCaption",value:function(){return _.formatVideoCaption}},{kind:"field",decorators:[(0,b.property)({attribute:!1})],key:"formatVideoDuration",value:void 0},{kind:"field",decorators:[(0,b.property)({type:Number,attribute:"video-duration"})],key:"videoDuration",value:void 0},{kind:"field",decorators:[(0,b.property)({attribute:"video-name"})],key:"videoName",value:void 0},{kind:"field",decorators:[(0,b.property)({attribute:"video-description"})],key:"videoDescription",value:void 0},{kind:"field",decorators:[(0,b.property)({attribute:"video-thumbnail-url"})],key:"videoThumbnailUrl",value:void 0},{kind:"field",decorators:[(0,b.property)({reflect:!0,attribute:"thumbnail"})],key:"thumbnail",value:void 0},{kind:"field",decorators:[(0,b.property)({type:Boolean,reflect:!0,attribute:"no-poster"})],key:"noPoster",value:function(){return!1}},{kind:"method",key:"updated",value:function(t){(0,y.default)((0,m.default)(a.prototype),"updated",this).call(this,t);var e=this.querySelector(this.constructor.selectorFooter);if(t.has("ctaType")||t.has("formatCaption")||t.has("formatDuration")||t.has("videoDuration")||t.has("videoName")){var r,n=this.ctaType,o=this.videoDuration,i=this.videoName,u=this.videoDescription,l=this.formatVideoCaption,c=this.formatVideoDuration,d=null===(r=this.querySelector("".concat(x,"-card-heading")))||void 0===r?void 0:r.textContent,f=this.textContent;if(e){var s="";void 0!==o&&(s=", DURATION ".concat(R.default.getMediaDurationFormatted(o,!1))),e.altAriaLabel="".concat(i||d||f).concat(s),e.ctaType=n,e.videoDuration=o,e.videoName=i,e.videoDescription=u,l&&(e.formatVideoCaption=l),c&&(e.formatVideoDuration=c)}}}},{kind:"get",static:!0,key:"stableSelector",value:function(){return"".concat(x,"--card-cta")}},{kind:"get",static:!0,key:"eventVideoTitleUpdated",value:function(){return"".concat(x,"-card-cta-video-title-updated")}},{kind:"get",static:!0,key:"selectorFooter",value:function(){return"".concat(x,"-card-cta-footer")}},{kind:"field",static:!0,key:"styles",value:function(){return V.default}}]}},(0,O.default)((0,D.default)(C.default)));e.default=j}}]);