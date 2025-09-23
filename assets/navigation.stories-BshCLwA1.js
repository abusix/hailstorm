import{j as e}from"./jsx-runtime-DiklIkkE.js";import{d8 as b,f as G,aT as B}from"./zoom-to-fit-icon-BI_77R5n.js";import{c as x}from"./class-names-AhVFtEzo.js";import{R as S,j as w,C}from"./disclosure-D1FnmCwY.js";import{r as p}from"./index-DRjF_FHU.js";import{u as E}from"./usePopper-CTemfUeZ.js";import{A as L,R as k,B as A,a as R}from"./popover-s68oAt_k.js";import"./use-resolve-button-type-anS-OQ-j.js";import"./keyboard-BXsyG9-6.js";import"./use-sync-refs-4PSbzubZ.js";import"./open-closed-yLnem6BE.js";import"./close-provider-CMV4gi-l.js";import"./bugs-DpEN4NTH.js";import"./index-C-39nNrC.js";import"./floating-B5xy_Q8r.js";import"./use-event-listener-BepRZUYA.js";import"./portal-Cg6DHy_v.js";import"./focus-management-CtIqEZ7d.js";import"./use-server-handoff-complete-D6bOsrEP.js";import"./use-tab-direction-CxSovYzz.js";import"./hidden-BTT1K2UY.js";const O=({children:n,isActive:t,isIndented:a,...i})=>e.jsxs("div",{className:x("text-neutral-0 hover:bg-primary-900-plus-10 relative w-full cursor-pointer py-3 pr-1 pl-8 text-left text-sm",a&&"pl-14",t&&"bg-primary-900-plus-20 hover:bg-primary-900-plus-20 font-semibold"),...i,children:[n,t&&e.jsx("div",{className:"bg-neutral-0 absolute top-0 bottom-0 left-0 h-full w-0.5 rounded-r-sm"})]}),u=({children:n})=>e.jsx(S,{children:n});u.Item=O;try{u.displayName="NavigationDisclosurePanel",u.__docgenInfo={description:"",displayName:"NavigationDisclosurePanel",props:{}}}catch{}const m=({children:n})=>e.jsx("div",{className:"border-neutral-0 text-neutral-0 ml-auto rounded-sm border px-1.5 text-xs font-semibold uppercase",children:n});try{m.displayName="NavigationGroupItemTag",m.__docgenInfo={description:"",displayName:"NavigationGroupItemTag",props:{}}}catch{}const T=({children:n,LeftIcon:t,onClick:a,tag:i,className:r})=>e.jsxs(C,{className:x("text-neutral-0 hover:bg-primary-900-plus-10 ui-open:bg-primary-900-plus-8 ui-open:font-semibold flex w-full cursor-pointer items-center gap-x-2 px-4 py-3 text-left text-sm",r),onClick:a,children:[t?e.jsx(t,{className:"h-4 w-4"}):null,n,i?e.jsx(m,{children:i}):null]}),H=({children:n,close:t})=>typeof n=="function"?n({close:t}):n,l=({children:n,defaultOpen:t})=>e.jsx(w,{as:"div",defaultOpen:t,children:({close:a})=>e.jsx(e.Fragment,{children:H({children:n,close:a})})});l.Panel=u;l.Button=T;try{l.displayName="NavigationDisclosure",l.__docgenInfo={description:"",displayName:"NavigationDisclosure",props:{defaultOpen:{defaultValue:null,description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}}}}}catch{}const q=({children:n,isActive:t,LeftIcon:a,tag:i,...r})=>e.jsxs("div",{className:x("text-neutral-0 hover:bg-primary-900-plus-10 relative flex cursor-pointer items-center gap-x-2 px-4 py-3 text-sm",t&&"bg-primary-900-plus-20 hover:bg-primary-900-plus-20 font-semibold"),...r,children:[a?e.jsx(a,{className:"h-4 w-4"}):null,n,i?e.jsx(m,{children:i}):null,t&&e.jsx("div",{className:"bg-neutral-0 absolute top-0 bottom-0 left-0 h-full w-0.5 rounded-r-sm"})]}),v=({children:n})=>e.jsx("div",{className:"pt-4",children:n});v.Item=q;try{v.displayName="NavigationGroup",v.__docgenInfo={description:"",displayName:"NavigationGroup",props:{}}}catch{}const f=p.createContext({popoverButton:{setReferenceElement:()=>{}},popoverPanel:{setPopperElement:()=>{},styles:{},attributes:{}}}),D=()=>p.useContext(f),g=f.Provider;try{g.displayName="NavigationPopoverContextProvider",g.__docgenInfo={description:"",displayName:"NavigationPopoverContextProvider",props:{}}}catch{}const N=({children:n,LeftIcon:t,onClick:a})=>{const{popoverButton:{setReferenceElement:i}}=D();return e.jsx(L,{ref:r=>r&&i(r),className:"text-neutral-0 hover:bg-primary-900-plus-10 ui-open:bg-primary-900-plus-8 ui-open:font-semibold flex w-full cursor-pointer items-center gap-x-3 px-4 py-3 text-left text-sm",onClick:a,children:e.jsxs(e.Fragment,{children:[t&&e.jsx(t,{className:"h-4 w-4"}),n]})})};try{N.displayName="NavigationPopoverButton",N.__docgenInfo={description:"",displayName:"NavigationPopoverButton",props:{LeftIcon:{defaultValue:null,description:"",name:"LeftIcon",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const M=()=>e.jsx(k,{className:"bg-modal-background fixed inset-0 z-30 translate-x-[180px]"}),V=({children:n})=>e.jsx("div",{className:"focus:ring-primary-200 flex w-full cursor-pointer items-center overflow-hidden px-4 py-2 hover:bg-neutral-100 focus:ring-2",children:e.jsx("p",{className:"text-sm font-normal",children:n})}),d=({children:n})=>{const{popoverPanel:{setPopperElement:t,styles:a,attributes:i}}=D();return e.jsx(A,{ref:r=>r&&t(r),style:a,...i,className:"bg-neutral-0 z-40 ml-2 w-52 rounded-sm py-2 shadow-sm",children:n})};d.Item=V;try{d.displayName="NavigationPopoverPanel",d.__docgenInfo={description:"",displayName:"NavigationPopoverPanel",props:{}}}catch{}const s=({children:n})=>{const[t,a]=p.useState(),[i,r]=p.useState(),{styles:j,attributes:y}=E(t,i,{placement:"top-start"}),_={popoverButton:{setReferenceElement:a},popoverPanel:{setPopperElement:r,styles:j.popper,attributes:y.popper}};return e.jsx(g,{value:_,children:e.jsx(R,{children:n})})};s.Button=N;s.Panel=d;s.Overlay=M;try{s.displayName="NavigationPopover",s.__docgenInfo={description:"",displayName:"NavigationPopover",props:{}}}catch{}const z=({children:n})=>e.jsx("div",{className:"px-4 py-3",children:n}),o=({children:n})=>e.jsx("div",{className:"bg-primary-900 flex w-[180px] grow flex-col overflow-y-auto pt-3 pb-5",children:n});o.Logo=z;o.Group=v;o.Disclosure=l;o.Popover=s;try{o.displayName="Navigation",o.__docgenInfo={description:"",displayName:"Navigation",props:{}}}catch{}const ue={title:"Navigation",component:o,parameters:{options:{showPanel:!1}}},c={render:()=>e.jsx("div",{className:"relative flex min-h-screen w-96 flex-col",children:e.jsxs(o,{children:[e.jsx(o.Logo,{children:e.jsx("div",{className:"text-neutral-0",children:"Abusix"})}),e.jsxs("nav",{className:"flex flex-1 flex-col",children:[e.jsxs(o.Group,{children:[e.jsx(o.Group.Item,{children:"Home"}),e.jsx(o.Group.Item,{children:"Dashboard"}),e.jsx(o.Group.Item,{isActive:!0,tag:"Beta",children:"long text for this navigation menu option"})]}),e.jsxs(o.Group,{children:[e.jsx(o.Group.Item,{children:"Lookup & Delist"}),e.jsx(o.Group.Item,{children:"Mail Intelligence"}),e.jsxs(o.Disclosure,{children:[e.jsx(o.Disclosure.Button,{tag:"Beta",children:"AbuseHQ"}),e.jsxs(o.Disclosure.Panel,{children:[e.jsx(o.Disclosure.Panel.Item,{children:"Cases"}),e.jsx(o.Disclosure.Panel.Item,{isActive:!0,children:"Event Inbox"}),e.jsx(o.Disclosure.Panel.Item,{children:"Mailbox"}),e.jsx(o.Disclosure.Panel.Item,{children:"Dashboard"}),e.jsx(o.Disclosure.Panel.Item,{children:"Statistics"}),e.jsx(o.Disclosure.Panel.Item,{children:"Settings"})]})]})]}),e.jsxs(o.Group,{children:[e.jsx(o.Group.Item,{children:"Networks"}),e.jsx(o.Group.Item,{children:"Data Channels"})]}),e.jsxs("div",{className:"mt-auto",children:[e.jsxs(o.Popover,{children:[e.jsx(o.Popover.Button,{LeftIcon:b,children:"Support"}),e.jsx(o.Popover.Overlay,{}),e.jsxs(o.Popover.Panel,{children:[e.jsx(o.Popover.Panel.Item,{children:"Documentation"}),e.jsx(o.Popover.Panel.Item,{children:"Support request"}),e.jsx(o.Popover.Panel.Item,{children:"System status"}),e.jsx(o.Popover.Panel.Item,{children:"Blog posts"})]})]}),e.jsxs(o.Disclosure,{children:[e.jsx(o.Disclosure.Button,{LeftIcon:G,children:"Plans & Billing"}),e.jsxs(o.Disclosure.Panel,{children:[e.jsx(o.Disclosure.Panel.Item,{isIndented:!0,children:"Subscriptions"}),e.jsx(o.Disclosure.Panel.Item,{isIndented:!0,children:"Billing"}),e.jsx(o.Disclosure.Panel.Item,{isIndented:!0,children:"Invoices"})]})]}),e.jsxs(o.Disclosure,{children:[e.jsx(o.Disclosure.Button,{LeftIcon:B,children:"Settings"}),e.jsxs(o.Disclosure.Panel,{children:[e.jsx(o.Disclosure.Panel.Item,{isIndented:!0,children:"Profile"}),e.jsx(o.Disclosure.Panel.Item,{isIndented:!0,children:"Team"}),e.jsx(o.Disclosure.Panel.Item,{isIndented:!0,children:"Sign out"})]})]})]})]})]})})};var P,I,h;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="relative flex min-h-screen w-96 flex-col">
            <Navigation>
                <Navigation.Logo>
                    <div className="text-neutral-0">Abusix</div>
                </Navigation.Logo>
                <nav className="flex flex-1 flex-col">
                    <Navigation.Group>
                        <Navigation.Group.Item>Home</Navigation.Group.Item>
                        <Navigation.Group.Item>Dashboard</Navigation.Group.Item>
                        <Navigation.Group.Item isActive tag="Beta">
                            long text for this navigation menu option
                        </Navigation.Group.Item>
                    </Navigation.Group>
                    <Navigation.Group>
                        <Navigation.Group.Item>Lookup & Delist</Navigation.Group.Item>
                        <Navigation.Group.Item>Mail Intelligence</Navigation.Group.Item>
                        <Navigation.Disclosure>
                            <Navigation.Disclosure.Button tag="Beta">
                                AbuseHQ
                            </Navigation.Disclosure.Button>
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
                        <Navigation.Popover>
                            <Navigation.Popover.Button LeftIcon={HelpIcon}>
                                Support
                            </Navigation.Popover.Button>
                            <Navigation.Popover.Overlay />
                            <Navigation.Popover.Panel>
                                <Navigation.Popover.Panel.Item>
                                    Documentation
                                </Navigation.Popover.Panel.Item>
                                <Navigation.Popover.Panel.Item>
                                    Support request
                                </Navigation.Popover.Panel.Item>
                                <Navigation.Popover.Panel.Item>
                                    System status
                                </Navigation.Popover.Panel.Item>
                                <Navigation.Popover.Panel.Item>
                                    Blog posts
                                </Navigation.Popover.Panel.Item>
                            </Navigation.Popover.Panel>
                        </Navigation.Popover>
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
}`,...(h=(I=c.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};const me=["Default"];export{c as Default,me as __namedExportsOrder,ue as default};
