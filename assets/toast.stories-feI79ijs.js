import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{j as S,c as I,d as C,e as k,f as q}from"./zoom-to-fit-icon-65magoHv.js";import{c as i}from"./class-names-xhKKfcKT.js";import{n as R}from"./storybook-utils-94J-CLQK.js";import"./index-OjgoNOWw.js";const V={info:"border-primary-400 bg-primary-50 text-primary-600",danger:"border-danger-400 bg-danger-50 text-danger-500",warning:"border-warning-500 bg-warning-50 text-warning-600",success:"border-success-400 bg-success-50 text-success-500"},_={info:I,success:C,warning:k,danger:q},E={info:"fill-primary-500",danger:"fill-danger-400",success:"fill-success-400",warning:"fill-warning-500"},W={info:"hover:bg-primary-200 active:bg-primary-300 fill-primary-500",danger:"hover:bg-danger-100 active:bg-danger-200 fill-danger-500",success:"hover:bg-success-200 active:bg-success-300 fill-success-500",warning:"hover:bg-warning-100 active:bg-warning-200 fill-warning-500"},s=({title:r,intent:n,children:l,onClose:j,isClosable:d=!0})=>{const N=_[n];return e.jsxs("div",{role:"alert",className:i("pt-4.5 relative flex flex-row gap-4 rounded-lg border px-4 py-3 text-neutral-800",d&&"pr-14",V[n]),children:[e.jsx("div",{className:"pt-0.5",children:e.jsx(N,{className:i(E[n],"h-3 w-3")})}),d?e.jsx("div",{className:"absolute right-0 top-0 pr-4 pt-2 sm:block",children:e.jsx("button",{type:"button",className:i("rounded p-1",W[n]),onClick:j,children:e.jsx(S,{name:"cross","aria-label":"close",className:"h-3 w-3"})})}):null,e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-medium",children:r}),l?e.jsx("div",{className:"w-full pt-1 text-sm text-neutral-800",children:l}):null]})]})};s.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{title:{required:!0,tsType:{name:"string"},description:""},intent:{required:!0,tsType:{name:"union",raw:"keyof typeof toastVariants",elements:[{name:"literal",value:"info"},{name:"literal",value:"danger"},{name:"literal",value:"warning"},{name:"literal",value:"success"}]},description:""},isClosable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const A={title:"Toast",component:s,args:{title:"Title",isClosable:!0},argTypes:{onClose:R}},a={render:r=>e.jsx(s,{...r,children:"Toast content"}),args:{intent:"info",onClose:()=>alert("You clicked me!")}},t={render:r=>e.jsx(s,{...r,children:"Toast content"}),args:{intent:"warning"}},o={render:r=>e.jsx(s,{...r,children:"Toast content"}),args:{intent:"success"}},c={render:r=>e.jsx(s,{...r,children:"Toast content"}),args:{intent:"danger"}};var g,u,m;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,T,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Toast {...args}>Toast content</Toast>,
  args: {
    intent: "success"
  }
}`,...(b=(T=o.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var w,y,h;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Toast {...args}>Toast content</Toast>,
  args: {
    intent: "danger"
  }
}`,...(h=(y=c.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const F=["Info","Warning","Success","Danger"];export{c as Danger,a as Info,o as Success,t as Warning,F as __namedExportsOrder,A as default};
