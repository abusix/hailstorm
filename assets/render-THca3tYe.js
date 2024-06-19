import{r as i,R as $,$ as j}from"./index-aXz8NaAs.js";var R=Object.defineProperty,k=(e,t,n)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t,n)=>(k(e,typeof t!="symbol"?t+"":t,n),n);let x=class{constructor(){v(this,"current",this.detect()),v(this,"handoffState","pending"),v(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},y=new x,F=(e,t)=>{y.isServer?i.useEffect(e,t):i.useLayoutEffect(e,t)};function H(e){let t=i.useRef(e);return F(()=>{t.current=e},[e]),t}let T=function(e){let t=H(e);return $.useCallback((...n)=>t.current(...n),[t])};function A(){let e=typeof document>"u";return"useSyncExternalStore"in j?(t=>t.useSyncExternalStore)(j)(()=>()=>{},()=>!1,()=>!e):!1}function B(){let e=A(),[t,n]=i.useState(y.isHandoffComplete);return t&&y.isHandoffComplete===!1&&n(!1),i.useEffect(()=>{t!==!0&&n(!0)},[t]),i.useEffect(()=>y.handoff(),[]),e?!1:t}function w(e,t,...n){if(e in t){let r=t[e];return typeof r=="function"?r(...n):r}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,w),o}let N=Symbol();function L(e,t=!0){return Object.assign(e,{[N]:t})}function M(...e){let t=i.useRef(e);i.useEffect(()=>{t.current=e},[e]);let n=T(o=>{for(let r of t.current)r!=null&&(typeof r=="function"?r(o):r.current=o)});return e.every(o=>o==null||(o==null?void 0:o[N]))?void 0:n}function S(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var C=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(C||{}),P=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(P||{});function V({ourProps:e,theirProps:t,slot:n,defaultTag:o,features:r,visible:c=!0,name:u}){let s=O(t,e);if(c)return h(s,n,o,u);let p=r??0;if(p&2){let{static:a=!1,...d}=s;if(a)return h(d,n,o,u)}if(p&1){let{unmount:a=!0,...d}=s;return w(a?0:1,{0(){return null},1(){return h({...d,hidden:!0,style:{display:"none"}},n,o,u)}})}return h(s,n,o,u)}function h(e,t={},n,o){let{as:r=n,children:c,refName:u="ref",...s}=b(e,["unmount","static"]),p=e.ref!==void 0?{[u]:e.ref}:{},a=typeof c=="function"?c(t):c;"className"in s&&s.className&&typeof s.className=="function"&&(s.className=s.className(t));let d={};if(t){let l=!1,m=[];for(let[g,f]of Object.entries(t))typeof f=="boolean"&&(l=!0),f===!0&&m.push(g);l&&(d["data-headlessui-state"]=m.join(" "))}if(r===i.Fragment&&Object.keys(E(s)).length>0){if(!i.isValidElement(a)||Array.isArray(a)&&a.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${o} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`));let l=a.props,m=typeof(l==null?void 0:l.className)=="function"?(...f)=>S(l==null?void 0:l.className(...f),s.className):S(l==null?void 0:l.className,s.className),g=m?{className:m}:{};return i.cloneElement(a,Object.assign({},O(a.props,E(b(s,["ref"]))),d,p,I(a.ref,p.ref),g))}return i.createElement(r,Object.assign({},b(s,["ref"]),r!==i.Fragment&&p,r!==i.Fragment&&d),a)}function I(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function O(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let o of e)for(let r in o)r.startsWith("on")&&typeof o[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(o[r])):t[r]=o[r];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(o=>[o,void 0])));for(let o in n)Object.assign(t,{[o](r,...c){let u=n[o];for(let s of u){if((r instanceof Event||(r==null?void 0:r.nativeEvent)instanceof Event)&&r.defaultPrevented)return;s(r,...c)}}});return t}function W(e){var t;return Object.assign(i.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function E(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function b(e,t=[]){let n=Object.assign({},e);for(let o of t)o in n&&delete n[o];return n}export{W as D,E as R,C as S,L as T,V as X,B as a,H as b,P as j,F as l,T as o,y as s,S as t,w as u,M as y};
