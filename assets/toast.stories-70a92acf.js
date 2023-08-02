import{a as g,j as e}from"./jsx-runtime-91a467a5.js";import{e as I,f as _,g as V,h as k,i as q}from"./zoom-to-fit-icon-b5713013.js";import{c as i}from"./class-names-9cb99c69.js";import{n as j}from"./storybook-utils-5525ffdc.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const W={info:"border-primary-400 bg-primary-50 text-primary-600",danger:"border-danger-400 bg-danger-50 text-danger-500",warning:"border-warning-500 bg-warning-50 text-warning-600",success:"border-success-400 bg-success-50 text-success-500"},D={info:_,success:V,warning:k,danger:q},E={info:"fill-primary-500",danger:"fill-danger-400",success:"fill-success-400",warning:"fill-warning-500"},Y={info:"hover:bg-primary-200 active:bg-primary-300 fill-primary-500",danger:"hover:bg-danger-100 active:bg-danger-200 fill-danger-500",success:"hover:bg-success-200 active:bg-success-300 fill-success-500",warning:"hover:bg-warning-100 active:bg-warning-200 fill-warning-500"},n=({title:r,intent:a,children:l,onClose:N,isClosable:d=!0})=>{const C=D[a];return g("div",{role:"alert",className:i("pt-4.5 relative flex flex-row gap-4 rounded-lg border px-4 py-3 text-neutral-800",d&&"pr-14",W[a]),children:[e("div",{className:"pt-0.5",children:e(C,{className:i(E[a],"h-3 w-3")})}),d?e("div",{className:"absolute right-0 top-0 hidden pr-4 pt-2 sm:block",children:e("button",{type:"button",className:i("rounded p-1",Y[a]),onClick:N,children:e(I,{name:"cross","aria-label":"close",className:"h-3 w-3"})})}):null,g("div",{children:[e("div",{className:"text-sm font-medium",children:r}),l?e("div",{className:"w-full pt-1 text-sm text-neutral-800",children:l}):null]})]})};try{n.displayName="Toast",n.__docgenInfo={description:"",displayName:"Toast",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},intent:{defaultValue:null,description:"",name:"intent",required:!0,type:{name:"enum",value:[{value:'"info"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'}]}},isClosable:{defaultValue:{value:"true"},description:"",name:"isClosable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const H={title:"Toast",component:n,args:{title:"Title",isClosable:!0},argTypes:{onClose:j}},s={render:r=>e(n,{...r,children:"Toast content"}),args:{intent:"info",onClose:()=>alert("You clicked me!")}},t={render:r=>e(n,{...r,children:"Toast content"}),args:{intent:"warning"}},o={render:r=>e(n,{...r,children:"Toast content"}),args:{intent:"success"}},c={render:r=>e(n,{...r,children:"Toast content"}),args:{intent:"danger"}};var u,m,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Toast {...args}>Toast content</Toast>,
  args: {
    intent: "info",
    onClose: () => alert("You clicked me!")
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var f,v,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Toast {...args}>Toast content</Toast>,
  args: {
    intent: "warning"
  }
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var T,h,w;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <Toast {...args}>Toast content</Toast>,
  args: {
    intent: "success"
  }
}`,...(w=(h=o.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var y,x,S;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Toast {...args}>Toast content</Toast>,
  args: {
    intent: "danger"
  }
}`,...(S=(x=c.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const J=["Info","Warning","Success","Danger"];export{c as Danger,s as Info,o as Success,t as Warning,J as __namedExportsOrder,H as default};
//# sourceMappingURL=toast.stories-70a92acf.js.map
