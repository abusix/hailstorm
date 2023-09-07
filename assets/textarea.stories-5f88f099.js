import{j as e,a as d}from"./jsx-runtime-91a467a5.js";import{r as T}from"./index-8db94870.js";import{a as r}from"./form-field-5990049e.js";import"./_commonjsHelpers-042e6b4d.js";import"./zoom-to-fit-icon-b5713013.js";import"./class-names-9cb99c69.js";import"./keyboard-5e933fe8.js";import"./focus-management-d35c5d70.js";import"./use-flags-cf9437e9.js";import"./label-03e90ffb.js";import"./description-e80611a4.js";import"./use-text-value-1d5c8b57.js";import"./hidden-c4917ca2.js";import"./bugs-7a186658.js";import"./open-closed-535072ce.js";import"./use-resolve-button-type-68f089c3.js";import"./badge-7a88d169.js";import"./tag-4a8af71c.js";const P={title:"Input/Textarea",component:r.Textarea},t=({error:i=!1,disabled:b=!1})=>{const[f,g]=T.useState("");return d(r,{children:[d(r.LabelGroup,{children:[e(r.Label,{htmlFor:"value",children:"Label"}),e(r.Description,{id:"value-description",children:"Description"})]}),e(r.Textarea,{id:"value",value:f,placeholder:"Placeholder",onChange:D=>g(D.target.value),ariaDescribedBy:"value-description",error:i,disabled:b}),i?e(r.ErrorMessage,{children:"Error message."}):null]})},a={render:()=>e("div",{className:"w-72",children:e(t,{})})},o={render:()=>e("div",{className:"w-72",children:e(t,{error:!0})})},s={render:()=>e("div",{className:"w-72",children:e(t,{disabled:!0})})};var c,n,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
//# sourceMappingURL=textarea.stories-5f88f099.js.map
