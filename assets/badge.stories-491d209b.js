import{j as s,a as y}from"./jsx-runtime-91a467a5.js";import{B as g}from"./badge-4ebba9ee.js";import{h as n}from"./storybook-utils-5525ffdc.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./class-names-9cb99c69.js";const u=["primary","violet","green","neutral","yellow","teal","orange","pink","red"],f=["default","rounded"],T={title:"Badge",component:g,args:{children:"Badge Label"},argTypes:{onClick:n}},r={},a={args:{onClick:void 0},argTypes:{type:n,shape:n},render:({children:m,...h})=>s("div",{className:"container grid grid-cols-2 gap-4",children:f.map(e=>y("div",{className:"grid gap-4",children:[s("header",{children:e}),u.map(o=>s(g,{...h,shape:e,type:o,children:m},e+o))]},e))})};var d,t,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(t=r.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};var i,c,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    onClick: undefined
  },
  argTypes: {
    type: hiddenArgControl,
    shape: hiddenArgControl
  },
  render: ({
    children,
    ...args
  }) => <div className="container grid grid-cols-2 gap-4">
            {shapes.map(shape => <div key={shape} className="grid gap-4">
                    <header>{shape}</header>
                    {types.map(type =>
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      <Badge key={shape! + type} {...args} shape={shape} type={type}>
                            {children}
                        </Badge>)}
                </div>)}
        </div>
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const N=["Default","TypesAndShapes"];export{r as Default,a as TypesAndShapes,N as __namedExportsOrder,T as default};
//# sourceMappingURL=badge.stories-491d209b.js.map
