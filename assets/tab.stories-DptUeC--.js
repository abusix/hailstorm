import{j as r}from"./jsx-runtime-BJwPuJt0.js";import{r as o,R as j}from"./index-DX35FyXq.js";import{c as Te}from"./class-names-B8CnD4Xb.js";import{$ as ge,a as qe,w as Ae,T as Le}from"./use-resolve-button-type-DPkGNm3y.js";import{M as ie,W as D,s as H,y as O,o as w,n as K,H as U,D as he,u as M,c as Me}from"./use-sync-refs-DTQ85WuU.js";import{f as Re}from"./use-is-mounted-l-WgHzsW.js";import{T as ve,s as De}from"./hidden-BRuiewI3.js";import{_ as L,T as W,P as B,F as v}from"./focus-management-2QVwgUsp.js";import{u as Oe,o as P}from"./keyboard-CMPngVPH.js";import{g as Ue}from"./storybook-utils-C5xEhci0.js";function Ge({onFocus:e}){let[t,a]=o.useState(!0),n=Re();return t?j.createElement(ve,{as:"button",type:"button",features:De.Focusable,onFocus:i=>{i.preventDefault();let l,u=50;function f(){if(u--<=0){l&&cancelAnimationFrame(l);return}if(e()){if(cancelAnimationFrame(l),!n.current)return;a(!1);return}l=requestAnimationFrame(f)}l=requestAnimationFrame(f)}}):null}const Pe=o.createContext(null);function He(){return{groups:new Map,get(e,t){var a;let n=this.groups.get(e);n||(n=new Map,this.groups.set(e,n));let i=(a=n.get(t))!=null?a:0;n.set(t,i+1);let l=Array.from(n.keys()).indexOf(t);function u(){let f=n.get(t);f>1?n.set(t,f-1):n.delete(t)}return[l,u]}}}function We({children:e}){let t=o.useRef(He());return o.createElement(Pe.Provider,{value:t},e)}function Ie(e){let t=o.useContext(Pe);if(!t)throw new Error("You must wrap your component in a <StableCollection>");let a=o.useId(),[n,i]=t.current.get(e,a);return o.useEffect(()=>i,[]),n}var ze=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ze||{}),Je=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(Je||{}),Ye=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(Ye||{});let Ke={0(e,t){var a;let n=L(e.tabs,d=>d.current),i=L(e.panels,d=>d.current),l=n.filter(d=>{var y;return!((y=d.current)!=null&&y.hasAttribute("disabled"))}),u={...e,tabs:n,panels:i};if(t.index<0||t.index>n.length-1){let d=M(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>M(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(l.length===0)return u;let y=M(d,{0:()=>n.indexOf(l[0]),1:()=>n.indexOf(l[l.length-1])});return{...u,selectedIndex:y===-1?e.selectedIndex:y}}let f=n.slice(0,t.index),I=[...n.slice(t.index),...f].find(d=>l.includes(d));if(!I)return u;let x=(a=n.indexOf(I))!=null?a:e.selectedIndex;return x===-1&&(x=e.selectedIndex),{...u,selectedIndex:x}},1(e,t){if(e.tabs.includes(t.tab))return e;let a=e.tabs[e.selectedIndex],n=L([...e.tabs,t.tab],l=>l.current),i=e.selectedIndex;return e.info.current.isControlled||(i=n.indexOf(a),i===-1&&(i=e.selectedIndex)),{...e,tabs:n,selectedIndex:i}},2(e,t){return{...e,tabs:e.tabs.filter(a=>a!==t.tab)}},3(e,t){return e.panels.includes(t.panel)?e:{...e,panels:L([...e.panels,t.panel],a=>a.current)}},4(e,t){return{...e,panels:e.panels.filter(a=>a!==t.panel)}}},ae=o.createContext(null);ae.displayName="TabsDataContext";function V(e){let t=o.useContext(ae);if(t===null){let a=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,V),a}return t}let ne=o.createContext(null);ne.displayName="TabsActionsContext";function re(e){let t=o.useContext(ne);if(t===null){let a=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,re),a}return t}function Qe(e,t){return M(t.type,Ke,e,t)}let Xe="div";function Ze(e,t){let{defaultIndex:a=0,vertical:n=!1,manual:i=!1,onChange:l,selectedIndex:u=null,...f}=e;const I=n?"vertical":"horizontal",x=i?"manual":"auto";let d=u!==null,y=H({isControlled:d}),F=O(t),[b,p]=o.useReducer(Qe,{info:y,selectedIndex:u??a,tabs:[],panels:[]}),q=o.useMemo(()=>({selectedIndex:b.selectedIndex}),[b.selectedIndex]),T=H(l||(()=>{})),E=H(b.tabs),h=o.useMemo(()=>({orientation:I,activation:x,...b}),[I,x,b]),g=w(m=>(p({type:1,tab:m}),()=>p({type:2,tab:m}))),C=w(m=>(p({type:3,panel:m}),()=>p({type:4,panel:m}))),$=w(m=>{k.current!==m&&T.current(m),d||p({type:0,index:m})}),k=H(d?e.selectedIndex:b.selectedIndex),A=o.useMemo(()=>({registerTab:g,registerPanel:C,change:$}),[]);K(()=>{p({type:0,index:u??a})},[u]),K(()=>{if(k.current===void 0||b.tabs.length<=0)return;let m=L(b.tabs,_=>_.current);m.some((_,S)=>b.tabs[S]!==_)&&$(m.indexOf(b.tabs[k.current]))});let Q={ref:F};return j.createElement(We,null,j.createElement(ne.Provider,{value:A},j.createElement(ae.Provider,{value:h},h.tabs.length<=0&&j.createElement(Ge,{onFocus:()=>{var m,_;for(let S of E.current)if(((m=S.current)==null?void 0:m.tabIndex)===0)return(_=S.current)==null||_.focus(),!0;return!1}}),U({ourProps:Q,theirProps:f,slot:q,defaultTag:Xe,name:"Tabs"}))))}let et="div";function tt(e,t){let{orientation:a,selectedIndex:n}=V("Tab.List"),i=O(t),l=o.useMemo(()=>({selectedIndex:n}),[n]);return U({ourProps:{ref:i,role:"tablist","aria-orientation":a},theirProps:e,slot:l,defaultTag:et,name:"Tabs.List"})}let at="button";function nt(e,t){var a,n;let i=o.useId(),{id:l=`headlessui-tabs-tab-${i}`,disabled:u=!1,autoFocus:f=!1,...I}=e,{orientation:x,activation:d,selectedIndex:y,tabs:F,panels:b}=V("Tab"),p=re("Tab"),q=V("Tab"),T=o.useRef(null),E=O(T,t);K(()=>p.registerTab(T),[p,T]);let h=Ie("tabs"),g=F.indexOf(T);g===-1&&(g=h);let C=g===y,$=w(c=>{var N;let G=c();if(G===W.Success&&d==="auto"){let Be=(N=Oe(T))==null?void 0:N.activeElement,oe=q.tabs.findIndex(Ve=>Ve.current===Be);oe!==-1&&p.change(oe)}return G}),k=w(c=>{let N=F.map(G=>G.current).filter(Boolean);if(c.key===P.Space||c.key===P.Enter){c.preventDefault(),c.stopPropagation(),p.change(g);return}switch(c.key){case P.Home:case P.PageUp:return c.preventDefault(),c.stopPropagation(),$(()=>B(N,v.First));case P.End:case P.PageDown:return c.preventDefault(),c.stopPropagation(),$(()=>B(N,v.Last))}if($(()=>M(x,{vertical(){return c.key===P.ArrowUp?B(N,v.Previous|v.WrapAround):c.key===P.ArrowDown?B(N,v.Next|v.WrapAround):W.Error},horizontal(){return c.key===P.ArrowLeft?B(N,v.Previous|v.WrapAround):c.key===P.ArrowRight?B(N,v.Next|v.WrapAround):W.Error}}))===W.Success)return c.preventDefault()}),A=o.useRef(!1),Q=w(()=>{var c;A.current||(A.current=!0,(c=T.current)==null||c.focus({preventScroll:!0}),p.change(g),Me(()=>{A.current=!1}))}),m=w(c=>{c.preventDefault()}),{isFocusVisible:_,focusProps:S}=ge({autoFocus:f}),{isHovered:se,hoverProps:ke}=qe({isDisabled:u}),{pressed:le,pressProps:we}=Ae({disabled:u}),Fe=o.useMemo(()=>({selected:C,hover:se,active:le,focus:_,autofocus:f,disabled:u}),[C,se,_,le,f,u]),Se=he({ref:E,onKeyDown:k,onMouseDown:m,onClick:Q,id:l,role:"tab",type:Le(e,T),"aria-controls":(n=(a=b[g])==null?void 0:a.current)==null?void 0:n.id,"aria-selected":C,tabIndex:C?0:-1,disabled:u||void 0,autoFocus:f},S,ke,we);return U({ourProps:Se,theirProps:I,slot:Fe,defaultTag:at,name:"Tabs.Tab"})}let rt="div";function st(e,t){let{selectedIndex:a}=V("Tab.Panels"),n=O(t),i=o.useMemo(()=>({selectedIndex:a}),[a]);return U({ourProps:{ref:n},theirProps:e,slot:i,defaultTag:rt,name:"Tabs.Panels"})}let lt="div",ot=ie.RenderStrategy|ie.Static;function it(e,t){var a,n,i,l;let u=o.useId(),{id:f=`headlessui-tabs-panel-${u}`,tabIndex:I=0,...x}=e,{selectedIndex:d,tabs:y,panels:F}=V("Tab.Panel"),b=re("Tab.Panel"),p=o.useRef(null),q=O(p,t);K(()=>b.registerPanel(p),[b,p]);let T=Ie("panels"),E=F.indexOf(p);E===-1&&(E=T);let h=E===d,{isFocusVisible:g,focusProps:C}=ge(),$=o.useMemo(()=>({selected:h,focus:g}),[h,g]),k=he({ref:q,id:f,role:"tabpanel","aria-labelledby":(n=(a=y[E])==null?void 0:a.current)==null?void 0:n.id,tabIndex:h?I:-1},C);return!h&&((i=x.unmount)==null||i)&&!((l=x.static)!=null&&l)?j.createElement(ve,{"aria-hidden":"true",...k}):U({ourProps:k,theirProps:x,slot:$,defaultTag:lt,features:ot,visible:h,name:"Tabs.Panel"})}let ut=D(nt),_e=D(Ze),Ne=D(tt),je=D(st),Ee=D(it),ct=Object.assign(ut,{Group:_e,List:Ne,Panels:je,Panel:Ee});const Ce=j.createContext({type:"primary"});function $e(){const e=j.useContext(Ce);if(!e)throw new Error("Tab compound components cannot be rendered outside the Tab component");return e}const dt={primary:"relative whitespace-nowrap focus:ring-2 ring:primary-200 ui-not-selected:hover:text-neutral-800 ui-not-selected:after:hidden ui-selected:after:absolute ui-selected:after:left-0 ui-selected:after:right-0 ui-selected:after:-bottom-2 ui-selected:after:block ui-selected:after:h-0.5 ui-selected:after:bg-primary-500 disabled:ui-selected:after:bg-primary-500 disabled:text-neutral-500",secondary:"px-4 py-2 ui-not-selected:bg-transparent ui-not-selected:hover:text-neutral-800 focus:ring-2 ring:primary-200 ui-not-selected:hover:bg-neutral-100 ui-selected:text-primary-500 ui-selected:bg-primary-100 disabled:text-neutral-500"},X=({children:e,...t})=>{const{type:a}=$e();return r.jsx(ct,{...t,className:"focus-visible:outline-none",children:r.jsx("div",{className:Te("rounded text-xs font-medium outline-none ui-selected:text-primary-500 ui-not-selected:text-neutral-700",dt[a]),children:e})})};try{X.displayName="TabButton",X.__docgenInfo={description:"",displayName:"TabButton",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"any"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const pt={primary:"gap-5 pb-2",secondary:"gap-2"},Z=({children:e})=>{const{type:t}=$e();return r.jsx(Ne,{className:Te("flex",pt[t]),children:e})};try{Z.displayName="TabList",Z.__docgenInfo={description:"",displayName:"TabList",props:{}}}catch{}const ee=({children:e})=>r.jsx(Ee,{children:e});try{ee.displayName="TabPanel",ee.__docgenInfo={description:"",displayName:"TabPanel",props:{}}}catch{}const te=({children:e,className:t})=>r.jsx(je,{className:t,children:e});try{te.displayName="TabPanels",te.__docgenInfo={description:"",displayName:"TabPanels",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const s=({type:e="primary",children:t,...a})=>{const n=j.useMemo(()=>({type:e}),[e]);return r.jsx(Ce.Provider,{value:n,children:r.jsx(_e,{...a,children:t})})};s.List=Z;s.Button=X;s.Panels=te;s.Panel=ee;try{s.displayName="Tab",s.__docgenInfo={description:"",displayName:"Tab",props:{type:{defaultValue:{value:"primary"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"any"}},defaultIndex:{defaultValue:null,description:"",name:"defaultIndex",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((index: number) => void)"}},selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!1,type:{name:"number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!1,type:{name:"boolean"}},manual:{defaultValue:null,description:"",name:"manual",required:!1,type:{name:"boolean"}}}}}catch{}const It={title:"Tab",component:s,parameters:Ue("Tab component. For a detailed explanation on props, please visit the Headless UI [tab-group documentation](https://headlessui.com/react/tabs#tab-group)")},R=({type:e="primary"})=>r.jsxs(s,{type:e,children:[r.jsxs(s.List,{children:[r.jsx(s.Button,{onClick:()=>null,children:"Tab 1"}),r.jsx(s.Button,{onClick:()=>null,children:"Tab 2"}),r.jsx(s.Button,{onClick:()=>null,children:"Tab 3"})]}),r.jsxs(s.Panels,{children:[r.jsx(s.Panel,{children:r.jsx("p",{className:"paragraph-200 pt-2",children:"Content 1"})}),r.jsx(s.Panel,{children:r.jsx("p",{className:"paragraph-200 pt-2",children:"Content 2"})}),r.jsx(s.Panel,{children:r.jsx("p",{className:"paragraph-200 pt-2",children:"Content 3"})})]})]}),z={render:()=>r.jsx(R,{})},J={render:e=>r.jsx(R,{...e}),args:{type:"secondary"}},Y={render:e=>r.jsxs(s,{...e,children:[r.jsxs(s.List,{children:[r.jsx(s.Button,{onClick:()=>null,children:"Tab 1"}),r.jsx(s.Button,{onClick:()=>null,children:"Tab 2"}),r.jsx(s.Button,{onClick:()=>null,children:"Tab 3"})]}),r.jsxs(s.Panels,{children:[r.jsx(s.Panel,{children:r.jsx("div",{className:"pt-2",children:r.jsx(R,{})})}),r.jsx(s.Panel,{children:r.jsx("div",{className:"pt-2",children:r.jsx(R,{})})}),r.jsx(s.Panel,{children:r.jsx("div",{className:"pt-2",children:r.jsx(R,{})})})]})]}),args:{type:"primary",vertical:!1,manual:!1,defaultIndex:0},argTypes:{className:{control:{type:"text"}}}};var ue,ce,de;z.parameters={...z.parameters,docs:{...(ue=z.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <TabsExample />
}`,...(de=(ce=z.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,me,fe;J.parameters={...J.parameters,docs:{...(pe=J.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: args => <TabsExample {...args} />,
  args: {
    type: "secondary"
  }
}`,...(fe=(me=J.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var be,xe,ye;Y.parameters={...Y.parameters,docs:{...(be=Y.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: args => <Tab {...args}>
            <Tab.List>
                <Tab.Button onClick={() => null}>Tab 1</Tab.Button>
                <Tab.Button onClick={() => null}>Tab 2</Tab.Button>
                <Tab.Button onClick={() => null}>Tab 3</Tab.Button>
            </Tab.List>

            <Tab.Panels>
                <Tab.Panel>
                    <div className="pt-2">
                        <TabsExample />
                    </div>
                </Tab.Panel>

                <Tab.Panel>
                    <div className="pt-2">
                        <TabsExample />
                    </div>
                </Tab.Panel>

                <Tab.Panel>
                    <div className="pt-2">
                        <TabsExample />
                    </div>
                </Tab.Panel>
            </Tab.Panels>
        </Tab>,
  args: {
    type: "primary",
    vertical: false,
    manual: false,
    defaultIndex: 0
  },
  argTypes: {
    className: {
      control: {
        type: "text"
      }
    }
  }
}`,...(ye=(xe=Y.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};const _t=["Primary","Secondary","NestedTabs"];export{Y as NestedTabs,z as Primary,J as Secondary,_t as __namedExportsOrder,It as default};