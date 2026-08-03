import{j as c}from"./jsx-runtime-BjG_zV1W.js";import{B}from"./button-DXMuxM1u.js";import{S as j,a as R,b as D}from"./zoom-to-fit-icon-CaTjC61y.js";import{h as k}from"./storybook-utils-C5xEhci0.js";import"./class-names-AhVFtEzo.js";import"./spinner-DfXrxDVo.js";const A=["primary","secondary","minimal","danger","danger-secondary"],s={undefined:void 0,ChatIcon:R,DiagramTreeIcon:D,LockIcon:j},i={description:"Icon component",options:Object.keys(s),mapping:s},w={title:"Button",component:B,args:{children:"Badge Label",LeftIcon:void 0,RightIcon:void 0,loading:!1},argTypes:{onClick:k,LeftIcon:i,RightIcon:i}},e={},r={args:{LeftIcon:s.ChatIcon,RightIcon:s.LockIcon}},o={args:{loading:!0}},a={args:{disabled:!0}},n={argTypes:{type:k},render:({children:C,...T})=>c.jsx("div",{className:"flex flex-col gap-4",children:A.map(t=>c.jsx(B,{...T,type:"button",variant:t,children:C},t))})};var d,p,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,l,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    LeftIcon: icons.ChatIcon,
    RightIcon: icons.LockIcon
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var I,h,f;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,y,L;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(L=(y=a.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var x,b,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(S=(b=n.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const z=["Base","WithIcons","Loading","Disabled","Types"];export{e as Base,a as Disabled,o as Loading,n as Types,r as WithIcons,z as __namedExportsOrder,w as default};
