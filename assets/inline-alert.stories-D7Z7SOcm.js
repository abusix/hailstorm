import{j as e}from"./jsx-runtime-DiklIkkE.js";import{c as o}from"./class-names-AhVFtEzo.js";import{c as w,d as j,e as S,f as _}from"./zoom-to-fit-icon-BI_77R5n.js";import{g as A}from"./storybook-utils-C5xEhci0.js";import"./index-DRjF_FHU.js";const b={info:"text-primary-600",danger:"text-danger-500",success:"text-success-500",warning:"text-warning-600"},T={info:"fill-primary-400",danger:"fill-danger-400",success:"fill-success-400",warning:"fill-warning-500"},V={info:_,success:S,warning:j,danger:w},i=({title:r,className:l,children:n,intent:c="info"})=>{const y=V[c],N=b[c],h=T[c];return e.jsxs("div",{className:o("flex w-full text-sm",l),children:[e.jsx("div",{className:"mr-4 w-4 grow-0 pt-0.5",children:e.jsx(y,{className:h})}),e.jsxs("div",{className:"w-full",children:[e.jsx("h1",{className:o("font-medium",N),children:r}),n?e.jsx("div",{className:"mt-2",children:n}):null]})]})};try{i.displayName="InlineAlert",i.__docgenInfo={description:"",displayName:"InlineAlert",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},intent:{defaultValue:{value:"info"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'}]}}}}}catch{}const q=["info","success","warning","danger"],D={component:i,title:"Inline Alert",parameters:A("Inline alert text to inform user about contextual things"),args:{title:"Alert title",children:"Alert text"}},t={},s={argTypes:{intent:{table:{disable:!0}}},render:({children:r,...l})=>e.jsx("div",{className:"flex flex-col gap-4",children:q.map(n=>e.jsx(i,{...l,intent:n,children:r},n))})},a={...s,args:{children:void 0}};var d,m,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
            {intents.map(intent => <InlineAlert key={intent} {...args} intent={intent}>
                    {children}
                </InlineAlert>)}
        </div>
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,v,I;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Intents,
  args: {
    children: undefined
  }
}`,...(I=(v=a.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};const R=["Basic","Intents","OnlyTitles"];export{t as Basic,s as Intents,a as OnlyTitles,R as __namedExportsOrder,D as default};
