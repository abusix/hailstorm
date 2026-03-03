import{j as r}from"./jsx-runtime-DiklIkkE.js";import{r as D}from"./index-DRjF_FHU.js";import{F as e}from"./form-field-BXPj22sD.js";import"./zoom-to-fit-icon-Dqg1CN93.js";import"./class-names-AhVFtEzo.js";import"./use-resolve-button-type-anS-OQ-j.js";import"./keyboard-BXsyG9-6.js";import"./use-sync-refs-4PSbzubZ.js";import"./form-fields-1LEl5PRn.js";import"./index-Dpua5abt.js";import"./hidden-BTT1K2UY.js";import"./description-UtBE_P3b.js";import"./label-zIhhX7O3.js";import"./bugs-DpEN4NTH.js";import"./focus-management-DGm9imjo.js";import"./use-text-value-CV0VHA7E.js";import"./portal-DBQB_4M5.js";import"./use-server-handoff-complete-D6bOsrEP.js";import"./floating-BTGXEKZb.js";import"./use-inert-others-DOoaFBKu.js";import"./open-closed-yLnem6BE.js";import"./badge-C1bKFyFk.js";import"./index-79_Hx86Q.js";import"./use-event-listener-BepRZUYA.js";import"./active-element-history-Cq_XTmYl.js";import"./tag-BjN8aZXv.js";const $={title:"Input/SearchInput",component:e.SearchInput},i=({error:n=!1,disabled:b=!1,readOnly:g=!1,value:w})=>{const[N,c]=D.useState(w);return r.jsxs(e,{children:[r.jsxs(e.LabelGroup,{children:[r.jsx(e.Label,{htmlFor:"value",children:"Label"}),r.jsx(e.Description,{id:"value-description",children:"Description"})]}),r.jsx(e.SearchInput,{id:"value",value:N,onChange:y=>c(y.target.value),ariaDescribedBy:"value-description",error:n,disabled:b,readOnly:g,onClear:()=>{c("")}}),n?r.jsx(e.ErrorMessage,{children:"Error message."}):null]})},s={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(i,{})})},a={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(i,{error:!0})})},t={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(i,{readOnly:!0,value:"Readonly text"})})},o={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(i,{disabled:!0})})};var p,d,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <SearchInputWithHooks />
        </div>
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,u,h;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <SearchInputWithHooks error />
        </div>
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,v,j;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <SearchInputWithHooks readOnly value="Readonly text" />
        </div>
}`,...(j=(v=t.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var S,I,f;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <SearchInputWithHooks disabled />
        </div>
}`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};const rr=["Default","WithError","ReadOnly","Disabled"];export{s as Default,o as Disabled,t as ReadOnly,a as WithError,rr as __namedExportsOrder,$ as default};
