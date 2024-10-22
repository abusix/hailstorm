import{j as m}from"./jsx-runtime-C798UXYj.js";import{r,R as a}from"./index-0d5eMwbi.js";import{w as L,a as I,l as le,H as se,U as oe}from"./description-D9Ee5mtv.js";import{W as ne,l as ie,T as ce,j as ue,p as de}from"./form-fields-BO6Mx8Dn.js";import{K as H,f as pe,Q as R,u as me,I as fe}from"./label-BBnH-iCi.js";import{L as M,D as E,y as he,p as be,o as y,W as ge}from"./use-sync-refs-DqQDZvJ6.js";import{$ as ve,a as xe,w as $e,e as ye}from"./use-resolve-button-type-D_6M6Au0.js";import{r as we}from"./bugs-DpEN4NTH.js";import{o as _}from"./keyboard-C2Ifhsxt.js";import{c as k}from"./class-names-DnY5YZNL.js";let ke="div";function Ee(e,l){let t=`headlessui-control-${r.useId()}`,[i,f]=H(),[h,b]=L(),s=I(),{disabled:o=s||!1,...c}=e,u=r.useMemo(()=>({disabled:o}),[o]),d={ref:l,disabled:o||void 0,"aria-disabled":o||void 0},p=E();return a.createElement(le,{value:o},a.createElement(f,{value:i},a.createElement(b,{value:h},a.createElement(pe,{id:t},p({ourProps:d,theirProps:{...c,children:a.createElement(ne,null,typeof c.children=="function"?c.children(u):c.children)},slot:u,defaultTag:ke,name:"Field"})))))}let Se=M(Ee),S=r.createContext(null);S.displayName="GroupContext";let Te=r.Fragment;function Pe(e){var l;let[t,i]=r.useState(null),[f,h]=H(),[b,s]=L(),o=r.useMemo(()=>({switch:t,setSwitch:i}),[t,i]),c={},u=e,d=E();return a.createElement(s,{name:"Switch.Description",value:b},a.createElement(h,{name:"Switch.Label",value:f,props:{htmlFor:(l=o.switch)==null?void 0:l.id,onClick(p){t&&(p.currentTarget instanceof HTMLLabelElement&&p.preventDefault(),t.click(),t.focus({preventScroll:!0}))}}},a.createElement(S.Provider,{value:o},d({ourProps:c,theirProps:u,slot:{},defaultTag:Te,name:"Switch.Group"}))))}let je="button";function De(e,l){var t;let i=r.useId(),f=me(),h=I(),{id:b=f||`headlessui-switch-${i}`,disabled:s=h||!1,checked:o,defaultChecked:c,onChange:u,name:d,value:p,form:G,autoFocus:$=!1,...K}=e,T=r.useContext(S),[W,U]=r.useState(null),O=r.useRef(null),V=he(O,l,T===null?null:T.setSwitch,U),g=ie(c),[v,x]=ce(o,u,g??!1),q=be(),[P,j]=r.useState(!1),D=y(()=>{j(!0),x==null||x(!v),q.nextFrame(()=>{j(!1)})}),z=y(n=>{if(we(n.currentTarget))return n.preventDefault();n.preventDefault(),D()}),B=y(n=>{n.key===_.Space?(n.preventDefault(),D()):n.key===_.Enter&&de(n.currentTarget)}),J=y(n=>n.preventDefault()),Q=fe(),X=oe(),{isFocusVisible:F,focusProps:Y}=ve({autoFocus:$}),{isHovered:C,hoverProps:A}=xe({isDisabled:s}),{pressed:N,pressProps:Z}=$e({disabled:s}),ee=r.useMemo(()=>({checked:v,disabled:s,hover:C,focus:F,active:N,autofocus:$,changing:P}),[v,C,F,N,s,P,$]),te=ge({id:b,ref:V,role:"switch",type:ye(e,W),tabIndex:e.tabIndex===-1?0:(t=e.tabIndex)!=null?t:0,"aria-checked":v,"aria-labelledby":Q,"aria-describedby":X,disabled:s||void 0,autoFocus:$,onClick:z,onKeyUp:B,onKeyPress:J},Y,A,Z),re=r.useCallback(()=>{if(g!==void 0)return x==null?void 0:x(g)},[x,g]),ae=E();return a.createElement(a.Fragment,null,d!=null&&a.createElement(ue,{disabled:s,data:{[d]:p||"on"},overrides:{type:"checkbox",checked:v},form:G,onReset:re}),ae({ourProps:te,theirProps:K,slot:ee,defaultTag:je,name:"Switch"}))}let Fe=M(De),Ce=Pe,Ne=R,_e=se,Le=Object.assign(Fe,{Group:Ce,Label:Ne,Description:_e});const Ie=({children:e,passive:l=!1})=>m.jsx(R,{className:k("paragraph-200 cursor-pointer text-neutral-800 ui-disabled:text-danger-600"),passive:l,children:e}),He=({checked:e=!1,onChange:l,disabled:t=!1,ariaLabel:i})=>m.jsxs(Le,{checked:e,disabled:t,onChange:l,className:k("relative inline-flex h-4 w-7 items-center rounded-full ui-checked:bg-primary-500 ui-checked:hover:bg-primary-600 ui-checked:disabled:bg-neutral-100 ui-not-checked:bg-neutral-400 ui-not-checked:hover:bg-neutral-500 ui-not-checked:disabled:bg-neutral-100"),children:[m.jsx("span",{className:"sr-only",children:i}),m.jsx("span",{className:k("inline-block h-3 w-3 transform rounded-full transition",e?"translate-x-3.5":"translate-x-0.5",e&&t&&"bg-neutral-400",e&&!t&&"bg-neutral-0",!e&&t&&"bg-neutral-400",!e&&!t&&"bg-neutral-0")})]}),w=({children:e})=>m.jsx(Se,{children:m.jsx("div",{className:"flex items-center gap-3",children:e})});w.Switch=He;w.Label=Ie;try{w.displayName="Toggle",w.__docgenInfo={description:"",displayName:"Toggle",props:{}}}catch{}export{w as T};
