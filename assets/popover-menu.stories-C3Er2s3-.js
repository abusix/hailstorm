import{j as e}from"./jsx-runtime-C798UXYj.js";import{r as u,R as N}from"./index-0d5eMwbi.js";import{bL as j,S as C,bg as w}from"./zoom-to-fit-icon-DdsCB6de.js";import{u as B}from"./usePopper-Cu2KpVtb.js";import{B as E}from"./button-CNKqPViR.js";import{S as _,C as q,R as V,l as T}from"./popover-DJ9HIBXX.js";import{c}from"./class-names-DnY5YZNL.js";import"./index-BoyHNU0R.js";import"./spinner-CrXB3JgE.js";import"./use-resolve-button-type-D_6M6Au0.js";import"./keyboard-C2Ifhsxt.js";import"./use-sync-refs-DqQDZvJ6.js";import"./floating-ERp4LevH.js";import"./use-event-listener-CochUv0b.js";import"./portal-CLj4HHuk.js";import"./focus-management-DaVlPEX1.js";import"./use-server-handoff-complete-JgOu4JLg.js";import"./use-tab-direction-BMI6OSML.js";import"./hidden-BrNieFV6.js";import"./open-closed-DC3t9YEZ.js";import"./close-provider-CZp7Lqob.js";import"./bugs-DpEN4NTH.js";const b=u.createContext({popoverButton:{setReferenceElement:()=>{}},popoverPanel:{setPopperElement:()=>{},styles:{},attributes:{}}}),h=()=>u.useContext(b),D=b.Provider,d=({onClick:n,children:o,...a})=>{const{popoverButton:{setReferenceElement:l}}=h();return e.jsx(_,{ref:t=>t&&l(t),onClick:n,children:e.jsx(E,{...a,children:o})})};try{d.displayName="PopoverMenuButton",d.__docgenInfo={description:"",displayName:"PopoverMenuButton",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"danger"'},{value:'"primary"'},{value:'"secondary"'},{value:'"minimal"'},{value:'"danger-secondary"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},LeftIcon:{defaultValue:null,description:"",name:"LeftIcon",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},RightIcon:{defaultValue:null,description:"",name:"RightIcon",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const S=()=>e.jsx(q,{className:"fixed inset-0 z-30 bg-modal-background"}),m=({children:n})=>e.jsx("div",{className:"flex flex-col",children:n});try{m.displayName="PopoverMenuPanelGroup",m.__docgenInfo={description:"",displayName:"PopoverMenuPanelGroup",props:{}}}catch{}const k={neutral:"text-neutral-700 fill-neutral-700 hover:bg-neutral-100",danger:"text-danger-500 fill-danger-500 hover:bg-danger-50"},R={neutral:"bg-primary-100 fill-primary-400 text-primary-400 before:bg-primary-400 hover:text-primary-400 hover:fill-primary-400 hover:bg-primary-100",danger:"bg-danger-100 fill-danger-700 text-danger-500 before:bg-danger-400 hover:text-danger-500 hover:fill-danger-400 hover:bg-danger-100"},v=({children:n,onClick:o,Icon:a,variant:l="neutral",selected:t,disabled:s})=>e.jsxs("div",{className:c("relative flex w-full cursor-pointer flex-row items-center gap-3 overflow-hidden px-4 py-2 text-sm font-normal focus:ring-2 focus:ring-primary-200",k[l],t&&R[l],t&&"before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:rounded-r-md",s&&"cursor-not-allowed bg-neutral-100 fill-neutral-400 text-neutral-500 hover:bg-neutral-100 hover:fill-neutral-400 hover:text-neutral-500 focus:ring-0"),onClick:s?void 0:o,onKeyDown:s?void 0:o,role:"menuitem",tabIndex:0,children:[a&&e.jsx(a,{className:c("h-3.5 w-3.5")}),n]});try{v.displayName="PopoverMenuPanelItem",v.__docgenInfo={description:"",displayName:"PopoverMenuPanelItem",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},Icon:{defaultValue:null,description:"",name:"Icon",required:!1,type:{name:"ComponentType<{ className: string; }>"}},variant:{defaultValue:{value:"neutral"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"danger"'},{value:'"neutral"'}]}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const A=()=>e.jsx("div",{className:"h-px w-full bg-neutral-300"}),f=({children:n})=>e.jsx("p",{className:"px-4 pb-2 pt-3 text-xs font-normal uppercase text-neutral-700",children:n});try{f.displayName="PopoverMenuPanelTitle",f.__docgenInfo={description:"",displayName:"PopoverMenuPanelTitle",props:{}}}catch{}const G={neutral:"text-neutral-700 fill-neutral-700 hover:bg-neutral-100",danger:"text-danger-500 fill-danger-500 hover:bg-danger-100"},O={neutral:"bg-primary-100 fill-primary-400 text-primary-400 before:bg-primary-400",danger:"bg-danger-100 fill-danger-400 text-danger-500 before:bg-danger-400"},P=({children:n,onClick:o,Icon:a,variant:l="neutral",selected:t,disabled:s})=>e.jsxs(_,{className:c("relative flex w-full cursor-pointer flex-row items-center gap-3 overflow-hidden px-4 py-2 text-sm font-normal focus:ring-2 focus:ring-primary-200",G[l],t&&O[l],t&&"before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:rounded-r-md",s&&"cursor-not-allowed bg-neutral-100 fill-neutral-400 text-neutral-500 hover:bg-neutral-100 hover:fill-neutral-400 hover:text-neutral-500 focus:ring-0"),onClick:s?void 0:o,children:[a&&e.jsx(a,{className:c("h-3.5 w-3.5")}),n]});try{P.displayName="PopoverMenuPanelButton",P.__docgenInfo={description:"",displayName:"PopoverMenuPanelButton",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},Icon:{defaultValue:null,description:"",name:"Icon",required:!1,type:{name:"ComponentType<{ className: string; }>"}},variant:{defaultValue:{value:"neutral"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"danger"'},{value:'"neutral"'}]}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const i=({children:n})=>{const{popoverPanel:{setPopperElement:o,styles:a,attributes:l}}=h();return e.jsx(V,{ref:t=>t&&o(t),style:a,...l,className:"z-40 w-52 rounded bg-neutral-0 py-2 shadow",children:n})};i.Item=v;i.Button=P;i.Group=m;i.Divider=A;i.Title=f;try{i.displayName="PopoverMenuPanel",i.__docgenInfo={description:"",displayName:"PopoverMenuPanel",props:{}}}catch{}const r=({children:n})=>{const[o,a]=u.useState(),[l,t]=u.useState(),{styles:s,attributes:M}=B(o,l,{placement:"top-start"}),I={popoverButton:{setReferenceElement:a},popoverPanel:{setPopperElement:t,styles:s.popper,attributes:M.popper}};return e.jsx(D,{value:I,children:e.jsx(T,{children:n})})};r.Button=d;r.Panel=i;r.Overlay=S;try{r.displayName="PopoverMenu",r.__docgenInfo={description:"",displayName:"PopoverMenu",props:{}}}catch{}const pe={title:"Popover Menu",component:r,parameters:{options:{showPanel:!1}}},p={render:()=>{const[n,o]=N.useState(!1);return e.jsx("div",{className:"relative flex min-h-screen min-w-736 flex-col",children:e.jsxs(r,{children:[e.jsx(r.Button,{variant:"secondary",children:"Open Popover Menu"}),e.jsx(r.Overlay,{}),e.jsxs(r.Panel,{children:[e.jsx(r.Panel.Title,{children:"You"}),e.jsx(r.Panel.Item,{Icon:j,selected:n,onClick:()=>o(!n),children:"Activate Mfa"}),e.jsx(r.Panel.Item,{Icon:C,disabled:!0,children:"Support"}),e.jsx(r.Panel.Divider,{}),e.jsxs(r.Panel.Group,{children:[e.jsx(r.Panel.Title,{children:"Danger Zone"}),e.jsx(r.Panel.Button,{Icon:w,variant:"danger",children:"Close Dialog"})]})]})]})})}};var g,y,x;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [isActive, setIsActive] = React.useState(false);
    return <div className="relative flex min-h-screen min-w-736 flex-col">
                <PopoverMenu>
                    <PopoverMenu.Button variant="secondary">Open Popover Menu</PopoverMenu.Button>

                    <PopoverMenu.Overlay />

                    <PopoverMenu.Panel>
                        <PopoverMenu.Panel.Title>You</PopoverMenu.Panel.Title>

                        <PopoverMenu.Panel.Item Icon={EditIcon} selected={isActive} onClick={() => setIsActive(!isActive)}>
                            Activate Mfa
                        </PopoverMenu.Panel.Item>

                        <PopoverMenu.Panel.Item Icon={ChatIcon} disabled>
                            Support
                        </PopoverMenu.Panel.Item>

                        <PopoverMenu.Panel.Divider />

                        <PopoverMenu.Panel.Group>
                            <PopoverMenu.Panel.Title>Danger Zone</PopoverMenu.Panel.Title>

                            <PopoverMenu.Panel.Button Icon={DeleteIcon} variant="danger">
                                Close Dialog
                            </PopoverMenu.Panel.Button>
                        </PopoverMenu.Panel.Group>
                    </PopoverMenu.Panel>
                </PopoverMenu>
            </div>;
  }
}`,...(x=(y=p.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const ue=["Default"];export{p as Default,ue as __namedExportsOrder,pe as default};
