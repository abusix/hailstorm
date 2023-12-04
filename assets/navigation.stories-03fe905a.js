import{j as n}from"./jsx-runtime-94f6e698.js";import{c as U}from"./class-names-9cb99c69.js";import{R as P,r as a}from"./index-8db94870.js";import{S as O,D as B,y as C,T as V,o as j,u as E,X as w,I as q,a as f}from"./keyboard-21395176.js";import{r as z}from"./bugs-8e007c11.js";import{c as X,d as S,C as Y}from"./open-closed-e73c4555.js";import{s as Z}from"./use-resolve-button-type-2af9297b.js";import{e as J}from"./owner-b1a1dac1.js";import{d7 as W,b as ee,aS as ne}from"./zoom-to-fit-icon-acda7f0b.js";import"./_commonjsHelpers-042e6b4d.js";var H;let te=(H=P.startTransition)!=null?H:function(e){e()};var ie=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ie||{}),ae=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(ae||{});let oe={0:e=>({...e,disclosureState:E(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},4(e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},5(e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},2(e,i){return e.buttonId===i.buttonId?e:{...e,buttonId:i.buttonId}},3(e,i){return e.panelId===i.panelId?e:{...e,panelId:i.panelId}}},T=a.createContext(null);T.displayName="DisclosureContext";function L(e){let i=a.useContext(T);if(i===null){let s=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,L),s}return i}let R=a.createContext(null);R.displayName="DisclosureAPIContext";function F(e){let i=a.useContext(R);if(i===null){let s=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,F),s}return i}let $=a.createContext(null);$.displayName="DisclosurePanelContext";function se(){return a.useContext($)}function le(e,i){return E(i.type,oe,e,i)}let re=a.Fragment;function ue(e,i){let{defaultOpen:s=!1,...c}=e,N=a.useRef(null),o=C(i,V(p=>{N.current=p},e.as===void 0||e.as===a.Fragment)),r=a.useRef(null),I=a.useRef(null),u=a.useReducer(le,{disclosureState:s?0:1,linkedPanel:!1,buttonRef:I,panelRef:r,buttonId:null,panelId:null}),[{disclosureState:d,buttonId:m},D]=u,g=j(p=>{D({type:1});let l=J(N);if(!l||!m)return;let v=(()=>p?p instanceof HTMLElement?p:p.current instanceof HTMLElement?p.current:l.getElementById(m):l.getElementById(m))();v==null||v.focus()}),x=a.useMemo(()=>({close:g}),[g]),k=a.useMemo(()=>({open:d===0,close:g}),[d,g]),y={ref:o};return P.createElement(T.Provider,{value:u},P.createElement(R.Provider,{value:x},P.createElement(X,{value:E(d,{0:S.Open,1:S.Closed})},w({ourProps:y,theirProps:c,slot:k,defaultTag:re,name:"Disclosure"}))))}let ce="button";function de(e,i){let s=q(),{id:c=`headlessui-disclosure-button-${s}`,...N}=e,[o,r]=L("Disclosure.Button"),I=se(),u=I===null?!1:I===o.panelId,d=a.useRef(null),m=C(d,i,u?null:o.buttonRef);a.useEffect(()=>{if(!u)return r({type:2,buttonId:c}),()=>{r({type:2,buttonId:null})}},[c,r,u]);let D=j(l=>{var v;if(u){if(o.disclosureState===1)return;switch(l.key){case f.Space:case f.Enter:l.preventDefault(),l.stopPropagation(),r({type:0}),(v=o.buttonRef.current)==null||v.focus();break}}else switch(l.key){case f.Space:case f.Enter:l.preventDefault(),l.stopPropagation(),r({type:0});break}}),g=j(l=>{switch(l.key){case f.Space:l.preventDefault();break}}),x=j(l=>{var v;z(l.currentTarget)||e.disabled||(u?(r({type:0}),(v=o.buttonRef.current)==null||v.focus()):r({type:0}))}),k=a.useMemo(()=>({open:o.disclosureState===0}),[o]),y=Z(e,d),p=u?{ref:m,type:y,onKeyDown:D,onClick:x}:{ref:m,id:c,type:y,"aria-expanded":e.disabled?void 0:o.disclosureState===0,"aria-controls":o.linkedPanel?o.panelId:void 0,onKeyDown:D,onKeyUp:g,onClick:x};return w({ourProps:p,theirProps:N,slot:k,defaultTag:ce,name:"Disclosure.Button"})}let pe="div",me=O.RenderStrategy|O.Static;function ge(e,i){let s=q(),{id:c=`headlessui-disclosure-panel-${s}`,...N}=e,[o,r]=L("Disclosure.Panel"),{close:I}=F("Disclosure.Panel"),u=C(i,o.panelRef,x=>{te(()=>r({type:x?4:5}))});a.useEffect(()=>(r({type:3,panelId:c}),()=>{r({type:3,panelId:null})}),[c,r]);let d=Y(),m=(()=>d!==null?(d&S.Open)===S.Open:o.disclosureState===0)(),D=a.useMemo(()=>({open:o.disclosureState===0,close:I}),[o,I]),g={ref:u,id:c};return P.createElement($.Provider,{value:o.panelId},w({ourProps:g,theirProps:N,slot:D,defaultTag:pe,features:me,visible:m,name:"Disclosure.Panel"}))}let ve=B(ue),Ie=B(de),Ne=B(ge),M=Object.assign(ve,{Button:Ie,Panel:Ne});const De=({children:e,isActive:i,isIndented:s})=>n.jsxs("div",{className:U("relative w-full px-8 py-3 text-left text-sm text-neutral-0 hover:bg-primary-900+10",s&&"px-14",i&&"bg-primary-900+20 font-semibold hover:bg-primary-900+20"),children:[e,i&&n.jsx("div",{className:"absolute bottom-0 left-0 top-0 h-full w-0.5 rounded-r-sm bg-neutral-0"})]}),G=({children:e})=>n.jsx(M.Panel,{children:e});G.Item=De;try{G.displayName="NavigationDisclosurePanel",G.__docgenInfo={description:"",displayName:"NavigationDisclosurePanel",props:{}}}catch{}const xe=({children:e,LeftIcon:i})=>n.jsxs(M.Button,{className:"flex w-full items-center gap-x-3 px-4 py-3 text-left text-sm text-neutral-0 hover:bg-primary-900+10 ui-open:bg-primary-900+8 ui-open:font-semibold",children:[i?n.jsx(i,{className:"h-4 w-4"}):null,e]}),h=({children:e,defaultOpen:i})=>n.jsx(M,{as:"div",defaultOpen:i,children:e});h.Panel=G;h.Button=xe;try{h.displayName="NavigationDisclosure",h.__docgenInfo={description:"",displayName:"NavigationDisclosure",props:{defaultOpen:{defaultValue:null,description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}}}}}catch{}const fe=({children:e,isActive:i,LeftIcon:s})=>n.jsxs("div",{className:U("relative flex items-center gap-x-3 px-4 py-3 text-sm text-neutral-0 hover:bg-primary-900+10",i&&"bg-primary-900+20 font-semibold hover:bg-primary-900+20"),children:[s?n.jsx(s,{className:"h-4 w-4"}):null,e,i&&n.jsx("div",{className:"absolute bottom-0 left-0 top-0 h-full w-0.5 rounded-r-sm bg-neutral-0"})]}),_=({children:e})=>n.jsx("div",{className:"pt-4",children:e});_.Item=fe;try{_.displayName="NavigationGroup",_.__docgenInfo={description:"",displayName:"NavigationGroup",props:{}}}catch{}const Pe=({children:e})=>n.jsx("div",{className:"px-4 py-3",children:e}),t=({children:e})=>n.jsx("div",{className:"flex w-[180px] grow flex-col overflow-y-auto bg-primary-900 pb-5 pt-3",children:e});t.Logo=Pe;t.Group=_;t.Disclosure=h;try{t.displayName="Navigation",t.__docgenInfo={description:"",displayName:"Navigation",props:{}}}catch{}const Ee={title:"Navigation",component:t},b={render:()=>n.jsx("div",{className:"flex min-h-[1200px] flex-col",children:n.jsxs(t,{children:[n.jsx(t.Logo,{children:n.jsx("div",{className:"text-neutral-0",children:"Abusix"})}),n.jsxs("nav",{className:"flex flex-1 flex-col",children:[n.jsxs(t.Group,{children:[n.jsx(t.Group.Item,{children:"Home"}),n.jsx(t.Group.Item,{isActive:!0,children:"Dashboard"})]}),n.jsxs(t.Group,{children:[n.jsx(t.Group.Item,{children:"Lookup & Delist"}),n.jsx(t.Group.Item,{children:"Mail Intelligence"}),n.jsxs(t.Disclosure,{children:[n.jsx(t.Disclosure.Button,{children:"AbuseHQ"}),n.jsxs(t.Disclosure.Panel,{children:[n.jsx(t.Disclosure.Panel.Item,{children:"Cases"}),n.jsx(t.Disclosure.Panel.Item,{isActive:!0,children:"Event Inbox"}),n.jsx(t.Disclosure.Panel.Item,{children:"Mailbox"}),n.jsx(t.Disclosure.Panel.Item,{children:"Dashboard"}),n.jsx(t.Disclosure.Panel.Item,{children:"Statistics"}),n.jsx(t.Disclosure.Panel.Item,{children:"Settings"})]})]})]}),n.jsxs(t.Group,{children:[n.jsx(t.Group.Item,{children:"Networks"}),n.jsx(t.Group.Item,{children:"Data Channels"})]}),n.jsxs("div",{className:"mt-auto",children:[n.jsx(t.Group.Item,{LeftIcon:W,children:"Support"}),n.jsxs(t.Disclosure,{children:[n.jsx(t.Disclosure.Button,{LeftIcon:ee,children:"Plans & Billing"}),n.jsxs(t.Disclosure.Panel,{children:[n.jsx(t.Disclosure.Panel.Item,{isIndented:!0,children:"Subscriptions"}),n.jsx(t.Disclosure.Panel.Item,{isIndented:!0,children:"Billing"}),n.jsx(t.Disclosure.Panel.Item,{isIndented:!0,children:"Invoices"})]})]}),n.jsxs(t.Disclosure,{children:[n.jsx(t.Disclosure.Button,{LeftIcon:ne,children:"Settings"}),n.jsxs(t.Disclosure.Panel,{children:[n.jsx(t.Disclosure.Panel.Item,{isIndented:!0,children:"Profile"}),n.jsx(t.Disclosure.Panel.Item,{isIndented:!0,children:"Team"}),n.jsx(t.Disclosure.Panel.Item,{isIndented:!0,children:"Sign out"})]})]})]})]})]})})};var A,K,Q;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="flex min-h-[1200px] flex-col">
            <Navigation>
                <Navigation.Logo>
                    <div className="text-neutral-0">Abusix</div>
                </Navigation.Logo>
                <nav className="flex flex-1 flex-col">
                    <Navigation.Group>
                        <Navigation.Group.Item>Home</Navigation.Group.Item>
                        <Navigation.Group.Item isActive>Dashboard</Navigation.Group.Item>
                    </Navigation.Group>
                    <Navigation.Group>
                        <Navigation.Group.Item>Lookup & Delist</Navigation.Group.Item>
                        <Navigation.Group.Item>Mail Intelligence</Navigation.Group.Item>
                        <Navigation.Disclosure>
                            <Navigation.Disclosure.Button>AbuseHQ</Navigation.Disclosure.Button>
                            <Navigation.Disclosure.Panel>
                                <Navigation.Disclosure.Panel.Item>
                                    Cases
                                </Navigation.Disclosure.Panel.Item>
                                <Navigation.Disclosure.Panel.Item isActive>
                                    Event Inbox
                                </Navigation.Disclosure.Panel.Item>
                                <Navigation.Disclosure.Panel.Item>
                                    Mailbox
                                </Navigation.Disclosure.Panel.Item>
                                <Navigation.Disclosure.Panel.Item>
                                    Dashboard
                                </Navigation.Disclosure.Panel.Item>
                                <Navigation.Disclosure.Panel.Item>
                                    Statistics
                                </Navigation.Disclosure.Panel.Item>
                                <Navigation.Disclosure.Panel.Item>
                                    Settings
                                </Navigation.Disclosure.Panel.Item>
                            </Navigation.Disclosure.Panel>
                        </Navigation.Disclosure>
                    </Navigation.Group>
                    <Navigation.Group>
                        <Navigation.Group.Item>Networks</Navigation.Group.Item>
                        <Navigation.Group.Item>Data Channels</Navigation.Group.Item>
                    </Navigation.Group>
                    <div className="mt-auto">
                        <Navigation.Group.Item LeftIcon={HelpIcon}>Support</Navigation.Group.Item>
                        <Navigation.Disclosure>
                            <Navigation.Disclosure.Button LeftIcon={InfoSignIcon}>
                                Plans & Billing
                            </Navigation.Disclosure.Button>
                            <Navigation.Disclosure.Panel>
                                <Navigation.Disclosure.Panel.Item isIndented>
                                    Subscriptions
                                </Navigation.Disclosure.Panel.Item>
                                <Navigation.Disclosure.Panel.Item isIndented>
                                    Billing
                                </Navigation.Disclosure.Panel.Item>
                                <Navigation.Disclosure.Panel.Item isIndented>
                                    Invoices
                                </Navigation.Disclosure.Panel.Item>
                            </Navigation.Disclosure.Panel>
                        </Navigation.Disclosure>
                        <Navigation.Disclosure>
                            <Navigation.Disclosure.Button LeftIcon={CogIcon}>
                                Settings
                            </Navigation.Disclosure.Button>
                            <Navigation.Disclosure.Panel>
                                <Navigation.Disclosure.Panel.Item isIndented>
                                    Profile
                                </Navigation.Disclosure.Panel.Item>
                                <Navigation.Disclosure.Panel.Item isIndented>
                                    Team
                                </Navigation.Disclosure.Panel.Item>
                                <Navigation.Disclosure.Panel.Item isIndented>
                                    Sign out
                                </Navigation.Disclosure.Panel.Item>
                            </Navigation.Disclosure.Panel>
                        </Navigation.Disclosure>
                    </div>
                </nav>
            </Navigation>
        </div>
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const we=["Default"];export{b as Default,we as __namedExportsOrder,Ee as default};
//# sourceMappingURL=navigation.stories-03fe905a.js.map
