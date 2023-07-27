import{a as c,j as n}from"./jsx-runtime-91a467a5.js";import{c as l}from"./class-names-9cb99c69.js";import{e as w,f as A,g as I,h as N}from"./zoom-to-fit-icon-d953dea2.js";import{g as S,h as v}from"./storybook-utils-5525ffdc.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const T={info:"border-primary-400 bg-primary-50 text-primary-600",danger:"border-danger-400 bg-danger-50 text-danger-500",warning:"border-warning-500 bg-warning-50 text-warning-600",success:"border-success-400 bg-success-50 text-success-500"},_={info:"fill-primary-500",danger:"fill-danger-400",success:"fill-success-400",warning:"fill-warning-500"},C={info:w,success:A,warning:I,danger:N},o=({title:a,children:s,intent:e})=>{const b=C[e];return c("div",{role:"alert",className:l("flex flex-row gap-4 rounded-lg border px-4 py-3 text-neutral-800",T[e]),children:[n(b,{className:l("h-4 w-4",_[e])}),c("div",{children:[n("div",{className:"text-sm font-medium",children:a}),s&&n("div",{className:"pt-1 text-sm text-neutral-800",children:s})]})]})};try{o.displayName="Alert",o.__docgenInfo={description:"",displayName:"Alert",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},intent:{defaultValue:null,description:"",name:"intent",required:!0,type:{name:"enum",value:[{value:'"info"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'}]}}}}}catch{}const V=["info","success","warning","danger"],W={title:"Alert",component:o,parameters:{layout:"fullscreen",...S("Wide and big alert bar to inform user about important things")},args:{title:"Alert Title",children:"Alert content",intent:"info"}},t={},r={argTypes:{intent:v},render:({children:a,...s})=>n("div",{className:"flex flex-col gap-4",children:V.map(e=>n(o,{...s,intent:e,children:a},e))})},i={...r,args:{children:void 0},argTypes:{...r.argTypes,children:v}};var d,g,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(g=t.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,u,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var y,x,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Intents,
  args: {
    children: undefined
  },
  argTypes: {
    ...Intents.argTypes,
    children: hiddenArgControl
  }
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const D=["Basic","Intents","OnlyTitles"];export{t as Basic,r as Intents,i as OnlyTitles,D as __namedExportsOrder,W as default};
//# sourceMappingURL=alert.stories-b7989b6e.js.map
