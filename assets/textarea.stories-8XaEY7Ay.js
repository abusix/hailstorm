import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{r as g}from"./index-4g5l5LRQ.js";import{a as e}from"./form-field-0j1yn-Sb.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./zoom-to-fit-icon-DzEAF_QU.js";import"./class-names-J070TWId.js";import"./keyboard-UncMrW7s.js";import"./focus-management-CoYP-xeJ.js";import"./use-flags-s9Mpzjmt.js";import"./use-is-mounted-G6L8cmoM.js";import"./label-yMdKfpct.js";import"./description-HUujvgXW.js";import"./use-text-value-pEWxbmSc.js";import"./hidden-JOfeCyVd.js";import"./bugs-DTVvle51.js";import"./use-disposables-nAkgq7bY.js";import"./use-owner-bymvWI7o.js";import"./use-resolve-button-type-Kqf38QZL.js";import"./badge-mhkbsMtk.js";import"./tag-dSl8puB4.js";const R={title:"Input/Textarea",component:e.Textarea},t=({error:i=!1,disabled:v=!1})=>{const[j,b]=g.useState("");return r.jsxs(e,{children:[r.jsxs(e.LabelGroup,{children:[r.jsx(e.Label,{htmlFor:"value",children:"Label"}),r.jsx(e.Description,{id:"value-description",children:"Description"})]}),r.jsx(e.Textarea,{id:"value",value:j,placeholder:"Placeholder",onChange:f=>b(f.target.value),ariaDescribedBy:"value-description",error:i,disabled:v}),i?r.jsx(e.ErrorMessage,{children:"Error message."}):null]})},a={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(t,{})})},s={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(t,{error:!0})})},o={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(t,{disabled:!0})})};var d,n,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const V=["Default","WithError","Disabled"];export{a as Default,o as Disabled,s as WithError,V as __namedExportsOrder,R as default};
