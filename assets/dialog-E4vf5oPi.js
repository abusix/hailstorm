import{r as u,R as c}from"./index-0d5eMwbi.js";import{o as Fe}from"./keyboard-D0BTZntQ.js";import{E as te}from"./use-event-listener-EaZKqAMH.js";import{x as j,n as ne,c as he,t as $e,R as be,f as Te,m as ye,l as W,r as De,X as ke}from"./portal-BQQr4JoD.js";import{n as Re,K as I,y as x,o as k,u as Y,p as Pe,L,c as re,O as Z}from"./use-sync-refs-DhZgiOVe.js";import{y as Ie}from"./use-inert-others-D4nVU6H_.js";import{u as Ce,a as M,b as Se,R as Le,O as _}from"./use-tab-direction-CvE89ORz.js";import{l as oe}from"./use-server-handoff-complete-UouYGEcd.js";import{C as Me}from"./close-provider-CZp7Lqob.js";import{u as ae,i as O,s as Oe}from"./open-closed-FM4Rfwkx.js";import{H as xe,w as He}from"./description-CaDbXm72.js";import{f as le}from"./use-is-mounted-DN0doZLi.js";import{m as U,r as N}from"./active-element-history-DjNnwGR_.js";import{f as Q,s as X}from"./hidden-DfUyyskI.js";import{P as S,F as $,I as F,T as J}from"./focus-management-CKkqTXfi.js";import{z as Ae,F as ue}from"./transition-BD9NB0Zn.js";function Be(e,t=typeof document<"u"?document.defaultView:null,n){let r=j(e,"escape");te(t,"keydown",o=>{r&&(o.defaultPrevented||o.key===Fe.Escape&&n(o))})}function Ne(){var e;let[t]=u.useState(()=>typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(pointer: coarse)"):null),[n,r]=u.useState((e=t==null?void 0:t.matches)!=null?e:!1);return Re(()=>{if(!t)return;function o(l){r(l.matches)}return t.addEventListener("change",o),()=>t.removeEventListener("change",o)},[t]),n}function ie(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let Ye="div";var D=(e=>(e[e.None=0]="None",e[e.InitialFocus=1]="InitialFocus",e[e.TabLock=2]="TabLock",e[e.FocusLock=4]="FocusLock",e[e.RestoreFocus=8]="RestoreFocus",e[e.AutoFocus=16]="AutoFocus",e))(D||{});function je(e,t){let n=u.useRef(null),r=x(n,t),{initialFocus:o,initialFocusFallback:l,containers:s,features:a=15,...d}=e;oe()||(a=0);let i=ne(n);qe(a,{ownerDocument:i});let f=Ge(a,{ownerDocument:i,container:n,initialFocus:o,initialFocusFallback:l});Ke(a,{ownerDocument:i,container:n,containers:s,previousActiveElement:f});let R=Ce(),b=k(m=>{let h=n.current;h&&(v=>v())(()=>{Y(R.current,{[M.Forwards]:()=>{S(h,$.First,{skipElements:[m.relatedTarget,l]})},[M.Backwards]:()=>{S(h,$.Last,{skipElements:[m.relatedTarget,l]})}})})}),E=j(!!(a&2),"focus-trap#tab-lock"),g=Pe(),T=u.useRef(!1),y={ref:r,onKeyDown(m){m.key=="Tab"&&(T.current=!0,g.requestAnimationFrame(()=>{T.current=!1}))},onBlur(m){if(!(a&4))return;let h=ie(s);n.current instanceof HTMLElement&&h.add(n.current);let v=m.relatedTarget;v instanceof HTMLElement&&v.dataset.headlessuiFocusGuard!=="true"&&(se(h,v)||(T.current?S(n.current,Y(R.current,{[M.Forwards]:()=>$.Next,[M.Backwards]:()=>$.Previous})|$.WrapAround,{relativeTo:m.target}):m.target instanceof HTMLElement&&F(m.target)))}},w=L();return c.createElement(c.Fragment,null,E&&c.createElement(Q,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:b,features:X.Focusable}),w({ourProps:y,theirProps:d,defaultTag:Ye,name:"FocusTrap"}),E&&c.createElement(Q,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:b,features:X.Focusable}))}let Ue=I(je),Ve=Object.assign(Ue,{features:D});function ze(e=!0){let t=u.useRef(N.slice());return U(([n],[r])=>{r===!0&&n===!1&&re(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=N.slice())},[e,N,t]),k(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function qe(e,{ownerDocument:t}){let n=!!(e&8),r=ze(n);U(()=>{n||(t==null?void 0:t.activeElement)===(t==null?void 0:t.body)&&F(r())},[n]),he(()=>{n&&F(r())})}function Ge(e,{ownerDocument:t,container:n,initialFocus:r,initialFocusFallback:o}){let l=u.useRef(null),s=j(!!(e&1),"focus-trap#initial-focus"),a=le();return U(()=>{if(e===0)return;if(!s){o!=null&&o.current&&F(o.current);return}let d=n.current;d&&re(()=>{if(!a.current)return;let i=t==null?void 0:t.activeElement;if(r!=null&&r.current){if((r==null?void 0:r.current)===i){l.current=i;return}}else if(d.contains(i)){l.current=i;return}if(r!=null&&r.current)F(r.current);else{if(e&16){if(S(d,$.First|$.AutoFocus)!==J.Error)return}else if(S(d,$.First)!==J.Error)return;if(o!=null&&o.current&&(F(o.current),(t==null?void 0:t.activeElement)===o.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}l.current=t==null?void 0:t.activeElement})},[o,s,e]),l}function Ke(e,{ownerDocument:t,container:n,containers:r,previousActiveElement:o}){let l=le(),s=!!(e&4);te(t==null?void 0:t.defaultView,"focus",a=>{if(!s||!l.current)return;let d=ie(r);n.current instanceof HTMLElement&&d.add(n.current);let i=o.current;if(!i)return;let f=a.target;f&&f instanceof HTMLElement?se(d,f)?(o.current=f,F(f)):(a.preventDefault(),a.stopPropagation(),F(i)):F(o.current)},!0)}function se(e,t){for(let n of e)if(n.contains(t))return!0;return!1}var We=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(We||{}),Ze=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Ze||{});let _e={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},V=u.createContext(null);V.displayName="DialogContext";function H(e){let t=u.useContext(V);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,H),n}return t}function Qe(e,t){return Y(t.type,_e,e,t)}let ee=I(function(e,t){let n=u.useId(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:l,initialFocus:s,role:a="dialog",autoFocus:d=!0,__demoMode:i=!1,unmount:f=!1,...R}=e,b=u.useRef(!1);a=function(){return a==="dialog"||a==="alertdialog"?a:(b.current||(b.current=!0,console.warn(`Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let E=ae();o===void 0&&E!==null&&(o=(E&O.Open)===O.Open);let g=u.useRef(null),T=x(g,t),y=ne(g),w=o?0:1,[m,h]=u.useReducer(Qe,{titleId:null,descriptionId:null,panelRef:u.createRef()}),v=k(()=>l(!1)),z=k(p=>h({type:0,id:p})),P=oe()?w===0:!1,[ce,de]=$e(),fe={get current(){var p;return(p=m.panelRef.current)!=null?p:g.current}},A=Se(),{resolveContainers:B}=Le({mainTreeNode:A,portals:ce,defaultContainers:[fe]}),q=E!==null?(E&O.Closing)===O.Closing:!1;Ie(i||q?!1:P,{allowed:k(()=>{var p,K;return[(K=(p=g.current)==null?void 0:p.closest("[data-headlessui-portal]"))!=null?K:null]}),disallowed:k(()=>{var p;return[(p=A==null?void 0:A.closest("body > *:not(#headlessui-portal-root)"))!=null?p:null]})}),be(P,B,p=>{p.preventDefault(),v()}),Be(P,y==null?void 0:y.defaultView,p=>{p.preventDefault(),p.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),v()}),Te(i||q?!1:P,y,B),ye(P,g,v);let[pe,me]=He(),ve=u.useMemo(()=>[{dialogState:w,close:v,setTitleId:z,unmount:f},m],[w,m,v,z,f]),G=u.useMemo(()=>({open:w===0}),[w]),ge={ref:T,id:r,role:a,tabIndex:-1,"aria-modal":i?void 0:w===0?!0:void 0,"aria-labelledby":m.titleId,"aria-describedby":pe,unmount:f},Ee=!Ne(),C=D.None;P&&!i&&(C|=D.RestoreFocus,C|=D.TabLock,d&&(C|=D.AutoFocus),Ee&&(C|=D.InitialFocus));let we=L();return c.createElement(Oe,null,c.createElement(W,{force:!0},c.createElement(De,null,c.createElement(V.Provider,{value:ve},c.createElement(ke,{target:g},c.createElement(W,{force:!1},c.createElement(me,{slot:G},c.createElement(de,null,c.createElement(Ve,{initialFocus:s,initialFocusFallback:g,containers:B,features:C},c.createElement(Me,{value:v},we({ourProps:ge,theirProps:R,slot:G,defaultTag:Xe,features:Je,visible:w===0,name:"Dialog"})))))))))))}),Xe="div",Je=Z.RenderStrategy|Z.Static;function et(e,t){let{transition:n=!1,open:r,...o}=e,l=ae(),s=e.hasOwnProperty("open")||l!==null,a=e.hasOwnProperty("onClose");if(!s&&!a)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!s)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!a)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(!l&&typeof e.open!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);if(typeof e.onClose!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);return(r!==void 0||n)&&!o.static?c.createElement(_,null,c.createElement(Ae,{show:r,transition:n,unmount:o.unmount},c.createElement(ee,{ref:t,...o}))):c.createElement(_,null,c.createElement(ee,{ref:t,open:r,...o}))}let tt="div";function nt(e,t){let n=u.useId(),{id:r=`headlessui-dialog-panel-${n}`,transition:o=!1,...l}=e,[{dialogState:s,unmount:a},d]=H("Dialog.Panel"),i=x(t,d.panelRef),f=u.useMemo(()=>({open:s===0}),[s]),R=k(y=>{y.stopPropagation()}),b={ref:i,id:r,onClick:R},E=o?ue:u.Fragment,g=o?{unmount:a}:{},T=L();return c.createElement(E,{...g},T({ourProps:b,theirProps:l,slot:f,defaultTag:tt,name:"Dialog.Panel"}))}let rt="div";function ot(e,t){let{transition:n=!1,...r}=e,[{dialogState:o,unmount:l}]=H("Dialog.Backdrop"),s=u.useMemo(()=>({open:o===0}),[o]),a={ref:t,"aria-hidden":!0},d=n?ue:u.Fragment,i=n?{unmount:l}:{},f=L();return c.createElement(d,{...i},f({ourProps:a,theirProps:r,slot:s,defaultTag:rt,name:"Dialog.Backdrop"}))}let at="h2";function lt(e,t){let n=u.useId(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:l,setTitleId:s}]=H("Dialog.Title"),a=x(t);u.useEffect(()=>(s(r),()=>s(null)),[r,s]);let d=u.useMemo(()=>({open:l===0}),[l]),i={ref:a,id:r};return L()({ourProps:i,theirProps:o,slot:d,defaultTag:at,name:"Dialog.Title"})}let ut=I(et),it=I(nt);I(ot);let st=I(lt),kt=Object.assign(ut,{Panel:it,Title:st,Description:xe});export{st as Y,it as j,kt as y};
