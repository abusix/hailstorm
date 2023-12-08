import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{r as g}from"./index-4g5l5LRQ.js";import{a as e}from"./form-field-h15MSLLd.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./zoom-to-fit-icon-OF_-LHoW.js";import"./class-names-J070TWId.js";import"./keyboard-19WRbd6j.js";import"./focus-management-fROtgYya.js";import"./disposables-x8EK1kJp.js";import"./owner-8ORH6hBQ.js";import"./use-flags-reTzTHAF.js";import"./use-is-mounted-FwWzDaoX.js";import"./label-iB0TOeW7.js";import"./description-806d1udg.js";import"./use-text-value-4reY1Myl.js";import"./hidden-P5dAsrWj.js";import"./bugs-DTVvle51.js";import"./use-disposables-9CA2w67p.js";import"./open-closed--zB8LTaK.js";import"./use-resolve-button-type-nArQT-Au.js";import"./use-owner-IhbUaaRB.js";import"./badge-n7NSCcWH.js";import"./tag--TAisK7h.js";const z={title:"Input/Textarea",component:e.Textarea},t=({error:i=!1,disabled:v=!1})=>{const[j,b]=g.useState("");return r.jsxs(e,{children:[r.jsxs(e.LabelGroup,{children:[r.jsx(e.Label,{htmlFor:"value",children:"Label"}),r.jsx(e.Description,{id:"value-description",children:"Description"})]}),r.jsx(e.Textarea,{id:"value",value:j,placeholder:"Placeholder",onChange:f=>b(f.target.value),ariaDescribedBy:"value-description",error:i,disabled:v}),i?r.jsx(e.ErrorMessage,{children:"Error message."}):null]})},a={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(t,{})})},s={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(t,{error:!0})})},o={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(t,{disabled:!0})})};var m,d,n;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextareaWithHooks />
        </div>
}`,...(n=(d=a.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var c,p,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextareaWithHooks error />
        </div>
}`,...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,x,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextareaWithHooks disabled />
        </div>
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const A=["Default","WithError","Disabled"];export{a as Default,o as Disabled,s as WithError,A as __namedExportsOrder,z as default};
