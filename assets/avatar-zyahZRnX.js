import{j as a}from"./jsx-runtime-DtaoT6pD.js";const s={primary:"bg-primary-200 text-primary-500 ",success:"bg-success-200 text-success-600",neutral:"bg-neutral-200 text-neutral-800",warning:"bg-warning-100 text-warning-700",danger:"bg-danger-100 text-danger-600"},i=({color:r="primary",children:n,onClick:e})=>{const t=n.substring(0,2);return a.jsx("div",{className:`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-sans text-xs ${s[r]}`,onClick:e,onKeyDown:e,tabIndex:0,role:"button",children:a.jsx("span",{className:"uppercase",children:t})})};i.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{children:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},color:{required:!1,tsType:{name:"union",raw:"keyof typeof avatarVariants",elements:[{name:"literal",value:"primary"},{name:"literal",value:"success"},{name:"literal",value:"neutral"},{name:"literal",value:"warning"},{name:"literal",value:"danger"}]},description:"",defaultValue:{value:'"primary"',computed:!1}}}};export{i as A};
