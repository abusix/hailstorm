import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{c as p}from"./class-names-xhKKfcKT.js";import"./index-OjgoNOWw.js";const d=({children:n,type:s,isActive:i,...l})=>e.jsx("button",{"data-slot":"group-button",type:s,className:p("relative -ml-px inline-flex bg-neutral-0 px-4 py-2 font-medium text-neutral-700  ring-1 ring-inset ring-neutral-400 hover:bg-neutral-100 hover:text-neutral-800 focus:z-10 focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-primary-200 active:bg-neutral-200 disabled:bg-neutral-0 disabled:text-neutral-500",i&&"bg-primary-50 text-primary-500 hover:bg-primary-50 hover:text-primary-500 active:bg-primary-50 disabled:bg-neutral-100 disabled:text-neutral-500"),...l,children:n}),t=({children:n})=>e.jsx("div",{className:"isolate inline-flex [&>[data-slot=group-button]:first-of-type]:ml-0 [&>[data-slot=group-button]:first-of-type]:rounded-l  [&>[data-slot=group-button]:last-of-type]:rounded-r",children:n});t.Button=d;t.__docgenInfo={description:"",methods:[{name:"Button",docblock:null,modifiers:["static"],params:[{name:"{ children, type, isActive, ...props }: ButtonProps",optional:!1,type:{name:"ButtonProps",alias:"ButtonProps"}}],returns:null}],displayName:"ButtonGroup",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const b={title:"ButtonGroup",component:t,parameters:{options:{showPanel:!1}}},o={render:()=>e.jsxs(t,{children:[e.jsx(t.Button,{type:"button",children:"Normal"}),e.jsx(t.Button,{type:"button",disabled:!0,children:"Disabled"}),e.jsx(t.Button,{type:"button",isActive:!0,children:"Active"}),e.jsx(t.Button,{type:"button",isActive:!0,disabled:!0,children:"Active & Disabled"}),e.jsx(t.Button,{type:"button",children:"Button 1"})]})};var r,u,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <ButtonGroup>
            <ButtonGroup.Button type="button">Normal</ButtonGroup.Button>
            <ButtonGroup.Button type="button" disabled>
                Disabled
            </ButtonGroup.Button>
            <ButtonGroup.Button type="button" isActive>
                Active
            </ButtonGroup.Button>
            <ButtonGroup.Button type="button" isActive disabled>
                Active & Disabled
            </ButtonGroup.Button>
            <ButtonGroup.Button type="button">Button 1</ButtonGroup.Button>
        </ButtonGroup>
}`,...(a=(u=o.parameters)==null?void 0:u.docs)==null?void 0:a.source}}};const f=["Default"];export{o as Default,f as __namedExportsOrder,b as default};
