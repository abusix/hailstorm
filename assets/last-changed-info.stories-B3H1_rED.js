import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{c as u}from"./class-names-AhVFtEzo.js";function m(e){const r=e.toLocaleDateString("en-US",{year:"2-digit",month:"2-digit",day:"2-digit"}),s=e.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1});return`${r} @ ${s}`}const t=({changedDate:e,changedBy:n,className:r})=>{const s=m(e),l=n?`by ${n}`:"",g=`Last changed on ${s} ${l}`;return i.jsx("p",{className:u("paragraph-100 mt-5 text-neutral-700",r),children:g})};try{t.displayName="LastChangedInfo",t.__docgenInfo={description:"",displayName:"LastChangedInfo",props:{changedDate:{defaultValue:null,description:"",name:"changedDate",required:!0,type:{name:"Date"}},changedBy:{defaultValue:null,description:"",name:"changedBy",required:!0,type:{name:"string | null"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const f={title:"Last Changed Info",component:t},a={render:e=>i.jsx(t,{...e}),args:{changedDate:new Date,changedBy:"By_You",className:""}};var o,c,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <LastChangedInfo {...args} />,
  args: {
    changedDate: new Date(),
    changedBy: "By_You",
    className: ""
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const y=["Default"];export{a as Default,y as __namedExportsOrder,f as default};
