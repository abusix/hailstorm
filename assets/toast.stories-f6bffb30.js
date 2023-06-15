import{j as i,a as e}from"./jsx-runtime-a888423b.js";import{c as l}from"./class-names-dbcba743.js";import{S as I,a as V,b as k,c as q}from"./zoom-to-fit-icon-f9dbb4bf.js";import{n as j}from"./storybook-utils-5525ffdc.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const W={info:"border-primary-400 bg-primary-50 text-primary-600",danger:"border-danger-400 bg-danger-50 text-danger-500",warning:"border-warning-500 bg-warning-50 text-warning-600",success:"border-success-400 bg-success-50 text-success-500"},D={info:I,success:V,warning:k,danger:q},E={info:"fill-primary-500",danger:"fill-danger-400",success:"fill-success-400",warning:"fill-warning-500"},m={info:"hover:bg-primary-200 active:bg-primary-300 fill-primary-500",danger:"hover:bg-danger-100 active:bg-danger-200 fill-danger-500",success:"hover:bg-success-200 active:bg-success-300 fill-success-500",warning:"hover:bg-warning-100 active:bg-warning-200 fill-warning-500"},n=({title:r,intent:a,children:d,onClose:_,isClosable:g=!0})=>{const u=D[a];return i("div",{role:"alert",className:l("pt-4.5 relative flex flex-row gap-4 rounded-lg border px-4 py-3 text-neutral-800",g&&"pr-14",W[a]),children:[e("div",{className:"pt-0.5",children:e(u,{className:E[a]})}),g?e("div",{className:"absolute right-0 top-0 hidden pr-4 pt-2 sm:block",children:i("button",{type:"button",className:l("rounded p-2.5",m[a]),onClick:_,children:[e("span",{className:"sr-only",children:"Close"}),e(u,{name:"cross",className:l("h-3 w-3",m[a])})]})}):null,i("div",{children:[e("div",{className:"text-sm font-medium",children:r}),d?e("div",{className:"w-full pt-1 text-sm text-neutral-800",children:d}):null]})]})};try{n.displayName="Toast",n.__docgenInfo={description:"",displayName:"Toast",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},intent:{defaultValue:null,description:"",name:"intent",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'}]}},isClosable:{defaultValue:{value:"true"},description:"",name:"isClosable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const G={title:"Toast",component:n,args:{title:"Title",isClosable:!0},argTypes:{onClose:j}},s={render:r=>e(n,{...r,children:"Toast content"}),args:{intent:"info",onClose:()=>alert("You clicked me!")}},t={render:r=>e(n,{...r,children:"Toast content"}),args:{intent:"warning"}},o={render:r=>e(n,{...r,children:"Toast content"}),args:{intent:"success"}},c={render:r=>e(n,{...r,children:"Toast content"}),args:{intent:"danger"}};var p,f,v;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Toast {...args}>Toast content</Toast>,
  args: {
    intent: "info",
    onClose: () => alert("You clicked me!")
  }
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,T,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Toast {...args}>Toast content</Toast>,
  args: {
    intent: "warning"
  }
}`,...(y=(T=t.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var h,w,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Toast {...args}>Toast content</Toast>,
  args: {
    intent: "success"
  }
}`,...(x=(w=o.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var N,S,C;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <Toast {...args}>Toast content</Toast>,
  args: {
    intent: "danger"
  }
}`,...(C=(S=c.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const H=["Info","Warning","Success","Danger"];export{c as Danger,s as Info,o as Success,t as Warning,H as __namedExportsOrder,G as default};
//# sourceMappingURL=toast.stories-f6bffb30.js.map
