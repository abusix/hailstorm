import{j as e,a as n}from"./jsx-runtime-91a467a5.js";import{r as D}from"./index-8db94870.js";import{a as r}from"./form-field-9fd89d3a.js";import"./_commonjsHelpers-042e6b4d.js";import"./zoom-to-fit-icon-b5713013.js";import"./class-names-9cb99c69.js";import"./keyboard-5e933fe8.js";import"./focus-management-d35c5d70.js";import"./use-flags-cf9437e9.js";import"./label-03e90ffb.js";import"./description-e80611a4.js";import"./use-text-value-1d5c8b57.js";import"./hidden-c4917ca2.js";import"./bugs-7a186658.js";import"./open-closed-535072ce.js";import"./use-resolve-button-type-68f089c3.js";import"./badge-546d5f24.js";import"./tag-4a8af71c.js";const P={title:"Input/TextInput",component:r.TextInput},s=({error:i=!1,disabled:b=!1})=>{const[f,I]=D.useState("");return n(r,{children:[n(r.LabelGroup,{children:[e(r.Label,{htmlFor:"value",children:"Label"}),e(r.Description,{id:"value-description",children:"Description"})]}),e(r.TextInput,{id:"value",value:f,placeholder:"Placeholder",onChange:g=>I(g.target.value),ariaDescribedBy:"value-description",error:i,disabled:b}),i?e(r.ErrorMessage,{children:"Error message."}):null]})},t={render:()=>e("div",{className:"w-72",children:e(s,{})})},a={render:()=>e("div",{className:"w-72",children:e(s,{error:!0})})},o={render:()=>e("div",{className:"w-72",children:e(s,{disabled:!0})})};var d,c,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks />
        </div>
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,m,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks error />
        </div>
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,v,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks disabled />
        </div>
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const V=["Default","WithError","Disabled"];export{t as Default,o as Disabled,a as WithError,V as __namedExportsOrder,P as default};
//# sourceMappingURL=text-input.stories-04c6fa87.js.map
