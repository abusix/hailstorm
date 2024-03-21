import{j as d}from"./jsx-runtime-DtaoT6pD.js";import{c as p}from"./class-names-xhKKfcKT.js";import"./index-OjgoNOWw.js";function u(e){const a="@",n=e.toLocaleDateString("en-US",{year:"2-digit",month:"2-digit",day:"2-digit"}),s=e.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1});return`${n} ${a} ${s}`}const r=({changedDate:e,changedBy:a,className:n})=>{const s=u(e),g=a?`by ${a}`:"",m=`Last changed on ${s} ${g}`;return d.jsx("p",{className:p("paragraph-100 mt-5 text-neutral-700",n),children:m})};r.__docgenInfo={description:"",methods:[],displayName:"LastChangedInfo",props:{changedDate:{required:!0,tsType:{name:"Date"},description:""},changedBy:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const y={title:"Last Changed Info",component:r},t={render:e=>d.jsx(r,{...e}),args:{changedDate:new Date,changedBy:"By_You",className:""}};var o,i,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <LastChangedInfo {...args} />,
  args: {
    changedDate: new Date(),
    changedBy: "By_You",
    className: ""
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,y as default};
