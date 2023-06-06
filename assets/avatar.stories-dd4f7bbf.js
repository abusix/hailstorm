import{a as s}from"./jsx-runtime-a888423b.js";import{A as m}from"./avatar-6693c223.js";import{g as f,h as d}from"./storybook-utils-5525ffdc.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const o=["primary","success","neutral","warning","danger"],C={title:"Avatar",component:m,parameters:f("Circular user icon. It displays first 2 characters from the passed children text "),args:{children:"Name Lastname",color:o[0]},argTypes:{color:{options:o},onClick:d}},r={},e={argTypes:{color:d},render:({children:g,...u})=>s("div",{className:"flex flex-col gap-4",children:o.map(a=>s(m,{...u,color:a,children:g},a))})};var t,c,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(n=(c=r.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var l,i,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  argTypes: {
    color: hiddenArgControl
  },
  render: ({
    children,
    ...args
  }) => <div className="flex flex-col gap-4">
      {colors.map(color => <Avatar key={color} {...args} color={color}>
          {children}
        </Avatar>)}
    </div>
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const D=["Default","Colors"];export{e as Colors,r as Default,D as __namedExportsOrder,C as default};
//# sourceMappingURL=avatar.stories-dd4f7bbf.js.map
