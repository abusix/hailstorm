import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{B as g}from"./badge-n7NSCcWH.js";import{h as n}from"./storybook-utils-94J-CLQK.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./class-names-J070TWId.js";const y=["primary","violet","green","neutral","yellow","teal","orange","pink","red"],u=["default","rounded"],C={title:"Badge",component:g,args:{children:"Badge Label"},argTypes:{onClick:n}},a={},s={args:{onClick:void 0},argTypes:{type:n,shape:n},render:({children:m,...h})=>r.jsx("div",{className:"container grid grid-cols-2 gap-4",children:u.map(e=>r.jsxs("div",{className:"grid gap-4",children:[r.jsx("header",{children:e}),y.map(o=>r.jsx(g,{...h,shape:e,type:o,children:m},e+o))]},e))})};var d,t,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(t=a.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};var i,c,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const A=["Default","TypesAndShapes"];export{a as Default,s as TypesAndShapes,A as __namedExportsOrder,C as default};