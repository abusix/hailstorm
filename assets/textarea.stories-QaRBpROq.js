import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{r as g}from"./index-4g5l5LRQ.js";import{a as e}from"./form-field-3IuJ4k-f.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./zoom-to-fit-icon-DzEAF_QU.js";import"./class-names-J070TWId.js";import"./render-Tie-ixVq.js";import"./keyboard-WH7JXezp.js";import"./focus-management-lgiZx2S6.js";import"./use-flags-NOy0DCKX.js";import"./use-is-mounted-3PXUVGWh.js";import"./label-B5aT1uE9.js";import"./description-pJu2sNYX.js";import"./use-text-value--LUMr9FF.js";import"./hidden-T1ZmySp8.js";import"./bugs-DTVvle51.js";import"./use-disposables-w3ythNQc.js";import"./open-closed--zB8LTaK.js";import"./use-resolve-button-type-9qTOIf0P.js";import"./use-owner-ZZcOua7r.js";import"./badge-mhkbsMtk.js";import"./platform-f9uPmT82.js";import"./tag-dSl8puB4.js";const z={title:"Input/Textarea",component:e.Textarea},t=({error:i=!1,disabled:v=!1})=>{const[j,b]=g.useState("");return r.jsxs(e,{children:[r.jsxs(e.LabelGroup,{children:[r.jsx(e.Label,{htmlFor:"value",children:"Label"}),r.jsx(e.Description,{id:"value-description",children:"Description"})]}),r.jsx(e.Textarea,{id:"value",value:j,placeholder:"Placeholder",onChange:f=>b(f.target.value),ariaDescribedBy:"value-description",error:i,disabled:v}),i?r.jsx(e.ErrorMessage,{children:"Error message."}):null]})},a={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(t,{})})},s={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(t,{error:!0})})},o={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(t,{disabled:!0})})};var m,d,n;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
