import{j as r}from"./jsx-runtime-DvLKfCe6.js";import{r as g}from"./index-aXz8NaAs.js";import{F as e}from"./form-field-6eUfOaJj.js";import"./zoom-to-fit-icon-D5bxa5rH.js";import"./class-names-J070TWId.js";import"./render-THca3tYe.js";import"./keyboard-NjAwe_S6.js";import"./focus-management-9lqV-5sA.js";import"./disposables-x8EK1kJp.js";import"./owner-zdel76gv.js";import"./use-flags-F5kSKS15.js";import"./use-is-mounted-JxO49gTk.js";import"./label-tTJj5301.js";import"./description-rwhSs07y.js";import"./use-text-value-K_DgwPe6.js";import"./hidden-G4mt23Ky.js";import"./bugs-DTVvle51.js";import"./use-disposables-qU89AwEH.js";import"./open-closed-arTWCtx2.js";import"./use-resolve-button-type-Iz3xK6-2.js";import"./use-owner-6in2YdcT.js";import"./badge-fqfuhG_-.js";import"./platform-mHIZTaYY.js";import"./tag-KADc8xh0.js";const A={title:"Input/Textarea",component:e.Textarea},t=({error:i=!1,disabled:v=!1})=>{const[j,b]=g.useState("");return r.jsxs(e,{children:[r.jsxs(e.LabelGroup,{children:[r.jsx(e.Label,{htmlFor:"value",children:"Label"}),r.jsx(e.Description,{id:"value-description",children:"Description"})]}),r.jsx(e.Textarea,{id:"value",value:j,placeholder:"Placeholder",onChange:f=>b(f.target.value),ariaDescribedBy:"value-description",error:i,disabled:v}),i?r.jsx(e.ErrorMessage,{children:"Error message."}):null]})},s={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(t,{})})},a={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(t,{error:!0})})},o={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(t,{disabled:!0})})};var m,d,n;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const J=["Default","WithError","Disabled"];export{s as Default,o as Disabled,a as WithError,J as __namedExportsOrder,A as default};
