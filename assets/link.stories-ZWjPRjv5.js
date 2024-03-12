import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{R as n}from"./index-4g5l5LRQ.js";import{c as j}from"./class-names-J070TWId.js";import{S,a as V,b as T}from"./zoom-to-fit-icon---bq2i_K.js";import{h as k}from"./storybook-utils-94J-CLQK.js";import"./_commonjsHelpers-4gQjN7DL.js";const g=({children:e,...a})=>n.isValidElement(e)?n.cloneElement(e,{...a,...e.props,style:{...a.style,...e.props.style},className:j(a.className,a.className,e.props.className)}):(n.Children.count(e)>1&&n.Children.only(null),null);try{g.displayName="Slot",g.__docgenInfo={description:"",displayName:"Slot",props:{}}}catch{}const q={primary:"bg-primary-500 text-neutral-0 hover:bg-primary-600 active:bg-primary-600 focus:ring-2 focus:ring-primary-200 focus:bg-primary-600 disabled:bg-primary-200 fill-neutral-0",secondary:"text-neutral-700 bg-neutral-0 border border-neutral-400 hover:border-neutral-600 hover:text-neutral-800 active:bg-neutral-100 focus:ring-2 focus:ring-primary-200 focus:text-neutral-800 disabled:text-neutral-500 disabled:border-neutral-300 disabled:bg-neutral-0 fill-neutral-0",minimal:"text-neutral-700 hover:bg-neutral-100 hover:text-neutral-800 active:bg-neutral-200 focus:ring-2 focus:ring-primary-200 focus:text-neutral-800 disabled:text-neutral-500 disabled:bg-neutral-0 fill-neutral-0",danger:"text-neutral-0 bg-danger-500 hover:bg-danger-500 active:bg-danger-700 focus:ring-2 focus:ring-danger-100 focus:bg-danger-600 disabled:bg-danger-100 fill-neutral-0","danger-secondary":"bg-neutral-0 text-danger-500 border border-danger-400 hover:bg-danger-50 hover:text-danger-600 active:border-danger-700 active:text-danger-700 active:bg-danger-100 focus:ring-2 focus:ring-danger-100 focus:text-danger-600 disabled:border-danger-100 disabled:text-danger-100 disabled:bg-neutral-0 fill-danger-600 disabled:fill-danger-100"},i={primary:"text-neutral-0",secondary:"fill-neutral-600 group-hover:text-neutral-700 group-focus:text-neutral-700 group-disabled:text-neutral-400",minimal:"fill-neutral-600 group-hover:text-neutral-700 group-focus:text-neutral-700 group-disabled:text-neutral-400",danger:"","danger-secondary":""},s=({variant:e="primary",className:a,children:t,LeftIcon:l,RightIcon:o,asChild:L=!1,...I})=>{const E=L?g:"a",p=j("group flex h-8 items-center gap-2 whitespace-nowrap rounded px-4 text-xs font-semibold focus:outline-none disabled:cursor-not-allowed ",q[e],a);return n.isValidElement(t)?n.cloneElement(t,{...t.props,children:r.jsxs(r.Fragment,{children:[l?r.jsx(l,{className:`${i[e]} h-3 w-3`}):null,t.props.children,o?r.jsx(o,{className:`${i[e]} h-3 w-3`}):null]}),className:p}):r.jsx(E,{...I,className:p,children:r.jsxs(r.Fragment,{children:[l?r.jsx(l,{className:`${i[e]} h-3 w-3`}):null,t,o?r.jsx(o,{className:`${i[e]} h-3 w-3`}):null]})})};try{s.displayName="Link",s.__docgenInfo={description:"",displayName:"Link",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"danger"'},{value:'"secondary"'},{value:'"minimal"'},{value:'"danger-secondary"'}]}},LeftIcon:{defaultValue:null,description:"",name:"LeftIcon",required:!1,type:{name:"ElementType<any>"}},RightIcon:{defaultValue:null,description:"",name:"RightIcon",required:!1,type:{name:"ElementType<any>"}}}}}catch{}const m={undefined:void 0,ChatIcon:S,DiagramTreeIcon:V,LockIcon:T},f={description:"Icon component",options:Object.keys(m),mapping:m},W={title:"Link",component:s,args:{children:"Link Label",LeftIcon:void 0,RightIcon:void 0},argTypes:{LeftIcon:f,RightIcon:f,asChild:k}},d={render:e=>r.jsx(s,{href:"https://www.google.de/",...e,asChild:!1,children:e.children})},c={render:e=>r.jsx(s,{...e,asChild:!0,children:r.jsx("a",{href:"https://www.google.de/",children:e.children})})},u={argTypes:{children:k},render:e=>r.jsx(s,{href:"https://www.google.de/",...e,asChild:!1,children:r.jsxs("div",{children:[r.jsx("span",{children:"Nested"}),r.jsx("span",{children:"Elements"})]})})};var h,b,x;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Link href="https://www.google.de/" {...args} asChild={false}>
            {args.children}
        </Link>
}`,...(x=(b=d.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var y,v,w;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Link {...args} asChild>
            <a href="https://www.google.de/">{args.children}</a>
        </Link>
}`,...(w=(v=c.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var C,N,_;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  argTypes: {
    children: hiddenArgControl
  },
  render: args => <Link href="https://www.google.de/" {...args} asChild={false}>
            <div>
                <span>Nested</span>
                <span>Elements</span>
            </div>
        </Link>
}`,...(_=(N=u.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};const z=["Default","AsChild","WithChilds"];export{c as AsChild,d as Default,u as WithChilds,z as __namedExportsOrder,W as default};
