import{j as o}from"./jsx-runtime-DiklIkkE.js";import{c as l}from"./class-names-AhVFtEzo.js";import"./index-DRjF_FHU.js";const d=({children:e,type:s,isActive:i,...p})=>o.jsx("button",{"data-slot":"group-button",type:s,className:l("relative -ml-px inline-flex bg-neutral-0 px-4 py-2 font-medium text-neutral-700 ring-1 ring-inset ring-neutral-400 hover:bg-neutral-100 hover:text-neutral-800 focus:z-10 focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-primary-200 active:bg-neutral-200 disabled:bg-neutral-0 disabled:text-neutral-500",i&&"bg-primary-50 text-primary-500 hover:bg-primary-50 hover:text-primary-500 active:bg-primary-50 disabled:bg-neutral-100 disabled:text-neutral-500"),...p,children:e}),t=({children:e})=>o.jsx("div",{className:"isolate inline-flex [&>[data-slot=group-button]:first-of-type]:ml-0 [&>[data-slot=group-button]:first-of-type]:rounded-l [&>[data-slot=group-button]:last-of-type]:rounded-r",children:e});t.Button=d;try{t.displayName="ButtonGroup",t.__docgenInfo={description:"",displayName:"ButtonGroup",props:{}}}catch{}const m={title:"ButtonGroup",component:t,parameters:{options:{showPanel:!1}}},n={render:()=>o.jsxs(t,{children:[o.jsx(t.Button,{type:"button",children:"Normal"}),o.jsx(t.Button,{type:"button",disabled:!0,children:"Disabled"}),o.jsx(t.Button,{type:"button",isActive:!0,children:"Active"}),o.jsx(t.Button,{type:"button",isActive:!0,disabled:!0,children:"Active & Disabled"}),o.jsx(t.Button,{type:"button",children:"Button 1"})]})};var r,u,a;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(u=n.parameters)==null?void 0:u.docs)==null?void 0:a.source}}};const y=["Default"];export{n as Default,y as __namedExportsOrder,m as default};
