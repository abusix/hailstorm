import{j as n}from"./jsx-runtime-vNq4Oc-g.js";import{c as Q}from"./class-names-J070TWId.js";import{R as P,r as o}from"./index-4g5l5LRQ.js";import{S as O,D as C,y as B,T as V,o as j,u as E,X as w,I as U,a as f}from"./keyboard-19WRbd6j.js";import{r as z}from"./bugs-DTVvle51.js";import{c as X,d as S,C as Y}from"./open-closed--zB8LTaK.js";import{s as Z}from"./use-resolve-button-type-nArQT-Au.js";import{e as J}from"./owner-8ORH6hBQ.js";import{d7 as W,c as ee,aS as ne}from"./zoom-to-fit-icon-OF_-LHoW.js";import"./_commonjsHelpers-4gQjN7DL.js";var H;let te=(H=P.startTransition)!=null?H:function(e){e()};var ie=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ie||{}),oe=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(oe||{});let ae={0:e=>({...e,disclosureState:E(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},4(e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},5(e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},2(e,i){return e.buttonId===i.buttonId?e:{...e,buttonId:i.buttonId}},3(e,i){return e.panelId===i.panelId?e:{...e,panelId:i.panelId}}},T=o.createContext(null);T.displayName="DisclosureContext";function L(e){let i=o.useContext(T);if(i===null){let a=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,L),a}return i}let R=o.createContext(null);R.displayName="DisclosureAPIContext";function q(e){let i=o.useContext(R);if(i===null){let a=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,q),a}return i}let $=o.createContext(null);$.displayName="DisclosurePanelContext";function se(){return o.useContext($)}function re(e,i){return E(i.type,ae,e,i)}let le=o.Fragment;function ue(e,i){let{defaultOpen:a=!1,...c}=e,N=o.useRef(null),s=B(i,V(p=>{N.current=p},e.as===void 0||e.as===o.Fragment)),l=o.useRef(null),I=o.useRef(null),u=o.useReducer(re,{disclosureState:a?0:1,linkedPanel:!1,buttonRef:I,panelRef:l,buttonId:null,panelId:null}),[{disclosureState:d,buttonId:m},D]=u,g=j(p=>{D({type:1});let r=J(N);if(!r||!m)return;let v=p?p instanceof HTMLElement?p:p.current instanceof HTMLElement?p.current:r.getElementById(m):r.getElementById(m);v==null||v.focus()}),x=o.useMemo(()=>({close:g}),[g]),k=o.useMemo(()=>({open:d===0,close:g}),[d,g]),y={ref:s};return P.createElement(T.Provider,{value:u},P.createElement(R.Provider,{value:x},P.createElement(X,{value:E(d,{0:S.Open,1:S.Closed})},w({ourProps:y,theirProps:c,slot:k,defaultTag:le,name:"Disclosure"}))))}let ce="button";function de(e,i){let a=U(),{id:c=`headlessui-disclosure-button-${a}`,...N}=e,[s,l]=L("Disclosure.Button"),I=se(),u=I===null?!1:I===s.panelId,d=o.useRef(null),m=B(d,i,u?null:s.buttonRef);o.useEffect(()=>{if(!u)return l({type:2,buttonId:c}),()=>{l({type:2,buttonId:null})}},[c,l,u]);let D=j(r=>{var v;if(u){if(s.disclosureState===1)return;switch(r.key){case f.Space:case f.Enter:r.preventDefault(),r.stopPropagation(),l({type:0}),(v=s.buttonRef.current)==null||v.focus();break}}else switch(r.key){case f.Space:case f.Enter:r.preventDefault(),r.stopPropagation(),l({type:0});break}}),g=j(r=>{switch(r.key){case f.Space:r.preventDefault();break}}),x=j(r=>{var v;z(r.currentTarget)||e.disabled||(u?(l({type:0}),(v=s.buttonRef.current)==null||v.focus()):l({type:0}))}),k=o.useMemo(()=>({open:s.disclosureState===0}),[s]),y=Z(e,d),p=u?{ref:m,type:y,onKeyDown:D,onClick:x}:{ref:m,id:c,type:y,"aria-expanded":s.disclosureState===0,"aria-controls":s.linkedPanel?s.panelId:void 0,onKeyDown:D,onKeyUp:g,onClick:x};return w({ourProps:p,theirProps:N,slot:k,defaultTag:ce,name:"Disclosure.Button"})}let pe="div",me=O.RenderStrategy|O.Static;function ge(e,i){let a=U(),{id:c=`headlessui-disclosure-panel-${a}`,...N}=e,[s,l]=L("Disclosure.Panel"),{close:I}=q("Disclosure.Panel"),u=B(i,s.panelRef,x=>{te(()=>l({type:x?4:5}))});o.useEffect(()=>(l({type:3,panelId:c}),()=>{l({type:3,panelId:null})}),[c,l]);let d=Y(),m=d!==null?(d&S.Open)===S.Open:s.disclosureState===0,D=o.useMemo(()=>({open:s.disclosureState===0,close:I}),[s,I]),g={ref:u,id:c};return P.createElement($.Provider,{value:s.panelId},w({ourProps:g,theirProps:N,slot:D,defaultTag:pe,features:me,visible:m,name:"Disclosure.Panel"}))}let ve=C(ue),Ie=C(de),Ne=C(ge),M=Object.assign(ve,{Button:Ie,Panel:Ne});const De=({children:e,isActive:i,isIndented:a})=>n.jsxs("div",{className:Q("relative w-full px-8 py-3 text-left text-sm text-neutral-0 hover:bg-primary-900+10",a&&"px-14",i&&"bg-primary-900+20 font-semibold hover:bg-primary-900+20"),children:[e,i&&n.jsx("div",{className:"absolute bottom-0 left-0 top-0 h-full w-0.5 rounded-r-sm bg-neutral-0"})]}),G=({children:e})=>n.jsx(M.Panel,{children:e});G.Item=De;try{G.displayName="NavigationDisclosurePanel",G.__docgenInfo={description:"",displayName:"NavigationDisclosurePanel",props:{}}}catch{}const xe=({children:e,LeftIcon:i})=>n.jsxs(M.Button,{className:"flex w-full items-center gap-x-3 px-4 py-3 text-left text-sm text-neutral-0 hover:bg-primary-900+10 ui-open:bg-primary-900+8 ui-open:font-semibold",children:[i?n.jsx(i,{className:"h-4 w-4"}):null,e]}),fe=({children:e,close:i})=>typeof e=="function"?e({close:i}):e,h=({children:e,defaultOpen:i})=>n.jsx(M,{as:"div",defaultOpen:i,children:({close:a})=>n.jsx(n.Fragment,{children:fe({children:e,close:a})})});h.Panel=G;h.Button=xe;try{h.displayName="NavigationDisclosure",h.__docgenInfo={description:"",displayName:"NavigationDisclosure",props:{defaultOpen:{defaultValue:null,description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}}}}}catch{}const Pe=({children:e,isActive:i,LeftIcon:a})=>n.jsxs("div",{className:Q("relative flex items-center gap-x-3 px-4 py-3 text-sm text-neutral-0 hover:bg-primary-900+10",i&&"bg-primary-900+20 font-semibold hover:bg-primary-900+20"),children:[a?n.jsx(a,{className:"h-4 w-4"}):null,e,i&&n.jsx("div",{className:"absolute bottom-0 left-0 top-0 h-full w-0.5 rounded-r-sm bg-neutral-0"})]}),_=({children:e})=>n.jsx("div",{className:"pt-4",children:e});_.Item=Pe;try{_.displayName="NavigationGroup",_.__docgenInfo={description:"",displayName:"NavigationGroup",props:{}}}catch{}const he=({children:e})=>n.jsx("div",{className:"px-4 py-3",children:e}),t=({children:e})=>n.jsx("div",{className:"flex w-[180px] grow flex-col overflow-y-auto bg-primary-900 pb-5 pt-3",children:e});t.Logo=he;t.Group=_;t.Disclosure=h;try{t.displayName="Navigation",t.__docgenInfo={description:"",displayName:"Navigation",props:{}}}catch{}const we={title:"Navigation",component:t},b={render:()=>n.jsx("div",{className:"flex min-h-[1200px] flex-col",children:n.jsxs(t,{children:[n.jsx(t.Logo,{children:n.jsx("div",{className:"text-neutral-0",children:"Abusix"})}),n.jsxs("nav",{className:"flex flex-1 flex-col",children:[n.jsxs(t.Group,{children:[n.jsx(t.Group.Item,{children:"Home"}),n.jsx(t.Group.Item,{isActive:!0,children:"Dashboard"})]}),n.jsxs(t.Group,{children:[n.jsx(t.Group.Item,{children:"Lookup & Delist"}),n.jsx(t.Group.Item,{children:"Mail Intelligence"}),n.jsxs(t.Disclosure,{children:[n.jsx(t.Disclosure.Button,{children:"AbuseHQ"}),n.jsxs(t.Disclosure.Panel,{children:[n.jsx(t.Disclosure.Panel.Item,{children:"Cases"}),n.jsx(t.Disclosure.Panel.Item,{isActive:!0,children:"Event Inbox"}),n.jsx(t.Disclosure.Panel.Item,{children:"Mailbox"}),n.jsx(t.Disclosure.Panel.Item,{children:"Dashboard"}),n.jsx(t.Disclosure.Panel.Item,{children:"Statistics"}),n.jsx(t.Disclosure.Panel.Item,{children:"Settings"})]})]})]}),n.jsxs(t.Group,{children:[n.jsx(t.Group.Item,{children:"Networks"}),n.jsx(t.Group.Item,{children:"Data Channels"})]}),n.jsxs("div",{className:"mt-auto",children:[n.jsx(t.Group.Item,{LeftIcon:W,children:"Support"}),n.jsxs(t.Disclosure,{children:[n.jsx(t.Disclosure.Button,{LeftIcon:ee,children:"Plans & Billing"}),n.jsxs(t.Disclosure.Panel,{children:[n.jsx(t.Disclosure.Panel.Item,{isIndented:!0,children:"Subscriptions"}),n.jsx(t.Disclosure.Panel.Item,{isIndented:!0,children:"Billing"}),n.jsx(t.Disclosure.Panel.Item,{isIndented:!0,children:"Invoices"})]})]}),n.jsxs(t.Disclosure,{children:[n.jsx(t.Disclosure.Button,{LeftIcon:ne,children:"Settings"}),n.jsxs(t.Disclosure.Panel,{children:[n.jsx(t.Disclosure.Panel.Item,{isIndented:!0,children:"Profile"}),n.jsx(t.Disclosure.Panel.Item,{isIndented:!0,children:"Team"}),n.jsx(t.Disclosure.Panel.Item,{isIndented:!0,children:"Sign out"})]})]})]})]})]})})};var A,F,K;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(K=(F=b.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};const Te=["Default"];export{b as Default,Te as __namedExportsOrder,we as default};
