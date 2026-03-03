import{j as e}from"./jsx-runtime-DiklIkkE.js";import{h as o}from"./storybook-utils-C5xEhci0.js";import{B as d}from"./badge-C1bKFyFk.js";import"./index-DRjF_FHU.js";import"./class-names-AhVFtEzo.js";const f=["primary","violet","green","neutral","yellow","teal","orange","pink","red","purple"],v=["default","rounded"],S={title:"Badge",component:d,args:{children:"Badge Label"},argTypes:{onClick:o}},a={},s={args:{onClick:void 0},argTypes:{type:o,shape:o},render:({children:t,...C})=>e.jsx("div",{className:"container grid grid-cols-2 gap-4",children:v.map(r=>e.jsxs("div",{className:"grid gap-4",children:[e.jsx("header",{children:r}),f.map(p=>e.jsx(d,{...C,shape:r,type:p,children:t},r+p))]},r))})},n={render:({children:t})=>e.jsx(d,{className:"text-neutral-0 bg-neutral-600",children:t})};var i,l,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,g,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,y,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: ({
    children
  }) => <Badge className="text-neutral-0 bg-neutral-600">{children}</Badge>
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const T=["Default","TypesAndShapes","CustomClassName"];export{n as CustomClassName,a as Default,s as TypesAndShapes,T as __namedExportsOrder,S as default};
