import{r as l,R as a}from"./index-DX35FyXq.js";import{o as E,p as v,m as b}from"./use-sync-refs-DTQ85WuU.js";import{r as T}from"./index-CrrVXmAv.js";import{T as d,s as m}from"./hidden-BRuiewI3.js";function A(t,e,n){let[r,o]=l.useState(n),u=t!==void 0,c=l.useRef(u),i=l.useRef(!1),f=l.useRef(!1);return u&&!c.current&&!i.current?(i.current=!0,c.current=u,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!u&&c.current&&!f.current&&(f.current=!0,c.current=u,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[u?t:r,E(s=>(u||o(s),e==null?void 0:e(s)))]}function F(t){let[e]=l.useState(t);return e}function p(t={},e=null,n=[]){for(let[r,o]of Object.entries(t))g(n,h(e,r),o);return n}function h(t,e){return t?t+"["+e+"]":e}function g(t,e,n){if(Array.isArray(n))for(let[r,o]of n.entries())g(t,h(e,r.toString()),o);else n instanceof Date?t.push([e,n.toISOString()]):typeof n=="boolean"?t.push([e,n?"1":"0"]):typeof n=="string"?t.push([e,n]):typeof n=="number"?t.push([e,`${n}`]):n==null?t.push([e,""]):p(n,e,t)}function P(t){var e,n;let r=(e=t==null?void 0:t.form)!=null?e:t.closest("form");if(r){for(let o of r.elements)if(o!==t&&(o.tagName==="INPUT"&&o.type==="submit"||o.tagName==="BUTTON"&&o.type==="submit"||o.nodeName==="INPUT"&&o.type==="image")){o.click();return}(n=r.requestSubmit)==null||n.call(r)}}let y=l.createContext(null);function C(t){let[e,n]=l.useState(null);return a.createElement(y.Provider,{value:{target:e}},t.children,a.createElement(d,{features:m.Hidden,ref:n}))}function S({children:t}){let e=l.useContext(y);if(!e)return a.createElement(a.Fragment,null,t);let{target:n}=e;return n?T.createPortal(a.createElement(a.Fragment,null,t),n):null}function H({data:t,form:e,disabled:n,onReset:r,overrides:o}){let[u,c]=l.useState(null),i=v();return l.useEffect(()=>{if(r&&u)return i.addEventListener(u,"reset",r)},[u,e,r]),a.createElement(S,null,a.createElement(I,{setForm:c,formId:e}),p(t).map(([f,s])=>a.createElement(d,{features:m.Hidden,...b({key:f,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:e,disabled:n,name:f,value:s,...o})})))}function I({setForm:t,formId:e}){return l.useEffect(()=>{if(e){let n=document.getElementById(e);n&&t(n)}},[t,e]),e?null:a.createElement(d,{features:m.Hidden,as:"input",type:"hidden",hidden:!0,readOnly:!0,ref:n=>{if(!n)return;let r=n.closest("form");r&&t(r)}})}export{A as T,C as W,H as j,F as l,P as p};
