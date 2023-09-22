import{j as _}from"./jsx-runtime-94f6e698.js";import{M as X}from"./menu-info-item-d6680240.js";import{c as F}from"./class-names-9cb99c69.js";import{r as p,R as q}from"./index-8db94870.js";import{S as G,D,y as E,o as v,u as z,X as N,I as U,l as A,b as m,a as j}from"./keyboard-5e933fe8.js";import{p as J,r as Y}from"./bugs-7a186658.js";import{F as Z,b as ee,u as te,a as g,x as re}from"./use-text-value-1d5c8b57.js";import{h as ae,T as ne,_ as oe,M as H,D as W,I as ie}from"./focus-management-d35c5d70.js";import{H as ue,c as se,d as w,C as le}from"./open-closed-535072ce.js";import{s as ce}from"./use-resolve-button-type-68f089c3.js";import{n as me}from"./use-owner-470a7b02.js";import{M as de}from"./menu-separator-2e97c8ed.js";import{M as pe}from"./menu-title-3210640e.js";var fe=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(fe||{}),ve=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(ve||{}),Ie=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e))(Ie||{});function O(e,i=o=>o){let o=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,a=ie(i(e.items.slice()),s=>s.dataRef.current.domRef.current),n=o?a.indexOf(o):null;return n===-1&&(n=null),{items:a,activeItemIndex:n}}let ye={1(e){return e.menuState===1?e:{...e,activeItemIndex:null,menuState:1}},0(e){return e.menuState===0?e:{...e,__demoMode:!1,menuState:0}},2:(e,i)=>{var o;let a=O(e),n=re(i,{resolveItems:()=>a.items,resolveActiveIndex:()=>a.activeItemIndex,resolveId:s=>s.id,resolveDisabled:s=>s.dataRef.current.disabled});return{...e,...a,searchQuery:"",activeItemIndex:n,activationTrigger:(o=i.trigger)!=null?o:1}},3:(e,i)=>{let o=e.searchQuery!==""?0:1,a=e.searchQuery+i.value.toLowerCase(),n=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+o).concat(e.items.slice(0,e.activeItemIndex+o)):e.items).find(u=>{var t;return((t=u.dataRef.current.textValue)==null?void 0:t.startsWith(a))&&!u.dataRef.current.disabled}),s=n?e.items.indexOf(n):-1;return s===-1||s===e.activeItemIndex?{...e,searchQuery:a}:{...e,searchQuery:a,activeItemIndex:s,activationTrigger:1}},4(e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},5:(e,i)=>{let o=O(e,a=>[...a,{id:i.id,dataRef:i.dataRef}]);return{...e,...o}},6:(e,i)=>{let o=O(e,a=>{let n=a.findIndex(s=>s.id===i.id);return n!==-1&&a.splice(n,1),a});return{...e,...o,activationTrigger:1}}},V=p.createContext(null);V.displayName="MenuContext";function $(e){let i=p.useContext(V);if(i===null){let o=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,$),o}return i}function ge(e,i){return z(i.type,ye,e,i)}let be=p.Fragment;function xe(e,i){let{__demoMode:o=!1,...a}=e,n=p.useReducer(ge,{__demoMode:o,menuState:o?0:1,buttonRef:p.createRef(),itemsRef:p.createRef(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:s,itemsRef:u,buttonRef:t},l]=n,f=E(i);ue([t,u],(x,R)=>{var c;l({type:1}),ae(R,ne.Loose)||(x.preventDefault(),(c=t.current)==null||c.focus())},s===0);let y=v(()=>{l({type:1})}),b=p.useMemo(()=>({open:s===0,close:y}),[s,y]),I={ref:f};return q.createElement(V.Provider,{value:n},q.createElement(se,{value:z(s,{0:w.Open,1:w.Closed})},N({ourProps:I,theirProps:a,slot:b,defaultTag:be,name:"Menu"})))}let Me="button";function he(e,i){var o;let a=U(),{id:n=`headlessui-menu-button-${a}`,...s}=e,[u,t]=$("Menu.Button"),l=E(u.buttonRef,i),f=J(),y=v(c=>{switch(c.key){case m.Space:case m.Enter:case m.ArrowDown:c.preventDefault(),c.stopPropagation(),t({type:0}),f.nextFrame(()=>t({type:2,focus:g.First}));break;case m.ArrowUp:c.preventDefault(),c.stopPropagation(),t({type:0}),f.nextFrame(()=>t({type:2,focus:g.Last}));break}}),b=v(c=>{switch(c.key){case m.Space:c.preventDefault();break}}),I=v(c=>{if(Y(c.currentTarget))return c.preventDefault();e.disabled||(u.menuState===0?(t({type:1}),f.nextFrame(()=>{var M;return(M=u.buttonRef.current)==null?void 0:M.focus({preventScroll:!0})})):(c.preventDefault(),t({type:0})))}),x=p.useMemo(()=>({open:u.menuState===0}),[u]),R={ref:l,id:n,type:ce(e,u.buttonRef),"aria-haspopup":"menu","aria-controls":(o=u.itemsRef.current)==null?void 0:o.id,"aria-expanded":e.disabled?void 0:u.menuState===0,onKeyDown:y,onKeyUp:b,onClick:I};return N({ourProps:R,theirProps:s,slot:x,defaultTag:Me,name:"Menu.Button"})}let Re="div",_e=G.RenderStrategy|G.Static;function Se(e,i){var o,a;let n=U(),{id:s=`headlessui-menu-items-${n}`,...u}=e,[t,l]=$("Menu.Items"),f=E(t.itemsRef,i),y=me(t.itemsRef),b=J(),I=le(),x=(()=>I!==null?(I&w.Open)===w.Open:t.menuState===0)();p.useEffect(()=>{let r=t.itemsRef.current;r&&t.menuState===0&&r!==(y==null?void 0:y.activeElement)&&r.focus({preventScroll:!0})},[t.menuState,t.itemsRef,y]),Z({container:t.itemsRef.current,enabled:t.menuState===0,accept(r){return r.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:r.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(r){r.setAttribute("role","none")}});let R=v(r=>{var S,T;switch(b.dispose(),r.key){case m.Space:if(t.searchQuery!=="")return r.preventDefault(),r.stopPropagation(),l({type:3,value:r.key});case m.Enter:if(r.preventDefault(),r.stopPropagation(),l({type:1}),t.activeItemIndex!==null){let{dataRef:d}=t.items[t.activeItemIndex];(T=(S=d.current)==null?void 0:S.domRef.current)==null||T.click()}W(t.buttonRef.current);break;case m.ArrowDown:return r.preventDefault(),r.stopPropagation(),l({type:2,focus:g.Next});case m.ArrowUp:return r.preventDefault(),r.stopPropagation(),l({type:2,focus:g.Previous});case m.Home:case m.PageUp:return r.preventDefault(),r.stopPropagation(),l({type:2,focus:g.First});case m.End:case m.PageDown:return r.preventDefault(),r.stopPropagation(),l({type:2,focus:g.Last});case m.Escape:r.preventDefault(),r.stopPropagation(),l({type:1}),j().nextFrame(()=>{var d;return(d=t.buttonRef.current)==null?void 0:d.focus({preventScroll:!0})});break;case m.Tab:r.preventDefault(),r.stopPropagation(),l({type:1}),j().nextFrame(()=>{oe(t.buttonRef.current,r.shiftKey?H.Previous:H.Next)});break;default:r.key.length===1&&(l({type:3,value:r.key}),b.setTimeout(()=>l({type:4}),350));break}}),c=v(r=>{switch(r.key){case m.Space:r.preventDefault();break}}),M=p.useMemo(()=>({open:t.menuState===0}),[t]),P={"aria-activedescendant":t.activeItemIndex===null||(o=t.items[t.activeItemIndex])==null?void 0:o.id,"aria-labelledby":(a=t.buttonRef.current)==null?void 0:a.id,id:s,onKeyDown:R,onKeyUp:c,role:"menu",tabIndex:0,ref:f};return N({ourProps:P,theirProps:u,slot:M,defaultTag:Re,features:_e,visible:x,name:"Menu.Items"})}let Pe=p.Fragment;function Te(e,i){let o=U(),{id:a=`headlessui-menu-item-${o}`,disabled:n=!1,...s}=e,[u,t]=$("Menu.Item"),l=u.activeItemIndex!==null?u.items[u.activeItemIndex].id===a:!1,f=p.useRef(null),y=E(i,f);A(()=>{if(u.__demoMode||u.menuState!==0||!l||u.activationTrigger===0)return;let d=j();return d.requestAnimationFrame(()=>{var C,K;(K=(C=f.current)==null?void 0:C.scrollIntoView)==null||K.call(C,{block:"nearest"})}),d.dispose},[u.__demoMode,f,l,u.menuState,u.activationTrigger,u.activeItemIndex]);let b=ee(f),I=p.useRef({disabled:n,domRef:f,get textValue(){return b()}});A(()=>{I.current.disabled=n},[I,n]),A(()=>(t({type:5,id:a,dataRef:I}),()=>t({type:6,id:a})),[I,a]);let x=v(()=>{t({type:1})}),R=v(d=>{if(n)return d.preventDefault();t({type:1}),W(u.buttonRef.current)}),c=v(()=>{if(n)return t({type:2,focus:g.Nothing});t({type:2,focus:g.Specific,id:a})}),M=te(),P=v(d=>M.update(d)),r=v(d=>{M.wasMoved(d)&&(n||l||t({type:2,focus:g.Specific,id:a,trigger:0}))}),S=v(d=>{M.wasMoved(d)&&(n||l&&t({type:2,focus:g.Nothing}))}),T=p.useMemo(()=>({active:l,disabled:n,close:x}),[l,n,x]);return N({ourProps:{id:a,ref:y,role:"menuitem",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,disabled:void 0,onClick:R,onFocus:c,onPointerEnter:P,onMouseEnter:P,onPointerMove:r,onMouseMove:r,onPointerLeave:S,onMouseLeave:S},theirProps:s,slot:T,defaultTag:Pe,name:"Menu.Item"})}let we=D(xe),De=D(he),Ee=D(Se),Ne=D(Te),k=Object.assign(we,{Button:De,Items:Ee,Item:Ne});const L=({children:e,LeftIcon:i,isSelected:o=!1,disabled:a=!1,onClick:n})=>_.jsx(k.Item,{disabled:a,children:({active:s})=>_.jsxs("button",{type:"button",className:F("group relative flex w-full cursor-pointer items-center gap-4 bg-neutral-0 px-4 py-2.5 hover:bg-neutral-100 focus:ring-2 focus:ring-primary-200 active:bg-neutral-200 disabled:bg-neutral-0",s&&"bg-neutral-100",o&&"bg-primary-100 hover:bg-primary-100 active:bg-primary-100"),disabled:a,onKeyDown:n,onClick:n,children:[i?_.jsx(i,{className:F("h-4 w-4 fill-neutral-600 group-disabled:fill-neutral-400",o&&"fill-primary-400")}):null,_.jsx("div",{className:F("paragraph-200 text-neutral-800 group-disabled:text-neutral-400",o&&"text-primary-400 before:absolute before:bottom-0 before:left-0 before:top-0 before:w-0.5 before:rounded-r-sm before:bg-primary-400 group-disabled:before:bg-neutral-0"),children:e})]})});try{L.displayName="MenuItem",L.__docgenInfo={description:"",displayName:"MenuItem",props:{LeftIcon:{defaultValue:null,description:"",name:"LeftIcon",required:!1,type:{name:"ElementType<any>"}},isSelected:{defaultValue:{value:"false"},description:"",name:"isSelected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const B=({children:e})=>_.jsx(k.Items,{className:"absolute right-0 z-10 mt-2 flex w-52 flex-col rounded-md bg-neutral-0 py-2 shadow-md outline-none",children:e});try{B.displayName="MenuItems",B.__docgenInfo={description:"",displayName:"MenuItems",props:{}}}catch{}const Q=({children:e,className:i})=>_.jsx(k.Button,{className:i,children:e});try{Q.displayName="MenuButton",Q.__docgenInfo={description:"",displayName:"MenuButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const h=({children:e})=>_.jsx(k,{as:"div",className:"relative",children:e});h.Button=Q;h.Items=B;h.Title=pe;h.Item=L;h.InfoItem=X;h.Separator=de;try{h.displayName="Menu",h.__docgenInfo={description:"",displayName:"Menu",props:{}}}catch{}export{h as M,L as a};
//# sourceMappingURL=menu-58d68b79.js.map
