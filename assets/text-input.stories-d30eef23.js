import{j as e}from"./jsx-runtime-94f6e698.js";import{r as I}from"./index-8db94870.js";import{a as r}from"./form-field-d3a00e81.js";import"./_commonjsHelpers-042e6b4d.js";import"./zoom-to-fit-icon-0c8e1f5b.js";import"./class-names-9cb99c69.js";import"./keyboard-5e933fe8.js";import"./focus-management-d35c5d70.js";import"./use-flags-cf9437e9.js";import"./label-03e90ffb.js";import"./description-e80611a4.js";import"./use-text-value-1d5c8b57.js";import"./hidden-c4917ca2.js";import"./bugs-7a186658.js";import"./open-closed-535072ce.js";import"./use-resolve-button-type-68f089c3.js";import"./badge-e8b648e9.js";import"./tag-be345ea7.js";const O={title:"Input/TextInput",component:r.TextInput},a=({error:i=!1,disabled:v=!1})=>{const[j,b]=I.useState("");return e.jsxs(r,{children:[e.jsxs(r.LabelGroup,{children:[e.jsx(r.Label,{htmlFor:"value",children:"Label"}),e.jsx(r.Description,{id:"value-description",children:"Description"})]}),e.jsx(r.TextInput,{id:"value",value:j,placeholder:"Placeholder",onChange:f=>b(f.target.value),ariaDescribedBy:"value-description",error:i,disabled:v}),i?e.jsx(r.ErrorMessage,{children:"Error message."}):null]})},s={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(a,{})})},t={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(a,{error:!0})})},o={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(a,{disabled:!0})})};var n,d,p;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks />
        </div>
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,m,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks error />
        </div>
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,x,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks disabled />
        </div>
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const P=["Default","WithError","Disabled"];export{s as Default,o as Disabled,t as WithError,P as __namedExportsOrder,O as default};
//# sourceMappingURL=text-input.stories-d30eef23.js.map
