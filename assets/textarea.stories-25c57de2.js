import{a as e,j as d}from"./jsx-runtime-a888423b.js";import{r as T}from"./index-8db94870.js";import{F as r}from"./form-field-c82862ab.js";import"./_commonjsHelpers-042e6b4d.js";import"./zoom-to-fit-icon-f9dbb4bf.js";import"./class-names-2bb0c168.js";import"./keyboard-f3ae5531.js";import"./focus-management-8ba95dc1.js";import"./use-flags-a352ae60.js";import"./label-ff7b7ebb.js";import"./description-704369dc.js";import"./use-tracked-pointer-b0b2487f.js";import"./hidden-05078d32.js";import"./bugs-6ad166a8.js";import"./open-closed-818d3463.js";import"./use-resolve-button-type-3a664423.js";import"./badge-0f9b3744.js";import"./tag-d1a81691.js";const P={title:"Input/Textarea",component:r.Textarea},t=({error:i=!1,disabled:b=!1})=>{const[f,g]=T.useState("");return d(r,{children:[d(r.LabelGroup,{children:[e(r.Label,{htmlFor:"value",children:"Label"}),e(r.Description,{id:"value-description",children:"Description"})]}),e(r.Textarea,{id:"value",value:f,placeholder:"Placeholder",onChange:D=>g(D.target.value),ariaDescribedBy:"value-description",error:i,disabled:b}),i?e(r.ErrorMessage,{children:"Error message."}):null]})},a={render:()=>e("div",{className:"w-72",children:e(t,{})})},o={render:()=>e("div",{className:"w-72",children:e(t,{error:!0})})},s={render:()=>e("div",{className:"w-72",children:e(t,{disabled:!0})})};var c,n,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="w-72">
      <TextareaWithHooks />
    </div>
}`,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="w-72">
      <TextareaWithHooks error />
    </div>
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,v,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="w-72">
      <TextareaWithHooks disabled />
    </div>
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const V=["Default","WithError","Disabled"];export{a as Default,s as Disabled,o as WithError,V as __namedExportsOrder,P as default};
//# sourceMappingURL=textarea.stories-25c57de2.js.map
