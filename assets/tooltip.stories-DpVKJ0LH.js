import{j as e}from"./jsx-runtime-BJwPuJt0.js";import{r as o,R}from"./index-DX35FyXq.js";import{g as V}from"./storybook-utils-C5xEhci0.js";import{u as w}from"./usePopper-AtQpPHEi.js";import{c as k}from"./class-names-B8CnD4Xb.js";import{b as B}from"./index-CrrVXmAv.js";import{X as F}from"./transition-B31nJbQ_.js";import{B as I}from"./button-8880JDVt.js";import"./use-sync-refs-DTQ85WuU.js";import"./use-is-mounted-l-WgHzsW.js";import"./use-server-handoff-complete-czgFdGyU.js";import"./open-closed-CW48b85x.js";import"./spinner-DVLNtNYV.js";const c=({children:t})=>{const r=o.useRef(null),[i,p]=o.useState(!1);return o.useEffect(()=>{document&&(r.current=document.body,p(!0))},[]),i&&r.current?B.createPortal(t,r.current):null};try{c.displayName="TooltipPortal",c.__docgenInfo={description:"",displayName:"TooltipPortal",props:{}}}catch{}const s=({children:t,title:r,position:i="right",className:p,open:u,strategy:m="absolute"})=>{const[_,N]=o.useState(),[j,E]=o.useState(),[C,d]=o.useState(!1),[f,S]=o.useState(!1),{styles:q,attributes:P}=w(_,j,{placement:i,strategy:m==="fixed"?"fixed":"absolute",modifiers:[{name:"offset",options:{offset:[0,8]}}]});o.useEffect(()=>{u!==void 0&&(S(!0),d(u))},[u]);const v=()=>e.jsx(F,{show:C,enter:"transition-opacity duration-75",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{ref:a=>a&&E(a),className:k("rounded-lg bg-neutral-900 p-4 px-4 py-2 text-xs text-neutral-0 shadow",p),style:q.popper,...P.popper,children:r})});return e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:a=>a&&N(a),onMouseEnter:()=>!f&&d(!0),onMouseLeave:()=>!f&&d(!1),children:t}),m==="portal"?e.jsx(c,{children:v()}):v()]})};try{s.displayName="Tooltip",s.__docgenInfo={description:"",displayName:"Tooltip",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},position:{defaultValue:{value:"right"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"auto"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"top"'},{value:'"bottom"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},strategy:{defaultValue:{value:"absolute"},description:"",name:"strategy",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"absolute"'},{value:'"portal"'}]}}}}}catch{}const Y={title:"Tooltip",component:s,parameters:{...V("Tooltip component. By default displays a tooltip on hover, but it can be controlled with the `open` prop as well.")},args:{position:"right",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",className:""}},l={render:t=>e.jsx(s,{...t,children:e.jsx("div",{className:"rounded border border-neutral-50 p-2 text-sm hover:bg-neutral-100",children:"Hover to toggle"})})},L=()=>{const[t,r]=R.useState(!1);return e.jsx(s,{position:"right",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",open:t,children:e.jsx(I,{variant:"minimal",className:"rounded border p-2 text-sm hover:bg-neutral-100",onClick:()=>r(!t),children:"Click to toggle"})})},n={render:()=>e.jsx(L,{})};var g,y,x;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
            <div className="rounded border border-neutral-50 p-2 text-sm hover:bg-neutral-100">
                Hover to toggle
            </div>
        </Tooltip>
}`,...(x=(y=l.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var h,b,T;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <ControlledTooltipExample />
}`,...(T=(b=n.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};const Z=["UncontrolledTooltip","ControlledTooltip"];export{n as ControlledTooltip,l as UncontrolledTooltip,Z as __namedExportsOrder,Y as default};