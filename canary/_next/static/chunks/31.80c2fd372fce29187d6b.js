(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{LCod:function(t,e,i){"use strict";i.r(e),i.d(e,"CustomElement",(function(){return $})),i.d(e,"descriptor",(function(){return R})),i.d(e,"propTypes",(function(){return S}));i("2TRz");var a=i("H53n"),o=i("XLRp"),n=i("ReuC"),r=i("foSv"),c=i("CQbg"),s=i("OT8j"),d=i("1Vb2"),u=i("OGQo"),l=i("XfVf"),b=i("gsxF"),p=i("RQ6T"),v=i("CX7s");let f,k=t=>t;const{stablePrefix:O}=s.a;var y=Object(o.a)([Object(c.c)(`${O}-text-cta`)],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"field",decorators:[Object(c.h)()],key:"_hasContent",value:()=>!1},{kind:"method",key:"_handleSlotChange",value:function({target:t}){this._hasContent=t.assignedNodes().some((t=>{var e;return t.nodeType!==Node.COMMENT_NODE&&(t.nodeType!==Node.TEXT_NODE||(null===(e=t.nodeValue)||void 0===e?void 0:e.trim()))}))}},{kind:"method",key:"_renderContent",value:function(){const{ctaType:t,_hasContent:e}=this;if(t!==p.a.VIDEO)return Object(n.a)(Object(r.a)(i.prototype),"_renderContent",this).call(this);const{videoDuration:a,videoName:o,formatVideoCaption:s,formatVideoDuration:d}=this,u=e?void 0:s({duration:d({duration:a?1e3*a:a}),name:o});return Object(c.d)(f||(f=k`
      <span><slot @slotchange="${0}"></slot>${0}</span>
    `),this._handleSlotChange,u)}},{kind:"field",decorators:[Object(c.e)({reflect:!0,attribute:"cta-type"})],key:"ctaType",value:()=>p.a.REGULAR},{kind:"field",decorators:[Object(c.e)({attribute:!1})],key:"formatVideoCaption",value:()=>d.a},{kind:"field",decorators:[Object(c.e)({attribute:!1})],key:"formatVideoDuration",value:()=>d.b},{kind:"field",decorators:[Object(c.e)({type:Number,attribute:"video-duration"})],key:"videoDuration",value:void 0},{kind:"field",decorators:[Object(c.e)({attribute:"video-name"})],key:"videoName",value:void 0},{kind:"field",decorators:[Object(c.e)({attribute:"video-description"})],key:"videoDescription",value:void 0},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${O}--text-cta`}},{kind:"field",static:!0,key:"styles",value:()=>v.a}]}}),Object(b.a)(Object(l.a)(u.b))),j=i("iZHX"),m=i("17x9"),h=i.n(m),g=i("9a1i"),C=(g.a.prefix,s.a.stablePrefix),T=Object.assign({},a.descriptor,{ctaType:{attribute:"cta-type"},formatVideoCaption:{attribute:!1},formatVideoDuration:{attribute:!1},videoDuration:{serialize:j.c,attribute:"video-duration"},videoName:{attribute:"video-name"},videoDescription:{attribute:"video-description"}}),D=Object.assign({},a.propTypes,{ctaType:h.a.string,formatVideoCaption:h.a.string,formatVideoDuration:h.a.string,videoDuration:h.a.number,videoName:h.a.string,videoDescription:h.a.string});const x=Object(j.b)("".concat(C,"-text-cta"),T);x.propTypes=D;var N=i("8tB5");let _,V=t=>t;const{stablePrefix:E}=s.a;var $=Object(o.a)([Object(c.c)(`${E}-link-list-item-cta`)],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"method",key:"connectedCallback",value:function(){this.hasAttribute("role")||this.setAttribute("role","listitem"),Object(n.a)(Object(r.a)(i.prototype),"connectedCallback",this).call(this)}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${E}--link-list-item-cta`}},{kind:"get",static:!0,key:"styles",value:function(){return Object(c.b)(_||(_=V`${0}${0}`),Object(n.a)(Object(r.a)(i),"styles",this),N.a)}}]}}),y),w=(g.a.prefix,s.a.stablePrefix),R=Object.assign({},T,{}),S=Object.assign({},D,{});const X=Object(j.b)("".concat(w,"-link-list-item-cta"),R);X.propTypes=S;e.default=X}}]);