import{a as s,j as y}from"./jsx-runtime-a888423b.js";import{B as g}from"./badge-0f9b3744.js";import{h as n}from"./storybook-utils-5525ffdc.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./class-names-2bb0c168.js";const u=["primary","violet","green","neutral","yellow","teal","orange","pink","red"],f=["default","rounded"],x={title:"Badge",component:g,args:{children:"Badge Label"},argTypes:{onClick:n}},r={},a={args:{onClick:void 0},argTypes:{type:n,shape:n},render:({children:m,...h})=>s("div",{className:"container grid grid-cols-2 gap-4",children:f.map(e=>y("div",{className:"grid gap-4",children:[s("header",{children:e}),u.map(d=>s(g,{...h,shape:e,type:d,children:m},e+d))]},e))})};var o,p,t;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(t=(p=r.parameters)==null?void 0:p.docs)==null?void 0:t.source}}};var i,c,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
  }) => <div className={\`container grid grid-cols-2 gap-4\`}>
      {shapes.map(shape => <div key={shape} className="grid gap-4">
          <header>{shape}</header>
          {types.map(type => <Badge key={shape! + type} {...args} shape={shape} type={type}>
              {children}
            </Badge>)}
        </div>)}
    </div>
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const N=["Default","TypesAndShapes"];export{r as Default,a as TypesAndShapes,N as __namedExportsOrder,x as default};
//# sourceMappingURL=badge.stories-d55ee483.js.map
