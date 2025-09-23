import{j as a}from"./jsx-runtime-DiklIkkE.js";import{g as Re}from"./storybook-utils-C5xEhci0.js";import{r as o,R as v}from"./index-DRjF_FHU.js";import{c as Ne}from"./class-names-AhVFtEzo.js";import{$ as Ce,a as Oe,w as We,e as Ge}from"./use-resolve-button-type-anS-OQ-j.js";import{K as R,s as U,y as O,o as L,n as J,L as W,u as M,O as ce,c as Ue,_ as je}from"./use-sync-refs-4PSbzubZ.js";import{f as Ye}from"./use-is-mounted-D2HKdifd.js";import{f as ve,s as Ke}from"./hidden-BTT1K2UY.js";import{_ as D,T as Y,P as $,F as P}from"./focus-management-CtIqEZ7d.js";import{o as Xe,a as N}from"./keyboard-BXsyG9-6.js";function He({onFocus:e}){let[t,l]=o.useState(!0),r=Ye();return t?v.createElement(ve,{as:"button",type:"button",features:Ke.Focusable,onFocus:c=>{c.preventDefault();let i,s=50;function d(){if(s--<=0){i&&cancelAnimationFrame(i);return}if(e()){if(cancelAnimationFrame(i),!r.current)return;l(!1);return}i=requestAnimationFrame(d)}i=requestAnimationFrame(d)}}):null}const Be=o.createContext(null);function ze(){return{groups:new Map,get(e,t){var l;let r=this.groups.get(e);r||(r=new Map,this.groups.set(e,r));let c=(l=r.get(t))!=null?l:0;r.set(t,c+1);let i=Array.from(r.keys()).indexOf(t);function s(){let d=r.get(t);d>1?r.set(t,d-1):r.delete(t)}return[i,s]}}}function Je({children:e}){let t=o.useRef(ze());return o.createElement(Be.Provider,{value:t},e)}function Ie(e){let t=o.useContext(Be);if(!t)throw new Error("You must wrap your component in a <StableCollection>");let l=o.useId(),[r,c]=t.current.get(e,l);return o.useEffect(()=>c,[]),r}var Qe=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Qe||{}),Ze=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(Ze||{}),ea=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(ea||{});let aa={0(e,t){var l;let r=D(e.tabs,p=>p.current),c=D(e.panels,p=>p.current),i=r.filter(p=>{var h;return!((h=p.current)!=null&&h.hasAttribute("disabled"))}),s={...e,tabs:r,panels:c};if(t.index<0||t.index>r.length-1){let p=M(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>M(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(i.length===0)return s;let h=M(p,{0:()=>r.indexOf(i[0]),1:()=>r.indexOf(i[i.length-1])});return{...s,selectedIndex:h===-1?e.selectedIndex:h}}let d=r.slice(0,t.index),C=[...r.slice(t.index),...d].find(p=>i.includes(p));if(!C)return s;let x=(l=r.indexOf(C))!=null?l:e.selectedIndex;return x===-1&&(x=e.selectedIndex),{...s,selectedIndex:x}},1(e,t){if(e.tabs.includes(t.tab))return e;let l=e.tabs[e.selectedIndex],r=D([...e.tabs,t.tab],i=>i.current),c=e.selectedIndex;return e.info.current.isControlled||(c=r.indexOf(l),c===-1&&(c=e.selectedIndex)),{...e,tabs:r,selectedIndex:c}},2(e,t){return{...e,tabs:e.tabs.filter(l=>l!==t.tab)}},3(e,t){return e.panels.includes(t.panel)?e:{...e,panels:D([...e.panels,t.panel],l=>l.current)}},4(e,t){return{...e,panels:e.panels.filter(l=>l!==t.panel)}}},te=o.createContext(null);te.displayName="TabsDataContext";function q(e){let t=o.useContext(te);if(t===null){let l=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,q),l}return t}let re=o.createContext(null);re.displayName="TabsActionsContext";function le(e){let t=o.useContext(re);if(t===null){let l=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,le),l}return t}function na(e,t){return M(t.type,aa,e,t)}let ta="div";function ra(e,t){let{defaultIndex:l=0,vertical:r=!1,manual:c=!1,onChange:i,selectedIndex:s=null,...d}=e;const C=r?"vertical":"horizontal",x=c?"manual":"auto";let p=s!==null,h=U({isControlled:p}),E=O(t),[T,b]=o.useReducer(na,{info:h,selectedIndex:s??l,tabs:[],panels:[]}),S=o.useMemo(()=>({selectedIndex:T.selectedIndex}),[T.selectedIndex]),V=U(i||(()=>{})),B=U(T.tabs),f=o.useMemo(()=>({orientation:C,activation:x,...T}),[C,x,T]),w=L(m=>(b({type:1,tab:m}),()=>b({type:2,tab:m}))),A=L(m=>(b({type:3,panel:m}),()=>b({type:4,panel:m}))),g=L(m=>{y.current!==m&&V.current(m),p||b({type:0,index:m})}),y=U(p?e.selectedIndex:T.selectedIndex),_=o.useMemo(()=>({registerTab:w,registerPanel:A,change:g}),[]);J(()=>{b({type:0,index:s??l})},[s]),J(()=>{if(y.current===void 0||T.tabs.length<=0)return;let m=D(T.tabs,I=>I.current);m.some((I,k)=>T.tabs[k]!==I)&&g(m.indexOf(T.tabs[y.current]))});let Q={ref:E},F=W();return v.createElement(Je,null,v.createElement(re.Provider,{value:_},v.createElement(te.Provider,{value:f},f.tabs.length<=0&&v.createElement(He,{onFocus:()=>{var m,I;for(let k of B.current)if(((m=k.current)==null?void 0:m.tabIndex)===0)return(I=k.current)==null||I.focus(),!0;return!1}}),F({ourProps:Q,theirProps:d,slot:S,defaultTag:ta,name:"Tabs"}))))}let la="div";function sa(e,t){let{orientation:l,selectedIndex:r}=q("Tab.List"),c=O(t),i=o.useMemo(()=>({selectedIndex:r}),[r]),s=e,d={ref:c,role:"tablist","aria-orientation":l};return W()({ourProps:d,theirProps:s,slot:i,defaultTag:la,name:"Tabs.List"})}let ia="button";function oa(e,t){var l,r;let c=o.useId(),{id:i=`headlessui-tabs-tab-${c}`,disabled:s=!1,autoFocus:d=!1,...C}=e,{orientation:x,activation:p,selectedIndex:h,tabs:E,panels:T}=q("Tab"),b=le("Tab"),S=q("Tab"),[V,B]=o.useState(null),f=o.useRef(null),w=O(f,t,B);J(()=>b.registerTab(f),[b,f]);let A=Ie("tabs"),g=E.indexOf(f);g===-1&&(g=A);let y=g===h,_=L(u=>{var j;let G=u();if(G===Y.Success&&p==="auto"){let De=(j=Xe(f))==null?void 0:j.activeElement,oe=S.tabs.findIndex(Me=>Me.current===De);oe!==-1&&b.change(oe)}return G}),Q=L(u=>{let j=E.map(G=>G.current).filter(Boolean);if(u.key===N.Space||u.key===N.Enter){u.preventDefault(),u.stopPropagation(),b.change(g);return}switch(u.key){case N.Home:case N.PageUp:return u.preventDefault(),u.stopPropagation(),_(()=>$(j,P.First));case N.End:case N.PageDown:return u.preventDefault(),u.stopPropagation(),_(()=>$(j,P.Last))}if(_(()=>M(x,{vertical(){return u.key===N.ArrowUp?$(j,P.Previous|P.WrapAround):u.key===N.ArrowDown?$(j,P.Next|P.WrapAround):Y.Error},horizontal(){return u.key===N.ArrowLeft?$(j,P.Previous|P.WrapAround):u.key===N.ArrowRight?$(j,P.Next|P.WrapAround):Y.Error}}))===Y.Success)return u.preventDefault()}),F=o.useRef(!1),m=L(()=>{var u;F.current||(F.current=!0,(u=f.current)==null||u.focus({preventScroll:!0}),b.change(g),Ue(()=>{F.current=!1}))}),I=L(u=>{u.preventDefault()}),{isFocusVisible:k,focusProps:qe}=Ce({autoFocus:d}),{isHovered:se,hoverProps:Se}=Oe({isDisabled:s}),{pressed:ie,pressProps:Ve}=We({disabled:s}),Ae=o.useMemo(()=>({selected:y,hover:se,active:ie,focus:k,autofocus:d,disabled:s}),[y,se,k,ie,d,s]),Fe=je({ref:w,onKeyDown:Q,onMouseDown:I,onClick:m,id:i,role:"tab",type:Ge(e,V),"aria-controls":(r=(l=T[g])==null?void 0:l.current)==null?void 0:r.id,"aria-selected":y,tabIndex:y?0:-1,disabled:s||void 0,autoFocus:d},qe,Se,Ve);return W()({ourProps:Fe,theirProps:C,slot:Ae,defaultTag:ia,name:"Tabs.Tab"})}let ca="div";function ua(e,t){let{selectedIndex:l}=q("Tab.Panels"),r=O(t),c=o.useMemo(()=>({selectedIndex:l}),[l]),i=e,s={ref:r};return W()({ourProps:s,theirProps:i,slot:c,defaultTag:ca,name:"Tabs.Panels"})}let da="div",pa=ce.RenderStrategy|ce.Static;function ba(e,t){var l,r,c,i;let s=o.useId(),{id:d=`headlessui-tabs-panel-${s}`,tabIndex:C=0,...x}=e,{selectedIndex:p,tabs:h,panels:E}=q("Tab.Panel"),T=le("Tab.Panel"),b=o.useRef(null),S=O(b,t);J(()=>T.registerPanel(b),[T,b]);let V=Ie("panels"),B=E.indexOf(b);B===-1&&(B=V);let f=B===p,{isFocusVisible:w,focusProps:A}=Ce(),g=o.useMemo(()=>({selected:f,focus:w}),[f,w]),y=je({ref:S,id:d,role:"tabpanel","aria-labelledby":(r=(l=h[B])==null?void 0:l.current)==null?void 0:r.id,tabIndex:f?C:-1},A),_=W();return!f&&((c=x.unmount)==null||c)&&!((i=x.static)!=null&&i)?v.createElement(ve,{"aria-hidden":"true",...y}):_({ourProps:y,theirProps:x,slot:g,defaultTag:da,features:pa,visible:f,name:"Tabs.Panel"})}let ma=R(oa),_e=R(ra),ke=R(sa),Le=R(ua),Ee=R(ba),Ta=Object.assign(ma,{Group:_e,List:ke,Panels:Le,Panel:Ee});const we=v.createContext({type:"primary"});function $e(){const e=v.useContext(we);if(!e)throw new Error("Tab compound components cannot be rendered outside the Tab component");return e}try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const fa={primary:"relative whitespace-nowrap focus:ring-2 ring:primary-200 hover:ui-not-selected:text-neutral-800 ui-not-selected:after:hidden ui-selected:after:absolute ui-selected:after:left-0 ui-selected:after:right-0 ui-selected:after:-bottom-2 ui-selected:after:block ui-selected:after:h-0.5 ui-selected:after:bg-primary-500 ui-selected:disabled:after:bg-primary-500 disabled:text-neutral-500",secondary:"px-4 py-2 ui-not-selected:bg-transparent hover:ui-not-selected:text-neutral-800 focus:ring-2 ring:primary-200 hover:ui-not-selected:bg-neutral-100 ui-selected:text-primary-500 ui-selected:bg-primary-100 disabled:text-neutral-500"},Z=({children:e,hasIndicator:t=!1,...l})=>{const{type:r}=$e();return a.jsx(Ta,{...l,className:"focus-visible:outline-hidden",children:a.jsx("div",{className:Ne("ui-selected:text-primary-500 ui-not-selected:text-neutral-700 rounded-sm text-xs font-medium outline-hidden",fa[r]),children:a.jsxs("div",{className:"flex items-center gap-2",children:[e,t&&a.jsx("div",{className:"bg-danger-500 h-2 w-2 rounded-full"})]})})})};try{Z.displayName="TabButton",Z.__docgenInfo={description:"",displayName:"TabButton",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},hasIndicator:{defaultValue:{value:"false"},description:"",name:"hasIndicator",required:!1,type:{name:"boolean"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"any"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const xa={primary:"gap-5 pb-2",secondary:"gap-2"},ee=({children:e})=>{const{type:t}=$e();return a.jsx(ke,{className:Ne("flex",xa[t]),children:e})};try{ee.displayName="TabList",ee.__docgenInfo={description:"",displayName:"TabList",props:{}}}catch{}const ae=({children:e,...t})=>a.jsx(Ee,{...t,children:e});try{ae.displayName="TabPanel",ae.__docgenInfo={description:"",displayName:"TabPanel",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'}]}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | ((bag: PanelRenderPropArg) => string)"}},static:{defaultValue:null,description:"",name:"static",required:!1,type:{name:"boolean"}},unmount:{defaultValue:null,description:"",name:"unmount",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}}}}}catch{}const ne=({children:e,className:t})=>a.jsx(Le,{className:t,children:e});try{ne.displayName="TabPanels",ne.__docgenInfo={description:"",displayName:"TabPanels",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const n=({type:e="primary",children:t,...l})=>{const r=v.useMemo(()=>({type:e}),[e]);return a.jsx(we.Provider,{value:r,children:a.jsx(_e,{...l,children:t})})};n.List=ee;n.Button=Z;n.Panels=ne;n.Panel=ae;try{n.displayName="Tab",n.__docgenInfo={description:"",displayName:"Tab",props:{type:{defaultValue:{value:"primary"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"any"}},defaultIndex:{defaultValue:null,description:"",name:"defaultIndex",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((index: number) => void)"}},selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!1,type:{name:"number"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!1,type:{name:"boolean"}},manual:{defaultValue:null,description:"",name:"manual",required:!1,type:{name:"boolean"}}}}}catch{}const _a={title:"Tab",component:n,parameters:{...Re("Tab component. For a detailed explanation on props, please visit the Headless UI [tab-group documentation](https://headlessui.com/react/tabs#tab-group)"),docs:{source:{type:"auto"}}}},K={render:e=>a.jsxs(n,{...e,children:[a.jsxs(n.List,{children:[a.jsx(n.Button,{onClick:()=>null,children:"Tab 1"}),a.jsx(n.Button,{onClick:()=>null,children:"Tab 2"}),a.jsx(n.Button,{onClick:()=>null,children:"Tab 3"})]}),a.jsxs(n.Panels,{children:[a.jsx(n.Panel,{children:a.jsx("p",{className:"paragraph-200 pt-2",children:"Content 1"})}),a.jsx(n.Panel,{children:a.jsx("p",{className:"paragraph-200 pt-2",children:"Content 2"})}),a.jsx(n.Panel,{children:a.jsx("p",{className:"paragraph-200 pt-2",children:"Content 3"})})]})]}),args:{type:"primary"}},X={render:e=>a.jsxs(n,{...e,children:[a.jsxs(n.List,{children:[a.jsx(n.Button,{onClick:()=>null,children:"Tab 1"}),a.jsx(n.Button,{onClick:()=>null,children:"Tab 2"}),a.jsx(n.Button,{onClick:()=>null,children:"Tab 3"})]}),a.jsxs(n.Panels,{children:[a.jsx(n.Panel,{children:a.jsx("p",{className:"paragraph-200 pt-2",children:"Content 1"})}),a.jsx(n.Panel,{children:a.jsx("p",{className:"paragraph-200 pt-2",children:"Content 2"})}),a.jsx(n.Panel,{children:a.jsx("p",{className:"paragraph-200 pt-2",children:"Content 3"})})]})]}),args:{type:"secondary"}},H={render:e=>a.jsxs(n,{...e,children:[a.jsxs(n.List,{children:[a.jsx(n.Button,{onClick:()=>null,children:"Tab 1"}),a.jsx(n.Button,{onClick:()=>null,children:"Tab 2"}),a.jsx(n.Button,{onClick:()=>null,children:"Tab 3"})]}),a.jsxs(n.Panels,{children:[a.jsx(n.Panel,{children:a.jsx("div",{className:"pt-2",children:a.jsxs(n,{type:"primary",children:[a.jsxs(n.List,{children:[a.jsx(n.Button,{onClick:()=>null,children:"Nested Tab 1"}),a.jsx(n.Button,{onClick:()=>null,children:"Nested Tab 2"})]}),a.jsxs(n.Panels,{children:[a.jsx(n.Panel,{children:a.jsx("p",{className:"paragraph-200 pt-2",children:"Nested Content 1"})}),a.jsx(n.Panel,{children:a.jsx("p",{className:"paragraph-200 pt-2",children:"Nested Content 2"})})]})]})})}),a.jsx(n.Panel,{children:a.jsx("div",{className:"pt-2",children:a.jsxs(n,{type:"primary",children:[a.jsxs(n.List,{children:[a.jsx(n.Button,{onClick:()=>null,children:"Nested Tab A"}),a.jsx(n.Button,{onClick:()=>null,children:"Nested Tab B"})]}),a.jsxs(n.Panels,{children:[a.jsx(n.Panel,{children:a.jsx("p",{className:"paragraph-200 pt-2",children:"Nested Content A"})}),a.jsx(n.Panel,{children:a.jsx("p",{className:"paragraph-200 pt-2",children:"Nested Content B"})})]})]})})}),a.jsx(n.Panel,{children:a.jsx("div",{className:"pt-2",children:a.jsxs(n,{type:"primary",children:[a.jsxs(n.List,{children:[a.jsx(n.Button,{onClick:()=>null,children:"Nested Tab X"}),a.jsx(n.Button,{onClick:()=>null,children:"Nested Tab Y"})]}),a.jsxs(n.Panels,{children:[a.jsx(n.Panel,{children:a.jsx("p",{className:"paragraph-200 pt-2",children:"Nested Content X"})}),a.jsx(n.Panel,{children:a.jsx("p",{className:"paragraph-200 pt-2",children:"Nested Content Y"})})]})]})})})]})]}),args:{type:"primary",vertical:!1,manual:!1,defaultIndex:0},argTypes:{className:{control:{type:"text"}}}},z={render:e=>a.jsxs(n,{...e,children:[a.jsxs(n.List,{children:[a.jsx(n.Button,{onClick:()=>null,children:"All"}),a.jsx(n.Button,{onClick:()=>null,hasIndicator:!0,children:"With Indicator"}),a.jsx(n.Button,{onClick:()=>null,children:"Tab 3"})]}),a.jsxs(n.Panels,{children:[a.jsx(n.Panel,{children:a.jsx("p",{className:"paragraph-200 pt-2",children:"All content"})}),a.jsx(n.Panel,{children:a.jsx("p",{className:"paragraph-200 pt-2",children:"Decision needed content"})}),a.jsx(n.Panel,{children:a.jsx("p",{className:"paragraph-200 pt-2",children:"Content 3"})})]})]}),args:{type:"primary"}};var ue,de,pe;K.parameters={...K.parameters,docs:{...(ue=K.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => <Tab {...args}>
            <Tab.List>
                <Tab.Button onClick={() => null}>Tab 1</Tab.Button>
                <Tab.Button onClick={() => null}>Tab 2</Tab.Button>
                <Tab.Button onClick={() => null}>Tab 3</Tab.Button>
            </Tab.List>

            <Tab.Panels>
                <Tab.Panel>
                    <p className="paragraph-200 pt-2">Content 1</p>
                </Tab.Panel>

                <Tab.Panel>
                    <p className="paragraph-200 pt-2">Content 2</p>
                </Tab.Panel>

                <Tab.Panel>
                    <p className="paragraph-200 pt-2">Content 3</p>
                </Tab.Panel>
            </Tab.Panels>
        </Tab>,
  args: {
    type: "primary" as TabType
  }
}`,...(pe=(de=K.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var be,me,Te;X.parameters={...X.parameters,docs:{...(be=X.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: args => <Tab {...args}>
            <Tab.List>
                <Tab.Button onClick={() => null}>Tab 1</Tab.Button>
                <Tab.Button onClick={() => null}>Tab 2</Tab.Button>
                <Tab.Button onClick={() => null}>Tab 3</Tab.Button>
            </Tab.List>

            <Tab.Panels>
                <Tab.Panel>
                    <p className="paragraph-200 pt-2">Content 1</p>
                </Tab.Panel>

                <Tab.Panel>
                    <p className="paragraph-200 pt-2">Content 2</p>
                </Tab.Panel>

                <Tab.Panel>
                    <p className="paragraph-200 pt-2">Content 3</p>
                </Tab.Panel>
            </Tab.Panels>
        </Tab>,
  args: {
    type: "secondary" as TabType
  }
}`,...(Te=(me=X.parameters)==null?void 0:me.docs)==null?void 0:Te.source}}};var fe,xe,he;H.parameters={...H.parameters,docs:{...(fe=H.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: args => <Tab {...args}>
            <Tab.List>
                <Tab.Button onClick={() => null}>Tab 1</Tab.Button>
                <Tab.Button onClick={() => null}>Tab 2</Tab.Button>
                <Tab.Button onClick={() => null}>Tab 3</Tab.Button>
            </Tab.List>

            <Tab.Panels>
                <Tab.Panel>
                    <div className="pt-2">
                        <Tab type="primary">
                            <Tab.List>
                                <Tab.Button onClick={() => null}>Nested Tab 1</Tab.Button>
                                <Tab.Button onClick={() => null}>Nested Tab 2</Tab.Button>
                            </Tab.List>
                            <Tab.Panels>
                                <Tab.Panel>
                                    <p className="paragraph-200 pt-2">Nested Content 1</p>
                                </Tab.Panel>
                                <Tab.Panel>
                                    <p className="paragraph-200 pt-2">Nested Content 2</p>
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab>
                    </div>
                </Tab.Panel>

                <Tab.Panel>
                    <div className="pt-2">
                        <Tab type="primary">
                            <Tab.List>
                                <Tab.Button onClick={() => null}>Nested Tab A</Tab.Button>
                                <Tab.Button onClick={() => null}>Nested Tab B</Tab.Button>
                            </Tab.List>
                            <Tab.Panels>
                                <Tab.Panel>
                                    <p className="paragraph-200 pt-2">Nested Content A</p>
                                </Tab.Panel>
                                <Tab.Panel>
                                    <p className="paragraph-200 pt-2">Nested Content B</p>
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab>
                    </div>
                </Tab.Panel>

                <Tab.Panel>
                    <div className="pt-2">
                        <Tab type="primary">
                            <Tab.List>
                                <Tab.Button onClick={() => null}>Nested Tab X</Tab.Button>
                                <Tab.Button onClick={() => null}>Nested Tab Y</Tab.Button>
                            </Tab.List>
                            <Tab.Panels>
                                <Tab.Panel>
                                    <p className="paragraph-200 pt-2">Nested Content X</p>
                                </Tab.Panel>
                                <Tab.Panel>
                                    <p className="paragraph-200 pt-2">Nested Content Y</p>
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab>
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
}`,...(he=(xe=H.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var ge,ye,Pe;z.parameters={...z.parameters,docs:{...(ge=z.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: args => <Tab {...args}>
            <Tab.List>
                <Tab.Button onClick={() => null}>All</Tab.Button>
                <Tab.Button onClick={() => null} hasIndicator>
                    With Indicator
                </Tab.Button>
                <Tab.Button onClick={() => null}>Tab 3</Tab.Button>
            </Tab.List>

            <Tab.Panels>
                <Tab.Panel>
                    <p className="paragraph-200 pt-2">All content</p>
                </Tab.Panel>

                <Tab.Panel>
                    <p className="paragraph-200 pt-2">Decision needed content</p>
                </Tab.Panel>

                <Tab.Panel>
                    <p className="paragraph-200 pt-2">Content 3</p>
                </Tab.Panel>
            </Tab.Panels>
        </Tab>,
  args: {
    type: "primary" as TabType
  }
}`,...(Pe=(ye=z.parameters)==null?void 0:ye.docs)==null?void 0:Pe.source}}};const ka=["Primary","Secondary","NestedTabs","WithIndicator"];export{H as NestedTabs,K as Primary,X as Secondary,z as WithIndicator,ka as __namedExportsOrder,_a as default};
