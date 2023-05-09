import{j as o,a as e}from"./jsx-runtime-a888423b.js";import{c as d}from"./class-names-2bb0c168.js";import{S,a as _,b as A,c as b}from"./zoom-to-fit-icon-f9dbb4bf.js";import{g as T}from"./storybook-utils-f067190e.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const V={info:"text-primary-600",danger:"text-danger-500",success:"text-success-500",warning:"text-warning-600"},j={info:"fill-primary-400",danger:"fill-danger-400",success:"fill-success-400",warning:"fill-warning-500"},q={info:S,success:_,warning:A,danger:b},i=({title:r,className:l,children:s,intent:c="info"})=>{const N=q[c],h=V[c],w=j[c];return o("div",{className:d("flex w-full text-sm",l),children:[e("div",{className:"mr-4 w-4 grow-0 pt-0.5",children:e(N,{className:w})}),o("div",{className:"w-full",children:[e("h1",{className:d("font-medium",h),children:r}),s?e("div",{className:"mt-2",children:s}):null]})]})};try{i.displayName="InlineAlert",i.__docgenInfo={description:"",displayName:"InlineAlert",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},intent:{defaultValue:{value:"info"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'}]}}}}}catch{}const C=["info","success","warning","danger"],z={component:i,parameters:T("Inline alert text to inform user about contextual things"),args:{title:"Alert title",children:"Alert text"}},a={},n={argTypes:{intent:{table:{disable:!0}}},render:({children:r,...l})=>e("div",{className:"flex flex-col gap-4",children:C.map(s=>e(i,{...l,intent:s,children:r}))})},t={...n,args:{children:void 0}};var m,u,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,f,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  argTypes: {
    intent: {
      table: {
        disable: true
      }
    }
  },
  render: ({
    children,
    ...args
  }) => <div className="flex flex-col gap-4">
      {intents.map(intent => <InlineAlert {...args} intent={intent}>
          {children}
        </InlineAlert>)}
    </div>
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var x,I,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Intents,
  args: {
    children: undefined
  }
}`,...(y=(I=t.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const F=["Basic","Intents","OnlyTitles"];export{a as Basic,n as Intents,t as OnlyTitles,F as __namedExportsOrder,z as default};
//# sourceMappingURL=inline-alert.stories-0f9c7a1a.js.map
