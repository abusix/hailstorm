import{j as a}from"./jsx-runtime-DtaoT6pD.js";import{r as u}from"./index-OjgoNOWw.js";import{c as p}from"./class-names-xhKKfcKT.js";import{h as d}from"./storybook-utils-94J-CLQK.js";const c=({id:e,label:n,checked:s,onChange:o,disabled:r=!1})=>a.jsxs("div",{className:"flex items-center gap-3 ",children:[a.jsx("input",{id:e,className:"h-4 w-4 rounded border-neutral-400 outline-none checked:border-none checked:bg-primary-400 hover:border-neutral-600 checked:hover:bg-primary-500 focus:ring-0 focus:ring-transparent active:border-neutral-500 active:bg-neutral-100 checked:active:bg-primary-600 disabled:border-none disabled:bg-neutral-100 disabled:checked:fill-neutral-500 disabled:hover:bg-neutral-100",type:"checkbox",checked:s,onChange:o,disabled:r}),a.jsx("label",{className:p("text-sm",r&&"text-neutral-600"),htmlFor:e,children:n})]});c.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{id:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const x={title:"Checkbox",component:c,args:{id:"checkbox-id",label:"Checkbox label",disabled:!1},argTypes:{checked:d,onChange:d},render:e=>{const[n,s]=u.useState(!1),o=()=>s(r=>!r);return a.jsx(c,{...e,checked:n,onChange:o})}},t={};var i,l,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const k=["Default"];export{t as Default,k as __namedExportsOrder,x as default};
