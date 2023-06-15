import{a as i}from"./jsx-runtime-a888423b.js";import{c as m}from"./class-names-dbcba743.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";function u(e){const a="@",r=e.toLocaleDateString("en-US",{year:"2-digit",month:"2-digit",day:"2-digit"}),s=e.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1});return`${r} ${a} ${s}`}const n=({changedDate:e,changedBy:a,className:r})=>{const s=u(e),l=a?`by ${a}`:"",g=`Last changed on ${s} ${l}`;return i("p",{className:m("paragraph-100 mt-5 text-neutral-700",r),children:g})};try{n.displayName="LastChangedInfo",n.__docgenInfo={description:"",displayName:"LastChangedInfo",props:{changedDate:{defaultValue:null,description:"",name:"changedDate",required:!0,type:{name:"Date"}},changedBy:{defaultValue:null,description:"",name:"changedBy",required:!0,type:{name:"string | null"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const _={title:"Last Changed Info",component:n},t={render:e=>i(n,{...e}),args:{changedDate:new Date,changedBy:"By_You",className:""}};var o,c,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <LastChangedInfo {...args} />,
  args: {
    changedDate: new Date(),
    changedBy: "By_You",
    className: ""
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const D=["Default"];export{t as Default,D as __namedExportsOrder,_ as default};
//# sourceMappingURL=last-changed-info.stories-adeb39a3.js.map
