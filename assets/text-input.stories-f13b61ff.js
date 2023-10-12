import{j as e}from"./jsx-runtime-94f6e698.js";import{r as N}from"./index-8db94870.js";import{a as r}from"./form-field-82db5c81.js";import{e as T}from"./zoom-to-fit-icon-fdb06447.js";import"./_commonjsHelpers-042e6b4d.js";import"./class-names-9cb99c69.js";import"./keyboard-02c5c34a.js";import"./focus-management-e94255e2.js";import"./use-flags-2bccb3da.js";import"./label-afcfd897.js";import"./description-63c3d681.js";import"./use-text-value-c25cd29d.js";import"./hidden-c908395f.js";import"./bugs-776f3825.js";import"./open-closed-d62512e8.js";import"./use-resolve-button-type-3cc54b4d.js";import"./badge-d7546b2f.js";import"./tag-662200c1.js";const A={title:"Input/TextInput",component:r.TextInput},i=({error:n=!1,disabled:g=!1,hasLeftIcon:W=!1})=>{const[b,w]=N.useState("");return e.jsxs(r,{children:[e.jsxs(r.LabelGroup,{children:[e.jsx(r.Label,{htmlFor:"value",children:"Label"}),e.jsx(r.Description,{id:"value-description",children:"Description"})]}),e.jsx(r.TextInput,{id:"value",value:b,placeholder:"Placeholder",onChange:L=>w(L.target.value),ariaDescribedBy:"value-description",error:n,disabled:g,LeftIcon:W?T:void 0}),n?e.jsx(r.ErrorMessage,{children:"Error message."}):null]})},s={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(i,{})})},t={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(i,{error:!0})})},o={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(i,{hasLeftIcon:!0,error:!0})})},a={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(i,{disabled:!0})})};var c,d,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks />
        </div>
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,l,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks error />
        </div>
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var x,h,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks hasLeftIcon error />
        </div>
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var j,f,I;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks disabled />
        </div>
}`,...(I=(f=a.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};const J=["Default","WithError","WithLeftIcon","Disabled"];export{s as Default,a as Disabled,t as WithError,o as WithLeftIcon,J as __namedExportsOrder,A as default};
//# sourceMappingURL=text-input.stories-f13b61ff.js.map
