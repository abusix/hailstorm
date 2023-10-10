import{j as e}from"./jsx-runtime-94f6e698.js";import{r as g}from"./index-8db94870.js";import{a as r}from"./form-field-94a071c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./zoom-to-fit-icon-fdb06447.js";import"./class-names-9cb99c69.js";import"./keyboard-5e933fe8.js";import"./focus-management-d35c5d70.js";import"./use-flags-cf9437e9.js";import"./label-03e90ffb.js";import"./description-e80611a4.js";import"./use-text-value-1d5c8b57.js";import"./hidden-c4917ca2.js";import"./bugs-7a186658.js";import"./open-closed-535072ce.js";import"./use-resolve-button-type-68f089c3.js";import"./badge-ac39db3f.js";import"./tag-662200c1.js";const O={title:"Input/Textarea",component:r.Textarea},t=({error:i=!1,disabled:v=!1})=>{const[j,b]=g.useState("");return e.jsxs(r,{children:[e.jsxs(r.LabelGroup,{children:[e.jsx(r.Label,{htmlFor:"value",children:"Label"}),e.jsx(r.Description,{id:"value-description",children:"Description"})]}),e.jsx(r.Textarea,{id:"value",value:j,placeholder:"Placeholder",onChange:f=>b(f.target.value),ariaDescribedBy:"value-description",error:i,disabled:v}),i?e.jsx(r.ErrorMessage,{children:"Error message."}):null]})},a={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(t,{})})},s={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(t,{error:!0})})},o={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(t,{disabled:!0})})};var d,n,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextareaWithHooks />
        </div>
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var m,l,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextareaWithHooks error />
        </div>
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,x,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextareaWithHooks disabled />
        </div>
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const P=["Default","WithError","Disabled"];export{a as Default,o as Disabled,s as WithError,P as __namedExportsOrder,O as default};
//# sourceMappingURL=textarea.stories-81640730.js.map
