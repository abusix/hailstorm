import{j as c}from"./jsx-runtime-94f6e698.js";import{B as S}from"./button-6a6c6402.js";import{b as j,c as R,d as D}from"./zoom-to-fit-icon-fdb06447.js";import{h as k}from"./storybook-utils-5525ffdc.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./class-names-9cb99c69.js";import"./spinner-59a2feb3.js";const A=["primary","secondary","minimal","danger","danger-secondary"],s={undefined:void 0,ChatIcon:j,DiagramTreeIcon:R,LockIcon:D},i={description:"Icon component",options:Object.keys(s),mapping:s},F={title:"Button",component:S,args:{children:"Badge Label",LeftIcon:void 0,RightIcon:void 0,loading:!1},argTypes:{onClick:k,LeftIcon:i,RightIcon:i}},r={},e={args:{LeftIcon:s.ChatIcon,RightIcon:s.LockIcon}},o={args:{loading:!0}},a={args:{disabled:!0}},n={argTypes:{type:k},render:({children:C,...T})=>c.jsx("div",{className:"flex flex-col gap-4",children:A.map(t=>c.jsx(S,{...T,type:"button",variant:t,children:C},t))})};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,l,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    LeftIcon: icons.ChatIcon,
    RightIcon: icons.LockIcon
  }
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var I,h,f;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,y,L;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(L=(y=a.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var x,b,B;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  argTypes: {
    type: hiddenArgControl
  },
  render: ({
    children,
    ...args
  }) => <div className="flex flex-col gap-4">
            {variants.map(variant => <Button key={variant} {...args} type="button" variant={variant}>
                    {children}
                </Button>)}
        </div>
}`,...(B=(b=n.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};const G=["Base","WithIcons","Loading","Disabled","Types"];export{r as Base,a as Disabled,o as Loading,n as Types,e as WithIcons,G as __namedExportsOrder,F as default};
//# sourceMappingURL=button.stories-90879b1e.js.map
