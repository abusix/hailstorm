import{r as u,R as h,a as Te}from"./index-8db94870.js";import{c as z,o as E,t as Me,D as R,y as M,d as ne,u as S,X as O,T as nt,s as Ie,l as V,a as ce,S as ye,I as re,b as rt,j as B,e as ot}from"./keyboard-5e933fe8.js";import{p as Oe,r as lt}from"./bugs-7a186658.js";import{c as Ce,p as Se}from"./hidden-c4917ca2.js";import{O as ue,M as X,y as _,N as it}from"./focus-management-d35c5d70.js";import{s as at,C as xe,d as P,H as ut,c as st}from"./open-closed-535072ce.js";import{m as ke,f as de,t as ct,c as dt}from"./use-flags-cf9437e9.js";import{n as oe}from"./use-owner-470a7b02.js";import{r as ft}from"./index-8ce4a492.js";import{b as pt,M as mt}from"./description-e80611a4.js";var te=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(te||{});function vt(){let e=u.useRef(0);return at("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function je(e,t,n,r){let i=z(n);u.useEffect(()=>{e=e??window;function a(o){i.current(o)}return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)},[e,t,r])}function ht(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function Ue(e){let t=E(e),n=u.useRef(!1);u.useEffect(()=>(n.current=!1,()=>{n.current=!0,Me(()=>{n.current&&t()})}),[t])}function We(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let gt="div";var _e=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(_e||{});function Et(e,t){let n=u.useRef(null),r=M(n,t),{initialFocus:i,containers:a,features:o=30,...l}=e;ne()||(o=1);let s=oe(n);wt({ownerDocument:s},!!(o&16));let c=Tt({ownerDocument:s,container:n,initialFocus:i},!!(o&2));yt({ownerDocument:s,container:n,containers:a,previousActiveElement:c},!!(o&8));let d=vt(),T=E(p=>{let v=n.current;v&&(g=>g())(()=>{S(d.current,{[te.Forwards]:()=>{ue(v,X.First,{skipElements:[p.relatedTarget]})},[te.Backwards]:()=>{ue(v,X.Last,{skipElements:[p.relatedTarget]})}})})}),$=Oe(),m=u.useRef(!1),f={ref:r,onKeyDown(p){p.key=="Tab"&&(m.current=!0,$.requestAnimationFrame(()=>{m.current=!1}))},onBlur(p){let v=We(a);n.current instanceof HTMLElement&&v.add(n.current);let g=p.relatedTarget;g instanceof HTMLElement&&g.dataset.headlessuiFocusGuard!=="true"&&(Ve(v,g)||(m.current?ue(n.current,S(d.current,{[te.Forwards]:()=>X.Next,[te.Backwards]:()=>X.Previous})|X.WrapAround,{relativeTo:p.target}):p.target instanceof HTMLElement&&_(p.target)))}};return h.createElement(h.Fragment,null,!!(o&4)&&h.createElement(Ce,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:T,features:Se.Focusable}),O({ourProps:f,theirProps:l,defaultTag:gt,name:"FocusTrap"}),!!(o&4)&&h.createElement(Ce,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:T,features:Se.Focusable}))}let bt=R(Et),Z=Object.assign(bt,{features:_e}),H=[];ht(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&H[0]!==t.target&&(H.unshift(t.target),H=H.filter(n=>n!=null&&n.isConnected),H.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function $t(e=!0){let t=u.useRef(H.slice());return ke(([n],[r])=>{r===!0&&n===!1&&Me(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=H.slice())},[e,H,t]),E(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function wt({ownerDocument:e},t){let n=$t(t);ke(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&_(n())},[t]),Ue(()=>{t&&_(n())})}function Tt({ownerDocument:e,container:t,initialFocus:n},r){let i=u.useRef(null),a=de();return ke(()=>{if(!r)return;let o=t.current;o&&Me(()=>{if(!a.current)return;let l=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===l){i.current=l;return}}else if(o.contains(l)){i.current=l;return}n!=null&&n.current?_(n.current):ue(o,X.First)===it.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),i.current=e==null?void 0:e.activeElement})},[r]),i}function yt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},i){let a=de();je(e==null?void 0:e.defaultView,"focus",o=>{if(!i||!a.current)return;let l=We(n);t.current instanceof HTMLElement&&l.add(t.current);let s=r.current;if(!s)return;let c=o.target;c&&c instanceof HTMLElement?Ve(l,c)?(r.current=c,_(c)):(o.preventDefault(),o.stopPropagation(),_(s)):_(r.current)},!0)}function Ve(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Ye=u.createContext(!1);function Ct(){return u.useContext(Ye)}function Le(e){return h.createElement(Ye.Provider,{value:e.force},e.children)}function St(e){let t=Ct(),n=u.useContext(qe),r=oe(e),[i,a]=u.useState(()=>{if(!t&&n!==null||Ie.isServer)return null;let o=r==null?void 0:r.getElementById("headlessui-portal-root");if(o)return o;if(r===null)return null;let l=r.createElement("div");return l.setAttribute("id","headlessui-portal-root"),r.body.appendChild(l)});return u.useEffect(()=>{i!==null&&(r!=null&&r.body.contains(i)||r==null||r.body.appendChild(i))},[i,r]),u.useEffect(()=>{t||n!==null&&a(n.current)},[n,a,t]),i}let Lt=u.Fragment;function Pt(e,t){let n=e,r=u.useRef(null),i=M(nt(d=>{r.current=d}),t),a=oe(r),o=St(r),[l]=u.useState(()=>{var d;return Ie.isServer?null:(d=a==null?void 0:a.createElement("div"))!=null?d:null}),s=u.useContext(Pe),c=ne();return V(()=>{!o||!l||o.contains(l)||(l.setAttribute("data-headlessui-portal",""),o.appendChild(l))},[o,l]),V(()=>{if(l&&s)return s.register(l)},[s,l]),Ue(()=>{var d;!o||!l||(l instanceof Node&&o.contains(l)&&o.removeChild(l),o.childNodes.length<=0&&((d=o.parentElement)==null||d.removeChild(o)))}),c?!o||!l?null:ft.createPortal(O({ourProps:{ref:i},theirProps:n,defaultTag:Lt,name:"Portal"}),l):null}let Rt=u.Fragment,qe=u.createContext(null);function Dt(e,t){let{target:n,...r}=e,i={ref:M(t)};return h.createElement(qe.Provider,{value:n},O({ourProps:i,theirProps:r,defaultTag:Rt,name:"Popover.Group"}))}let Pe=u.createContext(null);function Ft(){let e=u.useContext(Pe),t=u.useRef([]),n=E(a=>(t.current.push(a),e&&e.register(a),()=>r(a))),r=E(a=>{let o=t.current.indexOf(a);o!==-1&&t.current.splice(o,1),e&&e.unregister(a)}),i=u.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,u.useMemo(()=>function({children:a}){return h.createElement(Pe.Provider,{value:i},a)},[i])]}let Mt=R(Pt),Ot=R(Dt),Re=Object.assign(Mt,{Group:Ot}),Ae=u.createContext(()=>{});Ae.displayName="StackContext";var De=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(De||{});function xt(){return u.useContext(Ae)}function kt({children:e,onUpdate:t,type:n,element:r,enabled:i}){let a=xt(),o=E((...l)=>{t==null||t(...l),a(...l)});return V(()=>{let l=i===void 0||i===!0;return l&&o(0,n,r),()=>{l&&o(1,n,r)}},[o,n,r,i]),h.createElement(Ae.Provider,{value:o},e)}function At(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Nt=typeof Object.is=="function"?Object.is:At,{useState:Ht,useEffect:Bt,useLayoutEffect:It,useDebugValue:jt}=Te;function Ut(e,t,n){const r=t(),[{inst:i},a]=Ht({inst:{value:r,getSnapshot:t}});return It(()=>{i.value=r,i.getSnapshot=t,Ee(i)&&a({inst:i})},[e,r,t]),Bt(()=>(Ee(i)&&a({inst:i}),e(()=>{Ee(i)&&a({inst:i})})),[e]),jt(r),r}function Ee(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Nt(n,r)}catch{return!0}}function Wt(e,t,n){return t()}const _t=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Vt=!_t,Yt=Vt?Wt:Ut,qt="useSyncExternalStore"in Te?(e=>e.useSyncExternalStore)(Te):Yt;function Gt(e){return qt(e.subscribe,e.getSnapshot,e.getSnapshot)}function Xt(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(i){return r.add(i),()=>r.delete(i)},dispatch(i,...a){let o=t[i].call(n,...a);o&&(n=o,r.forEach(l=>l()))}}}function zt(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,i=r.clientWidth-r.offsetWidth,a=e-i;n.style(r,"paddingRight",`${a}px`)}}}function Jt(){if(!ct())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function i(o){return r.containers.flatMap(l=>l()).some(l=>l.contains(o))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let a=null;n.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let l=o.target.closest("a");if(!l)return;let{hash:s}=new URL(l.href),c=t.querySelector(s);c&&!i(c)&&(a=c)}catch{}},!0),n.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!i(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),a&&a.isConnected&&(a.scrollIntoView({block:"nearest"}),a=null)})}}}function Kt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Qt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let W=Xt(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:ce(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Qt(n)},i=[Jt(),zt(),Kt()];i.forEach(({before:a})=>a==null?void 0:a(r)),i.forEach(({after:a})=>a==null?void 0:a(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});W.subscribe(()=>{let e=W.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",i=n.count!==0;(i&&!r||!i&&r)&&W.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&W.dispatch("TEARDOWN",n)}});function Zt(e,t,n){let r=Gt(W),i=e?r.get(e):void 0,a=i?i.count>0:!1;return V(()=>{if(!(!e||!t))return W.dispatch("PUSH",e,n),()=>W.dispatch("POP",e,n)},[t,e]),a}let be=new Map,ee=new Map;function He(e,t=!0){V(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function i(){var o;if(!r)return;let l=(o=ee.get(r))!=null?o:1;if(l===1?ee.delete(r):ee.set(r,l-1),l!==1)return;let s=be.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,be.delete(r))}let a=(n=ee.get(r))!=null?n:0;return ee.set(r,a+1),a!==0||(be.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),i},[e,t])}function en({defaultContainers:e=[],portals:t}={}){let n=u.useRef(null),r=oe(n),i=E(()=>{var a;let o=[];for(let l of e)l!==null&&(l instanceof HTMLElement?o.push(l):"current"in l&&l.current instanceof HTMLElement&&o.push(l.current));if(t!=null&&t.current)for(let l of t.current)o.push(l);for(let l of(a=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?a:[])l!==document.body&&l!==document.head&&l instanceof HTMLElement&&l.id!=="headlessui-portal-root"&&(l.contains(n.current)||o.some(s=>l.contains(s))||o.push(l));return o});return{resolveContainers:i,contains:E(a=>i().some(o=>o.contains(a))),mainTreeNodeRef:n,MainTreeNode:u.useMemo(()=>function(){return h.createElement(Ce,{features:Se.Hidden,ref:n})},[n])}}var tn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(tn||{}),nn=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(nn||{});let rn={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},se=u.createContext(null);se.displayName="DialogContext";function le(e){let t=u.useContext(se);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,le),n}return t}function on(e,t,n=()=>[document.body]){Zt(e,t,r=>{var i;return{containers:[...(i=r.containers)!=null?i:[],n]}})}function ln(e,t){return S(t.type,rn,e,t)}let an="div",un=ye.RenderStrategy|ye.Static;function sn(e,t){var n;let r=re(),{id:i=`headlessui-dialog-${r}`,open:a,onClose:o,initialFocus:l,__demoMode:s=!1,...c}=e,[d,T]=u.useState(0),$=xe();a===void 0&&$!==null&&(a=($&P.Open)===P.Open);let m=u.useRef(null),f=M(m,t),p=oe(m),v=e.hasOwnProperty("open")||$!==null,g=e.hasOwnProperty("onClose");if(!v&&!g)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!v)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!g)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof a!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${a}`);if(typeof o!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);let b=a?0:1,[y,C]=u.useReducer(ln,{titleId:null,descriptionId:null,panelRef:u.createRef()}),D=E(()=>o(!1)),J=E(w=>C({type:0,id:w})),x=ne()?s?!1:b===0:!1,k=d>1,Y=u.useContext(se)!==null,[K,q]=Ft(),{resolveContainers:I,mainTreeNodeRef:N,MainTreeNode:ve}=en({portals:K,defaultContainers:[(n=y.panelRef.current)!=null?n:m.current]}),j=k?"parent":"leaf",ie=$!==null?($&P.Closing)===P.Closing:!1,he=(()=>Y||ie?!1:x)(),G=u.useCallback(()=>{var w,A;return(A=Array.from((w=p==null?void 0:p.querySelectorAll("body > *"))!=null?w:[]).find(L=>L.id==="headlessui-portal-root"?!1:L.contains(N.current)&&L instanceof HTMLElement))!=null?A:null},[N]);He(G,he);let Q=(()=>k?!0:x)(),ge=u.useCallback(()=>{var w,A;return(A=Array.from((w=p==null?void 0:p.querySelectorAll("[data-headlessui-portal]"))!=null?w:[]).find(L=>L.contains(N.current)&&L instanceof HTMLElement))!=null?A:null},[N]);He(ge,Q);let F=(()=>!(!x||k))();ut(I,D,F);let Je=(()=>!(k||b!==0))();je(p==null?void 0:p.defaultView,"keydown",w=>{Je&&(w.defaultPrevented||w.key===rt.Escape&&(w.preventDefault(),w.stopPropagation(),D()))});let Ke=(()=>!(ie||b!==0||Y))();on(p,Ke,I),u.useEffect(()=>{if(b!==0||!m.current)return;let w=new ResizeObserver(A=>{for(let L of A){let ae=L.target.getBoundingClientRect();ae.x===0&&ae.y===0&&ae.width===0&&ae.height===0&&D()}});return w.observe(m.current),()=>w.disconnect()},[b,m,D]);let[Qe,Ze]=mt(),et=u.useMemo(()=>[{dialogState:b,close:D,setTitleId:J},y],[b,y,D,J]),Ne=u.useMemo(()=>({open:b===0}),[b]),tt={ref:f,id:i,role:"dialog","aria-modal":b===0?!0:void 0,"aria-labelledby":y.titleId,"aria-describedby":Qe};return h.createElement(kt,{type:"Dialog",enabled:b===0,element:m,onUpdate:E((w,A)=>{A==="Dialog"&&S(w,{[De.Add]:()=>T(L=>L+1),[De.Remove]:()=>T(L=>L-1)})})},h.createElement(Le,{force:!0},h.createElement(Re,null,h.createElement(se.Provider,{value:et},h.createElement(Re.Group,{target:m},h.createElement(Le,{force:!1},h.createElement(Ze,{slot:Ne,name:"Dialog.Description"},h.createElement(Z,{initialFocus:l,containers:I,features:x?S(j,{parent:Z.features.RestoreFocus,leaf:Z.features.All&~Z.features.FocusLock}):Z.features.None},h.createElement(q,null,O({ourProps:tt,theirProps:c,slot:Ne,defaultTag:an,features:un,visible:b===0,name:"Dialog"}))))))))),h.createElement(ve,null))}let cn="div";function dn(e,t){let n=re(),{id:r=`headlessui-dialog-overlay-${n}`,...i}=e,[{dialogState:a,close:o}]=le("Dialog.Overlay"),l=M(t),s=E(d=>{if(d.target===d.currentTarget){if(lt(d.currentTarget))return d.preventDefault();d.preventDefault(),d.stopPropagation(),o()}}),c=u.useMemo(()=>({open:a===0}),[a]);return O({ourProps:{ref:l,id:r,"aria-hidden":!0,onClick:s},theirProps:i,slot:c,defaultTag:cn,name:"Dialog.Overlay"})}let fn="div";function pn(e,t){let n=re(),{id:r=`headlessui-dialog-backdrop-${n}`,...i}=e,[{dialogState:a},o]=le("Dialog.Backdrop"),l=M(t);u.useEffect(()=>{if(o.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[o.panelRef]);let s=u.useMemo(()=>({open:a===0}),[a]);return h.createElement(Le,{force:!0},h.createElement(Re,null,O({ourProps:{ref:l,id:r,"aria-hidden":!0},theirProps:i,slot:s,defaultTag:fn,name:"Dialog.Backdrop"})))}let mn="div";function vn(e,t){let n=re(),{id:r=`headlessui-dialog-panel-${n}`,...i}=e,[{dialogState:a},o]=le("Dialog.Panel"),l=M(t,o.panelRef),s=u.useMemo(()=>({open:a===0}),[a]),c=E(d=>{d.stopPropagation()});return O({ourProps:{ref:l,id:r,onClick:c},theirProps:i,slot:s,defaultTag:mn,name:"Dialog.Panel"})}let hn="h2";function gn(e,t){let n=re(),{id:r=`headlessui-dialog-title-${n}`,...i}=e,[{dialogState:a,setTitleId:o}]=le("Dialog.Title"),l=M(t);u.useEffect(()=>(o(r),()=>o(null)),[r,o]);let s=u.useMemo(()=>({open:a===0}),[a]);return O({ourProps:{ref:l,id:r},theirProps:i,slot:s,defaultTag:hn,name:"Dialog.Title"})}let En=R(sn),bn=R(pn),$n=R(vn),wn=R(dn),Tn=R(gn),Xn=Object.assign(En,{Backdrop:bn,Panel:$n,Overlay:wn,Title:Tn,Description:pt});function yn(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function $e(e,...t){e&&t.length>0&&e.classList.add(...t)}function we(e,...t){e&&t.length>0&&e.classList.remove(...t)}function Cn(e,t){let n=ce();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[a,o]=[r,i].map(s=>{let[c=0]=s.split(",").filter(Boolean).map(d=>d.includes("ms")?parseFloat(d):parseFloat(d)*1e3).sort((d,T)=>T-d);return c}),l=a+o;if(l!==0){n.group(c=>{c.setTimeout(()=>{t(),c.dispose()},l),c.addEventListener(e,"transitionrun",d=>{d.target===d.currentTarget&&c.dispose()})});let s=n.addEventListener(e,"transitionend",c=>{c.target===c.currentTarget&&(t(),s())})}else t();return n.add(()=>t()),n.dispose}function Sn(e,t,n,r){let i=n?"enter":"leave",a=ce(),o=r!==void 0?yn(r):()=>{};i==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let l=S(i,{enter:()=>t.enter,leave:()=>t.leave}),s=S(i,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),c=S(i,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return we(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),$e(e,...l,...c),a.nextFrame(()=>{we(e,...c),$e(e,...s),Cn(e,()=>(we(e,...l),$e(e,...t.entered),o()))}),a.dispose}function Ln({container:e,direction:t,classes:n,onStart:r,onStop:i}){let a=de(),o=Oe(),l=z(t);V(()=>{let s=ce();o.add(s.dispose);let c=e.current;if(c&&l.current!=="idle"&&a.current)return s.dispose(),r.current(l.current),s.add(Sn(c,n.current,l.current==="enter",()=>{s.dispose(),i.current(l.current)})),s.dispose},[t])}function U(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let fe=u.createContext(null);fe.displayName="TransitionContext";var Pn=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Pn||{});function Rn(){let e=u.useContext(fe);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function Dn(){let e=u.useContext(pe);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let pe=u.createContext(null);pe.displayName="NestingContext";function me(e){return"children"in e?me(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function Ge(e,t){let n=z(e),r=u.useRef([]),i=de(),a=Oe(),o=E((m,f=B.Hidden)=>{let p=r.current.findIndex(({el:v})=>v===m);p!==-1&&(S(f,{[B.Unmount](){r.current.splice(p,1)},[B.Hidden](){r.current[p].state="hidden"}}),a.microTask(()=>{var v;!me(r)&&i.current&&((v=n.current)==null||v.call(n))}))}),l=E(m=>{let f=r.current.find(({el:p})=>p===m);return f?f.state!=="visible"&&(f.state="visible"):r.current.push({el:m,state:"visible"}),()=>o(m,B.Unmount)}),s=u.useRef([]),c=u.useRef(Promise.resolve()),d=u.useRef({enter:[],leave:[],idle:[]}),T=E((m,f,p)=>{s.current.splice(0),t&&(t.chains.current[f]=t.chains.current[f].filter(([v])=>v!==m)),t==null||t.chains.current[f].push([m,new Promise(v=>{s.current.push(v)})]),t==null||t.chains.current[f].push([m,new Promise(v=>{Promise.all(d.current[f].map(([g,b])=>b)).then(()=>v())})]),f==="enter"?c.current=c.current.then(()=>t==null?void 0:t.wait.current).then(()=>p(f)):p(f)}),$=E((m,f,p)=>{Promise.all(d.current[f].splice(0).map(([v,g])=>g)).then(()=>{var v;(v=s.current.shift())==null||v()}).then(()=>p(f))});return u.useMemo(()=>({children:r,register:l,unregister:o,onStart:T,onStop:$,wait:c,chains:d}),[l,o,r,T,$,d,c])}function Fn(){}let Mn=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Be(e){var t;let n={};for(let r of Mn)n[r]=(t=e[r])!=null?t:Fn;return n}function On(e){let t=u.useRef(Be(e));return u.useEffect(()=>{t.current=Be(e)},[e]),t}let xn="div",Xe=ye.RenderStrategy;function kn(e,t){let{beforeEnter:n,afterEnter:r,beforeLeave:i,afterLeave:a,enter:o,enterFrom:l,enterTo:s,entered:c,leave:d,leaveFrom:T,leaveTo:$,...m}=e,f=u.useRef(null),p=M(f,t),v=m.unmount?B.Unmount:B.Hidden,{show:g,appear:b,initial:y}=Rn(),[C,D]=u.useState(g?"visible":"hidden"),J=Dn(),{register:x,unregister:k}=J,Y=u.useRef(null);u.useEffect(()=>x(f),[x,f]),u.useEffect(()=>{if(v===B.Hidden&&f.current){if(g&&C!=="visible"){D("visible");return}return S(C,{hidden:()=>k(f),visible:()=>x(f)})}},[C,f,x,k,g,v]);let K=z({enter:U(o),enterFrom:U(l),enterTo:U(s),entered:U(c),leave:U(d),leaveFrom:U(T),leaveTo:U($)}),q=On({beforeEnter:n,afterEnter:r,beforeLeave:i,afterLeave:a}),I=ne();u.useEffect(()=>{if(I&&C==="visible"&&f.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[f,C,I]);let N=y&&!b,ve=(()=>!I||N||Y.current===g?"idle":g?"enter":"leave")(),j=dt(0),ie=E(F=>S(F,{enter:()=>{j.addFlag(P.Opening),q.current.beforeEnter()},leave:()=>{j.addFlag(P.Closing),q.current.beforeLeave()},idle:()=>{}})),he=E(F=>S(F,{enter:()=>{j.removeFlag(P.Opening),q.current.afterEnter()},leave:()=>{j.removeFlag(P.Closing),q.current.afterLeave()},idle:()=>{}})),G=Ge(()=>{D("hidden"),k(f)},J);Ln({container:f,classes:K,direction:ve,onStart:z(F=>{G.onStart(f,F,ie)}),onStop:z(F=>{G.onStop(f,F,he),F==="leave"&&!me(G)&&(D("hidden"),k(f))})}),u.useEffect(()=>{N&&(v===B.Hidden?Y.current=null:Y.current=g)},[g,N,C]);let Q=m,ge={ref:p};return b&&g&&y&&(Q={...Q,className:ot(m.className,...K.current.enter,...K.current.enterFrom)}),h.createElement(pe.Provider,{value:G},h.createElement(st,{value:S(C,{visible:P.Open,hidden:P.Closed})|j.flags},O({ourProps:ge,theirProps:Q,defaultTag:xn,features:Xe,visible:C==="visible",name:"Transition.Child"})))}function An(e,t){let{show:n,appear:r=!1,unmount:i,...a}=e,o=u.useRef(null),l=M(o,t);ne();let s=xe();if(n===void 0&&s!==null&&(n=(s&P.Open)===P.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[c,d]=u.useState(n?"visible":"hidden"),T=Ge(()=>{d("hidden")}),[$,m]=u.useState(!0),f=u.useRef([n]);V(()=>{$!==!1&&f.current[f.current.length-1]!==n&&(f.current.push(n),m(!1))},[f,n]);let p=u.useMemo(()=>({show:n,appear:r,initial:$}),[n,r,$]);u.useEffect(()=>{if(n)d("visible");else if(!me(T))d("hidden");else{let y=o.current;if(!y)return;let C=y.getBoundingClientRect();C.x===0&&C.y===0&&C.width===0&&C.height===0&&d("hidden")}},[n,T]);let v={unmount:i},g=E(()=>{var y;$&&m(!1),(y=e.beforeEnter)==null||y.call(e)}),b=E(()=>{var y;$&&m(!1),(y=e.beforeLeave)==null||y.call(e)});return h.createElement(pe.Provider,{value:T},h.createElement(fe.Provider,{value:p},O({ourProps:{...v,as:u.Fragment,children:h.createElement(ze,{ref:l,...v,...a,beforeEnter:g,beforeLeave:b})},theirProps:{},defaultTag:u.Fragment,features:Xe,visible:c==="visible",name:"Transition"})))}function Nn(e,t){let n=u.useContext(fe)!==null,r=xe()!==null;return h.createElement(h.Fragment,null,!n&&r?h.createElement(Fe,{ref:t,...e}):h.createElement(ze,{ref:t,...e}))}let Fe=R(An),ze=R(kn),Hn=R(Nn),zn=Object.assign(Fe,{Child:Hn,Root:Fe});export{zn as $,Xn as _};
//# sourceMappingURL=transition-e050fb10.js.map