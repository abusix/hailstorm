import{j as c,a as n}from"./jsx-runtime-a888423b.js";import{c as l}from"./class-names-2bb0c168.js";import{S as w,a as A,b as I,c as S}from"./zoom-to-fit-icon-f9dbb4bf.js";import{g as N,h as v}from"./storybook-utils-f067190e.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const T={info:"border-primary-400 bg-primary-50 text-primary-600",danger:"border-danger-400 bg-danger-50 text-danger-500",warning:"border-warning-500 bg-warning-50 text-warning-600",success:"border-success-400 bg-success-50 text-success-500"},_={info:"fill-primary-500",danger:"fill-danger-400",success:"fill-success-400",warning:"fill-warning-500"},C={info:w,success:A,warning:I,danger:S},o=({title:a,children:s,intent:e})=>{const b=C[e];return c("div",{role:"alert",className:l("flex flex-row gap-4 rounded-lg border px-4 py-3 text-neutral-800",T[e]),children:[n(b,{className:l("w-4 h-4",_[e])}),c("div",{children:[n("div",{className:"text-sm font-medium",children:a}),s&&n("div",{className:"pt-1 text-sm text-neutral-800",children:s})]})]})};try{o.displayName="Alert",o.__docgenInfo={description:"",displayName:"Alert",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},intent:{defaultValue:null,description:"",name:"intent",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'}]}}}}}catch{}const V=["info","success","warning","danger"],W={title:"Alert",component:o,parameters:{layout:"fullscreen",...N("Wide and big alert bar to inform user about important things")},args:{title:"Alert Title",children:"Alert content",intent:"info"}},t={},r={argTypes:{intent:v},render:({children:a,...s})=>n("div",{className:"flex flex-col gap-4",children:V.map(e=>n(o,{...s,intent:e,children:a},e))})},i={...r,args:{children:void 0},argTypes:{...r.argTypes,children:v}};var d,g,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(g=t.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,u,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
//# sourceMappingURL=alert.stories-f1a57638.js.map
