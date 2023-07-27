import{j as t}from"./jsx-runtime-91a467a5.js";import{B as k}from"./button-3e44cdaa.js";import{b as D,c as R,d as j}from"./zoom-to-fit-icon-d953dea2.js";import{h as x}from"./storybook-utils-5525ffdc.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./class-names-9cb99c69.js";import"./spinner-fbacb391.js";const A=["primary","secondary","minimal","danger","danger-secondary"],n={undefined:void 0,ChatIcon:D,DiagramTreeIcon:R,LockIcon:j},i={description:"Icon component",options:Object.keys(n),mapping:n},F={title:"Button",component:k,args:{children:"Badge Label",LeftIcon:void 0,RightIcon:void 0,loading:!1},argTypes:{onClick:x,LeftIcon:i,RightIcon:i}},e={},o={args:{LeftIcon:n.ChatIcon,RightIcon:n.LockIcon}},r={args:{loading:!0}},a={args:{disabled:!0}},s={argTypes:{type:x},render:({children:C,...T})=>t("div",{className:"flex flex-col gap-4",children:A.map(c=>t(k,{...T,type:c,children:C},c))})};var d,p,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,l,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(L=a.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var B,S,b;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(b=(S=s.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const G=["Base","WithIcons","Loading","Disabled","Types"];export{e as Base,a as Disabled,r as Loading,s as Types,o as WithIcons,G as __namedExportsOrder,F as default};
//# sourceMappingURL=button.stories-2b465755.js.map
