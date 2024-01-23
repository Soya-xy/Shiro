import{r as p,a as bt,j as H,R as Vt}from"./index-2q2OBrW7.js";import{m as Wt}from"./spring-rk-u5Py4.js";import{u as Bt,a as _t}from"./use-is-client-WJnkEjfX.js";import{c as ct}from"./helper-DD-oFgKI.js";import{i as jt}from"./env-y9k74Ds6.js";import{A as Ht}from"./index-ps3YIoJ2.js";import{m as mt}from"./motion-minimal-ZKgXd32B.js";const lt=Math.min,z=Math.max,U=Math.round,$=t=>({x:t,y:t}),$t={left:"right",right:"left",bottom:"top",top:"bottom"},Yt={start:"end",end:"start"};function pt(t,e,n){return z(t,lt(e,n))}function nt(t,e){return typeof t=="function"?t(e):t}function X(t){return t.split("-")[0]}function ot(t){return t.split("-")[1]}function Rt(t){return t==="x"?"y":"x"}function Ct(t){return t==="y"?"height":"width"}function it(t){return["top","bottom"].includes(X(t))?"y":"x"}function Et(t){return Rt(it(t))}function It(t,e,n){n===void 0&&(n=!1);const o=ot(t),i=Et(t),s=Ct(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=Z(r)),[r,Z(r)]}function Xt(t){const e=Z(t);return[at(t),e,at(e)]}function at(t){return t.replace(/start|end/g,e=>Yt[e])}function zt(t,e,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?s:r;default:return[]}}function qt(t,e,n,o){const i=ot(t);let s=zt(X(t),n==="start",o);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(at)))),s}function Z(t){return t.replace(/left|right|bottom|top/g,e=>$t[e])}function Kt(t){return{top:0,right:0,bottom:0,left:0,...t}}function Gt(t){return typeof t!="number"?Kt(t):{top:t,right:t,bottom:t,left:t}}function tt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function gt(t,e,n){let{reference:o,floating:i}=t;const s=it(e),r=Et(e),c=Ct(r),l=X(e),a=s==="y",u=o.x+o.width/2-i.width/2,f=o.y+o.height/2-i.height/2,g=o[c]/2-i[c]/2;let m;switch(l){case"top":m={x:u,y:o.y-i.height};break;case"bottom":m={x:u,y:o.y+o.height};break;case"right":m={x:o.x+o.width,y:f};break;case"left":m={x:o.x-i.width,y:f};break;default:m={x:o.x,y:o.y}}switch(ot(e)){case"start":m[r]-=g*(n&&a?-1:1);break;case"end":m[r]+=g*(n&&a?-1:1);break}return m}const Jt=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,c=s.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(e));let a=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:f}=gt(a,o,l),g=o,m={},d=0;for(let w=0;w<c.length;w++){const{name:R,fn:y}=c[w],{x:v,y:C,data:b,reset:h}=await y({x:u,y:f,initialPlacement:o,placement:g,strategy:i,middlewareData:m,rects:a,platform:r,elements:{reference:t,floating:e}});if(u=v??u,f=C??f,m={...m,[R]:{...m[R],...b}},h&&d<=50){d++,typeof h=="object"&&(h.placement&&(g=h.placement),h.rects&&(a=h.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):h.rects),{x:u,y:f}=gt(a,g,l)),w=-1;continue}}return{x:u,y:f,placement:g,strategy:i,middlewareData:m}};async function At(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:g=!1,padding:m=0}=nt(e,t),d=Gt(m),R=c[g?f==="floating"?"reference":"floating":f],y=tt(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(R)))==null||n?R:R.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:a,rootBoundary:u,strategy:l})),v=f==="floating"?{...r.floating,x:o,y:i}:r.reference,C=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),b=await(s.isElement==null?void 0:s.isElement(C))?await(s.getScale==null?void 0:s.getScale(C))||{x:1,y:1}:{x:1,y:1},h=tt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:C,strategy:l}):v);return{top:(y.top-h.top+d.top)/b.y,bottom:(h.bottom-y.bottom+d.bottom)/b.y,left:(y.left-h.left+d.left)/b.x,right:(h.right-y.right+d.right)/b.x}}const Qt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:s,rects:r,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:g,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:d="none",flipAlignment:w=!0,...R}=nt(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const y=X(i),v=X(c)===c,C=await(l.isRTL==null?void 0:l.isRTL(a.floating)),b=g||(v||!w?[Z(c)]:Xt(c));!g&&d!=="none"&&b.push(...qt(c,w,d,C));const h=[c,...b],S=await At(e,R),k=[];let T=((o=s.flip)==null?void 0:o.overflows)||[];if(u&&k.push(S[y]),f){const A=It(i,r,C);k.push(S[A[0]],S[A[1]])}if(T=[...T,{placement:i,overflows:k}],!k.every(A=>A<=0)){var V,B;const A=(((V=s.flip)==null?void 0:V.index)||0)+1,P=h[A];if(P)return{data:{index:A,overflows:T},reset:{placement:P}};let O=(B=T.filter(E=>E.overflows[0]<=0).sort((E,M)=>E.overflows[1]-M.overflows[1])[0])==null?void 0:B.placement;if(!O)switch(m){case"bestFit":{var _;const E=(_=T.map(M=>[M.placement,M.overflows.filter(x=>x>0).reduce((x,j)=>x+j,0)]).sort((M,x)=>M[1]-x[1])[0])==null?void 0:_[0];E&&(O=E);break}case"initialPlacement":O=c;break}if(i!==O)return{reset:{placement:O}}}return{}}}};async function Ut(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=X(n),c=ot(n),l=it(n)==="y",a=["left","top"].includes(r)?-1:1,u=s&&l?-1:1,f=nt(e,t);let{mainAxis:g,crossAxis:m,alignmentAxis:d}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return c&&typeof d=="number"&&(m=c==="end"?d*-1:d),l?{x:m*u,y:g*a}:{x:g*a,y:m*u}}const Zt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:s,placement:r,middlewareData:c}=e,l=await Ut(e,t);return r===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+l.x,y:s+l.y,data:{...l,placement:r}}}}},te=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:c={fn:R=>{let{x:y,y:v}=R;return{x:y,y:v}}},...l}=nt(t,e),a={x:n,y:o},u=await At(e,l),f=it(X(i)),g=Rt(f);let m=a[g],d=a[f];if(s){const R=g==="y"?"top":"left",y=g==="y"?"bottom":"right",v=m+u[R],C=m-u[y];m=pt(v,m,C)}if(r){const R=f==="y"?"top":"left",y=f==="y"?"bottom":"right",v=d+u[R],C=d-u[y];d=pt(v,d,C)}const w=c.fn({...e,[g]:m,[f]:d});return{...w,data:{x:w.x-n,y:w.y-o}}}}};function Y(t){return kt(t)?(t.nodeName||"").toLowerCase():"#document"}function L(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function I(t){var e;return(e=(kt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function kt(t){return t instanceof Node||t instanceof L(t).Node}function W(t){return t instanceof Element||t instanceof L(t).Element}function F(t){return t instanceof HTMLElement||t instanceof L(t).HTMLElement}function ht(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof L(t).ShadowRoot}function J(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=D(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function ee(t){return["table","td","th"].includes(Y(t))}function ut(t){const e=dt(),n=D(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function ne(t){let e=K(t);for(;F(e)&&!rt(e);){if(ut(e))return e;e=K(e)}return null}function dt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function rt(t){return["html","body","#document"].includes(Y(t))}function D(t){return L(t).getComputedStyle(t)}function st(t){return W(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function K(t){if(Y(t)==="html")return t;const e=t.assignedSlot||t.parentNode||ht(t)&&t.host||I(t);return ht(e)?e.host:e}function Pt(t){const e=K(t);return rt(e)?t.ownerDocument?t.ownerDocument.body:t.body:F(e)&&J(e)?e:Pt(e)}function ft(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Pt(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=L(i);return s?e.concat(r,r.visualViewport||[],J(i)?i:[],r.frameElement&&n?ft(r.frameElement):[]):e.concat(i,ft(i,[],n))}function Ot(t){const e=D(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=F(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,c=U(n)!==s||U(o)!==r;return c&&(n=s,o=r),{width:n,height:o,$:c}}function St(t){return W(t)?t:t.contextElement}function q(t){const e=St(t);if(!F(e))return $(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=Ot(e);let r=(s?U(n.width):n.width)/o,c=(s?U(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}const oe=$(0);function Lt(t){const e=L(t);return!dt()||!e.visualViewport?oe:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ie(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==L(t)?!1:e}function G(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=St(t);let r=$(1);e&&(o?W(o)&&(r=q(o)):r=q(t));const c=ie(s,n,o)?Lt(s):$(0);let l=(i.left+c.x)/r.x,a=(i.top+c.y)/r.y,u=i.width/r.x,f=i.height/r.y;if(s){const g=L(s),m=o&&W(o)?L(o):o;let d=g.frameElement;for(;d&&o&&m!==g;){const w=q(d),R=d.getBoundingClientRect(),y=D(d),v=R.left+(d.clientLeft+parseFloat(y.paddingLeft))*w.x,C=R.top+(d.clientTop+parseFloat(y.paddingTop))*w.y;l*=w.x,a*=w.y,u*=w.x,f*=w.y,l+=v,a+=C,d=L(d).frameElement}}return tt({width:u,height:f,x:l,y:a})}function re(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=F(n),s=I(n);if(n===s)return e;let r={scrollLeft:0,scrollTop:0},c=$(1);const l=$(0);if((i||!i&&o!=="fixed")&&((Y(n)!=="body"||J(s))&&(r=st(n)),F(n))){const a=G(n);c=q(n),l.x=a.x+n.clientLeft,l.y=a.y+n.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-r.scrollLeft*c.x+l.x,y:e.y*c.y-r.scrollTop*c.y+l.y}}function se(t){return Array.from(t.getClientRects())}function Tt(t){return G(I(t)).left+st(t).scrollLeft}function ce(t){const e=I(t),n=st(t),o=t.ownerDocument.body,i=z(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=z(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+Tt(t);const c=-n.scrollTop;return D(o).direction==="rtl"&&(r+=z(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:c}}function le(t,e){const n=L(t),o=I(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,c=0,l=0;if(i){s=i.width,r=i.height;const a=dt();(!a||a&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:s,height:r,x:c,y:l}}function ae(t,e){const n=G(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=F(t)?q(t):$(1),r=t.clientWidth*s.x,c=t.clientHeight*s.y,l=i*s.x,a=o*s.y;return{width:r,height:c,x:l,y:a}}function xt(t,e,n){let o;if(e==="viewport")o=le(t,n);else if(e==="document")o=ce(I(t));else if(W(e))o=ae(e,n);else{const i=Lt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return tt(o)}function Mt(t,e){const n=K(t);return n===e||!W(n)||rt(n)?!1:D(n).position==="fixed"||Mt(n,e)}function fe(t,e){const n=e.get(t);if(n)return n;let o=ft(t,[],!1).filter(c=>W(c)&&Y(c)!=="body"),i=null;const s=D(t).position==="fixed";let r=s?K(t):t;for(;W(r)&&!rt(r);){const c=D(r),l=ut(r);!l&&c.position==="fixed"&&(i=null),(s?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||J(r)&&!l&&Mt(t,r))?o=o.filter(u=>u!==r):i=c,r=K(r)}return e.set(t,o),o}function ue(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?fe(e,this._c):[].concat(n),o],c=r[0],l=r.reduce((a,u)=>{const f=xt(e,u,i);return a.top=z(f.top,a.top),a.right=lt(f.right,a.right),a.bottom=lt(f.bottom,a.bottom),a.left=z(f.left,a.left),a},xt(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function de(t){const{width:e,height:n}=Ot(t);return{width:e,height:n}}function me(t,e,n){const o=F(e),i=I(e),s=n==="fixed",r=G(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=$(0);if(o||!o&&!s)if((Y(e)!=="body"||J(i))&&(c=st(e)),o){const a=G(e,!0,s,e);l.x=a.x+e.clientLeft,l.y=a.y+e.clientTop}else i&&(l.x=Tt(i));return{x:r.left+c.scrollLeft-l.x,y:r.top+c.scrollTop-l.y,width:r.width,height:r.height}}function wt(t,e){return!F(t)||D(t).position==="fixed"?null:e?e(t):t.offsetParent}function Dt(t,e){const n=L(t);if(!F(t))return n;let o=wt(t,e);for(;o&&ee(o)&&D(o).position==="static";)o=wt(o,e);return o&&(Y(o)==="html"||Y(o)==="body"&&D(o).position==="static"&&!ut(o))?n:o||ne(t)||n}const pe=async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||Dt,s=this.getDimensions;return{reference:me(e,await i(n),o),floating:{x:0,y:0,...await s(n)}}};function ge(t){return D(t).direction==="rtl"}const he={convertOffsetParentRelativeRectToViewportRelativeRect:re,getDocumentElement:I,getClippingRect:ue,getOffsetParent:Dt,getElementRects:pe,getClientRects:se,getDimensions:de,getScale:q,isElement:W,isRTL:ge},xe=te,we=Qt,ye=(t,e,n)=>{const o=new Map,i={platform:he,...n},s={...i.platform,_c:o};return Jt(t,e,{...i,platform:s})};var Q=typeof document<"u"?p.useLayoutEffect:p.useEffect;function et(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,i;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(o=n;o--!==0;)if(!et(t[o],e[o]))return!1;return!0}if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(e,i[o]))return!1;for(o=n;o--!==0;){const s=i[o];if(!(s==="_owner"&&t.$$typeof)&&!et(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}function Nt(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function yt(t,e){const n=Nt(t);return Math.round(e*n)/n}function vt(t){const e=p.useRef(t);return Q(()=>{e.current=t}),e}function ve(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:s,floating:r}={},transform:c=!0,whileElementsMounted:l,open:a}=t,[u,f]=p.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[g,m]=p.useState(o);et(g,o)||m(o);const[d,w]=p.useState(null),[R,y]=p.useState(null),v=p.useCallback(x=>{x!==S.current&&(S.current=x,w(x))},[]),C=p.useCallback(x=>{x!==k.current&&(k.current=x,y(x))},[]),b=s||d,h=r||R,S=p.useRef(null),k=p.useRef(null),T=p.useRef(u),V=l!=null,B=vt(l),_=vt(i),A=p.useCallback(()=>{if(!S.current||!k.current)return;const x={placement:e,strategy:n,middleware:g};_.current&&(x.platform=_.current),ye(S.current,k.current,x).then(j=>{const N={...j,isPositioned:!0};P.current&&!et(T.current,N)&&(T.current=N,bt.flushSync(()=>{f(N)}))})},[g,e,n,_]);Q(()=>{a===!1&&T.current.isPositioned&&(T.current.isPositioned=!1,f(x=>({...x,isPositioned:!1})))},[a]);const P=p.useRef(!1);Q(()=>(P.current=!0,()=>{P.current=!1}),[]),Q(()=>{if(b&&(S.current=b),h&&(k.current=h),b&&h){if(B.current)return B.current(b,h,A);A()}},[b,h,A,B,V]);const O=p.useMemo(()=>({reference:S,floating:k,setReference:v,setFloating:C}),[v,C]),E=p.useMemo(()=>({reference:b,floating:h}),[b,h]),M=p.useMemo(()=>{const x={position:n,left:0,top:0};if(!E.floating)return x;const j=yt(E.floating,u.x),N=yt(E.floating,u.y);return c?{...x,transform:"translate("+j+"px, "+N+"px)",...Nt(E.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:j,top:N}},[n,c,E.floating,u.x,u.y]);return p.useMemo(()=>({...u,update:A,refs:O,elements:E,floatingStyles:M}),[u,A,O,E,M])}function be(t,...e){t&&t.addEventListener&&t.addEventListener(...e)}function Re(t,...e){t&&t.removeEventListener&&t.removeEventListener(...e)}const Ce=["mousedown","touchstart"],Ee=(t,e,n=Ce)=>{const o=p.useRef(e);p.useEffect(()=>{o.current=e},[e]),p.useEffect(()=>{const i=s=>{const{current:r}=t;r&&!r.contains(s.target)&&o.current(s)};for(const s of n)be(document,s,i);return()=>{for(const s of n)Re(document,s,i)}},[n,t])},Ae=()=>{const t=p.useContext(Ft);return jt?t.to||document.body:null},Ft=p.createContext({to:void 0});Ft.Provider;const ke=t=>{const e=Bt(),n=Ae();return e?bt.createPortal(t.children,t.to||n||document.body):null},Pe=p.createContext(null),Fe=function(e){const{headless:n=!1,wrapperClassName:o,TriggerComponent:i,triggerElement:s,trigger:r="hover",padding:c,offset:l,popoverWrapperClassNames:a,popoverClassNames:u,debug:f,animate:g=!0,as:m="div",type:d="popover",triggerComponentProps:w,isDisabled:R,onOpen:y,onClose:v,to:C,...b}=e,[h,S]=p.useState(!1),{x:k,y:T,refs:V,strategy:B,isPositioned:_}=ve({middleware:b.middleware??[we({padding:c??20}),Zt(l??10),xe()],strategy:b.strategy,placement:b.placement??"bottom-start",whileElementsMounted:b.whileElementsMounted}),A=p.useRef(null);Ee(A,()=>{(r=="click"||r=="both")&&P()});const P=p.useCallback(()=>{f||S(!1)},[f]),O=_t(()=>{R||S(!0)}),E=p.useCallback(()=>{P()},[P]),M=p.useMemo(()=>{const N={};switch(r){case"click":return{...N,onClick:O};case"hover":return{...N,onMouseOver:O,onMouseOut:P};case"both":return{...N,onClick:O,onMouseOver:O,onMouseOut:E}}},[P,O,E,r]),x=H.jsxs(m,{role:r==="both"||r==="click"?"button":"note",className:ct("inline-block",o),ref:V.setReference,...M,children:[s,!!i&&Vt.cloneElement(p.createElement(i,w),{tabIndex:0})]});p.useEffect(()=>{V.floating.current&&h&&d==="popover"&&V.floating.current.focus()},[h]),p.useEffect(()=>{h?y==null||y():v==null||v()},[h]);const j=p.useMemo(()=>({close:P}),[P]);return e.children?H.jsxs(H.Fragment,{children:[x,H.jsx(Ht,{children:h&&H.jsx(ke,{to:C,children:H.jsx(mt.div,{className:ct("float-popover","relative z-[99]",a),...r==="hover"||r==="both"?M:{},ref:A,children:H.jsx(mt.div,{tabIndex:-1,role:d==="tooltip"?"tooltip":"dialog",className:ct(!n&&["!shadow-out-sm focus:!shadow-out-sm focus-visible:!shadow-out-sm","rounded-xl border border-zinc-400/20 p-4 shadow-lg outline-none backdrop-blur-lg dark:border-zinc-500/30","bg-slate-50/80 dark:bg-neutral-900/80"],"relative z-[2]",d==="tooltip"?"max-w-[25rem] break-all rounded-xl px-4 py-2":"",u),ref:V.setFloating,initial:{translateY:"10px",opacity:0},animate:{translateY:"0px",opacity:1},exit:{translateY:"10px",opacity:0},transition:Wt,style:{position:B,top:T??"",left:k??"",visibility:_&&k!==null?"visible":"hidden"},children:H.jsx(Pe.Provider,{value:j,children:e.children})})})})})]}):x};export{Fe as F,ke as R};
