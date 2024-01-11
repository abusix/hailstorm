import{j as i}from"./jsx-runtime-vNq4Oc-g.js";import{B as T}from"./button-cEiOmJmm.js";import{S as D,a as E,b as N}from"./zoom-to-fit-icon---bq2i_K.js";import{h as w}from"./storybook-utils-94J-CLQK.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./class-names-J070TWId.js";import"./spinner-E2xQXJan.js";const O=["primary","secondary","minimal","danger","danger-secondary"],t={undefined:void 0,ChatIcon:D,DiagramTreeIcon:E,LockIcon:N},p={description:"Icon component",options:Object.keys(t),mapping:t},K={title:"Button",component:T,args:{children:"Badge Label",LeftIcon:void 0,RightIcon:void 0,loading:!1},argTypes:{onClick:w,LeftIcon:p,RightIcon:p}},r={},e={args:{LeftIcon:t.ChatIcon,RightIcon:t.LockIcon}},o={args:{as:"a",href:"https://www.google.com"}},a={args:{loading:!0}},s={args:{disabled:!0}},n={argTypes:{type:w},render:({children:j,...R})=>i.jsx("div",{className:"flex flex-col gap-4",children:O.map(c=>i.jsx(T,{...R,type:"button",variant:c,children:j},c))})};var d,m,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var l,u,h;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    LeftIcon: icons.ChatIcon,
    RightIcon: icons.LockIcon
  }
}`,...(h=(u=e.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var I,f,v;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    as: "a",
    href: "https://www.google.com"
  }
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,L,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(x=(L=a.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var S,b,B;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(B=(b=s.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var k,A,C;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(C=(A=n.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const M=["Base","WithIcons","AsAnchor","Loading","Disabled","Types"];export{o as AsAnchor,r as Base,s as Disabled,a as Loading,n as Types,e as WithIcons,M as __namedExportsOrder,K as default};
