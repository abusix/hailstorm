import{a as t}from"./jsx-runtime-a888423b.js";import{B as x}from"./button-f1d89c7a.js";import{d as D,e as R,f as A}from"./zoom-to-fit-icon-f9dbb4bf.js";import{h as C}from"./storybook-utils-5525ffdc.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./class-names-dbcba743.js";import"./spinner-9c4e0e15.js";const j=["primary","secondary","minimal","danger","danger-secondary"],n={undefined:void 0,ChatIcon:D,DiagramTreeIcon:R,LockIcon:A},i={description:"Icon component",options:Object.keys(n),mapping:n},F={title:"Button",component:x,args:{children:"Badge Label",LeftIcon:void 0,RightIcon:void 0,loading:!1},argTypes:{onClick:C,LeftIcon:i,RightIcon:i}},e={},o={args:{LeftIcon:n.ChatIcon,RightIcon:n.LockIcon}},r={args:{loading:!0}},a={args:{disabled:!0}},s={argTypes:{type:C},render:({children:T,...b})=>t("div",{className:"flex flex-col gap-4",children:j.map(c=>t(x,{...b,type:c,children:T},c))})};var d,p,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,l,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    LeftIcon: icons.ChatIcon,
    RightIcon: icons.LockIcon
  }
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var I,h,y;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,L,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(v=(L=a.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var B,S,k;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  argTypes: {
    type: hiddenArgControl
  },
  render: ({
    children,
    ...args
  }) => <div className="flex flex-col gap-4">
            {types.map(type => <Button key={type} {...args} type={type}>
                    {children}
                </Button>)}
        </div>
}`,...(k=(S=s.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const G=["Base","WithIcons","Loading","Disabled","Types"];export{e as Base,a as Disabled,r as Loading,s as Types,o as WithIcons,G as __namedExportsOrder,F as default};
//# sourceMappingURL=button.stories-469a47e9.js.map
