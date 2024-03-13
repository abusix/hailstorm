import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{R as u}from"./index-4g5l5LRQ.js";import{S as _}from"./slot-S7AGX8n_.js";import{c as S}from"./class-names-J070TWId.js";import{S as E,a as V,b as T}from"./zoom-to-fit-icon-UPpVBno8.js";import{h as j}from"./storybook-utils-94J-CLQK.js";import"./_commonjsHelpers-4gQjN7DL.js";const q={primary:"bg-primary-500 text-neutral-0 hover:bg-primary-600 active:bg-primary-600 focus:ring-2 focus:ring-primary-200 focus:bg-primary-600 disabled:bg-primary-200 fill-neutral-0",secondary:"text-neutral-700 bg-neutral-0 border border-neutral-400 hover:border-neutral-600 hover:text-neutral-800 active:bg-neutral-100 focus:ring-2 focus:ring-primary-200 focus:text-neutral-800 disabled:text-neutral-500 disabled:border-neutral-300 disabled:bg-neutral-0 fill-neutral-0",minimal:"text-neutral-700 hover:bg-neutral-100 hover:text-neutral-800 active:bg-neutral-200 focus:ring-2 focus:ring-primary-200 focus:text-neutral-800 disabled:text-neutral-500 disabled:bg-neutral-0 fill-neutral-0",danger:"text-neutral-0 bg-danger-500 hover:bg-danger-500 active:bg-danger-700 focus:ring-2 focus:ring-danger-100 focus:bg-danger-600 disabled:bg-danger-100 fill-neutral-0","danger-secondary":"bg-neutral-0 text-danger-500 border border-danger-400 hover:bg-danger-50 hover:text-danger-600 active:border-danger-700 active:text-danger-700 active:bg-danger-100 focus:ring-2 focus:ring-danger-100 focus:text-danger-600 disabled:border-danger-100 disabled:text-danger-100 disabled:bg-neutral-0 fill-danger-600 disabled:fill-danger-100"},l={primary:"text-neutral-0",secondary:"fill-neutral-600 group-hover:text-neutral-700 group-focus:text-neutral-700 group-disabled:text-neutral-400",minimal:"fill-neutral-600 group-hover:text-neutral-700 group-focus:text-neutral-700 group-disabled:text-neutral-400",danger:"","danger-secondary":""},a=({variant:r="primary",className:k,children:n,LeftIcon:s,RightIcon:t,asChild:L=!1,...N})=>{const I=L?_:"a",c=S("group flex h-8 items-center gap-2 whitespace-nowrap rounded px-4 text-xs font-semibold focus:outline-none disabled:cursor-not-allowed ",q[r],k);return u.isValidElement(n)?u.cloneElement(n,{...n.props,children:e.jsxs(e.Fragment,{children:[s?e.jsx(s,{className:`${l[r]} h-3 w-3`}):null,n.props.children,t?e.jsx(t,{className:`${l[r]} h-3 w-3`}):null]}),className:c}):e.jsx(I,{...N,className:c,children:e.jsxs(e.Fragment,{children:[s?e.jsx(s,{className:`${l[r]} h-3 w-3`}):null,n,t?e.jsx(t,{className:`${l[r]} h-3 w-3`}):null]})})};try{a.displayName="Link",a.__docgenInfo={description:"",displayName:"Link",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"danger"'},{value:'"primary"'},{value:'"secondary"'},{value:'"minimal"'},{value:'"danger-secondary"'}]}},LeftIcon:{defaultValue:null,description:"",name:"LeftIcon",required:!1,type:{name:"ElementType<any>"}},RightIcon:{defaultValue:null,description:"",name:"RightIcon",required:!1,type:{name:"ElementType<any>"}}}}}catch{}const g={undefined:void 0,ChatIcon:E,DiagramTreeIcon:V,LockIcon:T},p={description:"Icon component",options:Object.keys(g),mapping:g},z={title:"Link",component:a,args:{children:"Link Label",LeftIcon:void 0,RightIcon:void 0},argTypes:{LeftIcon:p,RightIcon:p,asChild:j}},o={render:r=>e.jsx(a,{href:"https://www.google.de/",...r,asChild:!1,children:r.children})},i={render:r=>e.jsx(a,{...r,asChild:!0,children:e.jsx("a",{href:"https://www.google.de/",children:r.children})})},d={argTypes:{children:j},render:r=>e.jsx(a,{href:"https://www.google.de/",...r,asChild:!1,children:e.jsxs("div",{children:[e.jsx("span",{children:"Nested"}),e.jsx("span",{children:"Elements"})]})})};var m,h,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Link href="https://www.google.de/" {...args} asChild={false}>
            {args.children}
        </Link>
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,x,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Link {...args} asChild>
            <a href="https://www.google.de/">{args.children}</a>
        </Link>
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var v,w,C;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  argTypes: {
    children: hiddenArgControl
  },
  render: args => <Link href="https://www.google.de/" {...args} asChild={false}>
            <div>
                <span>Nested</span>
                <span>Elements</span>
            </div>
        </Link>
}`,...(C=(w=d.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const B=["Default","AsChild","WithChilds"];export{i as AsChild,o as Default,d as WithChilds,B as __namedExportsOrder,z as default};
