import{j as i}from"./jsx-runtime-DvLKfCe6.js";import{c as w}from"./class-names-J070TWId.js";import{r as n,R as c}from"./index-aXz8NaAs.js";import{D as R,X as N,y as M,o as g,R as F}from"./render-THca3tYe.js";import{I,o as $}from"./keyboard-NjAwe_S6.js";import{r as H}from"./bugs-DTVvle51.js";import{M as K,H as O,T as A,p as B}from"./label-tTJj5301.js";import{b as U,M as X}from"./description-rwhSs07y.js";import{s as Y}from"./use-resolve-button-type-Iz3xK6-2.js";import{c as Z,p as q}from"./hidden-G4mt23Ky.js";import{p as z}from"./use-disposables-qU89AwEH.js";let k=n.createContext(null);k.displayName="GroupContext";let J=n.Fragment;function Q(e){var l;let[r,o]=n.useState(null),[p,u]=O(),[m,d]=X(),f=n.useMemo(()=>({switch:r,setSwitch:o,labelledby:p,describedby:m}),[r,o,p,m]),y={},x=e;return c.createElement(d,{name:"Switch.Description"},c.createElement(u,{name:"Switch.Label",props:{htmlFor:(l=f.switch)==null?void 0:l.id,onClick(a){r&&(a.currentTarget.tagName==="LABEL"&&a.preventDefault(),r.click(),r.focus({preventScroll:!0}))}}},c.createElement(k.Provider,{value:f},N({ourProps:y,theirProps:x,defaultTag:J,name:"Switch.Group"}))))}let V="button";function W(e,l){let r=I(),{id:o=`headlessui-switch-${r}`,checked:p,defaultChecked:u=!1,onChange:m,name:d,value:f,form:y,...x}=e,a=n.useContext(k),h=n.useRef(null),j=M(h,l,a===null?null:a.setSwitch),[s,b]=A(p,m,u),T=g(()=>b==null?void 0:b(!s)),D=g(t=>{if(H(t.currentTarget))return t.preventDefault();t.preventDefault(),T()}),L=g(t=>{t.key===$.Space?(t.preventDefault(),T()):t.key===$.Enter&&B(t.currentTarget)}),C=g(t=>t.preventDefault()),_=n.useMemo(()=>({checked:s}),[s]),G={id:o,ref:j,role:"switch",type:Y(e,h),tabIndex:0,"aria-checked":s,"aria-labelledby":a==null?void 0:a.labelledby,"aria-describedby":a==null?void 0:a.describedby,onClick:D,onKeyUp:L,onKeyPress:C},P=z();return n.useEffect(()=>{var t;let E=(t=h.current)==null?void 0:t.closest("form");E&&u!==void 0&&P.addEventListener(E,"reset",()=>{b(u)})},[h,b]),c.createElement(c.Fragment,null,d!=null&&s&&c.createElement(Z,{features:q.Hidden,...F({as:"input",type:"checkbox",hidden:!0,readOnly:!0,form:y,checked:s,name:d,value:f})}),N({ourProps:G,theirProps:x,slot:_,defaultTag:V,name:"Switch"}))}let ee=R(W),re=Q,S=Object.assign(ee,{Group:re,Label:K,Description:U});const te=({children:e,passive:l=!1})=>i.jsx(S.Label,{className:w("paragraph-200 cursor-pointer text-neutral-800 ui-disabled:text-danger-600"),passive:l,children:e}),ae=({checked:e=!1,onChange:l,disabled:r=!1,ariaLabel:o})=>i.jsxs(S,{checked:e,disabled:r,onChange:l,className:w("relative inline-flex h-4 w-7 items-center rounded-full ui-checked:bg-primary-500 ui-checked:hover:bg-primary-600 ui-checked:disabled:bg-neutral-100 ui-not-checked:bg-neutral-400 ui-not-checked:hover:bg-neutral-500 ui-not-checked:disabled:bg-neutral-100"),children:[i.jsx("span",{className:"sr-only",children:o}),i.jsx("span",{className:w("inline-block h-3 w-3 transform rounded-full transition",e?"translate-x-3.5":"translate-x-0.5",e&&r&&"bg-neutral-400 ",e&&!r&&"bg-neutral-0",!e&&r&&"bg-neutral-400",!e&&!r&&"bg-neutral-0")})]}),v=({children:e})=>i.jsx(S.Group,{children:i.jsx("div",{className:"flex items-center gap-3",children:e})});v.Switch=ae;v.Label=te;try{v.displayName="Toggle",v.__docgenInfo={description:"",displayName:"Toggle",props:{}}}catch{}export{v as T};
