import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{r as d,R as p}from"./index-OjgoNOWw.js";import{_ as s}from"./dialog-XDklIeLN.js";import{t as c}from"./transition-FMZahZh2.js";import{B as m}from"./button-ufHQn21l.js";import"./render--CnTCjM4.js";import"./keyboard-ypJuuhig.js";import"./bugs-DTVvle51.js";import"./hidden-io_QVhfh.js";import"./focus-management-3l6xl84w.js";import"./disposables-x8EK1kJp.js";import"./owner-k5blU4nj.js";import"./use-root-containers-FaFnNgX4.js";import"./use-owner-is5PDNtX.js";import"./index-mQqIOHEI.js";import"./use-is-mounted-sHLtXe0b.js";import"./platform-SfVjinHA.js";import"./use-disposables-zYA53INM.js";import"./description-Cx4STRI4.js";import"./open-closed-QZcf9p9x.js";import"./use-flags-FD8DIccc.js";import"./class-names-xhKKfcKT.js";import"./spinner-wMFQnwL5.js";const f=({children:t})=>e.jsx(s.Panel,{children:t});f.__docgenInfo={description:"",methods:[],displayName:"SidesheetPanel",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const x=({children:t})=>e.jsx("div",{className:"px-8 py-6",children:t});x.__docgenInfo={description:"",methods:[],displayName:"SidesheetPanelContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const y=({children:t})=>e.jsx("div",{className:"flex gap-4 ",children:t});y.__docgenInfo={description:"",methods:[],displayName:"SidesheetPanelHeaderActionGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const S=({children:t})=>e.jsx(s.Title,{className:"headline-600",children:t});S.__docgenInfo={description:"",methods:[],displayName:"SidesheetPanelHeaderTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const o=({children:t})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex items-center justify-between gap-2 px-8 py-5",children:t}),e.jsx("hr",{className:"border-neutral-300"})]});o.Title=S;o.ActionGroup=y;o.__docgenInfo={description:"",methods:[{name:"Title",docblock:null,modifiers:["static"],params:[{name:"{ children }: PanelHeaderTitleProps",optional:!1,type:{name:"PanelHeaderTitleProps",alias:"PanelHeaderTitleProps"}}],returns:null},{name:"ActionGroup",docblock:null,modifiers:["static"],params:[{name:`{
    children,
}: SidesheetPanelHeaderActionGroupProps`,optional:!1,type:{name:"SidesheetPanelHeaderActionGroupProps",alias:"SidesheetPanelHeaderActionGroupProps"}}],returns:null}],displayName:"SidesheetPanelHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const n=({children:t,isOpen:i,onClose:a,initialFocus:l})=>e.jsx(c,{appear:!0,show:i,as:d.Fragment,children:e.jsxs(s,{onClose:a,initialFocus:l,children:[e.jsx(c.Child,{as:d.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 z-0",enterTo:"opacity-100 z-10",leave:"ease-in duration-200",leaveFrom:"opacity-100 z-10",leaveTo:"opacity-0 z-0",children:e.jsx("div",{className:"fixed inset-0 bg-modal-background","aria-hidden":"true"})}),e.jsx(c.Child,{as:d.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"translate-x-full",enterTo:"-translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"-translate-x-0",leaveTo:"translate-x-full",children:e.jsx(s.Panel,{className:"fixed inset-y-0 right-0 z-10 w-184 overflow-y-auto bg-neutral-0",children:t})})]})});n.Panel=f;n.PanelHeader=o;n.PanelContent=x;n.__docgenInfo={description:"",methods:[{name:"Panel",docblock:null,modifiers:["static"],params:[{name:"{ children }: SidesheetPanelProps",optional:!1,type:{name:"SidesheetPanelProps",alias:"SidesheetPanelProps"}}],returns:null},{name:"PanelHeader",docblock:null,modifiers:["static"],params:[{name:"{ children }: SidesheetPanelHeaderProps",optional:!1,type:{name:"SidesheetPanelHeaderProps",alias:"SidesheetPanelHeaderProps"}}],returns:null},{name:"PanelContent",docblock:null,modifiers:["static"],params:[{name:"{ children }: SidesheetPanelContentProps",optional:!1,type:{name:"SidesheetPanelContentProps",alias:"SidesheetPanelContentProps"}}],returns:null}],displayName:"Sidesheet",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},initialFocus:{required:!1,tsType:{name:"ReactMutableRefObject",raw:"React.MutableRefObject<HTMLElement | null>",elements:[{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}]},description:""}}};const J={title:"Sidesheet",component:n},j=({isOpen:t})=>{const[i,a]=p.useState(!1);p.useEffect(()=>{a(t)},[t]);function l(){a(!1)}function R(){a(!0)}return e.jsxs("div",{children:[e.jsx(m,{onClick:()=>{R()},children:"Open Sidesheet"}),e.jsx(n,{isOpen:i,onClose:()=>l(),children:e.jsxs(n.Panel,{children:[e.jsxs(n.PanelHeader,{children:[e.jsx(n.PanelHeader.Title,{children:"Modal Title"}),e.jsx(n.PanelHeader.ActionGroup,{children:e.jsx(m,{onClick:()=>null,children:"Button 1"})})]}),e.jsx(n.PanelContent,{children:e.jsx("p",{children:"Sidesheet Content"})})]})})]})},r={render:t=>e.jsx(j,{...t,children:e.jsx("p",{children:"Hello"})}),args:{isOpen:!1},argTypes:{initialFocus:{control:{type:null}}}};var u,h,P;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <SidesheetWithHooks {...args}>
            <p>Hello</p>
        </SidesheetWithHooks>,
  args: {
    isOpen: false
  },
  argTypes: {
    initialFocus: {
      control: {
        type: null
      }
    }
  }
}`,...(P=(h=r.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};const K=["Default"];export{r as Default,K as __namedExportsOrder,J as default};
