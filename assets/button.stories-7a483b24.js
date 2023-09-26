import{j as c}from"./jsx-runtime-94f6e698.js";import{B as b}from"./button-e052d89c.js";import{b as j,c as R,d as D}from"./zoom-to-fit-icon-fdb06447.js";import{h as k}from"./storybook-utils-5525ffdc.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./class-names-9cb99c69.js";import"./spinner-59a2feb3.js";const A=["primary","secondary","minimal","danger","danger-secondary"],n={undefined:void 0,ChatIcon:j,DiagramTreeIcon:R,LockIcon:D},i={description:"Icon component",options:Object.keys(n),mapping:n},F={title:"Button",component:b,args:{children:"Badge Label",LeftIcon:void 0,RightIcon:void 0,loading:!1},argTypes:{onClick:k,LeftIcon:i,RightIcon:i}},e={},o={args:{LeftIcon:n.ChatIcon,RightIcon:n.LockIcon}},r={args:{loading:!0}},a={args:{disabled:!0}},s={argTypes:{type:k},render:({children:C,...T})=>c.jsx("div",{className:"flex flex-col gap-4",children:A.map(t=>c.jsx(b,{...T,type:t,children:C},t))})};var d,p,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,l,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    LeftIcon: icons.ChatIcon,
    RightIcon: icons.LockIcon
  }
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var I,h,y;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,L,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(x=(L=a.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var v,B,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(B=s.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};const G=["Base","WithIcons","Loading","Disabled","Types"];export{e as Base,a as Disabled,r as Loading,s as Types,o as WithIcons,G as __namedExportsOrder,F as default};
//# sourceMappingURL=button.stories-7a483b24.js.map
