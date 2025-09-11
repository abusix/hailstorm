import{j as i}from"./jsx-runtime-DiklIkkE.js";import{c as m}from"./class-names-AhVFtEzo.js";import"./index-DRjF_FHU.js";function u(e){const r=e.toLocaleDateString("en-US",{year:"2-digit",month:"2-digit",day:"2-digit"}),s=e.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1});return`${r} @ ${s}`}const t=({changedDate:e,changedBy:n,className:r})=>{const s=u(e),l=n?`by ${n}`:"",g=`Last changed on ${s} ${l}`;return i.jsx("p",{className:m("paragraph-100 mt-5 text-neutral-700",r),children:g})};try{t.displayName="LastChangedInfo",t.__docgenInfo={description:"",displayName:"LastChangedInfo",props:{changedDate:{defaultValue:null,description:"",name:"changedDate",required:!0,type:{name:"Date"}},changedBy:{defaultValue:null,description:"",name:"changedBy",required:!0,type:{name:"string | null"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const y={title:"Last Changed Info",component:t},a={render:e=>i.jsx(t,{...e}),args:{changedDate:new Date,changedBy:"By_You",className:""}};var o,c,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <LastChangedInfo {...args} />,
  args: {
    changedDate: new Date(),
    changedBy: "By_You",
    className: ""
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const _=["Default"];export{a as Default,_ as __namedExportsOrder,y as default};
