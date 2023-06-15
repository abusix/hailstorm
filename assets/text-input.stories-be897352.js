import{a as e,j as n}from"./jsx-runtime-a888423b.js";import{r as D}from"./index-8db94870.js";import{a as r}from"./form-field-feb8bc5e.js";import"./_commonjsHelpers-042e6b4d.js";import"./zoom-to-fit-icon-f9dbb4bf.js";import"./class-names-dbcba743.js";import"./keyboard-f3ae5531.js";import"./focus-management-8ba95dc1.js";import"./use-flags-a352ae60.js";import"./label-ff7b7ebb.js";import"./description-704369dc.js";import"./use-tracked-pointer-b0b2487f.js";import"./hidden-05078d32.js";import"./bugs-6ad166a8.js";import"./open-closed-818d3463.js";import"./use-resolve-button-type-3a664423.js";import"./badge-40621719.js";import"./tag-f78c4820.js";const P={title:"Input/TextInput",component:r.TextInput},s=({error:i=!1,disabled:b=!1})=>{const[f,I]=D.useState("");return n(r,{children:[n(r.LabelGroup,{children:[e(r.Label,{htmlFor:"value",children:"Label"}),e(r.Description,{id:"value-description",children:"Description"})]}),e(r.TextInput,{id:"value",value:f,placeholder:"Placeholder",onChange:g=>I(g.target.value),ariaDescribedBy:"value-description",error:i,disabled:b}),i?e(r.ErrorMessage,{children:"Error message."}):null]})},t={render:()=>e("div",{className:"w-72",children:e(s,{})})},a={render:()=>e("div",{className:"w-72",children:e(s,{error:!0})})},o={render:()=>e("div",{className:"w-72",children:e(s,{disabled:!0})})};var d,c,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
//# sourceMappingURL=text-input.stories-be897352.js.map
