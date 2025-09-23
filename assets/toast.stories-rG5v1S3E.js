import{j as e}from"./jsx-runtime-DiklIkkE.js";import{c as N,d as I,e as _,f as C,j as V}from"./zoom-to-fit-icon-BI_77R5n.js";import{c as i}from"./class-names-AhVFtEzo.js";import"./index-DRjF_FHU.js";const k={info:"border-primary-400 bg-primary-50 text-primary-600",danger:"border-danger-400 bg-danger-50 text-danger-500",warning:"border-warning-500 bg-warning-50 text-warning-600",success:"border-success-400 bg-success-50 text-success-500"},q={info:C,success:_,warning:I,danger:N},E={info:"fill-primary-500",danger:"fill-danger-400",success:"fill-success-400",warning:"fill-warning-500"},W={info:"hover:bg-primary-200 active:bg-primary-300 fill-primary-500",danger:"hover:bg-danger-100 active:bg-danger-200 fill-danger-500",success:"hover:bg-success-200 active:bg-success-300 fill-success-500",warning:"hover:bg-warning-100 active:bg-warning-200 fill-warning-500"},s=({title:r,intent:n,children:l,onClose:j,isClosable:d=!0})=>{const S=q[n];return e.jsxs("div",{role:"alert",className:i("relative flex flex-row gap-4 rounded-lg border px-4 py-3 pt-4.5 text-neutral-800",d&&"pr-14",k[n]),children:[e.jsx("div",{className:"pt-0.5",children:e.jsx(S,{className:i(E[n],"h-3 w-3")})}),d?e.jsx("div",{className:"absolute top-0 right-0 pt-2 pr-4 sm:block",children:e.jsx("button",{type:"button",className:i("rounded-sm p-1",W[n]),onClick:j,children:e.jsx(V,{name:"cross","aria-label":"close",className:"h-3 w-3"})})}):null,e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-medium",children:r}),l?e.jsx("div",{className:"w-full pt-1 text-sm text-neutral-800",children:l}):null]})]})};try{s.displayName="Toast",s.__docgenInfo={description:"",displayName:"Toast",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},intent:{defaultValue:null,description:"",name:"intent",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'}]}},isClosable:{defaultValue:{value:"true"},description:"",name:"isClosable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const R={title:"Toast",component:s,args:{title:"Title",isClosable:!0}},a={render:r=>e.jsx(s,{...r,children:"Toast content"}),args:{intent:"info",onClose:()=>alert("You clicked me!")}},t={render:r=>e.jsx(s,{...r,children:"Toast content"}),args:{intent:"warning"}},o={render:r=>e.jsx(s,{...r,children:"Toast content"}),args:{intent:"success"}},c={render:r=>e.jsx(s,{...r,children:"Toast content"}),args:{intent:"danger"}};var g,u,m;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Toast {...args}>Toast content</Toast>,
  args: {
    intent: "info",
    onClose: () => alert("You clicked me!")
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,f,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Toast {...args}>Toast content</Toast>,
  args: {
    intent: "warning"
  }
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,b,T;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Toast {...args}>Toast content</Toast>,
  args: {
    intent: "success"
  }
}`,...(T=(b=o.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var w,h,y;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Toast {...args}>Toast content</Toast>,
  args: {
    intent: "danger"
  }
}`,...(y=(h=c.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const z=["Info","Warning","Success","Danger"];export{c as Danger,a as Info,o as Success,t as Warning,z as __namedExportsOrder,R as default};
