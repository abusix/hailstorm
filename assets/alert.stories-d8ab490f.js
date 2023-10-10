import{j as e}from"./jsx-runtime-94f6e698.js";import{c}from"./class-names-9cb99c69.js";import{g as b,h as w,i as A,j as I}from"./zoom-to-fit-icon-fdb06447.js";import{g as N,h}from"./storybook-utils-5525ffdc.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const j={info:"border-primary-400 bg-primary-50 text-primary-600",danger:"border-danger-400 bg-danger-50 text-danger-500",warning:"border-warning-500 bg-warning-50 text-warning-600",success:"border-success-400 bg-success-50 text-success-500"},S={info:"fill-primary-500",danger:"fill-danger-400",success:"fill-success-400",warning:"fill-warning-500"},T={info:b,success:w,warning:A,danger:I},o=({title:s,children:t,intent:r})=>{const v=T[r];return e.jsxs("div",{role:"alert",className:c("flex flex-row gap-4 rounded-lg border px-4 py-3 text-neutral-800",j[r]),children:[e.jsx(v,{className:c("h-4 w-4 flex-shrink-0",S[r])}),e.jsxs("div",{className:"flex-grow",children:[e.jsx("div",{className:"text-sm font-medium",children:s}),t&&e.jsx("div",{className:"pt-1 text-sm text-neutral-800",children:t})]})]})};try{o.displayName="Alert",o.__docgenInfo={description:"",displayName:"Alert",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},intent:{defaultValue:null,description:"",name:"intent",required:!0,type:{name:"enum",value:[{value:'"info"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'}]}}}}}catch{}const _=["info","success","warning","danger"],B={title:"Alert",component:o,parameters:{layout:"fullscreen",...N("Wide and big alert bar to inform user about important things")},args:{title:"Alert Title",children:"Alert content",intent:"info"}},a={},n={argTypes:{intent:h},render:({children:s,...t})=>e.jsx("div",{className:"flex flex-col gap-4",children:_.map(r=>e.jsx(o,{...t,intent:r,children:s},r))})},i={...n,args:{children:void 0},argTypes:{...n.argTypes,children:h}};var l,d,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var m,p,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,x,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Intents,
  args: {
    children: undefined
  },
  argTypes: {
    ...Intents.argTypes,
    children: hiddenArgControl
  }
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const W=["Basic","Intents","OnlyTitles"];export{a as Basic,n as Intents,i as OnlyTitles,W as __namedExportsOrder,B as default};
//# sourceMappingURL=alert.stories-d8ab490f.js.map
