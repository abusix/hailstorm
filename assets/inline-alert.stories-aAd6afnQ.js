import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{c as o}from"./class-names-xhKKfcKT.js";import{c as y,d as j,e as S,f as T}from"./zoom-to-fit-icon-65magoHv.js";import{g as A}from"./storybook-utils-94J-CLQK.js";import"./index-OjgoNOWw.js";const b={info:"text-primary-600",danger:"text-danger-500",success:"text-success-500",warning:"text-warning-600"},R={info:"fill-primary-400",danger:"fill-danger-400",success:"fill-success-400",warning:"fill-warning-500"},q={info:y,success:j,warning:S,danger:T},c=({title:t,className:i,children:n,intent:l="info"})=>{const w=q[l],N=b[l],h=R[l];return e.jsxs("div",{className:o("flex w-full text-sm",i),children:[e.jsx("div",{className:"mr-4 w-4 grow-0 pt-0.5",children:e.jsx(w,{className:h})}),e.jsxs("div",{className:"w-full",children:[e.jsx("h1",{className:o("font-medium",N),children:t}),n?e.jsx("div",{className:"mt-2",children:n}):null]})]})};c.__docgenInfo={description:"",methods:[],displayName:"InlineAlert",props:{title:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},intent:{required:!1,tsType:{name:"union",raw:'"success" | "info" | "warning" | "danger"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const _=["info","success","warning","danger"],B={component:c,title:"Inline Alert",parameters:A("Inline alert text to inform user about contextual things"),args:{title:"Alert title",children:"Alert text"}},r={},s={argTypes:{intent:{table:{disable:!0}}},render:({children:t,...i})=>e.jsx("div",{className:"flex flex-col gap-4",children:_.map(n=>e.jsx(c,{...i,intent:n,children:t},n))})},a={...s,args:{children:void 0}};var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(I=(v=a.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};const D=["Basic","Intents","OnlyTitles"];export{r as Basic,s as Intents,a as OnlyTitles,D as __namedExportsOrder,B as default};
