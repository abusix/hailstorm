import{j as r}from"./jsx-runtime-94f6e698.js";import{r as g}from"./index-8db94870.js";import{F as e}from"./form-field-fee3b7f5.js";import"./_commonjsHelpers-042e6b4d.js";import"./zoom-to-fit-icon-acda7f0b.js";import"./class-names-9cb99c69.js";import"./keyboard-21395176.js";import"./focus-management-0b66a118.js";import"./disposables-253897a2.js";import"./owner-b1a1dac1.js";import"./use-flags-60d882df.js";import"./label-931945c5.js";import"./description-a328e87c.js";import"./use-text-value-786875d7.js";import"./hidden-98df968b.js";import"./bugs-8e007c11.js";import"./use-disposables-4086b7a6.js";import"./open-closed-e73c4555.js";import"./use-resolve-button-type-2af9297b.js";import"./use-outside-click-cd4630be.js";import"./badge-d7546b2f.js";import"./tag-fae1e6b9.js";const q={title:"Input/Textarea",component:e.Textarea},t=({error:i=!1,disabled:v=!1})=>{const[j,b]=g.useState("");return r.jsxs(e,{children:[r.jsxs(e.LabelGroup,{children:[r.jsx(e.Label,{htmlFor:"value",children:"Label"}),r.jsx(e.Description,{id:"value-description",children:"Description"})]}),r.jsx(e.Textarea,{id:"value",value:j,placeholder:"Placeholder",onChange:f=>b(f.target.value),ariaDescribedBy:"value-description",error:i,disabled:v}),i?r.jsx(e.ErrorMessage,{children:"Error message."}):null]})},s={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(t,{})})},a={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(t,{error:!0})})},o={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(t,{disabled:!0})})};var m,d,n;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextareaWithHooks />
        </div>
}`,...(n=(d=s.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var c,p,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextareaWithHooks error />
        </div>
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,x,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextareaWithHooks disabled />
        </div>
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const z=["Default","WithError","Disabled"];export{s as Default,o as Disabled,a as WithError,z as __namedExportsOrder,q as default};
//# sourceMappingURL=textarea.stories-e1c81859.js.map
