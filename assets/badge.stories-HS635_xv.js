import{j as r}from"./jsx-runtime-DvLKfCe6.js";import{B as g}from"./badge-fqfuhG_-.js";import{h as n}from"./storybook-utils-8tYEDzov.js";import"./index-aXz8NaAs.js";import"./class-names-J070TWId.js";const y=["primary","violet","green","neutral","yellow","teal","orange","pink","red","purple"],u=["default","rounded"],B={title:"Badge",component:g,args:{children:"Badge Label"},argTypes:{onClick:n}},a={},s={args:{onClick:void 0},argTypes:{type:n,shape:n},render:({children:m,...h})=>r.jsx("div",{className:"container grid grid-cols-2 gap-4",children:u.map(e=>r.jsxs("div",{className:"grid gap-4",children:[r.jsx("header",{children:e}),y.map(o=>r.jsx(g,{...h,shape:e,type:o,children:m},e+o))]},e))})};var d,p,t;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(t=(p=a.parameters)==null?void 0:p.docs)==null?void 0:t.source}}};var i,l,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const C=["Default","TypesAndShapes"];export{a as Default,s as TypesAndShapes,C as __namedExportsOrder,B as default};
