import{a as c,j as w}from"./jsx-runtime-a888423b.js";import{g as he,n as re}from"./storybook-utils-5525ffdc.js";import{r as u,R as I}from"./index-8db94870.js";import{c as pe}from"./class-names-2bb0c168.js";import{S as le,D as M,y as O,s as Y,o as k,l as z,X as F,I as be,u as D,a as P,t as ve}from"./keyboard-f3ae5531.js";import{I as q,N as j,e as _e,O as B,M as h}from"./focus-management-8ba95dc1.js";import{s as Ie}from"./use-resolve-button-type-3a664423.js";import{c as me,p as Ce}from"./hidden-05078d32.js";import"./_commonjsHelpers-042e6b4d.js";function Ee({onFocus:e}){let[t,n]=u.useState(!0);return t?I.createElement(me,{as:"button",type:"button",features:Ce.Focusable,onFocus:a=>{a.preventDefault();let r,s=50;function i(){if(s--<=0){r&&cancelAnimationFrame(r);return}if(e()){n(!1),cancelAnimationFrame(r);return}r=requestAnimationFrame(i)}r=requestAnimationFrame(i)}}):null}const fe=u.createContext(null);function Ne(){return{groups:new Map,get(e,t){var n;let a=this.groups.get(e);a||(a=new Map,this.groups.set(e,a));let r=(n=a.get(t))!=null?n:0;a.set(t,r+1);let s=Array.from(a.keys()).indexOf(t);function i(){let g=a.get(t);g>1?a.set(t,g-1):a.delete(t)}return[s,i]}}}function Se({children:e}){let t=u.useRef(Ne());return u.createElement(fe.Provider,{value:t},e)}function Te(e){let t=u.useContext(fe);if(!t)throw new Error("You must wrap your component in a <StableCollection>");let n=$e(),[a,r]=t.current.get(e,n);return u.useEffect(()=>r,[]),a}function $e(){var e,t,n;let a=(n=(t=(e=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)==null?void 0:e.ReactCurrentOwner)==null?void 0:t.current)!=null?n:null;if(!a)return Symbol();let r=[],s=a;for(;s;)r.push(s.index),s=s.return;return"$."+r.join(".")}var ke=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ke||{}),Be=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(Be||{}),we=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(we||{});let Le={[0](e,t){var n;let a=q(e.tabs,p=>p.current),r=q(e.panels,p=>p.current),s=a.filter(p=>{var C;return!((C=p.current)!=null&&C.hasAttribute("disabled"))}),i={...e,tabs:a,panels:r};if(t.index<0||t.index>a.length-1){let p=D(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,[0]:()=>D(Math.sign(t.index),{[-1]:()=>0,[0]:()=>0,[1]:()=>1}),[1]:()=>0});return s.length===0?i:{...i,selectedIndex:D(p,{[0]:()=>a.indexOf(s[0]),[1]:()=>a.indexOf(s[s.length-1])})}}let g=a.slice(0,t.index),v=[...a.slice(t.index),...g].find(p=>s.includes(p));if(!v)return i;let T=(n=a.indexOf(v))!=null?n:e.selectedIndex;return T===-1&&(T=e.selectedIndex),{...i,selectedIndex:T}},[1](e,t){var n;if(e.tabs.includes(t.tab))return e;let a=e.tabs[e.selectedIndex],r=q([...e.tabs,t.tab],i=>i.current),s=(n=r.indexOf(a))!=null?n:e.selectedIndex;return s===-1&&(s=e.selectedIndex),{...e,tabs:r,selectedIndex:s}},[2](e,t){return{...e,tabs:e.tabs.filter(n=>n!==t.tab)}},[3](e,t){return e.panels.includes(t.panel)?e:{...e,panels:q([...e.panels,t.panel],n=>n.current)}},[4](e,t){return{...e,panels:e.panels.filter(n=>n!==t.panel)}}},ee=u.createContext(null);ee.displayName="TabsDataContext";function L(e){let t=u.useContext(ee);if(t===null){let n=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,L),n}return t}let te=u.createContext(null);te.displayName="TabsActionsContext";function ne(e){let t=u.useContext(te);if(t===null){let n=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ne),n}return t}function Re(e,t){return D(t.type,Le,e,t)}let Ae=u.Fragment;function qe(e,t){let{defaultIndex:n=0,vertical:a=!1,manual:r=!1,onChange:s,selectedIndex:i=null,...g}=e;const v=a?"vertical":"horizontal",T=r?"manual":"auto";let p=i!==null,C=O(t),[d,x]=u.useReducer(Re,{selectedIndex:i??n,tabs:[],panels:[]}),m=u.useMemo(()=>({selectedIndex:d.selectedIndex}),[d.selectedIndex]),R=Y(s||(()=>{})),A=Y(d.tabs),f=u.useMemo(()=>({orientation:v,activation:T,...d}),[v,T,d]),y=k(b=>(x({type:1,tab:b}),()=>x({type:2,tab:b}))),N=k(b=>(x({type:3,panel:b}),()=>x({type:4,panel:b}))),S=k(b=>{$.current!==b&&R.current(b),p||x({type:0,index:b})}),$=Y(p?e.selectedIndex:d.selectedIndex),X=u.useMemo(()=>({registerTab:y,registerPanel:N,change:S}),[]);z(()=>{x({type:0,index:i??n})},[i]),z(()=>{if($.current===void 0||d.tabs.length<=0)return;let b=q(d.tabs,E=>E.current);b.some((E,l)=>d.tabs[l]!==E)&&S(b.indexOf(d.tabs[$.current]))});let H={ref:C};return I.createElement(Se,null,I.createElement(te.Provider,{value:X},I.createElement(ee.Provider,{value:f},f.tabs.length<=0&&I.createElement(Ee,{onFocus:()=>{var b,E;for(let l of A.current)if(((b=l.current)==null?void 0:b.tabIndex)===0)return(E=l.current)==null||E.focus(),!0;return!1}}),F({ourProps:H,theirProps:g,slot:m,defaultTag:Ae,name:"Tabs"}))))}let De="div";function Me(e,t){let{orientation:n,selectedIndex:a}=L("Tab.List"),r=O(t);return F({ourProps:{ref:r,role:"tablist","aria-orientation":n},theirProps:e,slot:{selectedIndex:a},defaultTag:De,name:"Tabs.List"})}let Oe="button";function Fe(e,t){var n,a;let r=be(),{id:s=`headlessui-tabs-tab-${r}`,...i}=e,{orientation:g,activation:v,selectedIndex:T,tabs:p,panels:C}=L("Tab"),d=ne("Tab"),x=L("Tab"),m=u.useRef(null),R=O(m,t);z(()=>d.registerTab(m),[d,m]);let A=Te("tabs"),f=p.indexOf(m);f===-1&&(f=A);let y=f===T,N=k(l=>{var _;let U=l();if(U===j.Success&&v==="auto"){let ge=(_=_e(m))==null?void 0:_.activeElement,ae=x.tabs.findIndex(Pe=>Pe.current===ge);ae!==-1&&d.change(ae)}return U}),S=k(l=>{let _=p.map(U=>U.current).filter(Boolean);if(l.key===P.Space||l.key===P.Enter){l.preventDefault(),l.stopPropagation(),d.change(f);return}switch(l.key){case P.Home:case P.PageUp:return l.preventDefault(),l.stopPropagation(),N(()=>B(_,h.First));case P.End:case P.PageDown:return l.preventDefault(),l.stopPropagation(),N(()=>B(_,h.Last))}if(N(()=>D(g,{vertical(){return l.key===P.ArrowUp?B(_,h.Previous|h.WrapAround):l.key===P.ArrowDown?B(_,h.Next|h.WrapAround):j.Error},horizontal(){return l.key===P.ArrowLeft?B(_,h.Previous|h.WrapAround):l.key===P.ArrowRight?B(_,h.Next|h.WrapAround):j.Error}}))===j.Success)return l.preventDefault()}),$=u.useRef(!1),X=k(()=>{var l;$.current||($.current=!0,(l=m.current)==null||l.focus(),d.change(f),ve(()=>{$.current=!1}))}),H=k(l=>{l.preventDefault()}),b=u.useMemo(()=>({selected:y}),[y]),E={ref:R,onKeyDown:S,onMouseDown:H,onClick:X,id:s,role:"tab",type:Ie(e,m),"aria-controls":(a=(n=C[f])==null?void 0:n.current)==null?void 0:a.id,"aria-selected":y,tabIndex:y?0:-1};return F({ourProps:E,theirProps:i,slot:b,defaultTag:Oe,name:"Tabs.Tab"})}let Ve="div";function Ue(e,t){let{selectedIndex:n}=L("Tab.Panels"),a=O(t),r=u.useMemo(()=>({selectedIndex:n}),[n]);return F({ourProps:{ref:a},theirProps:e,slot:r,defaultTag:Ve,name:"Tabs.Panels"})}let je="div",Ge=le.RenderStrategy|le.Static;function We(e,t){var n,a,r,s;let i=be(),{id:g=`headlessui-tabs-panel-${i}`,tabIndex:v=0,...T}=e,{selectedIndex:p,tabs:C,panels:d}=L("Tab.Panel"),x=ne("Tab.Panel"),m=u.useRef(null),R=O(m,t);z(()=>x.registerPanel(m),[x,m]);let A=Te("panels"),f=d.indexOf(m);f===-1&&(f=A);let y=f===p,N=u.useMemo(()=>({selected:y}),[y]),S={ref:R,id:g,role:"tabpanel","aria-labelledby":(a=(n=C[f])==null?void 0:n.current)==null?void 0:a.id,tabIndex:y?v:-1};return!y&&((r=T.unmount)==null||r)&&!((s=T.static)!=null&&s)?I.createElement(me,{as:"span",...S}):F({ourProps:S,theirProps:T,slot:N,defaultTag:je,features:Ge,visible:y,name:"Tabs.Panel"})}let ze=M(Fe),Xe=M(qe),He=M(Me),Ye=M(Ue),Ke=M(We),V=Object.assign(ze,{Group:Xe,List:He,Panels:Ye,Panel:Ke});const ye=I.createContext({type:"primary"});function xe(){const e=I.useContext(ye);if(!e)throw new Error("Tab compound components cannot be rendered outside the Tab component");return e}const Je={primary:"relative whitespace-nowrap hover:text-neutral-800 focus:ring-2 ring:primary-200 ui-selected:after:absolute ui-selected:after:left-0 ui-selected:after:right-0 ui-selected:after:-bottom-2 ui-selected:after:block ui-selected:after:h-0.5 ui-selected:after:bg-primary-500 disabled:ui-selected:after:bg-primary-500 disabled:text-neutral-500",secondary:"px-4 py-2 hover:text-neutral-800 focus:ring-2 ring:primary-200 hover:bg-neutral-100 ui-selected:text-primary-500 ui-selected:bg-primary-50 disabled:text-neutral-500"},K=({children:e,...t})=>{const{type:n}=xe();return c(V,{...t,className:"focus-visible:outline-none",children:c("div",{className:pe("rounded text-xs font-medium text-neutral-700 outline-none ui-selected:text-primary-500",Je[n]),children:e})})};try{K.displayName="TabButton",K.__docgenInfo={description:"",displayName:"TabButton",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"any"}}}}}catch{}const Qe={primary:"gap-5 pb-2",secondary:"gap-2"},J=({children:e})=>{const{type:t}=xe();return c(V.List,{className:pe("flex",Qe[t]),children:e})};try{J.displayName="TabList",J.__docgenInfo={description:"",displayName:"TabList",props:{}}}catch{}const Q=({children:e})=>c(V.Panel,{children:e});try{Q.displayName="TabPanel",Q.__docgenInfo={description:"",displayName:"TabPanel",props:{}}}catch{}const Z=({children:e})=>c(V.Panels,{children:e});try{Z.displayName="TabPanels",Z.__docgenInfo={description:"",displayName:"TabPanels",props:{}}}catch{}const o=({type:e="primary",children:t,...n})=>{const a=I.useMemo(()=>({type:e}),[e]);return c(ye.Provider,{value:a,children:c(V.Group,{...n,children:t})})};o.List=J;o.Button=K;o.Panels=Z;o.Panel=Q;try{o.displayName="Tab",o.__docgenInfo={description:"",displayName:"Tab",props:{type:{defaultValue:{value:"primary"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"any"}},defaultIndex:{defaultValue:null,description:"",name:"defaultIndex",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((index: number) => void)"}},selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!1,type:{name:"number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!1,type:{name:"boolean"}},manual:{defaultValue:null,description:"",name:"manual",required:!1,type:{name:"boolean"}}}}}catch{}const it={title:"Tab",component:o,parameters:he("Tab component. For a detailed explanation on props, please visit the Headless UI [tab-group documentation](https://headlessui.com/react/tabs#tab-group)")},G={render:e=>w(o,{...e,children:[w(o.List,{children:[c(o.Button,{onClick:()=>null,children:"Tab 1"}),c(o.Button,{onClick:()=>null,children:"Tab 2"}),c(o.Button,{onClick:()=>null,children:"Tab 3"})]}),w(o.Panels,{children:[c(o.Panel,{children:"Content 1"}),c(o.Panel,{children:"Content 2"}),c(o.Panel,{children:"Content 3"})]})]}),args:{type:"primary",vertical:!1,manual:!1,defaultIndex:0},argTypes:{as:re,refName:re,className:{control:{type:"text"}}}},W={render:e=>w(o,{type:e.type,children:[w(o.List,{children:[c(o.Button,{onClick:()=>null,children:"Tab 1"}),c(o.Button,{onClick:()=>null,children:"Tab 2"}),c(o.Button,{onClick:()=>null,children:"Tab 3"})]}),w(o.Panels,{children:[c(o.Panel,{children:"Content 1"}),c(o.Panel,{children:"Content 2"}),c(o.Panel,{children:"Content 3"})]})]}),args:{type:"secondary"}};var se,oe,ie;G.parameters={...G.parameters,docs:{...(se=G.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => <Tab {...args}>
      <Tab.List>
        <Tab.Button onClick={() => null}>Tab 1</Tab.Button>
        <Tab.Button onClick={() => null}>Tab 2</Tab.Button>
        <Tab.Button onClick={() => null}>Tab 3</Tab.Button>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab>,
  args: {
    type: "primary",
    vertical: false,
    manual: false,
    defaultIndex: 0
  },
  argTypes: {
    as: noControl,
    refName: noControl,
    className: {
      control: {
        type: "text"
      }
    }
  }
}`,...(ie=(oe=G.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ue,ce,de;W.parameters={...W.parameters,docs:{...(ue=W.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => <Tab type={args.type}>
      <Tab.List>
        <Tab.Button onClick={() => null}>Tab 1</Tab.Button>
        <Tab.Button onClick={() => null}>Tab 2</Tab.Button>
        <Tab.Button onClick={() => null}>Tab 3</Tab.Button>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab>,
  args: {
    type: "secondary"
  }
}`,...(de=(ce=W.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};const ut=["Primary","Secondary"];export{G as Primary,W as Secondary,ut as __namedExportsOrder,it as default};
//# sourceMappingURL=tab.stories-0558512e.js.map
