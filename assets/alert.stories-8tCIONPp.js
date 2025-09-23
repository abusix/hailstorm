import{j as s}from"./jsx-runtime-DiklIkkE.js";import{A as u}from"./alert-CzhM41ov.js";import{g as x,h as f}from"./storybook-utils-C5xEhci0.js";import"./index-DRjF_FHU.js";import"./class-names-AhVFtEzo.js";import"./zoom-to-fit-icon-BI_77R5n.js";const A=["info","success","warning","danger"],C={title:"Alert",component:u,parameters:{layout:"fullscreen",...x("Wide and big alert bar to inform user about important things")},args:{title:"Alert Title",children:"Alert content",intent:"info"}},r={},e={argTypes:{intent:f},render:({children:h,...y})=>s.jsx("div",{className:"flex flex-col gap-4",children:A.map(t=>s.jsx(u,{...y,intent:t,children:h},t))})},n={...e,args:{children:void 0},argTypes:{...e.argTypes,children:f}};var a,o,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var c,l,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  argTypes: {
    intent: hiddenArgControl
  },
  render: ({
    children,
    ...args
  }) => <div className="flex flex-col gap-4">
            {intents.map(intent => <Alert key={intent} {...args} intent={intent}>
                    {children}
                </Alert>)}
        </div>
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,m,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Intents,
  args: {
    children: undefined
  },
  argTypes: {
    ...Intents.argTypes,
    children: hiddenArgControl
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const O=["Basic","Intents","OnlyTitles"];export{r as Basic,e as Intents,n as OnlyTitles,O as __namedExportsOrder,C as default};
